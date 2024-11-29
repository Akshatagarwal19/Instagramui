import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';

// Fetch posts as before
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const token = localStorage.getItem('token');
  const response = await fetch('http://localhost:3000/api/posts', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  if (!response.ok) throw new Error('Failed to fetch posts');
  return data.posts;
});

// Fetch individual user data
export const fetchUser = createAsyncThunk(
  'posts/fetchUser',
  async (userId: string, { getState }) => {
    const { users } = (getState() as RootState).posts;
    if (users[userId]) return users[userId]; // Return cached user if available

    const token = localStorage.getItem('token');
    const response = await fetch(`http://localhost:3000/api/users/${userId}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) throw new Error('Failed to fetch user');

    const user = await response.json();
    return { userId, ...user };
  }
);

interface Comment {
  _id: string;
  userId: string; // Changed to string since user data will come from the users store
  comment: string;
}

interface Post {
  _id: string;
  userId: string; // Only store userId, fetch full data separately
  imageUrl: string;
  caption: string;
  likes: number;
  comments: Comment[];
}

interface User {
  userId: string;
  username: string;
  profileImage?: string;
}

interface PostState {
  posts: Post[];
  users: { [key: string]: User }; // Store users by their IDs
  loading: boolean;
  error: string | null;
}

const initialState: PostState = {
  posts: [],
  users: {},
  loading: false,
  error: null,
};

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to load posts';
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        const { userId, username, profileImage } = action.payload;
        state.users[userId] = { userId, username, profileImage };
      });
  },
});

export default postSlice.reducer;

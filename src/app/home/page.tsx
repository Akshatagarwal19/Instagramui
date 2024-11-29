'use client';

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts, fetchUser } from '@/redux/features/postSlice';
import Image from 'next/image';
import { RootState, AppDispatch } from '@/redux/store';

const HomeFeedPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { posts, users, loading, error } = useSelector((state: RootState) => state.posts);

  const suggestions = [
    {
      id: 1,
      username: 'suggetion1',
      profileImage: '/Images/Shri Ram.jfif',
    },
    {
      id: 1,
      username: 'suggetion1',
      profileImage: '/Images/Shri Ram.jfif',
    },
  ]

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  useEffect(() => {
    posts.forEach((post) => {
      if (post.userId && !users[post.userId]) {
        dispatch(fetchUser(post.userId));
      }
    });
  }, [posts, users, dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="bg-white min-h-screen flex">
      {/* Vertical Navbar */}
      <nav className="w-64 h-screen bg-white shadow-md fixed top-0 left-0">
        <div className="flex flex-col items-center py-6">
          <h1 className="text-4xl font mb-8" style={{ fontFamily: "Grandista, sans-serif" }}>
            Instagram
          </h1>
          <ul className="space-y-6">
            <li>
              <a href="/home" className="text-gray-600 hover:text-black flex items-center space-x-4">
                <span>⌂</span>
                <span className="text-lg font-medium">Home</span>
              </a>
            </li>
            <li>
              <a href="/profile" className="text-gray-600 hover:text-black flex items-center space-x-4">
                <span>👤</span>
                <span className="text-lg font-medium">Profile</span>
              </a>
            </li>
            <li>
              <a href="/create" className="text-gray-600 hover:text-black flex items-center space-x-4">
                <span>➕</span>
                <span className="text-lg font-medium">Create Post</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <main className="pt-16 max-w-4xl mx-auto">
      {posts.map((post) => {
  const user = users[post.userId] || { username: 'Unknown User', profileImage: '/img.png' };
  return (
    <div key={post._id} className="bg-white border rounded-lg mb-6 overflow-hidden">
      <div className="flex items-center p-4">
        <Image src={user.profileImage} alt={`${user.username}'s profile`} width={40} height={40} className="rounded-full" />
        <div className="ml-3">
          <p className="font-semibold">{user.username}</p>
        </div>
      </div>
      <Image src={post.imageUrl} alt="Post" width={500} height={500} className="w-full h-auto" />
      <div className="p-4">
        <div className="flex space-x-4 mb-2">
          <button className="text-gray-600 hover:text-red-500">
            ❤️ {post.likes}
          </button>
          <button className="text-gray-600 hover:text-blue-500">
            💬 {post.comments.length} comments
          </button>
        </div>
        <p>
          <span className="font-semibold">{user.username}</span> {post.caption}
        </p>
        <div className="mt-4 space-y-2">
          {post.comments.map((comment) => (
            <p key={comment._id}>
              <span className="font-semibold">{comment.userId?.username || 'Unknown User'}</span> {comment.comment}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
})}

      </main>
      <aside className="w-72 h-screen bg-white shadow-md fixed top-0 right-0 p-4">
        <h2 className="text-xl font-semibold mb-4">Suggestions for you</h2>
        <ul className="space-y-4">
          {suggestions.map((suggestion) => (
            <li key={suggestion.id} className="flex items-center justify-between">
              <div className="flex items-center">
                <Image
                  src={suggestion.profileImage}
                  alt={`${suggestion.username}'s profile`}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="ml-3">
                  <p className="font-semibold">{suggestion.username}</p>
                  <p className="text-gray-500 text-sm">New to Instagram</p>
                </div>
              </div>
              <button className="text-blue-500 text-sm font-semibold hover:underline">
                Follow
              </button>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default HomeFeedPage;

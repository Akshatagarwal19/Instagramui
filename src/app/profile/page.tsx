'use client';

import React from 'react';
import ProfileHeader from './components/ProfileHeader';
import PostGrid from './components/PostGrid';

const ProfilePage = () => {
  // Mock data
  const user = {
    username: 'Akshat Agarwal',
    profileImage: '/images/img.png',
    bio: 'Travel enthusiast ✈️ | Food lover 🍔 | Photographer 📸',
    postsCount: 12,
    followers: 150,
    following: 200,
    isOwnProfile: true,
  };

  const posts = [
    { id: 1, imageUrl: '/Images/Img.jpg' },
    { id: 2, imageUrl: '/Images/Image.jpg' },
    { id: 3, imageUrl: '/Images/abc.jpg' },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="hidden md:flex flex-col items-center w-1/5 h-screen bg-white shadow-md py-6 space-y-8 fixed top-0 left-0">
        <div className="text-4xl font mb-8" style={{ fontFamily: "Grandista, sans-serif" }}>
          Instagram
        </div>
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
      </nav>

      {/* Profile Content */}
      <main className="ml-[20%] flex-1 flex flex-col items-left py-8 px-4">
        {/* Profile Header */}
        <ProfileHeader
          username={user.username}
          profileImage={user.profileImage}
          postsCount={user.postsCount}
          followers={user.followers}
          following={user.following}
          isOwnProfile={user.isOwnProfile}
          isFollowing={false}
        />

        {/* Post Grid */}
        <PostGrid posts={posts} />
      </main>
    </div>
  );
};

export default ProfilePage;

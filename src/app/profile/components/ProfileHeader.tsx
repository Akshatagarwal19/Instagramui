'use client';

import React from 'react';
import Image from 'next/image';

interface ProfileHeaderProps {
  username: string;
  profileImage: string;
  postsCount: number;
  followers: number;
  following: number;
  isOwnProfile: boolean;
  isFollowing?: boolean;
  onFollowToggle?: () => void;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  username,
  profileImage,
  postsCount,
  followers,
  following,
  isOwnProfile,
  isFollowing,
  onFollowToggle,
}) => {
  return (
    <div className="flex items-center space-x-6 p-6 border-b">
      <Image src={profileImage} alt={`${username}'s profile picture`} width={100} height={100} className="rounded-full" />
      <div>
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-semibold">{username}</h1>
          {isOwnProfile ? (
            <button className="py-1 px-4 bg-blue-500 text-white rounded-md text-sm">
              Edit Profile
            </button>
          ) : (
            <button className={`py-1 px-4 ${ isFollowing ? 'bg-gray-300' : 'bg-blue-500 text-white' } rounded-md text-sm`} onClick={onFollowToggle} >
              {isFollowing ? 'Unfollow' : 'Follow'}
            </button>
          )}
        </div>
        <div className="mt-4 flex space-x-6 text-sm">
          <p>
            <span className="font-semibold">{postsCount}</span> posts
          </p>
          <p>
            <span className="font-semibold">{followers}</span> followers
          </p>
          <p>
            <span className="font-semibold">{following}</span> following
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;

'use client';

import React from 'react';
import Image from 'next/image';

interface PostGridProps {
  posts: { id: number; imageUrl: string }[];
}

const PostGrid: React.FC<PostGridProps> = ({ posts }) => {
  return (
    <div className="grid grid-cols-3 gap-2 p-4">
      {posts.map((post) => (
        <div key={post.id} className="relative group">
          <Image src={post.imageUrl} alt="Post image" width={300} height={300} className="object-cover w-full h-full" />
          {/* Hover Effect */}
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-lg">❤️ 120 💬 15</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostGrid;

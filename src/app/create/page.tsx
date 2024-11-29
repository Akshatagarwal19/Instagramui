'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const CreatePostPage = () => {
  const [image, setImage] = useState<File | null>(null);
  const [caption, setCaption] = useState('');
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleCaptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCaption(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!image || !caption.trim()) {
      alert('Please add an image and caption');
      return;
    }
    console.log('Image:', image);
    console.log('Caption:', caption);

    // Reset form
    setImage(null);
    setCaption('');
    setImagePreview(null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h1 className="text-center text-2xl font-bold mb-6 text-gray-800">
          Create a Post
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="imageUpload" className="block text-sm font-medium text-gray-700">
              Upload Image
            </label>
            <input id="imageUpload" type="file" accept="image/*" onChange={handleImageChange} className="mt-2 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-500 hover:file:bg-blue-200" />
          </div>
          {imagePreview && (
            <div className="relative h-64 w-full mt-4">
              <Image src={imagePreview} alt="Image Preview" layout="fill" objectFit="contain" className="rounded-lg" />
            </div>
          )}
          <div>
            <label htmlFor="caption" className="block text-sm font-medium text-gray-700">
              Caption
            </label>
            <textarea id="caption" value={caption} onChange={handleCaptionChange} placeholder="Write a caption..." className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300" />
          </div>
          <button type="submit" className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600" >
            Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePostPage;

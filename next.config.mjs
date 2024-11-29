import { hostname } from 'os';
import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'], // Add your allowed image domains here
  },
};

export default nextConfig;

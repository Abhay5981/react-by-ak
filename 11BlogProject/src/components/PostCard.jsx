import React from 'react';
import appwriteService from '../appwrite/config';
import { Link } from 'react-router-dom';

function PostCard({ $id, title, featuredImage }) {
  // Handle missing or undefined image
  const imageUrl = featuredImage
    ? appwriteService.getFilePreview(featuredImage)
    : 'path/to/default/image.png'; // Fallback image if featuredImage is missing

  // Debugging logs
  console.log("Post ID:", $id);
  console.log("Post Title:", title);
  console.log("Image URL:", imageUrl);  // Check if the URL is correct

  return (
    <Link to={`/post/${$id}`}>
      <div className='w-full bg-gray-400 rounded-xl p-4'>
        <div className='w-full justify-center mb-4'>
          <img
            src={imageUrl}
            alt={`Image of ${title}`} // Better alt text for accessibility
            className='rounded-xl'
          />
        </div>
        <h2 className='text-xl font-bold'>{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;



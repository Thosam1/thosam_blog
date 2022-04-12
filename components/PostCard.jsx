/* Actual posts components with image, title, excerpt and continue reading button */

import React from 'react';

// image
import Image from 'next/image';

// date format
import moment from 'moment';


import Link from 'next/link';

import { graphCMSImageLoader } from '../util';

const PostCard = ({ post }) => (
  // <Link href={`/post/${post.slug}`}>
  <div className="bg-light_postcard dark:bg-[#141414] rounded-lg p-0 lg:p-8 pb-12 mb-8 transition duration-500 ease transform hover:scale-105">
    {/* image */}
    <div className="relative overflow-hidden pb-80 mb-6">
      <img 
        src={post.featuredImage.url} 
        alt={post.title} 
        className="object-top absolute h-80 w-full object-cover rounded-t-lg lg:rounded-lg" 
      />
    </div>

    {/* title */}
    <h1 className="transition duration-700 text-center mb-8 cursor-pointer 
        hover:text-hover_color text-3xl font-semibold">
      <Link href={`/post/${post.slug}`}>{post.title}</Link>
    </h1>

    
    <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
      {/* author logo + name */}
      <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8 items-center">
        <Image
          unoptimized
          loader={graphCMSImageLoader}
          alt={post.author.name}
          height="30px"
          width="30px"
          className="align-middle rounded-full"
          src={post.author.photo.url}
        />
        <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg dark:text-[#b4b4b4]">{post.author.name}</p>
      </div>

      {/* date logo + date*/}
      <div className="font-medium text-gray-700 dark:text-[#b4b4b4]">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-[#06C167]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="align-middle">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
      </div>
    </div>

    {/* excerpt text */}
    {/* <p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-5 dark:text-[#b4b4b4]">
      {textCropped(post.excerpt)}
    </p> */}

    {/* Button continue reading */}
    <div className="text-center">
      <Link href={`/post/${post.slug}`}>
      <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block hover:bg-hover_color bg-button_main_color text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">Continue Reading</span>
      </Link>
    </div>
  </div>
  // </Link>
);

// often excerpt is too long so we crop
const textCropped = (text) => {
  var cropped = text.substring(0, 250) + " ...";
  return cropped;
}

export default PostCard;

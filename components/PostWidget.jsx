/* component that shows featured posts */

// hooks
import React, { useState, useEffect } from 'react';

// images
import Image from 'next/image';

// date format
import moment from 'moment';

import Link from 'next/link';

import { graphCMSImageLoader } from '../util';

// backend functions
import { getSimilarPosts, getRecentPosts } from '../services';

const PostWidget = ({ categories, slug }) => {

  // state
  const [relatedPosts, setRelatedPosts] = useState([]);

  // fetching data from backend
  useEffect(() => {

    // if already looking at a particular post -> related
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result);
      });
    } else { // 3 most recents
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      });
    }
  }, [slug]);

  return (
    <div className="bg-white dark:bg-[#141414] shadow-lg rounded-lg p-8 pb-12 mb-8">

      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>

      {relatedPosts.map((post, index) => (
        <div key={index} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <Image
              loader={graphCMSImageLoader}
              alt={post.title}
              height="60px"
              width="60px"
              unoptimized
              className="align-middle rounded-full"
              src={post.featuredImage.url}
            />
          </div>

          <div className="flex-grow ml-4">
            <p className="text-gray-500 font-xs dark:text-[#b4b4b4]">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
            <span className='transition duration-500 ease transform hover:text-hover_color'>
              <Link href={`/post/${post.slug}`} className="text-md" key={index}>{post.title}</Link>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;

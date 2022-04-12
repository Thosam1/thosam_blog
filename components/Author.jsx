import React from 'react';

// image
import Image from 'next/image';

import { graphCMSImageLoader } from '../util';

const Author = ({ author }) => (
  <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-component_bg_light bg-opacity-90 dark:bg-component_bg_dark">
    <div className="absolute left-0 right-0 -top-14">
      <Image
        unoptimized
        loader={graphCMSImageLoader}
        alt={author.name}
        height="100px"
        width="100px"
        className="align-middle rounded-full"
        src={author.photo.url}
      />
    </div>
    <h3 className="text-gray-800 mt-4 mb-4 text-xl font-bold">{author.name}</h3>
    <p className="text-gray-600 text-ls">{author.bio}</p>
    
    {/* Button continue reading */}
    <div className="text-center">
      {/* <Link href={`/post/${post.slug}`}> */}
      <span className="transition duration-500 ease transform border-solid inline-block bg-button_main_color hover:bg-hover_color text-lg font-medium rounded-full text-white px-8 py-3 mt-5 cursor-pointer">my story 🚀</span>
      {/* </Link> */}
    </div>
  </div>
);

export default Author;

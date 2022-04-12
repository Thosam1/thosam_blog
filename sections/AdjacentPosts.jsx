import React, { useState, useEffect } from 'react';

import { AdjacentPostCard } from '../components';
import { getAdjacentPosts } from '../services';

const AdjacentPosts = ({ createdAt, slug }) => {

  // state
  const [adjacentPost, setAdjacentPost] = useState(null);
  const [dataLoaded, setDataLoaded] = useState(false);

  // fetching data from backend
  useEffect(() => {
    getAdjacentPosts(createdAt, slug).then((result) => {
      setAdjacentPost(result);
      setDataLoaded(true);
    });
  }, [slug]);

  return (
    <div>
      {dataLoaded && (
        <>
        <h3 className="text-xl pt-4 mb-8 font-semibold border-b pb-4">🧐 Read other articles...</h3>
        <div className="grid grid-cols-1 lg:grid-cols-8 gap-12 mb-8">
          {adjacentPost.previous && (
              <div className={`${adjacentPost.next ? 'col-span-1 lg:col-span-4' : 'col-span-1 lg:col-span-8'} adjacent-post rounded-lg relative h-72`}>
                <AdjacentPostCard post={adjacentPost.previous} position="LEFT" />
              </div>
            )}
            {adjacentPost.next && (
              <div className={`${adjacentPost.previous ? 'col-span-1 lg:col-span-4' : 'col-span-1 lg:col-span-8'} adjacent-post rounded-lg relative h-72`}>
                <AdjacentPostCard post={adjacentPost.next} position="RIGHT" />
              </div>
            )}
        </div>
        </>
      )}
    </div>
  );
};

export default AdjacentPosts;

/* Categories widget on the right, where user can click on the category he/she wants to see */
import React, { useState, useEffect } from 'react';

import Link from 'next/link';

// backend functions
import { getCategories } from '../services';

const Categories = () => {

  // state
  const [categories, setCategories] = useState([]);

  // fetching data from backend
  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="bg-white dark:bg-[#141414] shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        Categories
      </h3>
      
      {categories.map((category, index) => (
        <Link key={index} href={`/category/${category.slug}`}>
          <span className={`cursor-pointer block 
          ${(index === categories.length - 1) ? 'border-b-0' : 'border-b'} 
          pb-3 mb-3
          transition duration-500 ease transform hover:text-hover_color
          `}>
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;

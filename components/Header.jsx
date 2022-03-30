import React, { useState, useEffect } from 'react';

import Link from 'next/link';

// backend functions
import { getCategories } from '../services';

const Header = () => {

  // state
  const [categories, setCategories] = useState([]);

  // fetching data from backend
  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-8">

        {/* this div contains the title of the blog - on the left of header */}
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-white">The Tower</span>
          </Link>
        </div>

        {/* this div will show the categories - only if medium size screen -> on mobile it will be hidded */}
        <div className="hidden md:float-left md:contents"> 
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}>
              <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;

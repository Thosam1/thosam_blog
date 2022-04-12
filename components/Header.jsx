import React, { useState, useEffect } from 'react';

import Link from 'next/link';

// backend functions
import { getCategories } from '../services';

// themes
import { useTheme } from 'next-themes';

// toggle icon
import{SunIcon, MoonIcon} from "@heroicons/react/solid";

import { button_main } from '../themes/themes'

const Header = () => {

  // state
  const [categories, setCategories] = useState([]);

  const [mounted, setMounted] = useState(false);

  // fetching data from backend
  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });

    setMounted(true);
  }, []);

  // button theme switcher :
  const { systemTheme, theme, setTheme } = useTheme();

  // theme switcher method
  const renderThemeChanger = () => {
    const currentTheme = theme === 'system' ? systemTheme : theme
    if (!mounted) return null;

    if (currentTheme === 'dark') {
      return (
        <div className="flex items-center float-right">
          <h2 className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer" onClick={() => setTheme('light')}>
            Light
            <SunIcon
              className="ml-1 inline-block h-8  w-8 text-amber-400 animate-wiggle  "
              onClick={() => setTheme('light')}
            />
          </h2>
        </div>
      )
    } else {
      return (
        <div className="flex items-center float-right">
          <h2 className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer text-gray-700" onClick={() => setTheme('dark')}>
            Dark
            <MoonIcon
              className="ml-1 inline-block h-8  w-8 text-gray-600 animate-wiggle_reverse"
              onClick={() => setTheme('dark')}
            />
          </h2>
        </div>
      )
    }
  }

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-[#06C167] py-8">

        {/* this div contains the title of the blog - on the left of header */}
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-black dark:text-white">The Tower</span>
          </Link>
        </div>

        {/* this div will show the categories - only if medium size screen -> on mobile it will be hidded */}
        {/* <div className="hidden md:float-left md:contents"> 
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}>
              <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))} */}

          {/* theme switcher button */}
          {renderThemeChanger()}
          {/* <button
            className='px-4 py-2
            bg-black text-white 
            dark:bg-white dark:text-black 
            md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
              to {theme == 'light' ? 'Dark' : 'Light'}
          </button> */}

      </div>
    </div>
  );
};

export default Header;

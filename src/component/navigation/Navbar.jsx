import React from 'react';
import Icon from '../icon/Icon';
import { faMoon, faSun } from '@fortawesome/fontawesome-free-regular';
import useTheme from '../../context/ThemeContext';
import ModeToggle from '../inputs/ModeToggle';

const Navbar = () => {
  const { activeMode, activateTheme, setTheme } = useTheme();

  return (
    <nav className='fixed top-0 left-0 right-0 bg-white z-20 h-[7rem] dark:bg-very-dark-blue-DMB shadow-sm dark:shadow-dark-blue-dark-DME'>
      <div className=' h-full px-6 2xl:px-0 mx-auto flex gap-6 items-center justify-between max-w-[120rem]'>
        <header>
          <h1 className='text-3xl font-semibold text-dark-blue-dark-LMT dark:text-white'>Where in the world?</h1>
        </header>
        <ModeToggle
          icon={<Icon iconType={activeMode ? faMoon : faSun} className='h-7 dark:text-white' />}
          setTheme={setTheme}
          activate={activateTheme}
          active={activeMode}
        />
      </div>
    </nav>
  );
};

export default Navbar;

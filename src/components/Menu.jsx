import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Menu = () => {
  const { t } = useTranslation();

  return (
    <div className='w-[100%] h-[100%] flex'>
      <nav>
        <ul className='flex gap-5 w-[100%] h-[100%] font-semibold text-2xl items-center p-1'>
          <li className='text-black hover:text-blue-950 transition-all duration-300 opacity-75 p-2'>
            <Link to="/">{t('Home')}</Link>
          </li>
          <li className='text-black hover:text-blue-950 transition-all duration-300 opacity-75 p-2'>
            <Link to="/movies">{t('Movies')}</Link></li>
          <li className='text-black hover:text-blue-950 transition-all duration-300 opacity-75 p-2'>
            <Link to="/tv-shows">{t('TV Shows')}</Link></li>
          <li className='text-black hover:text-blue-950 transition-all duration-300 opacity-75 p-2'>
            <Link to="/sports">{t('Sports')}</Link></li>
          <li className='text-black hover:text-blue-950 transition-all duration-300 opacity-75 p-2'>
            <Link to="/live">{t('Live')}</Link></li>
          <li className='text-black hover:text-blue-950 transition-all duration-300 opacity-75 p-2'>
            <Link to="/settings">{t('Settings')}</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;

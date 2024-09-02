import React from 'react';
import { useTranslation } from 'react-i18next';

const Settings = () => {
  const { i18n } = useTranslation();

  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className='w-full h-full flex items-center gap-2'>
      <h2 className='font-semibold text-2xl'>Settings</h2>
      <select onChange={handleChange}>
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        <option value="ru">Russian</option>
        <option value="es">Spanish</option>
        <option value="zh">Chinese</option>
      </select>
    </div>
  );
};

export default Settings;

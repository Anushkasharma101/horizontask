import React, { useState, useEffect } from 'react';
import { ColorRing } from 'react-loader-spinner';
import { useTranslation } from 'react-i18next';

const Settings = () => {
  const [loading, setLoading] = useState(true);
  const { i18n } = useTranslation();

  useEffect(() => {
    const img = new Image();
    img.src = "/Assets/Images/settings.jpg"; 
    img.onload = () => {
      setLoading(false);
    };
  }, []);

  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className="w-[100%] h-[100%] relative">
      {loading ? (
        <div className="flex justify-center items-center h-full">
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        </div>
      ) : (
        <div className="w-[100%] h-[100%] relative">
          <img 
            src="/Assets/Images/settings.jpg" 
            alt="Settings Background" 
            className='w-full h-full object-cover'
          />
          <div className="absolute top-0 left-0 w-full h-full flex items-center gap-2 justify-center">
            <h2 className='font-semibold text-2xl text-white'>Language</h2>
            <select onChange={handleChange} className="p-2 bg-white border border-gray-300 rounded">
              <option value="en">English</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              <option value="ru">Russian</option>
              <option value="es">Spanish</option>
              <option value="zh">Chinese</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;

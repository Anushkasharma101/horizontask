import React, { useState, useEffect } from 'react';
import { ColorRing } from 'react-loader-spinner';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = "/Assets/Images/home.jpg";
    img.onload = () => {
      setLoading(false);
    };
  }, []);

  return (
    <div className="w-[100%] h-[100%]">
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
        <div className="w-[100%] h-[100%] bg-gradient-to-b from-black opacity-75">
          <img 
            src="/Assets/Images/home.jpg" 
            alt="Home"  
            className='w-full h-full object-cover'
          />
        </div>
      )}
    </div>
  );
};

export default Home;

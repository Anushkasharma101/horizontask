import React, { useState, useEffect } from "react";
import { ColorRing } from "react-loader-spinner";
import Menu from "../components/Menu";
import Settings from "../components/Settings";
import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import Movies from '../components/Movies';
import TvShow from '../components/TvShow';
import Sports from '../components/Sports';
import Live from '../components/Live';

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); 
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
        <div className="w-[100%] h-[100%]">
          <div className="w-[100%] h-[10%] flex justify-center gap-5 bg-blue-300">
            <div className="h-full flex w-min-[35%] p-2">
              <Menu />
            </div>
          </div>
          <div className="w-[100%] h-[90%] bg-purple-200">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/tv-shows" element={<TvShow />} />
              <Route path="/sports" element={<Sports />} />
              <Route path="/live" element={<Live />} />
              <Route path='/settings' element={<Settings />} />
            </Routes>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;

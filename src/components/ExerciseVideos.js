import React from 'react';
import { Typography, Box, Stack } from '@mui/material';
import Loader from './Loader';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return <Loader />;

  return (
    <div className=' justify-center'>
      <div className='flex justify-center mt-40 mb-20 '>
      <h1 className='text-red-700 text-5xl font-bold'>
        Watch {name} exercise Youtube videos for more clearity
      </h1>
      </div>
      <div>
      <div className=' grid grid-cols-3 gap-4 mb-20 '>
        {exerciseVideos?.slice(0, 6)?.map((item, index) => (
          <a
            key={index}
            className="exercise-video mb-12  ml-12 mr-12 shadow-black shadow-md hover:shadow-black hover:shadow-lg rounded-[20px]"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <div className='justify-center flex h-[250px] '>
            <img className='w-[110%px]'  src={item.video.thumbnails[0].url} alt={item.video.title} />
            </div>
            <div className='flex p-4 text-gray-700 font-bold text-lg justify-center'>
              <h1>
                {item.video.title}
              </h1>
              <h1 >
                {item.video.channelName}
              </h1>
            </div>
          </a>
        ))}
      </div>
      </div>
     
    </div>
  );
};

export default ExerciseVideos;

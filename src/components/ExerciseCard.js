import React from 'react';
import { Link } from 'react-router-dom';

const ExerciseCard = ({ exercise }) => (
  <div className=' ml-[15%]'>
  <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
    <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
    <div className='flex justify-center'>
      <button className='text-xl mr-[7%] text-white font-bold bg-yellow-100 p-[6px] hover:bg-white rounded-full'>
        {exercise.bodyPart}
      </button>
      <button className='text-xl mr-[30%] text-white font-bold bg-red-400 p-[6px] hover:bg-white rounded-full'>
        {exercise.target}
      </button>
    </div>
    <div className='flex justify-center'>
    <h1 className='text-2xl mr-[30%] text-red-800 font-bold mt-2 mb-4'>
      {exercise.name}
    </h1>
    </div>
  </Link>
  </div>
);

export default ExerciseCard;

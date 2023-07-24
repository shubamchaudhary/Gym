import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';
import Loader from './Loader';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);

  useEffect(() => {
    try {
      const fetchExercisesData = async () => {
        let exercisesData = [];
  
        if (bodyPart === 'all') {
          exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
        } else {
          exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
        }
  
        setExercises(exercisesData);
      };
  
      fetchExercisesData();
    } catch (error) {
      console.log(error)
    }
  }, [bodyPart]);

  // Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  if (!currentExercises.length) return <Loader />;

  return (
     <div className='content-between justify-between'>
      <div className='grid lg:grid-cols-3 ml-4  lg:gap-4 md:grid-cols-2 md:gap-4 sm:grid-cols-1 sm:gap-4'>
         {currentExercises.map((exercise, idx) => (
             <ExerciseCard key={idx} exercise={exercise} />
              ))}
        </div>
         <div className='flex justify-center mt-20 mb-10'>
           {exercises.length > 9 && (
              <Pagination
                color="standard"
                shape="rounded"
                defaultPage={1}
                count={Math.ceil(exercises.length / exercisesPerPage)}
                page={currentPage}
                onChange={paginate}
                size="large"
               />
             )}
         </div>
      </div>
  )
};

export default Exercises;


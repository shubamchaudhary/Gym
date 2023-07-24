import React, { useEffect, useState } from 'react';
import {BiSearch} from 'react-icons/bi'
import { exerciseOptions, fetchData } from '../utils/fetchData';


const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts(['all', ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      const searchedExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search)
               || item.target.toLowerCase().includes(search)
               || item.equipment.toLowerCase().includes(search)
               || item.bodyPart.toLowerCase().includes(search),
      );

      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

      setSearch('');
      setExercises(searchedExercises);
    }
  };

  return (
         <div className='flex mt-[200px] justify-center '>
          <div>
          <p className='text-[80px] text-[#9c0a0a38] font-bold'>Search Different Exercises</p>
         <div className="mt-8 h-12 w-[100%]  flex  content-center">
        <input
           className="w-full bg-gray-300 text-2xl rounded-full border-gray-700 border-[1px] py-2 px-4  outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <button  onClick={handleSearch}>
          <BiSearch className='text-3xl hover:text-4xl -ml-12 text-white'/>
        </button>
        </div>
          </div>
        </div>
  );
};

export default SearchExercises;

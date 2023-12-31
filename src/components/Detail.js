import React from 'react';
import { Typography, Stack, Button } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
   <div className='flex justify-center -mt[400px]'>
   <div className='mr-[%] '>
     <img className="" src={gifUrl} alt={name} loading="lazy"  />
   </div>
    <div className=' bg-white shadow-sm hover:shadow-md shadow-gray-500 hover:shadow-gray-500 mr-[0%] ml-[8%] p-20  -mt-40 rounded-[20px]'>
      <h1 className='text-4xl text-red-700 mb-8 font-bold'>{name}</h1>
      <p  className='text-md mb-4 font-semibold'> Exercises keep you strong.{' '}{name}is one
    of the best <br /> exercises to target your {target}. It will help you improve your{' '}
    <br /> mood and gain energy.</p>
    <div className='flex justify-center'>
    <div>
     {extraDetail?.map((item) => (
     <div key={item.name} direction="row" gap="24px" alignItems="center">
      <Button sx={{ background: '#FFF2DB', borderRadius: '50%', width: '100px', height: '100px' }}>
        <img  src={item.icon} alt={bodyPart} style={{ width: '50px', height: '50px' }} />
      </Button>
        <div className='flex justify-center -ml-6'>
        <h1 className='text-red-600 text-2xl p-2'>
        {item.name}
        </h1>  
        </div>    
    </div>
  ))}
    </div>
    </div>
    </div>
 </div>
  );
};

export default Detail;



{/* <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
<img className="h-[50%]" src={gifUrl} alt={name} loading="lazy"  />
<Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
  <Typography sx={{ fontSize: { lg: '64px', xs: '30px' } }} fontWeight={700} textTransform="capitalize">
    {name}
  </Typography>
  <Typography sx={{ fontSize: { lg: '24px', xs: '18px' } }} color="#4F4C4C">
    Exercises keep you strong.{' '}
    <span style={{ textTransform: 'capitalize' }}>{name}</span> bup is one
    of the best <br /> exercises to target your {target}. It will help you improve your{' '}
    <br /> mood and gain energy.
  </Typography>
  {extraDetail?.map((item) => (
    <Stack key={item.name} direction="row" gap="24px" alignItems="center">
      <Button sx={{ background: '#FFF2DB', borderRadius: '50%', width: '100px', height: '100px' }}>
        <img src={item.icon} alt={bodyPart} style={{ width: '50px', height: '50px' }} />
      </Button>
      <Typography textTransform="capitalize" sx={{ fontSize: { lg: '30px', xs: '20px' } }}>
        {item.name}
      </Typography>
    </Stack>
  ))}
</Stack>
</Stack> */}
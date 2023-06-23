import { memo } from 'react';
import { motion } from 'framer-motion';
import { fadeInLeft, fadeInRight } from '../Services/AnimationFunctions';

const StaticHeroSection = () => {
  return (
    <div className='container flex flex-wrap items-center justify-center mt-10 mx-auto md:px-12 md:flex-row'>
      {/*  */}
      <div className='mb-14 lg:mb-0 lg:w-1/2'>
        <motion.h1
          className='max-w-xl text-primary text-4xl font-semibold text-dark -tracking-[.5px] md:text-center lg:text-left lg:leading-tight mb-5'
          {...{ ...fadeInRight, transition: { delay: 0.2, duration: 0.6 } }}
        >
          Find The Nearest Hospital To You.
        </motion.h1>
        <motion.h2
          className=' max-w-xl text-gray-500 font-semibold text-dark -tracking-[.5px] md:text-center lg:text-left lg:max-w-md'
          {...{ ...fadeInLeft, transition: { delay: 0.2, duration: 0.6 } }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima consequatur, voluptate laboriosam iusto corporis culpa reiciendis,
          numquam enim voluptatum quas eaque fugit omnis assumenda officiis perferendis ut suscipit nemo qui. Debitis illum eum aut numquam
          fuga atque aliquam nobis, iste doloremque incidunt expedita eveniet a deleniti asperiores ipsa soluta consequatur dolor illo
          ducimus fugiat quasi eligendi dolorum ea quos! Vitae?
          <div className='flex items-center mt-14 lg:justify-start'>
            <button
              type='button'
              className='text-white bg-primary font-bold rounded px-4 py-4 text-center hover:bg-primary-hover hover:drop-shadow-md transition duration-300 ease-in-out'
            >
              Find A Hospital
            </button>
          </div>
        </motion.h2>
      </div>
      <div className='lg:w-1/2'>
        <img className='mx-auto' width={400} height={600} src='/assets/img/online_medical.svg' alt='' />
      </div>
    </div>
  );
};

export default memo(StaticHeroSection);

import { useState } from 'react';
import ApiKeysForm from './ApiKeysForm';
import ApiusageDocs from './ApiusageDocs';
// import { Link } from 'react-router-dom';

const imageSliders = [
  {
    url: 'https://cdn.pixabay.com/photo/2012/02/17/15/23/abstract-14367_960_720.jpg',
  },
];

const GetApiKeys = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <section className=' py-2 max-w-[1400px] h-[280px] w-full m-auto'>
      <div
        style={{ backgroundImage: `url(${imageSliders[0].url})` }}
        className='w-full h-full bg-center bg-cover duration-500 leading-[50px] flex flex-col justify-center items-center right-inherit cursor-pointer space-y-4'
      >
        <h2 className='text-white font-bold uppercase sm:mx-0 md:text-[40px] lg:text-[40px]'>Explore Our Api</h2>
      </div>

      {/* Animated Tabs */}

      <div className='w-full max-w-md mx-auto px-2 pt-7 '>
        <div className='flex mb-4'>
          <button
            className={`${activeTab === 0 ? 'bg-primary' : 'bg-gray-200'} text-white px-4 py-2 mr-2 rounded`}
            onClick={() => handleTabClick(0)}
          >
            Get Api Keys
          </button>
          <button
            className={`${activeTab === 1 ? 'bg-primary' : 'bg-gray-200'} text-white px-4 py-2 rounded`}
            onClick={() => handleTabClick(1)}
          >
            Documentation
          </button>
        </div>

        {activeTab === 0 && <ApiKeysForm />}
        {activeTab === 1 && <ApiusageDocs />}
      </div>
    </section>
  );
};

export default GetApiKeys;

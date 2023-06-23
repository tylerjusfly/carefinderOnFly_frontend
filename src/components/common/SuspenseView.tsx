import ClipLoader from 'react-spinners/ClipLoader';

const SuspenseView = () => {
  return (
    <div className='flex justify-center items-center m-80'>
      <ClipLoader color='#A020F0' loading={true} size={30} aria-label='Loading Spinner' />
    </div>
  );
};

export default SuspenseView;

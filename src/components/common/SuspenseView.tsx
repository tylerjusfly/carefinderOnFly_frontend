import ClipLoader from 'react-spinners/ClipLoader';

const SuspenseView = () => {
  return (
    <div>
      <ClipLoader color='#A020F0' loading={true} size={30} aria-label='Loading Spinner' />
    </div>
  );
};

export default SuspenseView;

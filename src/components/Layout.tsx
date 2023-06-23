import { Outlet } from 'react-router-dom';
import LandingNavBar from './common/LandingNavBar';

const NavLayout = () => {
  return (
    <div className='min-h-screen'>
      <LandingNavBar />
      <Outlet />
    </div>
  );
};

export default NavLayout;

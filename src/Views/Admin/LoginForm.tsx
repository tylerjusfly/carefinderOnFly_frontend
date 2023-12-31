import { useState } from 'react';
import { loginErr, loginUserFromAPI, pendingLogin } from '../../App/features/generalSlice';
import { store } from '../../App/store';
import { Data } from '../../App/types';
import { useSelector } from 'react-redux';
import { Alert } from 'flowbite-react';

const LoginForm = () => {
  // Admin Auth will happen in redux
  const [loginData, setLoginData] = useState<Data>({
    username: 'tyler',
    password: 'ladygaga',
  });

  const loading = useSelector(pendingLogin);
  const errormsg = useSelector(loginErr);

  const submitLogin = () => {
    store.dispatch(loginUserFromAPI(loginData));
  };

  return (
    <div className='flex justify-center items-center my-20'>
      <div className='w-full max-w-md'>
        <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
          {/* Show error message */}
          {errormsg && (
            <Alert color='failure'>
              <span className='text-red-500 text-md'>{errormsg}</span>
            </Alert>
          )}
          <div className='flex flex-row  my-4 justify-center space-x-2'>
            <h4 className=''>Welcome back Administrator!</h4>
            <img src='/shield-half.svg' width={20} />
          </div>
          {/* Username */}
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='username'>
              Username
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='username'
              type='text'
              placeholder='Username'
            />
          </div>

          {/* password */}
          <div className='mb-6'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
              Password
            </label>
            <input
              className='shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
              id='password'
              type='password'
              placeholder='******************'
            />
            <p className='text-red-500 text-xs italic'>Please choose a password.</p>
          </div>
          <div className='flex items-center justify-between'>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='button'
              onClick={submitLogin}
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </button>
            <a className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800' href='#'>
              Forgot Password?
            </a>
          </div>
        </form>
        <p className='text-center text-gray-500 text-xs'>©2023 Carefinder. All rights reserved.</p>
      </div>
    </div>
  );
};

export default LoginForm;

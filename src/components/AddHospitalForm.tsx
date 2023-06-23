import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// Import Packages
import { Alert } from 'flowbite-react';
import ClipLoader from 'react-spinners/ClipLoader';

// const favoriteFoodEnum = z.enum(["🍔 Burger", "🍕 Pizza", "🌭 Hotdog", "🌮 Taco", "🍣 Sushi"]);
const hospitalSchema = z.object({
  hospitalName: z.string().nonempty(),
  location: z.string().nonempty(),
  contact: z.string().nonempty(),
});

// infer a type of schema to be my form type
export type HospitalFormType = z.infer<typeof hospitalSchema>;

// set expected props
type HospitalFormProps = {
  onSubmitHospital: (data: HospitalFormType) => void;
  submitting: boolean;
};

const AddHospitalForm: React.FC<HospitalFormProps> = ({ onSubmitHospital, submitting }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<HospitalFormType>({
    resolver: zodResolver(hospitalSchema),
  });

  const onSubmit = (data: HospitalFormType) => {
    onSubmitHospital(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-md space-y-8'>
      <div>
        <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>We Appreciate Your Contributions!</h2>
      </div>

      <div>
        <label htmlFor='hospitalName'>Hospital name</label>
        <input
          {...register('hospitalName', { required: true })}
          className='w-full py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-primary rounded-md'
          placeholder='Hospital name'
        />

        {errors.hospitalName && <p className='text-red-600'>This field is required</p>}
      </div>

      {/* Location */}
      <div>
        <label htmlFor='location'>Location</label>
        <input
          {...register('location', { required: true })}
          className='w-full py-3 px-4 placeholder-gray-500 focus:ring-primary border focus:border-primary sm:text-sm  border-primary rounded-md focus:outline-primary'
          placeholder='Location Details'
        />

        {errors.location && <p className='text-red-600'>This field is required</p>}
      </div>

      <div>
        <label htmlFor='location'>Contact</label>
        <input
          {...register('contact', { required: true })}
          className='w-full py-3 px-4 placeholder-gray-500 focus:ring-primary border focus:border-primary sm:text-sm  border-primary rounded-md focus:outline-primary'
          placeholder='Hospital contact..'
        />

        {errors.contact && <p className='text-red-600'>This field is required</p>}
      </div>

      <div>
        <button
          type='submit'
          className=' w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary space-x-2'
        >
          {submitting ? (
            <>
              <span>Adding Hospital</span>
              <ClipLoader color='#fff' loading={true} size={20} aria-label='Loading Spinner' />
            </>
          ) : (
            'Add Hospital'
          )}
        </button>
      </div>
      <Alert color='info'>
        <span>
          <span className='font-medium'>Note: </span>
          Your contributions will not be displayed until approved by an admin.
        </span>
      </Alert>
    </form>
  );
};

export default AddHospitalForm;

import { useState } from 'react';
import { request } from '../Services/Api';
import { HOSPITAL_API } from '../Services/constant';
import { notifyError, notifySuccess } from '../Services/notify';
import AddHospitalForm, { HospitalFormType } from '../components/AddHospitalForm';
import { Link } from 'react-router-dom';

const AddHospital = () => {
  const [submitting, setSubmitting] = useState<boolean>(false);

  const onSubmitHospital = async (data: HospitalFormType, func: any) => {
    console.log(data);

    try {
      setSubmitting(true);
      const response = await request(HOSPITAL_API, 'POST', { ...data, hospitalname: data.hospitalName });

      if (response.success) {
        notifySuccess('Hospital Successfully Added');
        setSubmitting(false);
        func();
      } else {
        notifyError(response.message || 'error occurred saving Hospital');
        setSubmitting(false);
      }
    } catch (error) {
      setSubmitting(false);
      notifyError('error occurred saving Hospital');
    }
  };

  const imageSliders = [
    {
      url: 'https://static.vecteezy.com/system/resources/previews/004/242/985/original/abstract-luxury-shiny-dark-blue-background-with-lines-golden-glowing-free-vector.jpg',
    },
    {
      url: 'https://cdn.pixabay.com/photo/2012/02/17/15/23/abstract-14367_960_720.jpg',
    },
  ];
  return (
    <section className=' py-2 max-w-[1400px] h-[280px] w-full m-auto'>
      <div
        style={{ backgroundImage: `url(${imageSliders[0].url})` }}
        className='w-full h-full bg-center bg-cover duration-500 leading-[50px] flex flex-col justify-center items-center right-inherit cursor-pointer space-y-4'
      >
        <h2 className='text-white font-bold uppercase sm:mx-0 md:text-[40px] lg:text-[40px]'>Welcome To Our Developer Program!</h2>

        <div className='inline-block xs:grid xs:justify-center'>
          <Link
            to={'/api-keys'}
            type='button'
            className='text-white bg-primary font-bold rounded px-4 py-2 text-center hover:bg-primary-hover hover:drop-shadow-md transition duration-300 ease-in-out uppercase '
          >
            Learn More About Our Api
          </Link>
        </div>
      </div>

      {/* Add Hospital Form  */}

      <div className='flex flex-col justify-center items-center px-4 py-8'>
        <AddHospitalForm onSubmitHospital={onSubmitHospital} submitting={submitting} />
      </div>
    </section>
  );
};

export default AddHospital;

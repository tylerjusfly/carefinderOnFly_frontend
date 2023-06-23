import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import ClipLoader from 'react-spinners/ClipLoader';
import { notifyError } from '../Services/notify';
import { Alert } from 'flowbite-react';
import { request } from '../Services/Api';
import { DEVKEY_API } from '../Services/constant';

const apiKeySchema = z.object({
  email: z.string().nonempty(),
});

export type apiKeyFormType = z.infer<typeof apiKeySchema>;

const ApiKeysForm = () => {
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [KeySent, setKeySent] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<apiKeyFormType>({
    resolver: zodResolver(apiKeySchema),
  });

  const sendApiKey = async (devdata: apiKeyFormType) => {
    try {
      setSubmitting(true);
      console.log(devdata);
      // apply for apikey
      const response = await request(DEVKEY_API, 'POST', { email: devdata.email });

      if (response.success) {
        setSubmitting(false);
        setKeySent(true);
      } else {
        setSubmitting(false);
        notifyError(response.message || 'unable to send an api key at this moment');
      }
    } catch (error) {
      setSubmitting(false);
      notifyError('unable to send an api key at this moment');
    }
  };

  return (
    <div className='p-2'>
      <form onSubmit={handleSubmit(sendApiKey)} className='w-full max-w-md space-y-4'>
        <div>
          <label htmlFor='email'>email</label>
          <input
            {...register('email', { required: true })}
            className='w-full py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-primary rounded-md'
            placeholder='Developer mail'
          />

          {errors.email && <p className='text-red-600'>This field is required</p>}
        </div>
        {KeySent && (
          <Alert color='success'>
            <span>
              <span className='font-medium'>Congratulations: </span>
              Your Token Has Been Sent To Your Mail.
            </span>
          </Alert>
        )}
        <div>
          <button
            type='submit'
            className=' w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary space-x-2'
          >
            {submitting ? (
              <>
                <span>Sending Api Key...</span>
                <ClipLoader color='#fff' loading={true} size={20} aria-label='Loading Spinner' />
              </>
            ) : (
              'Get Api Key'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApiKeysForm;

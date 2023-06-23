import { toast, cssTransition } from 'react-toastify';

const Sliders = cssTransition({
  enter: 'slide-in-left',
  exit: 'slide-out-left',
});

export const notifySuccess = (message: string) => {
  toast.success(message, {
    position: toast.POSITION.TOP_RIGHT,
    transition: Sliders,
    className: 'toast-message-success ',
  });
};

export const notifyError = (message: string) => {
  toast.error(message, {
    position: toast.POSITION.TOP_RIGHT,
    transition: Sliders,
    className: 'toast-message-error',
  });
};

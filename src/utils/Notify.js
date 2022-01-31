import { toast } from 'react-toastify';
export const notifySuccess = (msg) => toast.success(msg,
  {
    position: "top-center",
    theme: "light",
    autoClose: 2500,
  }
)

export const notifyError = (msg) => toast.error(msg,
  {
    position: "top-center",
    theme: "colored"
  }
)
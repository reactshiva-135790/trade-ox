import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const isValid = (inputValue) => {
  const target = inputValue;
  let isValid = false;
  if (isNaN(target)) {
    toast.error("Input field can only be number", {
        position: toast.POSITION.TOP_CENTER,
      });
    isValid = true;
  }

  if (!target) {
    toast.error("Input field cannot be empty", {
        position: toast.POSITION.TOP_CENTER,
      });
    isValid = true;
  }
  return isValid;
};

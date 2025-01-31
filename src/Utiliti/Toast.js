// toastUtils.js
import { toast } from "react-hot-toast";

export const ShowSuccess = (success) => {
  if (success) {
    toast.success("Item Added Successfully");
  }
};

export const ShowError = (error) => {
  if (error) {
    toast.error("Item Already Added");
  }
};

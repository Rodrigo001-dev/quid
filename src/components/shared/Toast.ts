import { toast } from "react-toastify";

interface ToastPros {
  message: string;
}

export function Toast({ message }: ToastPros) {
  return toast.warning(message, {
    position: toast.POSITION.TOP_RIGHT,
    hideProgressBar: true,
    theme: "dark",
  });
}

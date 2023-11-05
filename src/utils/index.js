import * as jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import { getLoginToken } from "../storage";
// import { AxiosError } from "axios";

const SERVER_ERROR = "There was an error contacting the server.";

export const getDecodedJWT = () => {
  try {
    const token = getLoginToken();
    const decoded = jwtDecode(token);
    return decoded;
  } catch (e) {
    return null;
  }
};

export const isAuthenticated = () => {
  try {
    const decode = getDecodedJWT();
    if (decode) {
      const { exp } = decode;
      const currentTime = Date.now() / 1000;
      return exp > currentTime;
    }
    return false;
  } catch (e) {
    return false;
  }
};

export const toastOptions = {
  position: toast.POSITION.TOP_RIGHT,
  autoClose: 8000,
  draggable: true,
  //   theme: "dark",
  // timeOut: 8000,
  pauseOnHover: true,
  style: {
    zIndex: "9999",
  },
};

export const successAlert = (msg) => {
  toast.success(msg || "Successfully created", { ...toastOptions });
};
export const errorAlert = (error) => {
  const err =
    error?.response?.data?.message ||
    error?.response?.data?.msg ||
    error?.response?.data?.error
      ? error?.response?.data?.message ||
        error?.response?.data?.msg ||
        error?.response?.data?.error
      : SERVER_ERROR;
  toast.error(err, toastOptions);
};
export const infoAlert = (msg) => {
  toast.info(msg || "Info Notification !", toastOptions);
};

// STUB: get age from DOB
export function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age.toString();
}

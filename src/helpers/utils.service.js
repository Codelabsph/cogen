import moment from "moment";

export const listErrors = (err) => {
  const error = err?.response?.data?.message;
  return `Something went wrong: ${error}`;
};

export function isEmail(email) {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
}

export const scrollToTop = () => {
  return window && window?.scrollTo(0, 0);
};

export const getImageUrl = (uri) => {
  const baseUrlMain = process.env.NEXT_PUBLIC_API_URL;
  return `${baseUrlMain}${uri}`;
};

export const formatDate = (date, format) => {
  return moment(date).format(format || "MMMM Do YYYY");
};

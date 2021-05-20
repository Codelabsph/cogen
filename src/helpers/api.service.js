import { http } from "./http.service";

export const ENDPOINTS = {
  CONTACT: "/contacts",
};

export const postContacts = (payload) => {
  return http.post(ENDPOINTS.CONTACT, { ...payload });
};

import { http, httpSolax } from "./http.service";

export const parseParams = (options) => {
  if (!options) {
    return "";
  }
  const tmp = Object.entries(options)
    .filter((opt) => opt[1] !== undefined && opt[1] !== null)
    .map((opt) => `${opt[0]}=${opt[1]}`)
    .reduce((acc, cur) => `${acc}&${cur}`, "");
  return `?${tmp.startsWith("&") ? tmp.substr(1) : tmp}`;
};

export const ENDPOINTS = {
  CONTACT: () => "/contacts",
  GET_REALTIME_INFO: (query) => `/getRealtimeInfo.do${parseParams(query)}`,
};

export const postContacts = (payload) => {
  return http.post(ENDPOINTS.CONTACT(), { ...payload });
};

export const getRealTimeInfo = (query) => {
  const queryStatic = {
    tokenId: process.env.NEXT_PUBLIC_SOLAX_CLOUD_TOKEN,
    sn: process.env.NEXT_PUBLIC_SOLAX_CLOUD_SN,
  };
  return httpSolax.get(
    ENDPOINTS.GET_REALTIME_INFO({ ...query, ...queryStatic })
  );
};

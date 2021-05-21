import Axios from "axios";

const createHttpConfig = (accessToken = "", config) => {
  return {
    ...config,
    ...httpConfig(accessToken),
  };
};

export const httpConfig = (accessToken = "") => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return config;
};

export const getUrl = (url, urlType) => {
  const baseUrlMain = process.env.NEXT_PUBLIC_API_URL;
  const baseUrlSolax = process.env.NEXT_PUBLIC_SOLAX_CLOUD_API_URL;

  let baseUrl;
  if (urlType === "solax") baseUrl = baseUrlSolax;
  else baseUrl = baseUrlMain;

  return `${baseUrl}${url}`;
};

function get(url, accessToken, config) {
  return new Promise((res, rej) => {
    Axios.get(url, createHttpConfig(accessToken, config))
      .then((data) => {
        res(data);
        updateToken(data);
      })
      .catch((err) => {
        rej(err);
      });
  });
}

function post(url, payload, accessToken, config) {
  return new Promise((res, rej) => {
    Axios.post(url, payload, createHttpConfig(accessToken, config))
      .then((data) => {
        res(data);
      })
      .catch((err) => {
        rej(err);
      });
  });
}

export const http = {
  get: (url, accessToken, config) => get(getUrl(url), accessToken, config),
  post: (url, payload, accessToken, config) =>
    post(getUrl(url), payload, accessToken, config),
};

export const httpSolax = {
  get: (url, accessToken, config) =>
    get(getUrl(url, "solax"), accessToken, config),
  post: (url, payload, accessToken, config) =>
    post(getUrl(url, "solax"), payload, accessToken, config),
};

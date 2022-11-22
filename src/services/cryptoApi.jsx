import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Taken from Rapid Api

// const options = {
//   method: "GET",
//   url: "https://coinranking1.p.rapidapi.com/coins",
//   headers: {
//     "X-RapidAPI-Key": "f95aa258a2msh954e8e5de758fb7p115e8ajsn1abefa17640f",
//     "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
//   },
// };

const cryptoApiHeaders = {
  "X-RapidAPI-Key": "f95aa258a2msh954e8e5de758fb7p115e8ajsn1abefa17640f",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const baseUrl = "https://coinranking1.p.rapidapi.com/";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
  }),
});

export const { useGetCryptosQuery } = cryptoApi;

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
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`coin/${coinId}`),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) =>
        createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
    }),
    getExchanges: builder.query({
      query: () => {
        createRequest("/exchanges");
      },
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
  useGetExchangesQuery,
} = cryptoApi;

import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({ baseUrl: "http://localhost:4000" });//récupération de nos infos back via l'url serverside

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['User'], //réqupération de la bdd qu'on veut utiliser.
  endpoints: (builder) => ({}),
});
//https://stackoverflow.com/questions/72413353/redux-toolkit-rtk-query-cors-issue
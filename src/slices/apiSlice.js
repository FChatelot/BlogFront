import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({ baseUrl: "https://shielded-eyrie-12790-2606840fb7b6.herokuapp.com" || "http://localhost:4000" });//récupération de nos infos back via l'url serverside "http://localhost:4000"

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['User'], //réqupération de la bdd qu'on veut utiliser.
  endpoints: (builder) => ({}),
});
//https://stackoverflow.com/questions/72413353/redux-toolkit-rtk-query-cors-issue
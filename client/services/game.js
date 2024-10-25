import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const gameApi = createApi({
  reducerPath: "gameApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3002/api/v1/" }),
  endpoints: (builder) => ({
    createNewGame: builder.mutation({
      query: () => ({
        url: "newgame",
        method: "POST",
        body: {},
        headers: {
          "Content-type": "application/json",
        },
      }),
    }),
    joinGame: builder.query({
      query: (gameId) => `joingame/${gameId.substring(5)}`,
    }),
  }),
});

export const { useCreateNewGameMutation, useJoinGameQuery } = gameApi;

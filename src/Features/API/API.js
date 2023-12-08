import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const API = createApi({
    reducerPath: "Auth_APi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://quicksilver.rpc.kjnodes.com/" }),
    endpoints: (builder) => ({
        // Group API's
        BlockHeight: builder.query({
            query: () => ({
                url: "block?height",
                method: "GET",
            }),
        })
    })
});

export const {
    useBlockHeightQuery,
} = API;

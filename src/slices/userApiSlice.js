import{ apiSlice } from "./apiSlice";
//c'est ici que je vais créer l'endpoint de mon front
// je vais fetch la data de mon back a mon front.
const USERS_URL="/api/users";  

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) =>({
        login : builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/auth`, //notre route dans notre api backend.
                method:"POST",
                body: data,
            }),
        }),
        register : builder.mutation({//je m'inscrit.
            query: (data) => ({
                url: `${USERS_URL}`, //notre route dans notre api backend.
                method:"POST",
                body: data,
            }),
        }),
        logout: builder.mutation({// je delete le cookie
            query:()=>({
                url:`${USERS_URL}/logout`,
                method:"POST",

            }),
        }),
        
    }),
});

export const {
    useLoginMutation,
    useLogoutMutation,
    useRegisterMutation,
             } = usersApiSlice;
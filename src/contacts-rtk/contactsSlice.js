import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://6192166f41928b00176902b2.mockapi.io/contacts",
  }),
  tagTypes: ["Contact"],
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ["Contact"],
    }),
    createContact: builder.mutation({
      query: (contactData) => ({
        url: `/contacts`,
        method: "POST",
        body: {
          content: contactData,
          name: contactData.name,
          number: contactData.number,
        },
      }),
      invalidatesTags: ["Contact"],
    }),
    deleteContact: builder.mutation({
      query: (contactId) => ({
        url: `/contacts/${contactId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Contact"],
    }),
  }),
});
export const {
  useGetContactsQuery,
  useDeleteContactMutation,
  useCreateContactMutation,
} = contactsApi;

// export const contactsApi = createApi({
//   reducerPath: "contactsApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "https://6192166f41928b00176902b2.mockapi.io/contacts",
//   }),
//
//    tagTypes: ["Posts"],
//   endpoints: (builder) => ({
//     getContacts: builder.query({
//       query: () => `/contacts`,
//
// providesTags: (result) =>
//   result
//     ? [
//         ...result.map(({ id }) => ({ type: "Posts", id })),
//         { type: "Posts", id: "LIST" },
//       ]
//     : [{ type: "Posts", id: "LIST" }],
//     }),
//     createContact: builder.mutation({
//       query: (newContact) => ({
//         url: `/contacts`,
//         method: "POST",
//         body: newContact,
//       }),

//       // invalidatesTags: [{ type: "Posts", id: "LIST" }],
//     }),
//     deleteContact: builder.mutation({
//       query: (contactId) => ({
//         url: `/contacts/${contactId}`,
//         method: "DELETE",
//       }),
//
//       // invalidatesTags: (result, error, id) => [{ type: "Posts", id }],
//     }),
//   }),
// });

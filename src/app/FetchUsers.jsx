import React from "react";
import axios from "axios";
import useSWR, { mutate } from "swr";
export default function FetchUsers() {
  const { data, isLoading, error } = useSWR(
    "/users",
    async () => {
      return (
        await axios.get(
          "https://randomuser.me/api/?results=5&inc=gender,name,location,email",
        )
      ).data.results;
    },
    {
      revalidateOnFocus: false,
      onSuccess: (data) => {
        console.log(data);
      },
      onError: () => {},
    },
  );
  return isLoading ? (
    <p>Loading users...</p>
  ) : error ? (
    <p>ERROR: {error.message}</p>
  ) : (
    <>
      <ul>
        {data.map((datum) => (
          <li key={datum.email}>
            {datum.name.first} {datum.name.last}
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          mutate("/users");
        }}
      >
        Load More
      </button>
    </>
  );
}

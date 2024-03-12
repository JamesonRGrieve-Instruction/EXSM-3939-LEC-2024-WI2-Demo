import React, { useEffect, useState } from "react";
import axios from "axios";
import useSWR, { mutate } from "swr";

export default function FetchUsers() {
  const [randomNumber, setRandomNumber] = useState(0);
  const { data, isLoading, error } = useSWR(
    "/users" + randomNumber,
    async () => {
      return (
        await axios.get(
          "https://randomuser.me/api/?results=5&inc=gender,name,location,email",
        )
      ).data.results;
    },
    {
      revalidateOnFocus: false,
      onSuccess: (data, key) => {
        console.log(key, data);
      },
      onError: () => {},
    },
  );
  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * 1000));
  }, []);
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

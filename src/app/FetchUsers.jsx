import React, { useEffect, useState } from "react";
import axios from "axios";
import useSWR, { mutate } from "swr";

export default function FetchUsers() {
  // Because SWR caches data on a key basis, in order to force it to render two data sets, I am appending a random number to the key.
  // This is not a real-world scenario and should never happen in real-world code.
  const [randomNumber, setRandomNumber] = useState(0);
  // useSWR returns 5 values, but the most common are data, isLoading and error.
  // data is self explanatory and contains the data that will be fetched.
  // isLoading is a boolean representing whether the promise is resolved.
  // error represents any errors that get thrown during the resolution of the fetcher.
  const { data, isLoading, error } = useSWR(
    // The first argument to useSWR() is the key which identifies the data in the cache.
    // Typically, you will use the URL path (minus the root URL) of the GET resource you are fetching.
    // SWR will cache this and reuse it, meaning if you use it elsewhere the data will be recycled.
    "/users" + randomNumber,
    // The second argument to useSWR() is the fetcher function. It should be asynchronous, and it should return an awaited value.
    // Do not return an unawaited promise - it will not work.
    async () => {
      return (
        await axios.get(
          "https://randomuser.me/api/?results=5&inc=gender,name,location,email",
        )
      ).data.results;
    },
    // The third (optional) argument to useSWR() is a configuration object.
    // This can also be set globally with a settings provider.
    // https://swr.vercel.app/docs/api
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
  // isLoading and error can be used to conditionally render messages and avoid errors like data.map() is not a function.
  // Those errors are common if you do not have fallback data and try to call functions like map() on data immediately,
  // before the data has actually loaded.
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
          // mutate() will force a refetch of the data at a given key (regardless of if useSWR() is in the same file).
          mutate("/users");
        }}
      >
        Load More
      </button>
    </>
  );
}

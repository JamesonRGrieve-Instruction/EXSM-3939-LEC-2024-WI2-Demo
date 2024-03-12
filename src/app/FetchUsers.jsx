import React, { useEffect, useState } from "react";
import axios from "axios";
export default function FetchUsers() {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://randomuser.me/api/?results=5&inc=gender,name,location,email",
      );
      setUserData(response.data.results);
    })();
  }, []);
  useEffect(() => {
    console.log("User Data Was Updated: ", userData);
  }, [userData]);
  return (
    <ul>
      {userData.map((datum) => (
        <li key={datum.email}>
          {datum.name.first} {datum.name.last}
        </li>
      ))}
    </ul>
  );
}

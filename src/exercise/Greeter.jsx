import React from 'react';
export default function Greeter({ name, age, profession }) {
  return <p>{`Hello ${name}, you are a ${profession} and this year you are ${age} years old!`}</p>;
}

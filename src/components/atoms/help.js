import React from 'react';

export default function Help({ msg, type }) {
  return <p className={`help is-${type}`}>{msg}</p>;
}

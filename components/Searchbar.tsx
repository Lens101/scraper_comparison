'use client';
import React, { FormEvent } from 'react';
//interactive component need use client directive.
//read more: https://nextjs.org/docs/app/building-your-application/rendering/client-components

import { useState } from 'react';

const isValidAmazonUrl = (url: string) => {};

const Searchbar = () => {
  const [searchParam, setSearchParam] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(searchParam);
  };

  return (
    <form className="flex flex-wrap gap-4 mt-12" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Product Link"
        className="searchbar-input"
        onChange={(e) => setSearchParam(e.target.value)}
      />
      <button type="submit" className="searchbar-btn">
        Search
      </button>
    </form>
  );
};

export default Searchbar;

'use client';
import React, { FormEvent } from 'react';
//interactive component need use client directive.
//read more: https://nextjs.org/docs/app/building-your-application/rendering/client-components

import { useState } from 'react';

const isValidAmazonUrl = (url: string) => {
  try {
    const parsedUrl = new URL(url);
    const hostname = parsedUrl.hostname; //https://www.amazon.co.uk/a-product-here

    if (
      hostname.includes('amazon.com') ||
      hostname.includes('amazon.') ||
      hostname.endsWith('amazon')
    ) {
      return true;
    }
  } catch (error) {
    return false;
  }
  return false;
};

const Searchbar = () => {
  const [searchParam, setSearchParam] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValidLink = isValidAmazonUrl(searchParam);
    if (!isValidLink) {
      alert('Invalid Amazon URL');
      return;
    }

    try {
      setIsLoading(true);
      //scrape the product
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="flex flex-wrap gap-4 mt-12" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Product Link"
        className="searchbar-input"
        onChange={(e) => setSearchParam(e.target.value)}
      />
      <button
        type="submit"
        className="searchbar-btn"
        disabled={searchParam === ''}
      >
        {isLoading ? 'Searching' : 'Search'}
      </button>
    </form>
  );
};

export default Searchbar;

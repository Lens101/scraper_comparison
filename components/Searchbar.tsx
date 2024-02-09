'use client';
import React from 'react';
//interactive component need use client directive.
//read more: https://nextjs.org/docs/app/building-your-application/rendering/client-components

const Searchbar = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <form className="flex flex-wrap gap-4 mt-12" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Product Link"
        className="searchbar-input"
      />
      <button type="submit" className="searchbar-btn">
        Search
      </button>
    </form>
  );
};

export default Searchbar;

import React from 'react';

const SortBySelector = ({ setSortBy }) => {
  return (
    <div>
      <button
        onClick={() => {
          setSortBy('created_at');
        }}
      >
        Date
      </button>
      {/* <button
          onClick={() => {
            setSortBy('comment_count');
          }}
        >
          Comments
        </button> */}
      <button
        onClick={() => {
          setSortBy('votes');
        }}
      >
        Votes
      </button>
    </div>
  );
};

export default SortBySelector;

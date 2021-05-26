import React, { useState } from 'react';
import { Select, MenuItem } from '@material-ui/core';

const SortOrderSelector = () => {
  const [sortBy, setSortBy] = useState('');
  const handleSortBy = (event) => {
    setSortBy(event.target.value);
    console.log(sortBy);
  };
  return (
    <div>
      <Select id="select" value={sortBy} displayEmpty onChange={handleSortBy}>
        <MenuItem value="">Sort By</MenuItem>
        <MenuItem value="created_at">Date</MenuItem>
        <MenuItem value="comment_count">Comments</MenuItem>
        <MenuItem value="votes">Votes</MenuItem>
      </Select>
    </div>
  );
};

export default SortOrderSelector;

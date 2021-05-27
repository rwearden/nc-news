import { Select, MenuItem, InputLabel } from '@material-ui/core';

const QuerySelector = ({ sortBy, setSortBy }) => {
  const handleSortBy = (event) => {
    setSortBy(event.target.value);
    // getArticles(sortBy);
  };
  return (
    <div>
      <InputLabel id="label">Sort By</InputLabel>
      <Select
        labelId="label"
        id="select"
        value={sortBy}
        displayEmpty
        onChange={handleSortBy}
      >
        <MenuItem value="created_at">Date</MenuItem>
        {/* <MenuItem value="comment_count">Comments</MenuItem> */}
        <MenuItem value="votes">Votes</MenuItem>
      </Select>
    </div>
  );
};

export default QuerySelector;

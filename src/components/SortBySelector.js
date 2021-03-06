import { Select, MenuItem, InputLabel } from '@material-ui/core';

const SortBySelector = ({ sortBy, setSortBy }) => {
  const handleSortBy = (event) => {
    setSortBy(event.target.value);
  };
  return (
    <div className="query-selector">
      <InputLabel id="label">Sort By</InputLabel>
      <Select
        labelId="label"
        id="select"
        value={sortBy}
        displayEmpty
        onChange={handleSortBy}
      >
        <MenuItem value="created_at">Date</MenuItem>
        <MenuItem value="votes">Votes</MenuItem>
      </Select>
    </div>
  );
};

export default SortBySelector;

import { Select, MenuItem, InputLabel } from '@material-ui/core';

const OrderSelector = ({ order, setOrder }) => {
  const handleOrder = (event) => {
    setOrder(event.target.value);
  };
  return (
    <div className="query-selector">
      <InputLabel id="label">Order</InputLabel>
      <Select
        labelId="label"
        id="select"
        value={order}
        displayEmpty
        onChange={handleOrder}
      >
        <MenuItem value="ASC">Ascending</MenuItem>
        {/* <MenuItem value="comment_count">Comments</MenuItem> */}
        <MenuItem value="DESC">Descending</MenuItem>
      </Select>
    </div>
  );
};

export default OrderSelector;

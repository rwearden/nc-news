import React from 'react';

const OrderSelector = ({ setOrder }) => {
  return (
    <div>
      <button
        onClick={() => {
          setOrder('ASC');
        }}
      >
        Ascending
      </button>
      <button
        onClick={() => {
          setOrder('DESC');
        }}
      >
        Descending
      </button>
    </div>
  );
};

export default OrderSelector;

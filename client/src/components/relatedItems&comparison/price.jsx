/* eslint-disable react/prop-types */
import React from 'react';

function Price({ defaultItem }) {
  if (defaultItem.sale_price === null) {
    return (
      <p className="originalPrice">{defaultItem.original_price}</p>
    );
  }
  return (
    <div>
      <p className="crossOutOriginalPrice">{defaultItem.original_price}</p>
      <p className="salePrice">{defaultItem.sale_price}</p>
    </div>
  );
}

export default Price;

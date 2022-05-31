/* eslint-disable react/prop-types */
import React from 'react';

function Price({ defaultItem }) {
  return (
    <div>
      {defaultItem.sale_price === null && <p className="originalPrice">{defaultItem.original_price}</p>}
      {defaultItem.sale_price !== null && <p className="crossOutOriginalPrice">{defaultItem.original_price}</p>}
      {defaultItem.sale_price !== null && <p className="salePrice">{defaultItem.sale_price}</p>}
    </div>
  );
}

export default Price;

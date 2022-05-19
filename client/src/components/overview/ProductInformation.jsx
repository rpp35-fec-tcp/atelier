import React from 'react';

function ProductInformation(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Category</th>
          <th>Description</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.productInfo.name}</td>
          <td>{props.productInfo.category}</td>
          <td>{props.productInfo.description}</td>
          <td>{props.productInfo.default_price}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default ProductInformation;

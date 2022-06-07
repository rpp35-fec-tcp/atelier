/* eslint-disable react/prop-types */
import React from 'react';

function TableEntry({ current, description, compared }) {
  return (
    <tr>
      <td>{current || ''}</td>
      <td className="description">{description}</td>
      <td>{compared || ''}</td>
    </tr>
  );
}

export default TableEntry;

import React from 'react';

export function TableEntry ({current, description, compared}) {
  return (
    <tr>
      <td>{current || ''}</td>
      <td className="description" >{description}</td>
      <td>{compared || ''}</td>
    </tr>
  )
}


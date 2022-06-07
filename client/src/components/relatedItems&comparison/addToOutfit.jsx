/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

function AddToOutfit({ id, addToOutfit }) {
  return (
    <div className="card" role="button" tabIndex={0} onClick={() => addToOutfit(id)}>
      <p style={{
        textAlign: 'center', paddingTop: '54%', fontSize: '30px', color: 'gray',
      }}
      >
        +
      </p>
      <p style={{ textAlign: 'center', fontSize: '20px', color: 'gray' }}>Add to OutFit List</p>
    </div>
  );
}

export default AddToOutfit;

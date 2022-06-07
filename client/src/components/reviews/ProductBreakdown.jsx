import propTypes from 'prop-types';
import React from 'react';
import CharacteristicBar from './CharacteristicBar';
import './ProductBreakdown.css';

function ProductBreakdown({ characteristics }) {
  return (
    <div className="product-breakdown">
      {['Size', 'Width', 'Comfort', 'Quality', 'Length', 'Fit'].map(
        (characteristic) => (
          characteristics[characteristic]
          && characteristics[characteristic].value
            ? (
              <div
                className="characteristic"
                key={characteristics[characteristic].id}
              >
                <div>{characteristic}</div>
                <CharacteristicBar
                  characteristic={characteristic}
                  value={Number(characteristics[characteristic].value)}
                />
              </div>
            )
            : null),
      )}
    </div>
  );
}

ProductBreakdown.defaultProps = { characteristics: {} };
ProductBreakdown.propTypes = { characteristics: propTypes.shape({}) };

export default ProductBreakdown;

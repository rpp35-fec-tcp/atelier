import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import {useState} from 'react';
import {getOneProduct, getReviews} from './getAndPost.jsx';
import {GrCheckmark} from 'react-icons/gr';
import {TableEntry} from './tableEntry.jsx';

function Compare({show, comparedProductInfo, currentProductInfo, changeShow}) {
  var cur = currentProductInfo.features;
  var com = comparedProductInfo.features;
  var combinedFeatures = [];
  var existedFeatures = new Set();

  const getFeatures = () => {
    for (var i = 0; i < cur.length; i++) {
      combinedFeatures[i] = [];
      combinedFeatures[i][0] = cur[i].feature;
      combinedFeatures[i][1] = cur[i].value;
      existedFeatures.add(cur[i].feature);
      for (var j = 0; j < com.length; j++) {
        if (com[j].feature === cur[i].feature) {
          combinedFeatures[i][2] = com[j].value;
        } else {
          combinedFeatures[i][2] = '';
        }
      }
    }
    for (var i = 0; i < com.length; i++) {
      if (!existedFeatures.has(com[i].feature)) {
        combinedFeatures[combinedFeatures.length] = [com[i].feature, '', com[i].value];
      }
    }
  }
  getFeatures();

  return (

    <div>
      <Modal show={show} onHide={changeShow} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Comparing</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <Table >
            <thead >
              <tr >
                <th className="currentTitle">{currentProductInfo.name}</th>
                <th ></th>
                <th >{comparedProductInfo.name}</th>
              </tr>
            </thead>
            <tbody>
              <TableEntry current={currentProductInfo.slogan} description='slogan' compared={comparedProductInfo.slogan} />
              <TableEntry current={currentProductInfo.description} description='description' compared={comparedProductInfo.description} />
              <TableEntry current={currentProductInfo.default_price} description='default price' compared={comparedProductInfo.default_price} />
              <TableEntry current={currentProductInfo.category} description='category' compared={comparedProductInfo.category} />
              {combinedFeatures.length > 0 && combinedFeatures.map((combine, index) => (
                <TableEntry key={index} current={(combine[1] === true && <GrCheckmark />) || combine[1]} description={combine[0]} compared={(combine[2] === true && <GrCheckmark />) || combine[2]} />
              ))}
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>changeShow()}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Compare;
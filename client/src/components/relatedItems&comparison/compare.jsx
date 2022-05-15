import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import {useState} from 'react';
import {getOneProduct, getReviews} from './getAndPost.jsx';
import {GrCheckmark} from 'react-icons/gr';

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
    console.log(combinedFeatures);
    return (
        combinedFeatures.map((combine, index) => (
          <tr key={index}>
            <td>{(combine[1] === true && <GrCheckmark />) || combine[1]}</td><td style={{fontWeight:'bold'}}>{combine[0]}</td><td>{(combine[2] === true && <GrCheckmark />) || combine[2]}</td>
          </tr>
        ))
    );
  }

  return (
    <div>
      <Modal show={show} onHide={changeShow} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Comparing</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{paddingTop: '0', overflow:'scroll', height:'400px'}}>
          <Table >
            <thead style={{position: 'sticky', top: '0', backgroundColor:'white'}}>
              <tr style={{position: 'sticky', top: '0', backgroundColor:'white'}}>
                <th >{currentProductInfo.name}</th>
                <th ></th>
                <th >{comparedProductInfo.name}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{currentProductInfo.slogan || ''}</td>
                <td style={{fontWeight:'bold'}}>slogan</td>
                <td>{comparedProductInfo.slogan || ''}</td>
              </tr>
              <tr>
                <td>{currentProductInfo.description || ''}</td>
                <td style={{fontWeight:'bold'}}>description</td>
                <td>{comparedProductInfo.description || ''}</td>
              </tr>
              <tr>
                <td>{currentProductInfo.default_price || ''}</td>
                <td style={{fontWeight:'bold'}}>default price</td>
                <td>{comparedProductInfo.default_price || ''}</td>
              </tr>
              <tr>
                <td>{currentProductInfo.category || ''}</td>
                <td style={{fontWeight:'bold'}}>category</td>
                <td>{comparedProductInfo.category || ''}</td>
              </tr>
              {getFeatures()}
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
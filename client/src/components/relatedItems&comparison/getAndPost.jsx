import $ from 'jquery';

export function getOneProduct(id, successCB) {
  $.ajax({
    type: 'GET',
    url: '/related/getOneProduct',
    contentType: 'application/json',
    data: {
      id,
    },
    headers: { 'Content-Encoding': 'gzip' },
    success: successCB,
    error: (err) => console.log(err),
  });
}

export function getRelatedProductsCombinedInfo(id, successCB) {
  $.ajax({
    type: 'GET',
    url: '/related/getRelatedProductsCombinedInfo',
    contentType: 'application/json',
    data: {
      id,
    },
    success: successCB,
    error: (err) => console.log(err),
  });
}

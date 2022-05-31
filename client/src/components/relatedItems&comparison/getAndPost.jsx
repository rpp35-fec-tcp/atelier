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

export function getOneProductStyle(id, successCB) {
  $.ajax({
    type: 'GET',
    url: '/related/getOneProductStyle',
    data: {
      id,
    },
    headers: { 'Content-Encoding': 'gzip' },
    contentType: 'application/json',
    success: successCB,
    error: (err) => console.log(err),
  });
}

export function getReviews(id, successCB) {
  $.ajax({
    type: 'GET',
    url: '/related/getReviews',
    data: {
      id,
    },
    contentType: 'application/json',
    success: successCB,
    error: (err) => console.log(err),
  });
}

export function getRelatedProducts(id, successCB) {
  $.ajax({
    type: 'GET',
    url: '/related/getRelatedProducts',
    contentType: 'application/json',
    data: {
      id,
    },
    success: successCB,
    error: (err) => console.log(err),
  });
}

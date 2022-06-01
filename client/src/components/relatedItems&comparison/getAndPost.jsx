import $ from 'jquery';

export function getOneProduct (id, successCB){
  //console.log('getOne id', id)
  $.ajax({
    type: 'GET',
    url: '/related/getOneProduct',
    contentType: 'application/json',
    data: {
      id: id
    },
    success: successCB,
    error: function(err) {
      console.log(err);
    }
  })
};

export function getOneProductStyle (id, successCB) {
  //console.log('getOneStyle id', id)
  $.ajax({
    type: 'GET',
    url: '/related/getOneProductStyle',
    data: {
      id: id
    },
    contentType: 'application/json',
    success: successCB,
    error: function(err) {
      console.log(err);
    }
  })
};
export function getReviews (id, successCB) {
  //console.log('getreviews id', id)
  $.ajax({
    type: 'GET',
    url: '/related/getReviews',
    data: {
      id: id
    },
    contentType: 'application/json',
    success: successCB,
    error: function(err) {
      console.log(err);
    }
  })
}

export function getRelatedProducts (id, successCB) {
  //console.log('getrelated id', id)
  $.ajax({
    type: 'GET',
    url: '/related/getRelatedProducts',
    contentType: 'application/json',
    data: {
      id: id
    },
    success: successCB,
    error: function(err) {
      console.log(err);
    }
  })
}
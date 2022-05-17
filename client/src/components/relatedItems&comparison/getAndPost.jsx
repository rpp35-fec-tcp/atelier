import $ from 'jquery';

export function getOneProduct (id, successCB){
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


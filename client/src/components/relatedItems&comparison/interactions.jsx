import React from 'react';
import $ from 'jquery';

export function Interaction(e, widget) {
  var d = new Date();
  var time = d.getTime() + '';
  var element = e.target.getAttribute('element');
  console.log(element)
  $.ajax({
    type: 'POST',
    url: '/related/interactions',
    data: JSON.stringify({element, widget, time}),
    contentType: 'application/json',
    success: ()=>console.log('success'),
    err: (err)=>console.log(err)
  })
}
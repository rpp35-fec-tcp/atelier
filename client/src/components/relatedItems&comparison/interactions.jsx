import $ from 'jquery';

function Interaction(e, widget) {
  const d = new Date();
  const time = `${d.getTime()}`;
  const element = e.target.getAttribute('element');
  $.ajax({
    type: 'POST',
    url: '/related/interactions',
    data: JSON.stringify({ element, widget, time }),
    contentType: 'application/json',
    success: () => console.log('success'),
    err: (err) => console.log(err),
  });
}

export default Interaction;

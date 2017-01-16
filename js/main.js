function consol(str) {
  var $cons = document.querySelector('.console');
  console.log('str: ', str);
  $cons.innerHTML = str;
}

var xhr = new XMLHttpRequest();

xhr.open('GET', 'js/phones.json', false);

xhr.send();

if (xhr.status != 200) {
  alert(xhr.status + ': ' + xhr.status);
} else {
  alert(xhr.responseText);
}

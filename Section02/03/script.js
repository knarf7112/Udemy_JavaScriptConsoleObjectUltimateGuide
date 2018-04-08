document.getElementsByTagName('h1')[0].textContent = 'console.count() ...';

window.onload = function(){

  // console.count(label)
  // Writes the number of times that count() has been invoked
  
  var label1 = 'test123';
  var label2 = 123;
  var label3 = {};

  console.count(label1); // test123: 1
  console.count(label1); // test123: 2
  console.count(label2); // 123: 1
  console.count(label3); // [object Object]: 1
  console.count(label1); // test123: 3
  console.count(label2); // 123: 2
  console.count(label3); // [object Object]: 2
  console.count(label3); // [object Object]: 3
};
document.getElementsByTagName('h1')[0].textContent = 'console.clear() ...';

window.onload = function(){

  console.log('雜訊01');
  console.log('雜訊02');
  console.log('雜訊03');
  console.log('雜訊04');
  console.log('雜訊05');

  console.clear();//清除目前console上的訊息內容

  console.log('我們需要的訊息01');
  console.log('我們需要的訊息02');

};
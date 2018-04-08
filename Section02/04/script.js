document.getElementsByTagName('h1')[0].textContent = 'console.dir() and console.dirxml()...';

window.onload = function(){

  // console.dir(object)
  // console.dirxml(object)

  var obj = { a:123, b:'abc', c:true };
  console.dirxml(obj); //
  console.dir(obj);    //

  console.dirxml(document.body); // 會輸出呈現xml的部分而已,即node tag和內容(不會顯示詳細的物件屬性)
  console.dir(document.body); // 會輸出整個JavaScript的物件,包含物件內的所有屬性
};
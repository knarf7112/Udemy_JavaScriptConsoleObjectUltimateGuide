document.getElementsByTagName('h1')[0].textContent = 'console.assert() ...';

window.onload = function(){

    // console.assert(Assertion, ErrorMessage);
    // If the assertion is true, nothing happens.
    // If the assertion is false, throw an error message to the console.
  
    $.ajax({
      url: 'https://reqres.in/api/users',
      type: 'GET',
      success: function(response) {
        console.log(response);
        console.assert(true, 'show error from [true]?');
        console.assert(false, 'show error from [false]?');
        console.assert(response.per_page === 4, '[Error]: Item numbers per page is not true');
        /*
        Assertion failed: [Error]: Item numbers per page is not true
        */
      }
    });  
};
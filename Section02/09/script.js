document.getElementsByTagName('h1')[0].textContent = 'console.table() ...';

window.onload = function(){

    // console.table()

    var arr = [
                { name:'Test01', age:18, isDone: true },
                { name:'Test02', age:19, isDone: false },
                { name:'Test03', age:20, isDone: true },
                { name:'Test04', age:21, isDone: false },
                { name:'Test05', age:22, isDone: true }
              ];

    // show array
    console.group('show array with console.table');
    console.table(arr); 
    console.groupEnd();

    // show object
    console.group('show object with console.table');
    console.table(arr[0]);
    console.groupEnd();

    $.ajax({
        url: 'https://reqres.in/api/users',
        type: 'GET',
        success: function callback(response) {

          var users = response.data;
          console.table(users);//在console中,將數據用表格方式呈現
        }
    });

};
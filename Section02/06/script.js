document.getElementsByTagName('h1')[0].textContent = 'console.group() and console.groupCollapsed() and console.groupEnd() ...';

window.onload = function(){

    // console.group()
    // console.groupCollapsed()
    // console.groupEnd()

    $.ajax({
      url: 'https://reqres.in/api/users',
      type: 'GET',
      success: function(response) {

        var users = response.data;
        // 假設當我們只要呈現部份數據內容但要將相關的資料群組在一起時，可利用group方式
        for(var i = 0; i <users.length; i++){
            //將內容group成一個便於console顯示
            console.group('User');
            console.log(users[i].id);
            console.group('Name'); // 群組內的子群組
              console.log(users[i].first_name);
              console.log(users[i].last_name);
            console.groupEnd();
            console.log(users[i].avatar);
            console.groupEnd();
        }


        for(var i = 0; i <users.length; i++){
            //將內容group成一個便於console顯示並一開始就收合起來
            console.groupCollapsed('User');
            console.log(users[i].id);
            console.group('Name'); // 群組內的子群組
              console.log(users[i].first_name);
              console.log(users[i].last_name);
            console.groupEnd();
            console.log(users[i].avatar);
            console.groupEnd();
        }
      }
    });
};
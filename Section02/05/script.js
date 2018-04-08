document.getElementsByTagName('h1')[0].textContent = 'console.error() ...';

window.onload = function(){

    // console.error()

    $.ajax({
        url: 'test.url.co.uk',
        type: 'GET',
        error: function errCallback(errorResponse) {
          console.error(errorResponse.statusText);// 顯示異常訊息並產生stack trace方便追蹤哪個方法調用的
        }
    });

};
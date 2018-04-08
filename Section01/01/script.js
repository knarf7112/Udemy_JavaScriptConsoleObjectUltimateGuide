console.log('this is console Object ...', console);

console.log('jquery loaded?', $);

window.onload = function(){

    $.ajax({
      url: 'https://reqres.in/api/users',
      type: 'GET',
      success: function(response) {
        console.log('response', response);
        /*
        data:Array(3)
            0:{id: 1, first_name: "George", last_name: "Bluth", avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"}
            1:{id: 2, first_name: "Janet", last_name: "Weaver", avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"}
            2:{id: 3, first_name: "Emma", last_name: "Wong", avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"}
        length:3
        page:1
        per_page:3
        total:12
        total_pages:4
        */
      }
    });
};
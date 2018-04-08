document.getElementsByTagName('h1')[0].textContent = 'console.trace() ...';

window.onload = function(){

      // console.trace(object)

      //-------------------------------------------
      //example 1
      add(3); 

      function add(num) {
        if(num > 0){
            // you can pass labels and objects to trace, yoo
            console.trace('Recursion is fun:', num);// 查看每一層遞迴的參數值變化
            return num + add(num - 1);
        }
        else{
            return 0;
        }
      };

      //-------------------------------------------
      //example 2 : 可用來追蹤調用的方法
      var func1 = function(){ console.trace('test stack trace');  }
      var func2 = function(){ func1(); }
      var func3 = function(){ func2(); }

      func3(); // func3調用func2,func2調用fun1
};
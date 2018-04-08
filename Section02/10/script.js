document.getElementsByTagName('h1')[0].textContent = 'console.time() and console.timeEnd() ...';

window.onload = function(){

    // console.time(label)
    // console.timeEnd(label)

    var timerLabel = "Array initialize";
    console.time(timerLabel);
    
    var array = new Array(1000000);
    for (var i = array.length - 1; i >= 0; i--) {
      array[i] = new Object();
    }

    console.timeEnd(timerLabel);

};
document.getElementsByTagName('h1')[0].textContent = 'console.log() ...';

window.onload = function(){

    // normal log
    console.log('This is console.log()');
    

    // advanced:
    console.log('Color: %s, Number: %d, Float: %f','Red', 123456, 3.1415);
    console.log('[JavaScript Object]object: %O',document.body); // 將值格式化爲可擴展 JavaScript 對象
    console.log('[XML object]object: %o',document.body); // 將值格式化爲可擴展 DOM 元素。如同在 Elements 面板中顯示的一樣


    // advanced + CSS-Style: (用4個%c來設定每個區段的style)
    console.log('[Advanced]Color: %c%s, Number: %c%d,' + ' %cFloat:%c' + ' %f',
                 'color:red; font-weight: 700', 'Red', 
                 'font-size:2em;color: green;', 123456, 
                 'font-size:3em;color: blue;','', 
                 3.1415);
};
/*

let style_str = `
     .popup {
    width : 100px;
    height : 100px;
    background-color : grey;
    border-radius : 5px;
    box-shadow : 2px 2px 4px 4px grey;
    position :fixed;
    top : 50%;
    left : 50%;
    margin-left : -50px;
    margin-top : -50px;
    z-index : 100;  
    text-align: center;
    padding: 10px 4px;
} 
`

let head = document.querySelector("head");
let style = document.createElement("style");
head.appendChild(style)
style.innerHTML= style_str;

let popup = document.querySelector(".pop");
console.log(popup)
popup.classList.add("popup")

*/
/* In order to function, you must be connected to efood */

// Create the popup 
let style_str = `
.popup {
    width : 200px;
    height : 100px;
    border-radius : 3px;
    box-shadow : 2px 2px 4px 4px grey;
    position :fixed;
    top : 10%;
    left : 50%;
    margin-left : -100px;
    margin-top : -50px;
    z-index : 100;  
    text-align: center;
    padding: 0px 0px;
    background: white;
} 

.bar{
    height: 20px;
    border-radius : 3px 3px 0px 0px;
    background: rgb(238, 238, 238);
}

.close{
    width: 20px;
    height: inherit;
    background: rgb(247, 148, 148);
    z-index: 10;
    float: right;
    border-radius : 0px 3px 0px 0px;
}

.close:hover{
    background: red;
}

.content{
    padding: 5px 5px;
}   
} 
`

let head = document.querySelector("head");
let style = document.createElement("style");
head.appendChild(style)
style.innerHTML= style_str;

let popup = document.createElement("div");
popup.innerHTML = `
<div class="bar">
        Efood Bookmarklet
            <div class="close">✖</div>

        </div>
        <div class="content">
            <b><i>Loading.. </i></b>
        </div>
        `
console.log(popup)
popup.classList.add("popup")
document.querySelector("body").appendChild(popup)




// Open all the meals 
function myLoop() {         //  create a loop function
    return new Promise( (resolve)=>{
        setTimeout(()=> {   //  call a 3s setTimeout when the loop is called
            let btn = document.querySelector("#load-more-orders")
        
            if (!btn.classList.contains("d-none")){
                btn.click();
                myLoop().then( ()=>{
                    resolve()
                }  )
            } else {
                resolve()
            }
        }, 1000)
    } )
        
}

// Calculate the total sum
myLoop().then(()=> {
    console.log("done")
    let meals = document.querySelectorAll("li div.col-lg-1 div.mb-3")
    console.log("meals: ", meals)

    let sum=0; 
    meals.forEach( (meal)=>  
    { sum+= parseFloat(meal.textContent.replace(",",".").replace("€","") )   })
    console.log("Total Price: ", sum)
    popup.querySelector(".content").innerHTML = ` Your Total Price: <br> <i> <b> ${sum.toFixed(2)} </b> </i> <br> click to close `

})


let close_btn = document.querySelector(".close");
close_btn.addEventListener("click", ()=>{
    //popup.remove()
    console.log("removes: ", popup)
})
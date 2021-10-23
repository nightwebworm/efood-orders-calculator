/* In order to function, you must be connected to efood */


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


myLoop().then(()=> {
    console.log("done")
    let meals = document.querySelectorAll("li div.col-lg-1 div.mb-3")
    console.log("meals: ", meals)

    let sum=0; 
    meals.forEach( (meal)=>  
    { sum+= parseFloat(meal.textContent.replace(",",".").replace("€","") )   })
    console.log("Total Price: ", sum)
})


/* let head = document.querySelector("head")
let style = document.createElement("style")
head.appendChild(style)
style.textContent = ` .popup{background-color: green;}` */

let popup = document.createElement("div");
popup.style.width = "100px";
popup.style.height = "100px";
popup.style.backgroundColor = "grey"
popup.style.borderRadius = "5px"
popup.style.boxShadow = "2px 2px 4px 4px grey"
popup.style.position = "fixed";
popup.style.top = "50%";
popup.style.left = "50%";
popup.style.marginLeft = "-50px";
popup.style.marginTop = "-50px";
popup.style.zIndex = "100";
document.querySelector("body").appendChild(popup);

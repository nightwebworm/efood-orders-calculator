/* In order to function, you must be connected to efood */

// Create the popup 
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

popup.innerHTML = " Your Total Price: <br> <i> <b> Loading.. </b> </i> <br> click to close  "
popup.style.textAlign = "center";
popup.style.padding = "10px 4px"

popup.addEventListener( 'click', ()=>{
    document.querySelector("body").removeChild(popup)
})


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
    popup.innerHTML = ` Your Total Price: <br> <i> <b> ${sum.toFixed(2)} </b> </i> <br> click to close `

})



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


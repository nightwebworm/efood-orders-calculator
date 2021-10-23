/* In order to function, you must be connected to efood */

let meals = list.querySelectorAll("li div.col-lg-1 div.mb-3")

let sum=0; 
meals.forEach( (meal)=>  
{ sum+= parseFloat(meal.textContent.replace(",",".").replace("€","") )   })


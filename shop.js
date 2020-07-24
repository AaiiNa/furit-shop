 let total = 0;
 let balance = 0;
 let priceApple = 10;
 let qnApple = 0;

 let tbudget = document.getElementById("budget");
 budget = parseInt(tbudget.value);
 balance = budget;

 let showBalance = document.getElementById("balance");
 showBalance.innerHTML = balance;
 document.getElementById("total").innerHTML = total;


 function addApple() {

     if (balance < priceApple) {
         alert("YOU HAVE NOT ENOUGH CASH");
     } else {
         if (balance > priceApple) {
             qnApple = qnApple + 1;
             total = qnApple * priceApple;
             balance = budget - total;
             let quantityApple = document.getElementById("qnapple");
             quantityApple.innerHTML = qnApple;
             let showBalance = document.getElementById("balance");
             showBalance.innerHTML = balance;
             document.getElementById("total").innerHTML = total;
         } else {
             alert("Low balance");
             return false;
         }
     }
 }

 function minusApple() {
     if (qnApple > 0) {
         qnApple = qnApple - 1;
         total = total - priceApple;
         balance = budget - total;
         let quantityApple = document.getElementById("qnapple");
         quantityApple.innerHTML = qnApple;
         let showBalance = document.getElementById("balance");
         showBalance.innerHTML = balance;
         document.getElementById("total").innerHTML = total;
     } else {
         alert("Quantity can not be negative");
     }
 }
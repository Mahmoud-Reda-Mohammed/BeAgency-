var num_64   = document.querySelector(".num-64"),
    num_38   = document.querySelector(".num-38"),
    num_49   = document.querySelector(".num-49"),
    numbers  = document.querySelector(".numbers"),
    constant1 = 0,
    constant2 = 0,
    constant3 = 0
    scrollValue=0;

  

//set interval num-64
function count_64() {
    var handle = setInterval(() => { 
      var x = constant1.toLocaleString();
      num_64.innerHTML = x.toString();  
      // if already updated the endNum, stop
      if (constant1 >= 64) clearInterval(handle);
      constant1 += 1; 
    }, 20);
  }

  
  //set interval num-38
function  count_38() {
    var handle = setInterval(() => {
  
      var x = constant2.toLocaleString();
      num_38.innerHTML = x.toString();
      
      // if already updated the endNum, stop
      if (constant2 >= 38) clearInterval(handle);
      
      constant2 += 1;
    }, 20);
  }
 
  //set interval num-64
function  count_49() {
    var handle = setInterval(() => {
  
      var x = constant3.toLocaleString();
      num_49.innerHTML = x.toString();
      
      // if already updated the endNum, stop
      if (constant3 >= 49) clearInterval(handle);
      
      constant3 += 1;
    }, 20);
  }


  function count(){
    count_38();
    count_49();
    count_64();     
  }



 

  numbers.addEventListener('mouseenter', count);
  
  

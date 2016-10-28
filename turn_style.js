$(document).ready(function(){
   
//when textbox is focused
  function clear(){
    $(this).val("");
    y=1; //resets id counter for li
  }
  $("#textbox").focus(clear);
  
 //BUTTON FUNCTION
  var y = 1; //count of id for li
  //pull random number from array
    
  function $getNum(){
    // clears ul
    $("#display").empty();
    //clear inout field
    
      //create array with numbers up to input
var num = $("#textbox").val();
var array1 = [];
for(i = 1; i <= num; i++ ){
  array1.push(i);
  
};// end for loop
    
    for(var x = array1.length ; x > 0; x--){
      // create random number <= array length
    var pos = Math.floor((Math.random() * x));  
      // pull position in array
    var newNum = array1[pos];     
      
    var newLi = "";
      //create the html
      newLi += "<li id= '" + "bx" + y + "' class = 'box' ><span>" + newNum + "</span></li>";    
      
      y+=1; //adjusts id for li
     
      
      //adds new html to ul
      $("#display").append(newLi); 
      
    //delete number from array      
      array1.splice(pos,1);
    }//end 
    $("#textbox").val("Submit new number please");
  };// end button
  
    $("button").click($getNum);
  
  function handle(){   
    console.log(event.which)
    if(event.which == 13){    
      
      $getNum();  
      $("#textbox").val("");
      
    }
  };  
  document.getElementById("textbox").addEventListener("keypress", handle)
  
  //boxes disappear when clicked
  $("#display").click(function(){
    $( "ul li:nth-child(1)" ).remove();
    console.log($("#bx1.text"));
  });
  });//end document
 

  

  
  //when textbox is focusout
  /**
  $("#textbox").focusout(function(){
    $(this).val("Total number of students");
  })
  This seems to take priority**/
 
    


  
    
 
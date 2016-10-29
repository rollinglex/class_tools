var time = 0; var started = 0; var running = 0;

function startTime(){
  if(running == 0){
    running = 1
    increment();    
    document.getElementById(swButtonGo.innerHTML = "PAUSE");
    document.getElementById(swButtonGoModal.innerHTML = "PAUSE");
  } else{
    running = 0;
    document.getElementById(swButtonGo.innerHTML = "RESUME");
    document.getElementById(swButtonGoModal.innerHTML = "RESUME");
  }
};
function reset(){
  time = 0; running = 0;
  document.getElementById(swButtonGo.innerHTML = "START");
  document.getElementById(swButtonGoModal.innerHTML = "START");
  document.getElementById("swdisplay").innerHTML = '<span>00:00:00</span>'; 
};
function increment(){
  
  if(running == 1){  //runs Stopwatch
    setTimeout(function(){
      time++;
      var z = ":";var zs = ":0";var zm = ":0";var zh = "0";
      var seconds = Math.floor(time/10);
      var minutes = Math.floor(time/10/60);
      var hours = Math.floor(time/10/60/60);
      var mins = minutes;var secs = seconds;
      
      if(seconds > 59){secs = seconds - (Math.floor(seconds/60))* 60;
      } //keeps secs under 60
      if(minutes > 59){mins = minutes - (Math.floor(minutes/60))* 60;
      } // keeps mins under 60
      
      if (secs > 9){zs = ":";};if (mins > 9){zm = ":";};if (hours > 9){zh = ":";};
      document.getElementById("swdisplay").innerHTML = zh + hours + zm + mins + zs + secs; 
      document.getElementById("swmodal").innerHTML = zh + hours + zm + mins + zs + secs;
      increment();
      }, 100);
    } 
}; 

$( "#swButtonGo" ).click(startTime);
$("#swReset").click(reset);




//Stopwatch Modal
function modalOn(){
  $(".swmodal").css("display", "block");
};
function modalOff(){
  $(".swmodal").css("display", "none");
};

$("#fullBtnS").click(modalOn);  //open fullscreen

var modal = document.getElementById('#modal');

$("#modal").click(function() {      
          modalOff();      
  });

$( "#swButtonGoModal" ).click(function(){
    startTime()
});
$("#swResetModal").click(reset);
//END Stop Watch/////////////////////////////////////


//Start Timer
var time = 0; var started = 0; var running = 0;
var timerTime = [0,0,0,0,0,0];
var tt = timerTime; 
var tdisplay = tt[0] + "" + tt[1] + ":" + tt[2] + tt[3] + ":" + tt[4] + tt[5];
var test = tt[0] + "" + tt[1] + ":" + tt[2] + tt[3] + ":" + tt[4] + tt[5];
var pushed = 0;
var tReset = 0; //stops timer and resets
var run = 0; // for pausing
var tRunCount = 0; //to keep count when paused
var runTime = ""//kept time while paused
//For adding numbers manually
$('.numBtn').click(function(){
  tt.shift();
  tt.push(this.innerHTML);
  pushed++;
  tdisplay = tt[0] + "" + tt[1] + ":" + tt[2] + tt[3] + ":" + tt[4] + tt[5];
  document.getElementById("tmDisplay").innerHTML = tdisplay;
  document.getElementById("tmModal").innerHTML = tdisplay;
  });


function timerStart(){
  var h = ((tt[0] + tt[1]) *3600);
  var m = ((tt[2] +""+ tt[3]) * 60);
  var s = (tt[4] + "" + tt[5]);
  var countDownTime = (Number(h) + Number(m) + Number(s))-1;
  tReset = 0;
  if(run == 0 && tRunCount == 0){ //first run
    run = 1;
    countDown(countDownTime); 
    document.getElementById(timerSbtn.innerHTML = "Pause");
    document.getElementById(tmStartBtnModal.innerHTML = "Pause");
  } else if (run == 1 && tRunCount == 0) { //first pause
    run = 0;    
    tRunCount = 1;
    document.getElementById(timerSbtn.innerHTML = "Resume");
    document.getElementById(tmStartBtnModal.innerHTML = "Resume");
  } else if (run == 0 && tRunCount == 1){ //continues timer where left off at pause
    run = 1; 
    countDown(runTime);
    document.getElementById(timerSbtn.innerHTML = "Pause");
    document.getElementById(tmStartBtnModal.innerHTML = "Pause");
  } else { //secondary pause
    run = 0;
    document.getElementById(timerSbtn.innerHTML = "Resume");
    document.getElementById(tmStartBtnModal.innerHTML = "Resume");
  };
}
//Timer countdown
function countDown(count){    
   setTimeout(function(){     
     if (count == 0){         //rings bell at zero
       $("#bell").get(0).play();
       timerReset();
       
     };//bell
     
   
     if(count>-1 && tReset == 0  && run == 1){      //cycles timer      
       var hr = Math.floor(count/3600);
       var mn = Math.floor((count%3600)/60);
       var sec = Math.floor(count -hr*3600 - mn*60);
       
       if (hr<10){hr = "0" + hr;} else {hr=hr};
       if (mn<10){mn = "0" + mn;} else{mn = mn};
       if (sec<10){sec = "0" + sec;}else {sec = sec};
       count --;
       document.getElementById("tmDisplay").innerHTML = hr + ":" + mn + ":" + sec;
       document.getElementById("tmModal").innerHTML = hr + ":" + mn + ":" + sec;
       countDown(count);
       runTime = count;
       
     } //end timer count  
     
   }, 1000);
  if(count == 0 && tReset == 0){
       tt=[0,0,0,0,0,0];
     }; //resets timer at zero
};
function timerReset(){
  pushed = 0
   tt = [0,0,0,0,0,0];  
  document.getElementById("tmDisplay").innerHTML = "00:00:00";
  document.getElementById("tmModal").innerHTML = "00:00:00";
  tRunCount = 0;
  tReset = 1;
  tRunCount == 0;
  document.getElementById(timerSbtn.innerHTML = "Start");
  document.getElementById(tmStartBtnModal.innerHTML = "Start");
  run = 0
}
//timer start BTN
$("#timerSbtn").click(function(){
  if($("#tmModalCheck").prop("checked")){
    timerStart();
    $(".tmModal").css("display", "block");
    console.log("here");
  }else{
    timerStart();
  }
});
//Reset Button
$("#timerRbtn").click(timerReset);
$("#tmResetBtnModal").click(timerReset);

//Shortcut buttons
$("#min5").click(function(){
  tt = [0,0,0,5,0,0];
  tdisplay= tt[0] + "" + tt[1] + ":" + tt[2] + tt[3] + ":" + tt[4] + tt[5];
  document.getElementById("tmDisplay").innerHTML = tdisplay; 
  document.getElementById("tmModal").innerHTML = tdisplay;
})

$("#min10").click(function(){
  tt = [0,0,1,0,0,0];
  tdisplay= tt[0] + "" + tt[1] + ":" + tt[2] + tt[3] + ":" + tt[4] + tt[5];
  document.getElementById("tmDisplay").innerHTML = tdisplay; 
  document.getElementById("tmModal").innerHTML = tdisplay;
})

$("#min15").click(function(){
  tt = [0,0,1,5,0,0];
  tdisplay= tt[0] + "" + tt[1] + ":" + tt[2] + tt[3] + ":" + tt[4] + tt[5];
  document.getElementById("tmDisplay").innerHTML = tdisplay; 
  document.getElementById("tmModal").innerHTML = tdisplay;
})

$("#min20").click(function(){
  tt = [0,0,2,0,0,0];
  tdisplay= tt[0] + "" + tt[1] + ":" + tt[2] + tt[3] + ":" + tt[4] + tt[5];
  document.getElementById("tmDisplay").innerHTML = tdisplay; 
  document.getElementById("tmModal").innerHTML = tdisplay;
})

$("#min30").click(function(){
  tt = [0,0,3,0,0,0];
  tdisplay= tt[0] + "" + tt[1] + ":" + tt[2] + tt[3] + ":" + tt[4] + tt[5];
  document.getElementById("tmDisplay").innerHTML = tdisplay; 
  document.getElementById("tmModal").innerHTML = tdisplay;
})

$("#min60").click(function(){
  tt = [0,1,0,0,0,0];
  tdisplay= tt[0] + "" + tt[1] + ":" + tt[2] + tt[3] + ":" + tt[4] + tt[5];
  document.getElementById("tmDisplay").innerHTML = tdisplay; 
  document.getElementById("tmModal").innerHTML = tdisplay;
})

//End Timer

//Timer Modal

//Stopwatch Modal
function tmModalOff(){
  $(".tmModal").css("display", "none");
};

function tmModalOn(){
  $(".tmModal").css("display", "block");
};

$("#tmModalBG").click(tmModalOff); //closes Timer Modal

$("#fullBtnT").click(tmModalOn); // opens timer Modal

$("#tmStartBtnModal").click(function(){
  
  if($("#tmModalCheck").prop("checked")){
    timerStart();
    $(".tmModal").css("display", "block");
  }else{
    timerStart();
  }
});
$("#tmResetBtnModal").click(reset);


//Turn///////////////////////////////////////////////////////////
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
 
    


  
    
 


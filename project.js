
function WINNER(){
 
     
     if( ($("#1-1").text() === "x" || $("#1-1").text() === "o") && $("#1-1").text() === $("#1-2").text() && $("#1-1").text() === $("#1-3").text()  ){
        $("#title").text("WINNER");
  
            }
    
        else if( ($("#1-2").text() === "x" || $("#1-2").text() === "o") && $("#1-2").text() === $("#2-2").text() && $("#1-2").text() === $("#3-2").text()  ){
                $("#title").text("WINNER");
            
                    }
        else if( ($("#1-3").text() === "x" || $("#1-3").text() === "o")&& $("#1-3").text() === $("#2-3").text() && $("#1-3").text() === $("#3-3").text()  ){
             $("#title").text("WINNER");
                    
                            }
         else  if( ($("#2-1").text() === "x" || $("#2-1").text() === "o"  ) && $("#2-1").text() === $("#2-2").text() && $("#2-1").text() === $("#2-3").text()  ){
                                $("#title").text("WINNER");
                            
                                    }
        else if( ($("#3-1").text() === "x" || $("#3-1").text() === "o")&& $("#3-1").text() === $("#3-2").text() && $("#3-1").text() === $("#3-3").text()  ){
                                        $("#title").text("WINNER");
                                    
                                            }
        else if( ($("#1-1").text() === "x" || $("#1-1").text() === "o" ) && $("#1-1").text() === $("#2-2").text() && $("#1-1").text() === $("#3-3").text()  ){
                                                $("#title").text("WINNER");
                                            
                                                    }  
        else if( ($("#1-3").text() === "x" || $("#1-3").text() === "o") && $("#1-3").text() === $("#2-2").text() && $("#1-3").text() === $("#3-1").text()  ){
                                                        $("#title").text("");
                                                    
                                                            }
        else if( ($("#1-1").text() === "x"|| $("#1-1").text() === "0")  && $("#1-1").text() === $("#2-1").text() && $("#1-1").text() === $("#3-1").text()  ){
                                                                $("#title").text("WINNER");
                                                            
                                                                    }
                                                                                                                                
        }


$(document).ready(function(){
    var n=0;
    
    $("div").click(function(){
     
        var currentplay;
        
        if($(this).text() =="" && n%2===0){
            currentplay="x";
            n=n+1;
            
        }
        else if($(this).text() ==="" && n%2===1){
            currentplay="o";
            n=n+1;
            
        } 
        else if($(this).text() !== ""){
            currentplay=$(this).text();
        }
       
        
      $(this).text(currentplay);
      
      WINNER();  
      
     
     
    })
  $("#restart").click(function(){
   $("div").text("");
   n=0;
  })
    
   
  
})  
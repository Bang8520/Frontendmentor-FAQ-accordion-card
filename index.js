var i=0;

$(".o").hide();

$(".question, .img4").click(function(){
    var jk = $(this).attr("id");
    

    switch(jk){
        case "i1":
            if(i==0){
                console.log(jk)
                    console.log("hello MF")
                    $("img#i1").css({'transform': 'rotate(180deg)'})
                    $(".ans-q1").show();
                    i=1;
                
            }
            else{
                    console.log("hell")
                    $("img#i1").css({'transform': 'rotate(360deg)'})
                    $(".ans-q1").hide();
                    i=0;
            }
            break;
    
        case "i2":
            if(i==0){
                console.log(jk)
                    console.log("hello MF")
                    $("img#i2").css({'transform': 'rotate(180deg)'})
                    $(".ans-q2").show();
                    i=1;
                
            }
            else{
                    $("img#i2").css({'transform': 'rotate(360deg)'})
                    $(".ans-q2").hide();
                    i=0;
                    console.log("hell")
            }
            break;
    
        case "i3":
            if(i==0){
                console.log(jk)
                    console.log("hello MF")
                    $("img#i3").css({'transform': 'rotate(180deg)'})
                    $(".ans-q3").show();
                    i=1;
                
            }
            else{
                    $("img#i3").css({'transform': 'rotate(360deg)'})
                    $(".ans-q3").hide();
                    i=0;
                    console.log("hell")
            }
            break;
    
        case "i4":
            if(i==0){
                console.log(jk)
                    console.log("hello MF")
                    $("img#i4").css({'transform': 'rotate(180deg)'})
                    $(".ans-q4").show();
                    i=1;
                
            }
            else{
                    $("img#i4").css({'transform': 'rotate(-360deg)'})
                    $(".ans-q4").hide();
                    i=0;
                    console.log("hell")
            }
            break;
    
        case "i5":
            if(i==0){
                console.log(jk)
                    console.log("hello MF")
                    $("img#i5").css({'transform': 'rotate(180deg)'})
                    $(".ans-q5").show();
                    i=1;
                
            }
            else{
                    $("img#i5").css({'transform': 'rotate(360deg)'})
                    $(".ans-q5").hide();
                    i=0;
                    console.log("hell")
            }
            break;
    }
})





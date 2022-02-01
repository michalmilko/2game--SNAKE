///////////////////////// SNAKE /////////////////////////
var sirkasnake=50;
var vyskasnake=50;
var pohyb= document.getElementById("snake");


var vloz=document.getElementById("celahra");
pohyb.style.width=sirkasnake+"px";
pohyb.style.height=sirkasnake+"px";

var vstuphore=200;

var vstupstrana=50;
var rychlost=1;
var dolee, horee, lavaa, pravaa;
var poslednetlacitko;
var x,y;
var jedlokocka;
var vytor;
var fps=10;





addEventListener("keydown", pohnut);
 
function pohnut(event){
 
  
         ////////////////// TLACITKO UP ///////////////
      if(event.key=="ArrowUp" && poslednetlacitko !== "ArrowDown" && poslednetlacitko !== "ArrowUp"){
         
         
         
         
         clearInterval(dolee);
         
         poslednetlacitko=event.key;
         horee= setInterval(ide1,fps);
          
         function ide1(){
         
            
                        
                             
                             switch(vstupstrana){
                              case 0:
                                 clearInterval(lavaa);
                                 vstuphore-=rychlost;
                                 pohyb.style.top=vstuphore+"px";
                                  console.log("0");
                              break;
                              case 50:
                                 clearInterval(lavaa);
                                 vstuphore-=rychlost;
                                 pohyb.style.top=vstuphore+"px";
                                 console.log("50");
                              break;
                              case 100:
                                 clearInterval(lavaa);
                                 vstuphore-=rychlost;
                                 pohyb.style.top=vstuphore+"px";
                                console.log("100");
                              break;
                              case 150:
                                 clearInterval(lavaa);
                                 vstuphore-=rychlost;
                                 pohyb.style.top=vstuphore+"px";
                                 console.log("150");
                              break;
                              case 200:
                              console.log("200");
                              break;
                              case 250:
                              console.log("250");
                              break;
                              case 300:
                              console.log("300");
                              break;
                              case 350:
                              console.log("350");
                              break;
                              case 400:
                              console.log("400");
                              break;
                              case 450:
                              console.log("500");
                              break;
                              // default:
                              //    console.log("ahoj");  
                           }
                            //   ss();
                           if(vstuphore==-50){
                              vstuphore=500;
                           }
                          
                        };
                  
  //////////////////// TLACITKO LEFT                      
}else if(event.key=="ArrowLeft" && poslednetlacitko !== "ArrowRight" && poslednetlacitko !== "ArrowLeft"){
   
   
   
   clearInterval(pravaa);
  
   
   
   poslednetlacitko=event.key;
   lavaa= setInterval(ide3,fps);
  
   function ide3(){
     
                  switch(vstuphore){
                     case 0:
                        clearInterval(horee);
                        clearInterval(dolee);
                        vstupstrana-=rychlost;
                         pohyb.style.left=vstupstrana+"px";
                     console.log("0");
                     break;
                     case 50:
                        clearInterval(horee);
                        clearInterval(dolee);
                        vstupstrana-=rychlost;
                         pohyb.style.left=vstupstrana+"px";
                     console.log("50");
                     break;
                     case 100:
                        clearInterval(horee);
                        clearInterval(dolee);
                        vstupstrana-=rychlost;
                         pohyb.style.left=vstupstrana+"px";
                     console.log("100");
                     break;
                     case 150:
                        clearInterval(horee);
                        clearInterval(dolee);
                        vstupstrana-=rychlost;
                         pohyb.style.left=vstupstrana+"px";
                     console.log("150");
                     break;
                     case 200:
                        clearInterval(horee);
                        clearInterval(dolee);
                        vstupstrana-=rychlost;
                         pohyb.style.left=vstupstrana+"px";
                     console.log("200");
                     break;
                     case 250:
                        clearInterval(horee);
                        clearInterval(dolee);
                        vstupstrana-=rychlost;
                         pohyb.style.left=vstupstrana+"px";
                     console.log("250");
                     break;
                     case 300:
                        clearInterval(horee);
                        clearInterval(dolee);
                        vstupstrana-=rychlost;
                         pohyb.style.left=vstupstrana+"px";
                     console.log("300");
                     break;
                     case 350:
                        clearInterval(horee);
                        clearInterval(dolee);
                        vstupstrana-=rychlost;
                         pohyb.style.left=vstupstrana+"px";
                     console.log("350");
                     break;
                     case 400:
                        clearInterval(horee);
                        clearInterval(dolee);
                        vstupstrana-=rychlost;
                         pohyb.style.left=vstupstrana+"px";
                     console.log("400");
                     break;
                     case 450:
                        clearInterval(horee);
                        clearInterval(dolee);
                        vstupstrana-=rychlost;
                         pohyb.style.left=vstupstrana+"px";
                     console.log("450");
                     break;
                     // default:
                     //    console.log("ahoj");  
                  }
                  // ss();
                  
                  if(vstupstrana==0){
                  vstupstrana=500;
                  }
                  }
                              
                                       
 ///////////////// TLACITKO DOWN   ////////////////////                 
         }else if(event.key=="ArrowDown" && poslednetlacitko !== "ArrowUp" && poslednetlacitko !== "ArrowDown"){
           aktivita=true;
            clearInterval(pravaa);
            clearInterval(horee);
            clearInterval(lavaa);
           // console.log(skuska);
            poslednetlacitko=event.key;
            dolee= setInterval(ide2,fps);
              function ide2(){
              
                           vstuphore+=rychlost;
                           
                           pohyb.style.top=vstuphore+"px";
                           switch(vstuphore){
                              case 50:
                              console.log("50");
                              break;
                              case 100:
                              console.log("100");
                              break;
                              case 150:
                              console.log("150");
                              break;
                              case 200:
                              console.log("200");
                              break;
                              case 250:
                              console.log("250");
                              break;
                              case 300:
                              console.log("300");
                              break;
                              case 350:
                              console.log("350");
                              break;
                              case 400:
                              console.log("400");
                              break;
                              case 450:
                              console.log("500");
                              break;
                              // default:
                              //    console.log("ahoj");  
                           }
                        //   ss();
                        
                           if(vstuphore>=500){
                           vstuphore=0-vyskasnake;
                           }
                           }
                     
////////////////////// TLACITKO RIGHT
         }else  if(event.key=="ArrowRight" && poslednetlacitko !== "ArrowLeft" && poslednetlacitko !== "ArrowRight"){
           aktivita=false;
            clearInterval(lavaa);
           
           
            poslednetlacitko=event.key;
            pravaa= setInterval(ide4,fps);
            function ide4(){
                          
                            switch(vstuphore){
                              case 0:
                                 clearInterval(horee);
                                 clearInterval(dolee);
                                 vstupstrana+=rychlost;
                                  pohyb.style.left=vstupstrana+"px";
                              console.log("0");
                              break;
                              case 50:
                                 clearInterval(horee);
                                 clearInterval(dolee);
                                 vstupstrana+=rychlost;
                                  pohyb.style.left=vstupstrana+"px";
                              console.log("50");
                              break;
                              case 100:
                                 clearInterval(horee);
                                 clearInterval(dolee);
                                 vstupstrana+=rychlost;
                                  pohyb.style.left=vstupstrana+"px";
                              console.log("100");
                              break;
                              case 150:
                                 clearInterval(horee);
                                 clearInterval(dolee);
                                 vstupstrana+=rychlost;
                                  pohyb.style.left=vstupstrana+"px";
                              console.log("150");
                              break;
                              case 200:
                                 clearInterval(horee);
                                 clearInterval(dolee);
                                 vstupstrana+=rychlost;
                                  pohyb.style.left=vstupstrana+"px";
                              console.log("200");
                              break;
                              case 250:
                                 clearInterval(horee);
                                 clearInterval(dolee);
                                 vstupstrana+=rychlost;
                                  pohyb.style.left=vstupstrana+"px";
                              console.log("250");
                              break;
                              case 300:
                                 clearInterval(horee);
                                 clearInterval(dolee);
                                 vstupstrana+=rychlost;
                                  pohyb.style.left=vstupstrana+"px";
                              console.log("300");
                              break;
                              case 350:
                                 clearInterval(horee);
                                 clearInterval(dolee);
                                 vstupstrana+=rychlost;
                                  pohyb.style.left=vstupstrana+"px";
                              console.log("350");
                              break;
                              case 400:
                                 clearInterval(horee);
                                 clearInterval(dolee);
                                 vstupstrana+=rychlost;
                                  pohyb.style.left=vstupstrana+"px";
                              console.log("400");
                              break;
                              case 450:
                                 clearInterval(horee);
                                 clearInterval(dolee);
                                 vstupstrana+=rychlost;
                                  pohyb.style.left=vstupstrana+"px";
                              console.log("450");
                              break;
                              // default:
                              //    console.log("ahoj");  
                           }
                           // ss();
                           
                           if(vstupstrana>=500-sirkasnake){
                           vstupstrana=0-sirkasnake;
                           }
                           }
               
                        
          }  
          
      }
     
   

  
 
   // console.log(pohnut.event) ; 
   

//  trafa();    
//  function ss(){

//    var sirkakocky2 = jedlokocka.y+50;
//    var sirkakocky1 = jedlokocka.y-25;
//    var vyskakocky2 = jedlokocka.x+50;
//    var vyskakocky1 = jedlokocka.x-25;

//   if(vstupstrana>sirkakocky1 && vstupstrana<sirkakocky2 && vstuphore>vyskakocky1 && vstuphore<vyskakocky2){
//    trafa(); 
//   }
// }

  // vytvorenie jedla
// function trafa(vytor){
   
  
//    jedlokocka={
//       sirka: 50,
//       vyska: 50,
//        x: Math.ceil(Math.random()*450),
//        y: Math.ceil(Math.random()*450)
//        };
  
       
     
// vytor=document.createElement("div");
// vytor.style.background="blue";
// vytor.style.height=jedlokocka.sirka+"px";
// vytor.style.width=jedlokocka.vyska+"px";

// vloz.appendChild(vytor);
// vytor.style.position="absolute";
// vytor.style.top=jedlokocka.x+"px";
// vytor.style.left=jedlokocka.y+"px";

// }



// var test=function auto(){
//    var x=10;
//    return x;
// };
// console.log(test);
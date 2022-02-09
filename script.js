/////////////////////////////////////////////////////////
///////////////////////// SNAKE /////////////////////////
/////////////////////////////////////////////////////////

///////////////////////DEKLARACIE///////////////////////
var sirkasnake=50;
var vyskasnake=50;

var pohyb=document.getElementById("snake");
var vloz=document.getElementById("celahra");

pohyb.style.width=sirkasnake+"px";
pohyb.style.height=vyskasnake+"px";

var fps=3;
var rychlost=1;

var dolee, horee, lavaa, pravaa;
var poslednetlacitko;
var x,y;
var jedlokocka;
var vytor;
var vstuphore=200;
var vstupstrana=200;
var aktivitaupdown, aktivitaleftright;
var navratsnake=true;
var mimohry=true;


//KLAVESNICA A VOLANIE HLAVNEJ FUNKCIE
addEventListener("keydown", pohnut);
 
//HLAVNA FUNKCIA
function pohnut(event){
 
//STLACENIE UP TLACITKA
      if(event.key=="ArrowUp" && poslednetlacitko !== "ArrowDown" && poslednetlacitko !== "ArrowUp" && mimohry==true && navratsnake==true){

              //STOP INTERVAL VOLANEJ FUNKCIE PRAVA/LAVA
               clearInterval(pravaa);
               clearInterval(lavaa);
               //OZNACENIE Z KTOREJ STRANY PRICHADZA
               aktivitaupdown=true;
               //NASTAVENIE INTERVALU A VOLANIE FUNKCIE
               horee= setInterval(ide1,fps);
               //OZNACENIE POSLEDNEHO TLACITKA
               poslednetlacitko=event.key;
         //SPUSTENIE FUNKCIE-POHYB
         function ide1(){
                                 //POHYB PO SACHOVNICI
                                 switch(vstupstrana){
                                 case 0:

                                    vstuphore-=rychlost;
                                    pohyb.style.top=vstuphore+"px";   
                                    navratsnake=true;
                                 break;
                                 case 50:

                                    vstuphore-=rychlost;
                                    pohyb.style.top=vstuphore+"px";
                                    navratsnake=true;
                                 break;
                                 case 100:

                                    vstuphore-=rychlost;
                                    pohyb.style.top=vstuphore+"px";
                                    navratsnake=true;
                                 break;
                                 case 150:

                                    vstuphore-=rychlost;
                                    pohyb.style.top=vstuphore+"px";
                                    navratsnake=true;
                                 break;
                                 case 200:

                                    vstuphore-=rychlost;
                                    pohyb.style.top=vstuphore+"px";
                                    navratsnake=true;
                                 break;
                                 case 250:

                                    vstuphore-=rychlost;
                                    pohyb.style.top=vstuphore+"px";
                                    navratsnake=true;
                                 break;
                                 case 300:

                                    vstuphore-=rychlost;
                                    pohyb.style.top=vstuphore+"px";
                                    navratsnake=true;
                                 break;
                                 case 350:

                                    vstuphore-=rychlost;
                                    pohyb.style.top=vstuphore+"px";
                                    navratsnake=true;
                                 break;
                                 case 400:

                                    vstuphore-=rychlost;
                                    pohyb.style.top=vstuphore+"px";
                                    navratsnake=true;
                                 break;
                                 case 450:

                                    vstuphore-=rychlost;
                                    pohyb.style.top=vstuphore+"px";
                                    navratsnake=true;
                                 break;
                                   default:
                                      //DOTIAHNUTIE SACHOVNICE Z PREDOSLEJ STRANY
                                       if(aktivitaleftright==true){
                                          navratsnake=false;
                                       vstupstrana-=rychlost;
                                       pohyb.style.left=vstupstrana+"px";
                                       
                                    }else{
                                       navratsnake=false;
                                       vstupstrana+=rychlost;
                                       pohyb.style.left=vstupstrana+"px";
                                      
                                    }

                                 }
                          
                              // ss();
                              //AK JE SNAKE MIMO HRY - ZAKAZ KEYDOWN
                              if(vstuphore<0){

                                 mimohry=false;
                                 
                              }else{
                                 mimohry=true;
                               }
                           //VRATIT AK MIMO SACHOVNICE
                           if(vstuphore==-50){
                              vstuphore=500;
                           }
                       
                        }
                   
                    
                  
                  }

//STLACENIE LEFT TLACITKA   

      
      if(event.key=="ArrowLeft" && poslednetlacitko !== "ArrowRight" && poslednetlacitko !== "ArrowLeft" && mimohry==true && navratsnake==true){

            //STOP INTERVAL VOLANEJ FUNKCIE UP/DOWN
            clearInterval(dolee);
            clearInterval(horee);
            //OZNACENIE Z KTOREJ STRANY PRICHADZA
            aktivitaleftright=true;
            //NASTAVENIE INTERVALU A VOLANIE FUNKCIE
            lavaa= setInterval(ide3,fps);
            //OZNACENIE POSLEDNEHO TLACITKA
            poslednetlacitko=event.key;
   //SPUSTENIE FUNKCIE-POHYB
   function ide3(){

                 //POHYB PO SACHOVNICI
                  switch(vstuphore){
                     case 0:
                        
                        vstupstrana-=rychlost;
                        pohyb.style.left=vstupstrana+"px";
                        navratsnake=true;
                     break;
                     case 50:
                        
                        vstupstrana-=rychlost;
                        pohyb.style.left=vstupstrana+"px";
                        navratsnake=true;
                     break;
                     case 100:
                        
                        vstupstrana-=rychlost;
                        pohyb.style.left=vstupstrana+"px";
                        navratsnake=true;
                     break;
                     case 150:
                        
                        vstupstrana-=rychlost;
                        pohyb.style.left=vstupstrana+"px";
                        navratsnake=true;
                     break;
                     case 200:
                        
                        vstupstrana-=rychlost;
                        pohyb.style.left=vstupstrana+"px";
                        navratsnake=true;
                     break;
                     case 250:
                        
                        vstupstrana-=rychlost;
                        pohyb.style.left=vstupstrana+"px";
                        navratsnake=true;
                     break;
                     case 300:
                        
                        vstupstrana-=rychlost;
                        pohyb.style.left=vstupstrana+"px";
                        navratsnake=true;
                     break;
                     case 350:
                        
                        vstupstrana-=rychlost;
                        pohyb.style.left=vstupstrana+"px";
                        navratsnake=true;
                     break;
                     case 400:
                        
                        vstupstrana-=rychlost;
                        pohyb.style.left=vstupstrana+"px";
                        navratsnake=true;
                     break;
                     case 450:
                        
                        vstupstrana-=rychlost;
                        pohyb.style.left=vstupstrana+"px";
                        navratsnake=true;
                     break;
                     default:
                        //DOTIAHNUTIE SACHOVNICE Z PREDOSLEJ STRANY
                        if(aktivitaupdown==true){
                           navratsnake=false;
                        vstuphore-=rychlost;
                        pohyb.style.top=vstuphore+"px";

                     }else{
                        navratsnake=false;
                        vstuphore+=rychlost;
                        pohyb.style.top=vstuphore+"px";
                     }

                  }

                   // ss();
                   //AK JE SNAKE MIMO HRY - ZAKAZ KEYDOWN
                  if(vstupstrana<0){
                     mimohry=false;
                     
                  }else{
                     mimohry=true;
                     
                  }
                 
                  //VRATIT AK MIMO SACHOVNICE
                  if(vstupstrana==-50){
                  vstupstrana=500;
                  }
                   
              
                  }
      
              


         }
 //STLACENIE DOWN TLACITKA                         
         if(event.key=="ArrowDown" && poslednetlacitko !== "ArrowUp" && poslednetlacitko !== "ArrowDown" && mimohry==true && navratsnake==true){

                  //STOP INTERVAL VOLANEJ FUNKCIE PRAVA/LAVA
                  clearInterval(pravaa);
                  clearInterval(lavaa);
                  //OZNACENIE Z KTOREJ STRANY PRICHADZA
                  aktivitaupdown=false;
                  //NASTAVENIE INTERVALU A VOLANIE FUNKCIE
                  dolee= setInterval(ide2,fps);
                  //OZNACENIE POSLEDNEHO TLACITKA
              poslednetlacitko=event.key;
            //SPUSTENIE FUNKCIE-POHYB
            function ide2(){

                           //POHYB PO SACHOVNICI
                           switch(vstupstrana){
                              case 0:
                              
                                 vstuphore+=rychlost;
                                 pohyb.style.top=vstuphore+"px";
                                 navratsnake=true;
                              break;
                              case 50:
                              
                                 vstuphore+=rychlost;
                                 pohyb.style.top=vstuphore+"px";
                                 navratsnake=true;
                              break;
                              case 100:
                              
                                 vstuphore+=rychlost;
                                 pohyb.style.top=vstuphore+"px";
                                 navratsnake=true;
                              break;
                              case 150:
                              
                                 vstuphore+=rychlost;
                                 pohyb.style.top=vstuphore+"px";
                                 navratsnake=true;
                              break;
                              case 200:
                              
                                 vstuphore+=rychlost;
                                 pohyb.style.top=vstuphore+"px";
                                 navratsnake=true;
                              break;
                              case 250:
                              
                                 vstuphore+=rychlost;
                                 pohyb.style.top=vstuphore+"px";
                                 navratsnake=true;
                              break;
                              case 300:
                              
                                 vstuphore+=rychlost;
                                 pohyb.style.top=vstuphore+"px";
                                 navratsnake=true;
                              break;
                              case 350:
                              
                                 vstuphore+=rychlost;
                                 pohyb.style.top=vstuphore+"px";
                                 navratsnake=true;
                              break;
                              case 400:
                              
                                 vstuphore+=rychlost;
                                 pohyb.style.top=vstuphore+"px";
                                 navratsnake=true;
                              break;
                              case 450:
                              
                                 vstuphore+=rychlost;
                                 pohyb.style.top=vstuphore+"px";
                                 navratsnake=true;
                              break;
                                 default:
                                    //DOTIAHNUTIE SACHOVNICE Z PREDOSLEJ STRANY
                                    if(aktivitaleftright==true){
                                       navratsnake=false;
                                    vstupstrana-=rychlost;
                                    pohyb.style.left=vstupstrana+"px";

                                 }else{
                                    navratsnake=false;
                                    vstupstrana+=rychlost;
                                    pohyb.style.left=vstupstrana+"px";
                                 }
                           }
                        //   ss();

                           //AK JE SNAKE MIMO HRY - ZAKAZ KEYDOWN
                           if(vstuphore>450){
                           mimohry=false;
                           
                           }else{
                           mimohry=true;
                           
                           }

                         
                           //VRATIT AK MIMO SACHOVNICE
                           if(vstuphore>=500){
                           vstuphore=0-vyskasnake;
                           }
                           }
                     
                       
                   
                  
   } 
   
   
//STLACENIE RIGHT TLACITKA
   if(event.key=="ArrowRight" && poslednetlacitko !== "ArrowLeft" && poslednetlacitko !== "ArrowRight" && mimohry==true && navratsnake==true){

                     //STOP INTERVAL VOLANEJ FUNKCIE UP/DOWN
                     clearInterval(dolee);
                     clearInterval(horee);
                     //OZNACENIE Z KTOREJ STRANY PRICHADZA
                     aktivitaleftright=false;
                     //NASTAVENIE INTERVALU A VOLANIE FUNKCIE
                     pravaa= setInterval(ide4,fps);
                     //OZNACENIE POSLEDNEHO TLACITKA
                     poslednetlacitko=event.key;

            //SPUSTENIE FUNKCIE-POHYB
            function ide4(){

                           //POHYB PO SACHOVNICI           
                            switch(vstuphore){
                               case 0:
                                 
                                 vstupstrana+=rychlost;
                                 pohyb.style.left=vstupstrana+"px";
                                 navratsnake=true;
                              break;
                              case 50:
                                 
                                 vstupstrana+=rychlost;
                                 pohyb.style.left=vstupstrana+"px";
                                 navratsnake=true;
                              break;
                              case 100:
                                 
                                 vstupstrana+=rychlost;
                                 pohyb.style.left=vstupstrana+"px";
                                 navratsnake=true;
                              break;
                              case 150:
                                 
                                 vstupstrana+=rychlost;
                                 pohyb.style.left=vstupstrana+"px";
                                 navratsnake=true;
                              break;
                              case 200:
                                 
                                 vstupstrana+=rychlost;
                                 pohyb.style.left=vstupstrana+"px";
                                 navratsnake=true;
                              break;
                              case 250:
                                 
                                 vstupstrana+=rychlost;
                                 pohyb.style.left=vstupstrana+"px";
                                 navratsnake=true;
                              break;
                              case 300:
                                 
                                 vstupstrana+=rychlost;
                                 pohyb.style.left=vstupstrana+"px";
                                 navratsnake=true;
                              break;
                              case 350:
                                 
                                 vstupstrana+=rychlost;
                                 pohyb.style.left=vstupstrana+"px";
                                 navratsnake=true;
                              break;
                              case 400:
                                 
                                 vstupstrana+=rychlost;
                                 pohyb.style.left=vstupstrana+"px";
                                 navratsnake=true;
                              break;
                              case 450:
                                 
                                 vstupstrana+=rychlost;
                                 pohyb.style.left=vstupstrana+"px";
                                 navratsnake=true;
                              break;
                               default:
                                  //DOTIAHNUTIE SACHOVNICE Z PREDOSLEJ STRANY
                                 if(aktivitaupdown==true){
                                    navratsnake=false;
                                    vstuphore-=rychlost;
                                    pohyb.style.top=vstuphore+"px";

                                 }else{
                                    navratsnake=false;
                                    vstuphore+=rychlost;
                                    pohyb.style.top=vstuphore+"px";
                                 } 
                           }
                           // ss();

                           //AK JE SNAKE MIMO HRY - ZAKAZ KEYDOWN
                           if(vstupstrana>450){
                           mimohry=false;
                           
                           }else{
                           mimohry=true;
                           
                           }

                           //POHYB MIMO SACHOVNICE
                           if(vstupstrana>=500){
                           vstupstrana=0-sirkasnake;
                           }
                           }
                         
                           
          }  
         }     
      
         

         
   

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
trafa();
function trafa(){
   
  
   jedlokocka={
      sirka: 50,
      vyska: 50,
       x: Math.floor(Math.random() * 10),
       y: Math.floor(Math.random() * 10)
       };
  console.log(jedlokocka.x + " " +jedlokocka.y);
       
     
vytor=document.createElement("div");
vytor.style.background="blue";
vytor.style.height=jedlokocka.sirka+"px";
vytor.style.width=jedlokocka.vyska+"px";

vloz.appendChild(vytor);
vytor.style.position="absolute";
vytor.style.top=(jedlokocka.x * 50)+"px";
vytor.style.left=(jedlokocka.y * 50)+"px";

}




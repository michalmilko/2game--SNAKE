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

//VYTVORENIE JEDLA
var vytor=document.createElement("div");
vloz.appendChild(vytor);
//VYTVORENIE CHVOSTU SNAKE
var chvost=document.createElement("div");
vloz.appendChild(chvost);

//RYCHLOST SNKAE
var fps=60;
var rychlost=1;

var dolee, horee, lavaa, pravaa;
var poslednetlacitko;
var x,y,x1,y1;
var jedlokocka;
var jedlokocka1;
var chvost;
var aktivitaupdown, aktivitaleftright;
var navratsnake=true;
var mimohry=true;
var novakockatop;
var novakockaleft;
var novakockatop1;
var novakockaleft1;
var pozicia=[200,200];


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
               trafil();
         
            
                                 //POHYB PO SACHOVNICI
                                 switch(pozicia[1]){
                                 case 0:
                                    pohybup();
                                 break;
                                 case 50:
                                    pohybup();
                                 break;
                                 case 100:
                                    pohybup();
                                 break;
                                 case 150:
                                    pohybup();
                                 break;
                                 case 200:
                                    pohybup();
                                 break;
                                 case 250:
                                    pohybup();
                                 break;
                                 case 300:
                                    pohybup();
                                 break;
                                 case 350:
                                    pohybup();
                                 break;
                                 case 400:
                                    pohybup();
                                 break;
                                 case 450:
                                    pohybup();
                                 break;
                                   default:
                                      //DOTIAHNUTIE SACHOVNICE Z PREDOSLEJ STRANY
                                       if(aktivitaleftright==true){
                                          navratsnake=false;
                                       pozicia[1]-=rychlost;
                                       pohyb.style.left=pozicia[1]+"px";
                                       pozicia[3]-=rychlost;
                                       chvost.style.top=pozicia[2]-50+"px"; 
                                       
                                    }else{
                                       navratsnake=false;
                                       pozicia[1]+=rychlost;
                                       pohyb.style.left=pozicia[1]+"px";
                                       
                                      
                                    }

                                 }
                          
                             
                              //AK JE SNAKE MIMO HRY - ZAKAZ KEYDOWN
                              if(pozicia[0]<0){
                                mimohry=false;
                              }else{
                                 mimohry=true;
                               }

                              //VRATIT AK MIMO SACHOVNICE
                              if(pozicia[0]==-50){
                                 pozicia[0]=500;
                              }
                              if(pozicia[2]==-50){
                                 pozicia[2]=500;
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
     
      trafil();
      
                 //POHYB PO SACHOVNICI
                  switch(pozicia[0]){
                     case 0:
                        pohybleft();
                     break;
                     case 50:
                        pohybleft();
                     break;
                     case 100:
                        pohybleft();
                     break;
                     case 150:
                        pohybleft();
                     break;
                     case 200:
                        pohybleft();
                     break;
                     case 250:
                        pohybleft();
                     break;
                     case 300:
                        pohybleft();
                     break;
                     case 350:
                        pohybleft();
                     break;
                     case 400:
                        pohybleft();
                     break;
                     case 450:
                        pohybleft();
                     break;
                     default:
                        //DOTIAHNUTIE SACHOVNICE Z PREDOSLEJ STRANY
                        if(aktivitaupdown==true){
                           navratsnake=false;
                        pozicia[0]-=rychlost;
                        pohyb.style.top=pozicia[0]+"px";
                        pozicia[2]-=rychlost;
                        chvost.style.top=pozicia[2]-50+"px";

                     }else{
                        navratsnake=false;
                        pozicia[0]+=rychlost;
                        pohyb.style.top=pozicia[0]+"px";
                     }

                  }

                    
                   //AK JE SNAKE MIMO HRY - ZAKAZ KEYDOWN
                  if(pozicia[1]<0){
                     mimohry=false;
                     
                  }else{
                     mimohry=true;
                     
                  }
                 
                  //VRATIT AK MIMO SACHOVNICE
                  if(pozicia[1]==-50){
                  pozicia[1]=500;
                  }
                  if(pozicia[3]==-50){
                     pozicia[3]=500;
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
             
               trafil();
                           //POHYB PO SACHOVNICI
                           switch(pozicia[1]){
                              case 0:
                                 pohybdown();
                              break;
                              case 50:
                                 pohybdown();
                              break;
                              case 100:
                                 pohybdown();
                              break;
                              case 150:
                                 pohybdown();
                              break;
                              case 200:
                                 pohybdown();
                              break;
                              case 250:
                                 pohybdown();
                              break;
                              case 300:
                                 pohybdown();
                              break;
                              case 350:
                                 pohybdown();
                              break;
                              case 400:
                                 pohybdown();
                              break;
                              case 450:
                                 pohybdown();
                              break;
                                 default:
                                    //DOTIAHNUTIE SACHOVNICE Z PREDOSLEJ STRANY
                                    if(aktivitaleftright==true){
                                       navratsnake=false;
                                    pozicia[1]-=rychlost;
                                    pohyb.style.left=pozicia[1]+"px";

                                 }else{
                                    navratsnake=false;
                                    pozicia[1]+=rychlost;
                                    pohyb.style.left=pozicia[1]+"px";
                                 }
                           }
                         

                           //AK JE SNAKE MIMO HRY - ZAKAZ KEYDOWN
                           if(pozicia[0]>450){
                           mimohry=false;
                           
                           }else{
                           mimohry=true;
                           
                           }

                         
                           //VRATIT AK MIMO SACHOVNICE
                           if(pozicia[0]>=500){
                           pozicia[0]=0-vyskasnake;
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
               trafil();
           
                           //POHYB PO SACHOVNICI           
                            switch(pozicia[0]){
                               case 0:
                                 pohybright();
                              break;
                              case 50:
                                 pohybright();
                              break;
                              case 100:
                                 pohybright();
                              break;
                              case 150:
                                 pohybright();
                              break;
                              case 200:
                                 pohybright();
                              break;
                              case 250:
                                 pohybright();
                              break;
                              case 300:
                                 pohybright();
                              break;
                              case 350:
                                 pohybright();
                              break;
                              case 400:
                                 pohybright();
                              break;
                              case 450:
                                 pohybright();
                              break;
                               default:
                                  //DOTIAHNUTIE SACHOVNICE Z PREDOSLEJ STRANY
                                 if(aktivitaupdown==true){
                                    navratsnake=false;
                                    pozicia[0]-=rychlost;
                                    pohyb.style.top=pozicia[0]+"px";

                                 }else{
                                    navratsnake=false;
                                    pozicia[0]+=rychlost;
                                    pohyb.style.top=pozicia[0]+"px";
                                 } 
                           }
                            

                           //AK JE SNAKE MIMO HRY - ZAKAZ KEYDOWN
                           if(pozicia[1]>450){
                           mimohry=false;
                           
                           }else{
                           mimohry=true;
                           
                           }

                           //POHYB MIMO SACHOVNICE
                           if(pozicia[1]>=500){
                           pozicia[1]=0-sirkasnake;
                           }
                           }
                       
          }  
         }    

// MOTOR POHYBU SNAKE
function pohybup(){
   pozicia[0]-=rychlost;
   pohyb.style.top=pozicia[0]+"px"; 
   pozicia[2]-=rychlost;
   chvost.style.top=pozicia[2]+"px"; 
   navratsnake=true; 
   console.log("0"+" "+ pozicia[0]);
       console.log("1"+" "+ pozicia[1]);
       console.log("2"+" "+ pozicia[2]);
       console.log("3"+" "+ pozicia[3]);
}        
function pohybdown(){
   pozicia[0]+=rychlost;
   pohyb.style.top=pozicia[0]+"px";
   
   navratsnake=true;
   console.log("0"+" "+ pozicia[0]);
       console.log("1"+" "+ pozicia[1]);
       console.log("2"+" "+ pozicia[2]);
       console.log("3"+" "+ pozicia[3]);
} 
function pohybleft(){
   pozicia[1]-=rychlost;
   pohyb.style.left=pozicia[1]+"px";
   pozicia[3]-=rychlost;
   chvost.style.left=pozicia[3]+50+"px";
   navratsnake=true;
}  
function pohybright(){
   pozicia[1]+=rychlost;
   pohyb.style.left=pozicia[1]+"px";
   
   navratsnake=true;
} 

 //AK SNAKE ZIJE JEDLO        
 function trafil(){
   
      if(novakockatop==pozicia[0]+"px" && novakockaleft==pozicia[1]+"px"){
            vytvor();
            chvostik();
         }
      }

//VYTVORENIE JEDLA
function vytvor(){
    
   jedlokocka={
      sirka: 50,
      vyska: 50,
       x: Math.floor(Math.random() * 10) * 50,
       y: Math.floor(Math.random() * 10) * 50
       };

vytor.style.position="absolute";
vytor.style.background="red";
vytor.style.height=jedlokocka.sirka+"px";
vytor.style.width=jedlokocka.vyska+"px";
vytor.style.borderRadius=30+"px";

novakockatop=vytor.style.top=(jedlokocka.x)+"px";
novakockaleft=vytor.style.left=(jedlokocka.y)+"px";
}

//VYTVARANIE CHVOSTA SNAKE
function chvostik(){
   pozicia[2]=pozicia[0]+50;
   pozicia[3]=pozicia[1]+50;
   jedlokocka1={
       x1: pozicia[2],
       y1: pozicia[3]
       };
       console.log("0"+" "+ pozicia[0]);
       console.log("1"+" "+ pozicia[1]);
       console.log("2"+" "+ pozicia[2]);
       console.log("3"+" "+ pozicia[3]);
       chvost=document.createElement("div");
chvost.style.background="green";
chvost.style.height=50+"px";
chvost.style.width=50+"px";


celahra.appendChild(chvost);
chvost.style.position="absolute";
 chvost.style.top=(jedlokocka1.x1)+"px";
 chvost.style.left=(jedlokocka1.y1)+"px";

 
}






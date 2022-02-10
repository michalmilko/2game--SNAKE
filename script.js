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
var fps=3;
var rychlost=1;

var dolee, horee, lavaa, pravaa;
var poslednetlacitko;
var x,y;
var jedlokocka;
var chvostt;
var vstuphore=200;
var vstupstrana=200;
var aktivitaupdown, aktivitaleftright;
var navratsnake=true;
var mimohry=true;
var novakockatop;
var novakockaleft;
var pole=[];


 
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
      trafil();
      
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
               trafil();
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
               trafil();
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
      
 //AK SNAKE ZIJE JEDLO        
 function trafil(){
   
  if(novakockatop==vstuphore+"px" && novakockaleft==vstupstrana+"px"){
   
   vytvor();
   
   chvostik();

}
}

// vytvorenie jedla
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



// vytvaranie noveho elementu
function chvostik(){
   
pole[1]=vstupstrana;
pole[0]=vstuphore;


   console.log(pole[0] + " " + pole[1]);


   chvostt={
      sirka: 50,
      vyska: 50,
       x: pole[0],
       y: pole[1]
       };

chvost.style.position="absolute";
chvost.style.background="blue";
chvost.style.height=chvostt.sirka+"px";
chvost.style.width=chvostt.vyska+"px";


chvost.style.top=(chvostt.x)+"px";
chvost.style.left=(chvostt.y)+"px";
}

// function trafa(){
   
  
//    jedlokocka={
//       sirka: 50,
//       vyska: 50,
//        x: Math.floor(Math.random() * 10),
//        y: Math.floor(Math.random() * 10)
//        };

       
     
// vytor=document.createElement("div");
// vytor.style.background="blue";
// vytor.style.height=jedlokocka.sirka+"px";
// vytor.style.width=jedlokocka.vyska+"px";

// vloz.appendChild(vytor);
// vytor.style.position="absolute";
//  novakockatop= vytor.style.top=(jedlokocka.x * 50)+"px";
//  novakockaleft=vytor.style.left=(jedlokocka.y * 50)+"px";

// }






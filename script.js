/////////////////////////////////////////////////////////
///////////////////////// SNAKE /////////////////////////
/////////////////////////////////////////////////////////

///////////////////////DEKLARACIE///////////////////////

//VYTVORENIE HLAVICKY SNAKE//
var pohyb=document.getElementById("snake");
//VYTVORENIE POZADIA HRY//
var vloz=document.getElementById("celahra");
//SET VELKOST SNAKE HLAVICKY//
pohyb.style.width=50+"px";
pohyb.style.height=50+"px";

//VYTVORENIE JEDLA
var vytor=document.createElement("div");
vloz.appendChild(vytor);

//OTOCENIE TVARE SNAKE
//tvar= document.getElementById("snake");

//RYCHLOST SNKAE
var fps=1;
var rychlost=1;
//POLIA SNAKE
var pozicia=[200,200];
var ako=[];
//NAVRAT SANKE MIMO HRANICE MAPY
var navratsnake=true;
var mimohry=true;
//NAVYSENIE CHVOSTA PO ZJEDENI JEDLA
var navyseniechvosta=5;
//VSEOBECNE PREMENE
var dole, hore, lava, prava;
var poslednetlacitko;
var x,y;
var jedlokocka;
var chvost;
var aktivitaupdown, aktivitaleftright;
var novakockatop;
var novakockaleft;
var tvar;
var tvar;
var pohyb;
var jednorazovakocka;
var novychvost =false;

//KLAVESNICA A VOLANIE HLAVNEJ FUNKCIE
addEventListener("keydown", pohnut);
 
//HLAVNA FUNKCIA
function pohnut(event){
   
//STLACENIE UP TLACITKA
      if(event.key=="ArrowUp" && poslednetlacitko !== "ArrowDown" && poslednetlacitko !== "ArrowUp" && mimohry==true && navratsnake==true){
               //STOP INTERVAL VOLANEJ FUNKCIE PRAVA/LAVA
               clearInterval(prava);
               clearInterval(lava);
               //OZNACENIE Z KTOREJ STRANY PRICHADZA
               aktivitaupdown=true;
               //NASTAVENIE INTERVALU A VOLANIE FUNKCIE
               hore= setInterval(ide1,fps);
               //OZNACENIE POSLEDNEHO TLACITKA
               poslednetlacitko=event.key;
               //OTOCENIE TVARE SNAKE
               // tvar.style.borderTopLeftRadius = "25px";
               // tvar.style.borderTopRightRadius = "25px";
               // tvar.style.borderBottomLeftRadius = "0px";
               // tvar.style.borderBottomRightRadius = "0px";
               //VYTVARANIE CHVOSTA
               jednorazovakocka=true;
               novychvost=false;
         //SPUSTENIE FUNKCIE-POHYB
         function ide1(){
                  //TRAFIL JEDLO
                  trafil();
                  //AKTIVNY POHYB SNAKE UP
                  function pohybup(){
                     pozicia[0]-=rychlost;
                     pohyb.style.top=pozicia[0]+"px"; 
                     navratsnake=true; 
                     mazaniechvosta();
                  }  
                  //PRIDANIE CHVOSTA
                  if(novychvost==true){
                  switch(pozicia[0])
                  {
                  case 0:
                     pridajpole();
                  break;
                  case 50:
                     pridajpole();
                  break;
                  case 100:
                     pridajpole();
                  break;
                  case 150:
                     pridajpole();
                  break;
                  case 200:
                     pridajpole();
                  break;
                  case 250:
                     pridajpole();
                  break;
                  case 300:
                     pridajpole();
                  break;
                  case 350:
                     pridajpole();
                  break;
                  case 400:
                     pridajpole();
                  break;
                  case 450:
                     pridajpole();
                  break;
                  default:
                  }
                  }

                  //POHYB PO SACHOVNICI
                  switch(pozicia[1]){
                  case 0:
                     if(jednorazovakocka==true){
                        pridajpole();
                        jednorazovakocka=false;
                     }
                     novychvost=true;
                     pohybup();
                  break;
                  case 50:
                     if(jednorazovakocka==true){
                        pridajpole();
                        jednorazovakocka=false;
                     }
                     novychvost=true;
                     pohybup();
                  break;
                  case 100:
                     if(jednorazovakocka==true){
                        pridajpole();
                        jednorazovakocka=false;
                     }
                     novychvost=true;
                     pohybup();
                  break;
                  case 150:
                     if(jednorazovakocka==true){
                        pridajpole();
                        jednorazovakocka=false;
                     }
                     novychvost=true;
                     pohybup();
                  break;
                  case 200:
                     if(jednorazovakocka==true){
                        pridajpole();
                        jednorazovakocka=false;
                     }
                     novychvost=true;
                     pohybup();
                  break;
                  case 250:
                     if(jednorazovakocka==true){
                        pridajpole();
                        jednorazovakocka=false;
                     }
                     novychvost=true;
                     pohybup();
                  break;
                  case 300:
                     if(jednorazovakocka==true){
                        pridajpole();
                        jednorazovakocka=false;
                     }
                     novychvost=true;
                     pohybup();
                  break;
                  case 350:
                     if(jednorazovakocka==true){
                        pridajpole();
                        jednorazovakocka=false;
                     }
                     novychvost=true;
                     pohybup();
                  break;
                  case 400:
                     if(jednorazovakocka==true){
                        pridajpole();
                        jednorazovakocka=false;
                     }
                     novychvost=true;
                     pohybup();
                  break;
                  case 450:
                     if(jednorazovakocka==true){
                        pridajpole();
                        jednorazovakocka=false;
                        }
                     novychvost=true;
                     pohybup();
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
                  if(pozicia[0]<0){
                     mimohry=false;
                  }else{
                     mimohry=true;
                  }
                  //VRATIT AK MIMO SACHOVNICE
                  if(pozicia[0]==-50){
                     pozicia[0]=500;
                     }
                     //VYTVARANIE CHVOSTA CEZ POLE//
                     function pridajpole(){
                     ako= ako.splice(+1 * 3);
                     var naplnleft=pozicia[1];
                     var naplnup=pozicia[0];
                     //PUSNUT STARU POZICIU DO POLA PRE CHVOST
                     ako.push([naplnleft,naplnup]);
                     //CYKLUS VYTVARANIE NOVEHO CHVOSTA A ZADANIE JEHO SURADNIC
                     for(var i=0; i<ako.length;i++){
                     var chvost=document.createElement("div");
                     vloz.appendChild(chvost);
                     chvost.className.add="chvosticek";
                     chvost.style.position="absolute";
                     chvost.style.height=50+"px";
                     chvost.style.width=50+"px";
                     chvost.style.background="blue";
                     //ZADNIE SURADNIC
                     chvost.style.left=(ako[i][0])+"px";
                     chvost.style.top=(ako[i][1])+"px";
                     }
                     }    
                   }
                   }

//STLACENIE LEFT TLACITKA   
      if(event.key=="ArrowLeft" && poslednetlacitko !== "ArrowRight" && poslednetlacitko !== "ArrowLeft" && mimohry==true && navratsnake==true){
            //STOP INTERVAL VOLANEJ FUNKCIE UP/DOWN
            clearInterval(dole);
            clearInterval(hore);
            //OZNACENIE Z KTOREJ STRANY PRICHADZA
            aktivitaleftright=true;
            //NASTAVENIE INTERVALU A VOLANIE FUNKCIE
            lava= setInterval(ide3,fps);
            //OZNACENIE POSLEDNEHO TLACITKA
            poslednetlacitko=event.key;
            //OTOCENIE TVARE SNAKE
            // tvar.style.borderTopLeftRadius = "25px";
            // tvar.style.borderTopRightRadius = "0px";
            // tvar.style.borderBottomLeftRadius = "25px";
            // tvar.style.borderBottomRightRadius = "0px";
            //VYTVARANIE CHVOSTA
            jednorazovakocka=true;
            novychvost=false;
      //SPUSTENIE FUNKCIE-POHYB
      function ide3(){
                  //TRAFIL JEDLO
                  trafil();
                  //AKTIVNY POHYB SNAKE LEFT
                  function pohybleft(){
                     pozicia[1]-=rychlost;
                     pohyb.style.left=pozicia[1]+"px";
                     navratsnake=true;
                     mazaniechvosta();
                  }  
                  //PRIDANIE CHVOSTA
                  if(novychvost==true){
                  switch(pozicia[1]){
                  case 0:
                     pridajpole();
                  break;
                  case 50:
                     pridajpole();
                  break;
                  case 100:
                     pridajpole();
                  break;
                  case 150:
                     pridajpole();
                  break;
                  case 200:
                     pridajpole();
                  break;
                  case 250:
                     pridajpole();
                  break;
                  case 300:
                     pridajpole();
                  break;
                  case 350:
                     pridajpole();
                  break;
                  case 400:
                     pridajpole();
                  break;
                  case 450:
                     pridajpole();
                  break;
                  default:
                  }
                  }

                  //POHYB PO SACHOVNICI
                  switch(pozicia[0]){
                  case 0:
                     if(jednorazovakocka==true){
                        pridajpole();
                        jednorazovakocka=false;
                        }
                        novychvost=true;
                        pohybleft();
                  break;
                  case 50:
                     if(jednorazovakocka==true){
                        pridajpole();
                        jednorazovakocka=false;
                        }
                        novychvost=true;
                        pohybleft();
                  break;
                  case 100:
                     if(jednorazovakocka==true){
                        pridajpole();
                        jednorazovakocka=false;
                        }
                        novychvost=true;
                        pohybleft();
                  break;
                  case 150:
                     if(jednorazovakocka==true){
                        pridajpole();
                        jednorazovakocka=false;
                        }
                        novychvost=true;
                        pohybleft();
                  break;
                  case 200:
                     if(jednorazovakocka==true){
                        pridajpole();
                        jednorazovakocka=false;
                        }
                        novychvost=true;
                        pohybleft();
                  break;
                  case 250:
                     if(jednorazovakocka==true){
                        pridajpole();
                        jednorazovakocka=false;
                        }
                        novychvost=true;
                        pohybleft();
                  break;
                  case 300:
                     if(jednorazovakocka==true){
                        pridajpole();
                        jednorazovakocka=false;
                        }
                        novychvost=true;
                        pohybleft();
                  break;
                  case 350:
                     if(jednorazovakocka==true){
                        pridajpole();
                        jednorazovakocka=false;
                        }
                        novychvost=true;
                        pohybleft();
                  break;
                  case 400:
                     if(jednorazovakocka==true){
                        pridajpole();
                        jednorazovakocka=false;
                        }
                        novychvost=true;
                        pohybleft();
                  break;
                  case 450:
                     if(jednorazovakocka==true){
                        pridajpole();
                        jednorazovakocka=false;
                        }
                        novychvost=true;
                        pohybleft();
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
                  if(pozicia[1]<0){
                     mimohry=false;
                  }else{
                     mimohry=true;
                  }
                  //VRATIT AK MIMO SACHOVNICE
                  if(pozicia[1]==-50){
                     pozicia[1]=500;
                  }
                  //VYTVARANIE CHVOSTA CEZ POLE//
                  function pridajpole(){
                     ako= ako.splice(+1 * 3);
                     var naplnleft=pozicia[1];
                     var naplnup=pozicia[0];
                     //PUSNUT STARU POZICIU DO POLA PRE CHVOST
                     ako.push([naplnleft,naplnup]);
                     //CYKLUS VYTVARANIE NOVEHO CHVOSTA A ZADANIE JEHO SURADNIC
                     for(var i=0; i<ako.length;i++){
                     var chvost=document.createElement("div");
                     vloz.appendChild(chvost);
                     chvost.className.add="chvosticek";
                     chvost.style.position="absolute";
                     chvost.style.height=50+"px";
                     chvost.style.width=50+"px";
                     chvost.style.background="blue";
                     //ZADNIE SURADNIC
                     chvost.style.left=(ako[i][0])+"px";
                     chvost.style.top=(ako[i][1])+"px";
                     }
                     }    
                  }
                  }
 //STLACENIE DOWN TLACITKA                         
         if(event.key=="ArrowDown" && poslednetlacitko !== "ArrowUp" && poslednetlacitko !== "ArrowDown" && mimohry==true && navratsnake==true){
                  //STOP INTERVAL VOLANEJ FUNKCIE PRAVA/LAVA
                  clearInterval(prava);
                  clearInterval(lava);
                  //OZNACENIE Z KTOREJ STRANY PRICHADZA
                  aktivitaupdown=false;
                  //NASTAVENIE INTERVALU A VOLANIE FUNKCIE
                  dole= setInterval(ide2,fps);
                  //OZNACENIE POSLEDNEHO TLACITKA
                  poslednetlacitko=event.key;
                  //OTOCENIE TVARE SNAKE
                  // tvar.style.borderTopLeftRadius = "0px";
                  // tvar.style.borderTopRightRadius = "0px";
                  // tvar.style.borderBottomLeftRadius = "25px";
                  // tvar.style.borderBottomRightRadius = "25px";
                  //VYTVARANIE CHVOSTA
                  jednorazovakocka=true;
                  novychvost=false;
            //SPUSTENIE FUNKCIE-POHYB
            function ide2(){
               //TRAFIL JEDLO
               trafil();
               //AKTIVNY POHYB SNAKE DOWN
               function pohybdown(){
                  pozicia[0]+=rychlost;
                  pohyb.style.top=pozicia[0]+"px";
                  navratsnake=true;
                  mazaniechvosta();
               } 
               if(novychvost==true){
               switch(pozicia[0]){
               case 0:
                  pridajpole();
               break;
               case 50:
                  pridajpole();
               break;
               case 100:
                  pridajpole();
               break;
               case 150:
                  pridajpole();
               break;
               case 200:
                  pridajpole();
               break;
               case 250:
                  pridajpole();
               break;
               case 300:
                  pridajpole();
               break;
               case 350:
                  pridajpole();
               break;
               case 400:
                  pridajpole();
               break;
               case 450:
                  pridajpole();
               break;
               default:
               }
               }
               //POHYB PO SACHOVNICI
               switch(pozicia[1]){
               case 0:
                  if(jednorazovakocka==true){
                     pridajpole();
                     jednorazovakocka=false;
                     }
                     novychvost=true;
                     pohybdown();
               break;
               case 50:
                  if(jednorazovakocka==true){
                     pridajpole();
                     jednorazovakocka=false;
                     }
                     novychvost=true;
                     pohybdown();
               break;
               case 100:
                  if(jednorazovakocka==true){
                     pridajpole();
                     jednorazovakocka=false;
                     }
                     novychvost=true;
                     pohybdown();
               break;
               case 150:
                  if(jednorazovakocka==true){
                     pridajpole();
                     jednorazovakocka=false;
                     }
                     novychvost=true;
                     pohybdown();
               break;
               case 200:
                  if(jednorazovakocka==true){
                     pridajpole();
                     jednorazovakocka=false;
                     }
                     novychvost=true;
                     pohybdown();
               break;
               case 250:
                  if(jednorazovakocka==true){
                     pridajpole();
                     jednorazovakocka=false;
                     }
                     novychvost=true;
                     pohybdown();
               break;
               case 300:
                  if(jednorazovakocka==true){
                     pridajpole();
                     jednorazovakocka=false;
                     }
                     novychvost=true;
                     pohybdown();
               break;
               case 350:
                  if(jednorazovakocka==true){
                     pridajpole();
                     jednorazovakocka=false;
                     }
                     novychvost=true;
                     pohybdown();
               break;
               case 400:
                  if(jednorazovakocka==true){
                     pridajpole();
                     jednorazovakocka=false;
                     }
                     novychvost=true;
                     pohybdown();
               break;
               case 450:
                  if(jednorazovakocka==true){
                     pridajpole();
                     jednorazovakocka=false;
                     }
                     novychvost=true;
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
               if(pozicia[0]==550){
               pozicia[0]=-50;
               }
               //VYTVARANIE CHVOSTA CEZ POLE//
               function pridajpole(){
                  ako= ako.splice(+1 * 3);
                  var naplnleft=pozicia[1];
                  var naplnup=pozicia[0];
                  //PUSNUT STARU POZICIU DO POLA PRE CHVOST
                  ako.push([naplnleft,naplnup]);
                  //CYKLUS VYTVARANIE NOVEHO CHVOSTA A ZADANIE JEHO SURADNIC
                  for(var i=0; i<ako.length;i++){
                  var chvost=document.createElement("div");
                  vloz.appendChild(chvost);
                  chvost.className.add="chvosticek";
                  chvost.style.position="absolute";
                  chvost.style.height=50+"px";
                  chvost.style.width=50+"px";
                  chvost.style.background="blue";
                  //ZADNIE SURADNIC
                  chvost.style.left=(ako[i][0])+"px";
                  chvost.style.top=(ako[i][1])+"px";
                  }
                  }    
               }
               } 


//STLACENIE RIGHT TLACITKA
   if(event.key=="ArrowRight" && poslednetlacitko !== "ArrowLeft" && poslednetlacitko !== "ArrowRight" && mimohry==true && navratsnake==true){
                     //STOP INTERVAL VOLANEJ FUNKCIE UP/DOWN
                     clearInterval(dole);
                     clearInterval(hore);
                     //OZNACENIE Z KTOREJ STRANY PRICHADZA
                     aktivitaleftright=false;
                     //NASTAVENIE INTERVALU A VOLANIE FUNKCIE
                     prava= setInterval(ide4,fps);
                     //OZNACENIE POSLEDNEHO TLACITKA
                     poslednetlacitko=event.key;
                     //OTOCENIE TVARE SNAKE
                     // tvar.style.borderTopLeftRadius = "0px";
                     // tvar.style.borderTopRightRadius = "25px";
                     // tvar.style.borderBottomLeftRadius = "0px";
                     // tvar.style.borderBottomRightRadius = "25px";
                     //VYTVARANIE CHVOSTA
                     jednorazovakocka=true;
                     novychvost=false;
            //SPUSTENIE FUNKCIE-POHYB
            function ide4(){
                  //TRAFIL JEDLO
                  trafil();
                  //AKTIVNY POHYB SNAKE RIGHT
                  function pohybright(){
                     pozicia[1]+=rychlost;
                     pohyb.style.left=pozicia[1]+"px";
                     navratsnake=true;
                     mazaniechvosta();
                  } 
                  if(novychvost==true){
                  switch(pozicia[1]){
                  case 0:
                     pridajpole();
                  break;
                  case 50:
                     pridajpole();
                  break;
                  case 100:
                     pridajpole();
                  break;
                  case 150:
                     pridajpole();
                  break;
                  case 200:
                     pridajpole();
                  break;
                  case 250:
                     pridajpole();
                  break;
                  case 300:
                     pridajpole();
                  break;
                  case 350:
                     pridajpole();
                  break;
                  case 400:
                     pridajpole();
                  break;
                  case 450:
                     pridajpole();
                  break;
                  default:
                  }
                  }
                  //POHYB PO SACHOVNICI           
                  switch(pozicia[0]){
                  case 0:
                     if(jednorazovakocka==true){
                        pridajpole();
                        jednorazovakocka=false;
                        }
                        novychvost=true;
                        pohybright();
                  break;
                  case 50:
                     if(jednorazovakocka==true){
                        pridajpole();
                        jednorazovakocka=false;
                        }
                        novychvost=true;
                        pohybright();
                  break;
                  case 100:
                     if(jednorazovakocka==true){
                        pridajpole();
                        jednorazovakocka=false;
                        }
                        novychvost=true;
                        pohybright();
                  break;
                  case 150:
                     if(jednorazovakocka==true){
                        pridajpole();
                        jednorazovakocka=false;
                        }
                        novychvost=true;
                        pohybright();
                  break;
                  case 200:
                     if(jednorazovakocka==true){
                        pridajpole();
                        jednorazovakocka=false;
                        }
                        novychvost=true;
                        pohybright();
                  break;
                  case 250:
                     if(jednorazovakocka==true){
                        pridajpole();
                        jednorazovakocka=false;
                        }
                        novychvost=true;
                        pohybright();
                  break;
                  case 300:
                     if(jednorazovakocka==true){
                        pridajpole();
                        jednorazovakocka=false;
                        }
                        novychvost=true;
                        pohybright();
                  break;
                  case 350:
                     if(jednorazovakocka==true){
                        pridajpole();
                        jednorazovakocka=false;
                        }
                        novychvost=true;
                        pohybright();
                  break;
                  case 400:
                     if(jednorazovakocka==true){
                        pridajpole();
                        jednorazovakocka=false;
                        }
                        novychvost=true;
                        pohybright();
                  break;
                  case 450:
                     if(jednorazovakocka==true){
                        pridajpole();
                        jednorazovakocka=false;
                        }
                        novychvost=true;
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
                  if(pozicia[1]==500){
                     pozicia[1]=-50;
                  }
                  //VYTVARANIE CHVOSTA CEZ POLE//
                  function pridajpole(){
                     ako= ako.splice(+1 * 3);
                     var naplnleft=pozicia[1];
                     var naplnup=pozicia[0];
                     //PUSNUT STARU POZICIU DO POLA PRE CHVOST
                     ako.push([naplnleft,naplnup]);
                     //CYKLUS VYTVARANIE NOVEHO CHVOSTA A ZADANIE JEHO SURADNIC
                     for(var i=0; i<ako.length;i++){
                     var chvost=document.createElement("div");
                     vloz.appendChild(chvost);
                     chvost.className.add="chvosticek";
                     chvost.style.position="absolute";
                     chvost.style.height=50+"px";
                     chvost.style.width=50+"px";
                     chvost.style.background="blue";
                     //ZADNIE SURADNIC
                     chvost.style.left=(ako[i][0])+"px";
                     chvost.style.top=(ako[i][1])+"px";
                     }
                     }    
                  }
                  }  
                  }
                       
 
//AK SNAKE ZIJE JEDLO        
function trafil(){
if(novakockatop==pozicia[0]+"px" && novakockaleft==pozicia[1]+"px"){
   vytvor();
   navyseniechvosta++;
   }
}

//MAZANIE POSLEDNEHO CHVOSTA
function mazaniechvosta(){
      var ccc= document.querySelectorAll("div");

      if(ccc.length>navyseniechvosta){
       ccc[3].remove();
      } 
}
      
//VYTVORENIE JEDLA
function vytvor(){
      //NAHODNE SURADNICE
       x= Math.floor(Math.random() * 10) * 50,
       y= Math.floor(Math.random() * 10) * 50
      //VYTVORENIE JEDLA
      vytor.style.position="absolute";
      vytor.style.background="red";
      vytor.style.height=50+"px";
      vytor.style.width=50+"px";
      vytor.style.borderRadius=30+"px";
      novakockatop=vytor.style.top=(x)+"px";
      novakockaleft=vytor.style.left=(y)+"px";
      }







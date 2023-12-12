function scuberGreetingForFeet(number){
  // Write your code here!
 if (number <= 400){
    return 'This one is on me!'
 }
  else if (number > 2000 && number <=2500 ){
  return 'I will gladly take your thirty bucks.'
 }
 else {(number > 2500 )  
   return 'No can do.'
 }
 }


function ternaryCheckCity(city){
  // Write your code here!
  if (city === 'NYC'){
    return 'Ok, sounds good.'
  }
  else {(city ==='NYC')
    return 'No go.'
  }
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  if (tip === 'generous'){
    return  'Thank you so much.'
  }
  else if (tip === 'not as generous'){
    return  'Thank you.'
  } 
  else{ (tip === 'thanks for everything') 
  return 'Bye.'
  }
}
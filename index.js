let message

function scuberGreetingForFeet(height, message){
  if(height <= 400){
    message = ('This one is on me!');
      } else if (height >= 401 && height <= 2000){
        message = ('That will be twenty bucks.');
          } else if (height >=2001 && height <= 2500){
          message = ('I will gladly take your thirty bucks.');
            } else if (height >= 2501){
                message = 'No can do.';
                  }
                  return message
 }
 scuberGreetingForFeet(199);


function ternaryCheckCity(city){
  if(city === "NYC"){
    message = ('Ok, sounds good.');
  } else {
    message = ('No go.');
  }
  return message
}

function switchOnCharmFromTip(tip){
    if (tip === "generous"){
      message = ('Thank you so much.');
    } else if (tip === "not as generous"){
      message = ('Thank you.');
    } else {
        message = ('Bye.');
    }
  
  return message;
}
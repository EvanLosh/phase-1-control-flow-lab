function scuberGreetingForFeet(distanceFeet) {
  // Write your code here!
  if (distanceFeet < 400) {
    return "This one is on me!";
  }
  if ((distanceFeet > 400) && (distanceFeet < 2000)) {
    return "That will be twenty bucks.";
  }
  if ((distanceFeet > 2000) && (distanceFeet < 2500)) {
    return "I will gladly take your thirty bucks.";
  }
  if (distanceFeet > 2500) {
    return "No can do.";
  }
}

function ternaryCheckCity(destination) {
  // Write your code here!
  if (destination == "NYC") {
    return "Ok, sounds good.";
  }
  else {
    return "No go.";
  }
}

function switchOnCharmFromTip(tip) {
  // Write your code here!
  switch (tip) {
    case 'generous': return "Thank you so much.";
    case 'not as generous': return "Thank you.";
    default: return 'Bye.';
  }
}
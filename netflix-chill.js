You = {};


//a function that loops constantly asking for your consent
You.consent = function (person) {
  if (capableOfConsent(this)){
    return setInterval(consent(person), 0);
  } else {
    return false
  }
}

function capableOfConsent (person){
  if (person.age > 18 && person.sober === true && person.coerced === false){
    return true;
  } else {
    return false;
  }
}

function consent(person){
  if(confirm("do you want to have sex with " + person1)){
    return true;
  } else {
    return false
  }
}

function chill(){
  haveSex();
}

function netflixChill (person1, person2){
  watchNetflix();
  while(person1.consent(person2) && person2.consent(person1)){
    chill();
  }
}

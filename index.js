// add solution here
function theBeatlesPlay(musicians,instruments){
 var allmusicians=[]
   for (let i=0; i<musicians.length; i++){
   allmusicians.push(musicians[i] + " plays " + instruments[i]);
}
return allmusicians
}



function johnLennonFacts(facts) {
  var results = [];
  var count = 0;
  while (count < facts.length) {
    results.push(facts[count] + "!!!");
    count++;
  }
  return results;
}

function iLoveTheBeatles(num) {
    var theBeatles = [];
    do {
        theBeatles.push("I love the Beatles!");
        num++;
    } while (num < 15);
    
    return theBeatles;
}

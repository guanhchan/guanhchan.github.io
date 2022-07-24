// treasureHunt= 0

var boss = 'guanChan'



console.log("test "+boss)

const easterEgg = (click) =>{
    if(click === "flask1"){
    document.getElementById("flask1").innerHTML = " pots"
    }
}
var rainbow = "&#x1f308"
var bomb = "&#x2620"
var tree = "&#x1f332" 

// if(itemLocal === 0){

// }
let iconRand =[rainbow, bomb, tree, tree, tree, tree, tree, tree, tree]
const choices = iconRand.sort(() => Math.random() - 0.5).slice(0, 9)
 var count = 0
console.log(choices)
const gamePlay = (click) => {
  
    //var itemLocal = Math.floor(Math.random()*8)

    // var rainbow = "&#x1f308"
    // var bomb = "&#x2620"
    // var tree = "&#x1f332" 

    // if(itemLocal === 0){

    // }
    let iconRand =[rainbow, bomb, tree, tree, tree, tree, tree, tree, tree]

    // var randomLocation = {}
    // for (let i = 0; i < iconRand.length; i++) {

    //     console.log(iconRand[i]);
 

    // }

    // const arr = ["Roger", "Russell", "Clyde", "Egbert", "Clare", "Bobbie", "Simon", "Elizabeth", "Ted", "Caroline"];
    
    console.log(choices)


    // function randomNoRepeats(array) {
    //     var copy = array.slice(0);
    //     return function() {
    //       if (copy.length < 1) { copy = array.slice(0); }
    //       var index = Math.floor(Math.random() * copy.length);
    //       var item = copy[index];
    //       copy.splice(index, 1);
    //       return item;
    //     };
    //   }

    //   console.log(randomNoRepeats(iconRand))

      


    
    
    if(click === flask0) {
        document.getElementById("flask0").innerHTML = choices[0]
    } else if(click === flask1) {
        document.getElementById("flask1").innerHTML = choices[1]
    } else if(click === flask2) {
        document.getElementById("flask2").innerHTML = choices[2]
    } else if(click === flask3) {
        document.getElementById("flask3").innerHTML = choices[3]
    } else if(click === flask4) {
        document.getElementById("flask4").innerHTML = choices[4]
    } else if(click === flask5) {
        document.getElementById("flask5").innerHTML = choices[5]
    } else if(click === flask6) {
        document.getElementById("flask6").innerHTML = choices[6]
    } else if(click === flask7) {
        document.getElementById("flask7").innerHTML = choices[7]
    } else if(click === flask8) {
        document.getElementById("flask8").innerHTML = choices[8]
    } 
        count ++

        if(count===4){
            gameOver(count)
        }
}

const gameOver = (count) => {
    alert("game over")
}
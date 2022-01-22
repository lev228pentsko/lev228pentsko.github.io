class Bot{
    constructor(helth, attack){
        this.helth = helth;
        this.attack = attack;
    }
}
class Cripper extends Bot{


    startBattle(){
        document.getElementById('cripper').classList.add("anim_1")
    }
    endBattle(){
        document.getElementById('cripper').classList.remove("anim_1")
    }
}
class Steve extends Bot{

    startBattle(){
        document.getElementById('steve').classList.add("anim_2")
    }
    endBattle(){
        document.getElementById('steve').classList.remove("anim_2")
    }
}

const cripper = new Cripper(20,10);
const steve = new Steve(20, 5);

function startBattle(btn){
    if(btn.innerText == "Start"){
    cripper.startBattle();
    steve.startBattle();
    }else{
    cripper.endBattle();
    steve.endBattle();
    }
    btn.innerText = btn.innerText == "Start" ? "End" : "Start";
}

console.log(cripper);
console.log(steve);
const attackValue=10;
const monsterAttackValue=14;
const strongAttackValue=20;
const heal_Value=20;
const attackMode='Attack';
const strongAttackMode='Strong_Attack';
const Not_Used='Not Used';
const Used='Used';

let hasBonusLife=true;
let attackLog=[]



function checkUserValue(){
    const enteredValue=prompt("Enter maximum health points",'100');
    const parsedValue=parseInt(enteredValue);
    if(isNaN(parsedValue) || parsedValue<=0){
        throw{message:"Ivalid User Input!"};
    }
    return parsedValue;
}

let choosenMaxLife;

try{
    choosenMaxLife=checkUserValue();
}catch(error){
    console.log(error);
    choosenMaxLife=100;
}

let currentMonsterHealth=choosenMaxLife;
let currentPlayerHealth=choosenMaxLife;

adjustHealthBars(choosenMaxLife);

function reset(){
    currentMonsterHealth=choosenMaxLife;
    currentPlayerHealth=choosenMaxLife;
    resetGame(choosenMaxLife);
}

function endRound(mode,healValue){
    const initialPlayerHealth=currentPlayerHealth;
    const playerDamage=dealPlayerDamage(monsterAttackValue);
    currentPlayerHealth-=playerDamage;
    if(currentPlayerHealth<=0 && hasBonusLife){
        useBonusLife();
    }

    const bonusLifeStatus=()=>hasBonusLife ? Not_Used : Used;
    if(currentMonsterHealth<=0 && currentPlayerHealth>0){
        alert('You Won!');
        writeToLog(mode,currentPlayerHealth,currentMonsterHealth,healValue,'Player Won',bonusLifeStatus());
    } else if(currentPlayerHealth<=0 && currentMonsterHealth>0){
        alert('You lost!');
        writeToLog(mode,currentPlayerHealth,currentMonsterHealth,healValue,'Monster Won',bonusLifeStatus());
    }else if(currentMonsterHealth<=0 && currentPlayerHealth<=0){
        alert('You have draw!');
        writeToLog(mode,currentPlayerHealth,currentMonsterHealth,healValue,'Draw',bonusLifeStatus());
    }else{
        writeToLog(mode,currentPlayerHealth,currentMonsterHealth,healValue,'NA',bonusLifeStatus());
    }

    if(currentPlayerHealth<=0 || currentMonsterHealth<=0){
        reset();
    }
}

function attackMoster(mode){
    let maxDamage;
    if(mode===attackMode){
        maxDamage=attackValue;
    }else if(mode===strongAttackMode){
        maxDamage=strongAttackValue;
    }
    const damge=dealMonsterDamage(maxDamage);
    currentMonsterHealth-=damge;
    endRound(mode,0);
}

function attackHandler(){
    attackMoster(attackMode);
}

function strongAttackHandler(){
    attackMoster(strongAttackMode);
}

function healHandler(){
    let healValue;
    if(currentPlayerHealth>=choosenMaxLife-heal_Value){
        healValue=choosenMaxLife-currentPlayerHealth;
    }else{
        healValue=heal_Value;
    }
    increasePlayerHealth(healValue);
    currentPlayerHealth+=healValue;
    endRound('Heal',healValue);
}

function writeToLog(eventHandler,playerHealth,monsterHealth,healValue,status,bonusLife){
    const logEntry={
        event:eventHandler,
        currentPlayerHealth:playerHealth,
        currentMonsterHealth:monsterHealth,
        healPoint:healValue,
        gameStatus:status,
        bonusLifeStatus:bonusLife
    }
    attackLog.push(logEntry);
}

function logHandler(){
    console.log(attackLog);
}

function useBonusLife(){
    hasBonusLife=false;
    removeBonusLife();
    alert('You would be DEAD your bonus life is used!');
    currentPlayerHealth=initialPlayerHealth;
    setPlayerHealth(currentPlayerHealth);
}

attackBtn.addEventListener('click',attackHandler);
strongAttackBtn.addEventListener('click',strongAttackHandler);
healBtn.addEventListener('click',healHandler);
logBtn.addEventListener('click',logHandler);
const defaultResult = 0;
let currentResult = defaultResult;
let logEntries=[];

function userNumberInput(){
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator,resultBeforeCalc,calcNumber){
    const description=`${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, description);
}

function writeLog(operationPerformed,prevValue,operationNumber,newResult){
    const logEntry={
        Operation:operationPerformed,
        prevResult:prevValue,
        number:operationNumber,
        result:newResult
    }
    logEntries.push(logEntry);
    console.log(logEntries);
}

function add(){
    const enteredNumber = userNumberInput();
    const initialResult=currentResult;
    currentResult=currentResult+enteredNumber;
    createAndWriteOutput('+',initialResult,enteredNumber);
    writeLog('Add',initialResult,enteredNumber,currentResult);
}

function subtract(){
    const enteredNumber = userNumberInput();
    const initialResult=currentResult;
    currentResult=currentResult-enteredNumber;
    createAndWriteOutput('-',initialResult,enteredNumber);
    writeLog('Subtract',initialResult,enteredNumber,currentResult);
}

function multiply(){
    const enteredNumber = userNumberInput();
    const initialResult=currentResult;
    currentResult=currentResult*enteredNumber;
    createAndWriteOutput('*',initialResult,enteredNumber);
    writeLog('Multiply',initialResult,enteredNumber,currentResult);
}

function divide(){
    const enteredNumber = userNumberInput();
    const initialResult=currentResult;
    currentResult=currentResult/enteredNumber;
    createAndWriteOutput('/',initialResult,enteredNumber);
    writeLog('Divide',initialResult,enteredNumber,currentResult);
}

addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);
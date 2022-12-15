import * as fs from "fs";

export function syncReadFile(filename) {
    return fs.readFileSync(filename, 'utf-8').split(/\r?\n/);
}

const getInputPoints = (input)=>{
    switch (input) {
        case "A": return 1;
        case "B": return 2;
        case "C": return 3;
    }
}

const calculatePoints = (enemyInput, myInput, inputTypeScore) =>{
    if (myInput === "Y"){
        return (3 + inputTypeScore)
    }
    else if(myInput === "X"){
        return 0 + (enemyInput === "A" ? 3 : enemyInput === "B" ? 1 : 2);
    }
    else if(myInput === "Z"){
        return 6 + (enemyInput === "A" ? 2 : enemyInput === "B" ? 3 : 1);
    }
}

const newArr= syncReadFile('./PuzzleInput.txt');
let totalPoints= 0;
newArr.map(match => {
    //Part one obsolete
    //let transformedToEnemyValue = match.charAt(2) === "X" ? "A" :
    //   match.charAt(2) === "Y" ? "B" : "C";
    totalPoints+= calculatePoints(match.charAt(0), match.charAt(2), getInputPoints(match.charAt(0)) );
})

console.log(totalPoints);
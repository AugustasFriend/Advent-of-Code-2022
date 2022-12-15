import {syncReadFile} from "./TaskTwo.js";

const charCollection = new Map();
const list = syncReadFile('./input.txt');
const alphabet="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
for(let i = 0; i<alphabet.length; i++){
    charCollection.set(alphabet.charAt(i), i+1 );
}

const getShortestList = (firstList, secondList, thirdList)=>{
    return firstList.length < secondList.length &&
        firstList.length< thirdList.length? {shortestList: firstList, count: 1} :
        secondList.length < thirdList.length?
            {shortestList:secondList, count: 2}:
            {shortestList:thirdList, count: 3};
}

const findCommonItemType = (firstList, secondList, thirdList)=>{
    const {shortestList, count} = getShortestList(firstList, secondList, thirdList);
    let c1 = [];
    let c2 = [];
    if (count === 1){
        c1 = secondList;
        c2 = thirdList;
    }
    else if (count === 2){
        c1 = firstList;
        c2 = thirdList;
    }else{
        c1 = firstList;
        c2 = secondList;
    }
    for(let i = 0; i<shortestList.length; i++){
        if (c1.includes(shortestList.charAt(i)) &&
            c2.includes(shortestList.charAt(i))){
            return charCollection.get(shortestList.charAt(i));
        }
    }
}

let sum = 0;
for(let i = 0; i<list.length; i +=3){
    sum +=findCommonItemType(list[i], list[i+1],list[i+2] )
}
console.log(sum);

//Part one solution
// const getDividedString = (itemString) => {
//     const firstPart = itemString.substring(0, (itemString.length/2));
//     const secondPart = itemString.substring(itemString.length/2, itemString.length);
//     return {firstPart, secondPart};
// }
// const checkIfStringsContainSameChars = (firstPart, secondPart)=>{
//     let includedCharacters = "";
//     for (let i = 0; i <firstPart.length; i++){
//         for (let j = 0; j <secondPart.length; j++){
//             if (firstPart.charAt(i) == secondPart.charAt(j)
//                 && !includedCharacters.includes(firstPart.charAt(i))){
//                 includedCharacters = includedCharacters.concat(firstPart.charAt(i));
//                 sum += charCollection.get(firstPart.charAt(i));
//             }
//         }
//     }
// }

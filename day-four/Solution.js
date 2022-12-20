import {syncReadFile} from "../day-two/TaskTwo.js";

const exampleList= [
"4-6,1-34",
"31-35,20-40"]

const list = syncReadFile("input.txt");
let duplicateCount = 0;
const newArr= [];
const sortList= (list)=>{
    for(let i = 0; i<list.length; i++){
      newArr.push(getOnlyNumbersSection(list[i]));
    }
}

const getOnlyNumbersSection = (section) =>{
    const temp = section.split(",");
    const firstPart = temp[0].split("-");
    const secondPart = temp[1].split("-");
    return [firstPart, secondPart]
}

const checkIfContainsRange = (section) => {
    if(Number(section[0][0]) <= Number(section[1][0])){
        if (Number(section[0][1]) >= Number(section[1][1])){
            duplicateCount++;
            return null;
        }
    }
    if(Number(section[0][0]) >= Number(section[1][0])){
        if (Number(section[0][1]) <= Number(section[1][1])){
            duplicateCount++;
        }
    }
}

sortList(list);
console.log(newArr);
for (let i = 0; i<newArr.length; i++){
    checkIfContainsRange(newArr[i]);
}
console.log(duplicateCount)
// code your solution here
function superbowlWin(record){
    const findItems = record.find(array => array.result === "W");

if (findItems){
    return  findItems.year;
}
}
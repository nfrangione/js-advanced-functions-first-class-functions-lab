const returnFirstTwoDrivers = (array) => {
    let firstTwo = [];
    for(let i = 0; i < 2; i++) {
        firstTwo.push(array[i]);
    }
    return firstTwo;
}

const returnLastTwoDrivers = (array) => {
    let lastTwo = [];
    for (let i = array.length-1; i > array.length-3; i--) {
        lastTwo.unshift(array[i]);
    }
    return lastTwo;
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (fare) => {
    const fareMultiplier = (multiplier) => (fare * multiplier);
    return fareMultiplier;
}

const fareDoubler = (fare) => {
    return fare * 2;
}

const fareTripler = (fare) => {
    return fare * 3;
}

function selectDifferentDrivers(array, fn){
    return fn(array);
}

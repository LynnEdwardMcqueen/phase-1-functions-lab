// Code your solution in this file!
function distanceFromHqInBlocks(block) {
    if (block >= 42) {
        return block - 42;
    } else {
        return 42 - block;
    }
}

function distanceFromHqInFeet(someValue) {
    return 264 * distanceFromHqInBlocks(someValue);
}

function distanceTravelledInFeet(start, destination) {
    return (Math.abs(start - destination) * 264);
}

function calculatesFarePrice(start, destination) {
    let totalDistance = distanceTravelledInFeet(start, destination);
    if (totalDistance <= 400) {
        return 0;
    } else if (totalDistance <= 2000) {
        return (totalDistance - 400) * .02; 
    } else if (totalDistance <= 2500 ) {
        return(25);
    } else {
        return ('cannot travel that far');
    }
}
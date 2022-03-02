let totalPins = 0
class Scoring {
    pins = 0;
    getPlayerPins = () => {
        return this.pins
    }
    playerKnocked1Pin = () => {
        console.log("You hit one pin.");
        return this.pins + 1
        totalPins = totalPins + 1;
    }
    playerKnocked2Pins = () => {
        console.log("You hit two pins.");
        return this.pins + 2
        totalPins = totalPins + 2;
    }
    playerKnocked3Pins = () => {
        console.log("You hit three pins.");
        return this.pins + 3
        totalPins = totalPins + 3;
    }
    playerKnocked4Pins = () => {
        console.log("You hit four pins.");
        return this.pins + 4
        totalPins = totalPins + 4;
    }
    playerKnocked5Pins = () => {
        console.log("You hit five pins.");
        return this.pins + 5
        totalPins = totalPins + 5;
    }
    playerKnocked6Pins = () => {
        console.log("You hit six pins.");
        return this.pins + 6
        totalPins = totalPins + 6;
    }
    playerKnocked7Pins = () => {
        console.log("You hit seven pins.");
        return this.pins + 7
        totalPins = totalPins + 7;
    }
    playerKnocked8Pins = () => {
        console.log("You hit eight pins.");
        return this.pins + 8
        totalPins = totalPins + 8;
    }
    playerKnocked9Pins = () => {
        console.log("You hit nine pins.");
        return this.pins + 9
        totalPins = totalPins + 9;
    }
    playerKnocked10Pins = () => {
        console.log("You hit ten pins.");
        return this.pins + 10
        totalPins = totalPins + 10;
        alert("STRIKE!");
    }
}


module.exports = {
    Scoring
}



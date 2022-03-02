let totalPins = 0
class BowlingPlayer {
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
        return this.pins + 3
        totalPins = totalPins + 3;
    }
    playerKnocked4Pins = () => {
        return this.pins + 4
        totalPins = totalPins + 4;
    }
    playerKnocked5Pins = () => {
        return this.pins + 5
        totalPins = totalPins + 5;
    }
    playerKnocked6Pins = () => {
        return this.pins + 6
        totalPins = totalPins + 6;
    }
    playerKnocked7Pins = () => {
        return this.pins + 7
        totalPins = totalPins + 7;
    }
    playerKnocked8Pins = () => {
        return this.pins + 8
        totalPins = totalPins + 8;
    }
    playerKnocked9Pins = () => {
        return this.pins + 9
        totalPins = totalPins + 9;
    }
    playerKnocked10Pins = () => {
        return this.pins + 10
        totalPins = totalPins + 10;
    }
}


module.exports = {
    BowlingPlayer
}



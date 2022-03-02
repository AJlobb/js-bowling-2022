let totalPins = 0
class BowlingPlayer {
    pins = 0;
    getPlayerPins = () => {
        return this.pins
    }
    playerKnocked1Pin = () => {
        return this.pins + 1
    }
    playerKnocked2Pins = () => {
        return this.pins + 2
    }
    playerKnocked3Pins = () => {
        return this.pins + 3
    }
    playerKnocked4Pins = () => {
        return this.pins + 4
    }
    playerKnocked5Pins = () => {
        return this.pins + 5
    }
}


module.exports = {
    BowlingPlayer
}



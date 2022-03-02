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
    
}

module.exports = {
    BowlingPlayer
}



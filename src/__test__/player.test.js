const {
    BowlingPlayer
} = require('../player');

describe('Get player points', () => {
    it('Given a player has rolled no balls their score should be 0', () => {
        const player = new BowlingPlayer();
        expect(player.getPlayerPins()).toEqual(0)
    });
});

describe('Player Scored 1', () => {
    it('Given a player has rolled a ball and knocked 1 pin they get 1 point', () => {
        const player = new BowlingPlayer();
        expect(player.playerKnocked1Pin()).toEqual(1)
    });
});

describe('Player Scored 2', () => {
    it('Given a player has rolled a ball and knocked 1 pin they get 1 point', () => {
        const player = new BowlingPlayer();
        expect(player.playerKnocked2Pins()).toEqual(2)
    });
});
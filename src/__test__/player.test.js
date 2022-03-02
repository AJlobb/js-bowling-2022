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
    it('Given a player has rolled a ball and knocked 2 pin they get 2 point', () => {
        const player = new BowlingPlayer();
        expect(player.playerKnocked2Pins()).toEqual(2)
    });
});

describe('Player Scored 3', () => {
    it('Given a player has rolled a ball and knocked 3 pins they get 3 points', () => {
        const player = new BowlingPlayer();
        expect(player.playerKnocked3Pins()).toEqual(3)
    });
});

describe('Player Scored 4', () => {
    it('Given a player has rolled a ball and knocked 4 pins they get 4 points', () => {
        const player = new BowlingPlayer();
        expect(player.playerKnocked4Pins()).toEqual(4)
    });
});

describe('Player Scored 5', () => {
    it('Given a player has rolled a ball and knocked 5 pins they get 5 points', () => {
        const player = new BowlingPlayer();
        expect(player.playerKnocked5Pins()).toEqual(5)
    });
});

describe('Player Scored 6', () => {
    it('Given a player has rolled a ball and knocked 6 pins they get 6 points', () => {
        const player = new BowlingPlayer();
        expect(player.playerKnocked6Pins()).toEqual(6)
    });
});

describe('Player Scored 7', () => {
    it('Given a player has rolled a ball and knocked 7 pins they get 7 points', () => {
        const player = new BowlingPlayer();
        expect(player.playerKnocked7Pins()).toEqual(7)
    });
});

describe('Player Scored 8', () => {
    it('Given a player has rolled a ball and knocked 8 pins they get 8 points', () => {
        const player = new BowlingPlayer();
        expect(player.playerKnocked8Pins()).toEqual(8)
    });
});

describe('Player Scored 9', () => {
    it('Given a player has rolled a ball and knocked 9 pins they get 9 points', () => {
        const player = new BowlingPlayer();
        expect(player.playerKnocked9Pins()).toEqual(9)
    });
});

describe('Player Scored 10', () => {
    it('Given a player has rolled a ball and knocked 10 pins they get 10 points', () => {
        const player = new BowlingPlayer();
        expect(player.playerKnocked10Pins()).toEqual(10)
    });
});
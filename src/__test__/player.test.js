const {
    BowlingPlayer
} = require('../player');

describe('Get player points', () => {
    it('Given a player has rolled no balls their score should be 0', () => {
        const player = new BowlingPlayer();
        expect(player.getPlayerPoints()).toEqual(0)
    });
});
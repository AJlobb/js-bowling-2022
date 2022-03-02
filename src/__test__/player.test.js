const { Player } = require('../player')


describe('Player Name', () => {
    it('Checks that the players will have a name', () => {
        const player = new Player("Steve");
        
        expect(player.name).toEqual("Steve");
    }
    )
});

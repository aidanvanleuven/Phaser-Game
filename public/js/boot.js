var bootState = {
    create: function () {
        game.physics.startSystem(Phaser.Physics.P2JS);
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.state.start('load');
    }
};
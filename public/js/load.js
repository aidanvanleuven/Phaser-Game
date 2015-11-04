var loadState = {
    preload: function () {
        var loadingLabel = game.add.text(80, 150, 'Loading...', {font: '30px Arial', fill: '#ffffff'});
        game.load.image('sky', 'assets/sky.png');
        game.load.image('ground', 'assets/platform.png');
        game.load.image('star', 'assets/star.png');
        game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
        game.load.image('button', 'assets/button.png');
    },

    create: function () {
        game.state.start('menu');
    }
};
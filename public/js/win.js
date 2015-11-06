var winState = {
    create: function () {
        var winLabel = game.add.text(80,80, "Score: " + seconds + "." + milliseconds + " seconds", {font: '50px Arial', fill: '#ffffff'});
        var startLabel = game.add.text(80, game.world.height-150, 'Space bar: Play Again', {font: '25px Arial', fill: '#ffffff'});
        var space = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        game.input.keyboard.addKey(Phaser.Keyboard.ENTER).onDown.addOnce(submit,this);

        game.add.text(80, game.world.height-100, 'Enter: Submit Score', {font: '25px Arial', fill: '#ffffff'});

        time = Number(seconds + "." + milliseconds);
        winFunction();

        space.onDown.addOnce(this.restart,this);

    },

    restart: function () {
        game.state.start('menu');
    }
};
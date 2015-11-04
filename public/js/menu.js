var menuState = {
    create: function () {
        var nameLabel = game.add.text(150,150,'Collect the stars!', {font: '25px Arial', fill: '#ffffff'});
        var button = game.add.button(300, 400, 'button', this.start, this);
        game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).onDown.addOnce(this.start,this);
        game.add.text(345,460,'(space)', {font: '16px Arial', fill: '#ffffff'});
    },

    start: function(){
        score = 0;
        game.state.start('play');
    }
};
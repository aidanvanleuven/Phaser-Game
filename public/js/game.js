var game = new Phaser.Game(800,600, Phaser.CANVAS, 'gameDiv');


var score = 0;
var scoreText;
var timeout;
var fps;
var timer;
var milliseconds = 0;
var seconds = 0;

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);
game.state.add('win', winState);

game.state.start('boot');


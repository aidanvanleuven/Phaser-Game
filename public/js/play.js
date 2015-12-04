var playState = {
    create: function() {
        game.world.setBounds(0,0,3200, 600);
        game.time.events.loop(100, this.updateTimer, this);

        game.add.sprite(0,0, 'sky');

        platforms = game.add.group();
        platforms.enableBody = true;

        var ground = platforms.create(0, game.world.height - 64, 'ground');
        ground.scale.setTo(8,2);
        ground.body.immovable = true;
        ground.body.checkCollision.down = false;

        var ledge = platforms.create(300, 400, 'ground');
        ledge.body.immovable = true;
        ledge = platforms.create(750, 250, 'ground');
        ledge.scale.setTo(0.9,1);
        ledge.body.immovable = true;

        player = game.add.sprite(32, game.world.height - 120, 'dude');
        game.physics.arcade.enable(player);
        player.body.bounce.y = 0.1;
        player.body.gravity.y = 1000;
        player.body.collideWorldBounds = true;
        player.animations.add('left', [0,1,2,3], 10, true);
        player.animations.add('right', [5,6,7,8], 10, true);
        game.camera.follow(player);

        stars = game.add.group();
        stars.enableBody = true;
        for (var i = 0; i < 10; i ++){
            var star = stars.create(i * 100 + 150, 200, 'star');
            star.body.gravity.y = 1000;
            if (i >= 6)
            star = stars.create(i * 100 + 200, 400, 'star');
            star.body.gravity.y = 1000;
        }

        this.startTime = this.game.time.totalElapsedSeconds();
        timer = game.add.bitmapText(15,15, 'font', '0.0', 30);
        timer.fixedToCamera = true;
        fps = game.add.text(700,15, "FPS:", {font: '25px Arial', fill: '#ffffff'});
        fps.fixedToCamera = true;

        cursors = game.input.keyboard.createCursorKeys();


    },

    update: function() {
        fps.text = "FPS: " + game.time.fps;

        game.physics.arcade.collide(player, platforms);
        game.physics.arcade.collide(stars,platforms, starBounce, null, this);
        game.physics.arcade.overlap(player, stars, collectStar, null, this);

        player.body.velocity.x = 0;

        if (cursors.left.isDown){
            player.body.velocity.x = -200;
            player.animations.play('left');

        } else if (cursors.right.isDown) {
            player.body.velocity.x = 200;
            player.animations.play('right');

        } else {
            player.animations.stop();
            player.frame = 4;
        }

        if (cursors.up.isDown && player.body.touching.down) {
            player.body.velocity.y = -600;
        }

        function collectStar (player, star){
            star.kill();
            score += 10;
            if (score == 140) game.state.start('win');
        }

        function starBounce (star){
            star.body.velocity.y = -300 - game.rnd.integerInRange(50,200);
        }

    },

    updateTimer: function(){
            seconds = Math.floor(this.game.time.totalElapsedSeconds() - this.startTime);

            secondsFraction = this.game.time.totalElapsedSeconds() - this.startTime - seconds;

            milliseconds = Math.floor(secondsFraction * 10);

            timer.text = seconds + "." + milliseconds;
    },
    Win: function() {
        game.state.start('win');
    }
};
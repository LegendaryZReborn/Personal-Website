var level1State = {


  preload: function () {
        this.jumpSound = game.add.audio('jump');
		this.coinSound = game.add.audio('coin');
		this.deadSound = game.add.audio('dead');
    },
	
    create: function() { 
        
        this.cursor = game.input.keyboard.createCursorKeys();
		this.wasd = {
		  up: game.input.keyboard.addKey(Phaser.Keyboard.W),
		  down: game.input.keyboard.addKey(Phaser.Keyboard.S),
		  left: game.input.keyboard.addKey(Phaser.Keyboard.A),
		  right: game.input.keyboard.addKey(Phaser.Keyboard.D),
		};
		
		//add mobile inputs if necessary
		if (!game.device.desktop) {
			this.addMobileInputs();
		}
        
        this.player = game.add.sprite(game.width/2, (game.height/2) + 40, 'player');
		// Create the 'left' animation by looping the frames 1 and 2
		this.player.animations.add('left', [1 ,2, 3, 4, 5, 6, 7, 8], 8, true);
		// Create the 'right' animation by looping the frames 3 and 4
		this.player.animations.add('right', [10, 11, 13, 14, 15, 16, 17], 8, true);
        this.player.anchor.setTo(0.5, 0.5);
        game.physics.arcade.enable(this.player);
        this.player.body.gravity.y = 500; 
		this.resizeBody(this.player);

		
		//fireball group
		this.fireballs = game.add.group();
		this.fireballs.enableBody = true;
		this.fireballs.physicsBodyType = Phaser.Physics.ARCADE;
		this.fireballs.createMultiple(30, 'fireball');
		this.fireballs.setAll('anchor.x', 0.5);
		this.fireballs.setAll('anchor.y', 0.5);
		this.fireballs.setAll('outOfBoundsKill', true);
		this.fireballs.setAll('checkWorldBounds', true);
		this.fireballs.setAll('scale.x', 0.25);
		this.fireballs.setAll('scale.y', 0.25);
		this.fireballs.setAll('body.bounce.x', 1);
		this.fireballs.setAll('body.bounce.y', 1); 
		this.fireballs.setAll('body.allowGravity', true );
		this.fireballs.setAll('body.gravity.y', 100 );
		this.fireballs.setAll('body.width', 16);
		this.fireballs.setAll('body.height', 16);
		this.fireTime = 0;
		
        this.createWorld();

        this.coin = game.add.sprite(60, 140, 'diamond');
        game.physics.arcade.enable(this.coin); 
        this.coin.anchor.setTo(0.5, 0.5);

        this.scoreLabel = game.add.text(30, 30, 'score: 0', { font: '18px Arial', fill: '#ffffff' });
         game.global.score = 0;
		
        this.enemies = game.add.group();
        this.enemies.enableBody = true;
        this.enemies.createMultiple(10, 'enemy');
		this.enemies.forEach(this.setESize, this);
		
        game.time.events.loop(2200, this.addEnemy, this);
	 
		this.bgm = game.add.audio('bgm'); // Add the music
		this.bgm.loop = true; // Make it loop
		this.bgm.play(); // Start the music
		
		this.burnSound = game.add.audio('burn'); // Add burn sound
		this.burnSound.loop = false; // Make it not loop

		
		// Create the emitter with 15 particles.
		this.emitter = game.add.emitter(0, 0, 15);

		// Set the 'pixel' image for the particles
		this.emitter.makeParticles('pixel');

		// Set the x and y speed of the particles between -150 and 150
		// Speed will be randomly picked between -150 and 150 for each particle
		this.emitter.setYSpeed(-150, 150);
		this.emitter.setXSpeed(-150, 150);

		// Scale the particles from 2 time their size to 0 in 800ms
		// Parameters are: startX, endX, startY, endY, duration
		this.emitter.setScale(2, 0, 2, 0, 800);

		// Use no gravity
		this.emitter.gravity = 0;
		
		this.timeT = 1000;
		game.time.events.loop(this.timeT, this.randomize, this);
		
		
		if (!game.device.dekstop) {
			// Call 'orientationChange' when the device is rotated
			game.scale.onOrientationChange.add(this.orientationChange, this);

			// Create an empty label to write the error message if needed
			this.rotateLabel = game.add.text(game.width/2, game.height/2, '',
			{ font: '30px Arial', fill: '#fff', backgroundColor: '#000' });
			this.rotateLabel.anchor.setTo(0.5, 0.5);

			// Call the function at least once
			this.orientationChange();
		}
    },

    update: function() {
			this.resizeBody(this.player);
			game.physics.arcade.collide(this.player, this.layer);
			game.physics.arcade.collide(this.enemies, this.layer);
			game.physics.arcade.collide(this.fireballs, this.layer);
			 
			
			
			if (!this.player.alive) {
			    return;
			}
			else
			{
				this.fireFBall();
				this.movePlayer();
				game.physics.arcade.overlap(this.player, this.coin, this.takeCoin, null, this);
				game.physics.arcade.overlap(this.player, this.enemies, this.playerDie, null, this);
				game.physics.arcade.overlap(this.fireballs, this.enemies, this.destroyE, null, this);
				 
				if (!this.player.inWorld) {
					this.playerDie();
			     }
				
			
			}
			
			
			
		
    },
	



		movePlayer: function() {
			
		// If 0 finger are touching the screen
		if (game.input.totalActivePointers == 0) {
			// Make sure the player is not moving
			this.moveLeft = false;
			this.moveRight = false;
		}

        if (this.cursor.left.isDown || this.wasd.left.isDown || this.moveLeft) {
            this.player.body.velocity.x = -200;
			this.player.animations.play('left'); // Left animation
        }
        else if (this.cursor.right.isDown || this.wasd.right.isDown || this.moveRight) {
            this.player.body.velocity.x = 200;
			this.player.animations.play('right'); // Right animation
        }
        else {
            this.player.body.velocity.x = 0;
			this.player.animations.stop(); // Stop animations
			this.player.frame = 0; // Change frame (stand still)
        }

        if ((this.cursor.up.isDown|| this.wasd.up.isDown) && this.player.body.onFloor()) {
					
            this.jumpPlayer();
        }      		
    },
	

    takeCoin: function(player, coin) {
        game.global.score += 5;
        this.scoreLabel.text = 'score: ' + game.global.score;
		this.coinSound.play();
        this.updateCoinPosition();
		
		// Scale the coin to 0 to make it invisible
		this.coin.scale.setTo(0, 0);
		// Grow the coin back to its original scale in 300ms
		game.add.tween(this.coin.scale).to({x: 1, y: 1}, 300).start();
		
		//Player grows for a short amount of time
		game.add.tween(this.player.scale).to({x: 1.3, y: 1.3}, 100).yoyo(true).start();
	
		
		if(game.global.score >= 20) 
		{
			this.bgm.stop();
			game.state.start('level2');
		}
    },

    updateCoinPosition: function() {
        var coinPosition = [
          {x: 140, y: 60}, {x: 360, y: 60}, 
			{x: 60, y: 140}, {x: 440, y: 140}, 
			{x: 130, y: 300}, {x: 370, y: 300} 
        ];

        for (var i = 0; i < coinPosition.length; i++) {
            if (coinPosition[i].x == this.coin.x) {
                coinPosition.splice(i, 1);
            }
        }

        var newPosition = game.rnd.pick(coinPosition);
        this.coin.reset(newPosition.x, newPosition.y);
    },

    addEnemy: function() {
        var enemy = this.enemies.getFirstDead();
		var enemyResetX = game.width/2;
        if (!enemy) {
            return;
        }

        enemy.anchor.setTo(0.5, 1);
        enemy.reset(enemyResetX, 10);
        enemy.body.gravity.y = 500;
        enemy.body.velocity.x = 100 * game.rnd.pick([-1, 1]);
        enemy.body.bounce.x = 1;
        enemy.checkWorldBounds = true;
        enemy.outOfBoundsKill = true;
    },

	
    createWorld: function() {
       //Tilemap
	   this.map = game.add.tilemap('map1');
	   
	   //Add the tileset to the map
	   this.map.addTilesetImage('tileset');
	   
	   // Create the layer by specifying the name of the Tiled layer
		this.layer = this.map.createLayer('Tile Layer 1');

		// Set the world size to match the size of the layer
		this.layer.resizeWorld();

		// Enable collisions for the first tilset element (the blue wall)
		this.map.setCollision(1);
		this.map.setCollision(3);
    },

    
	playerDie: function() {
		
		this.player.kill(); 
		// Set the position of the emitter on top of the player
		this.emitter.x = this.player.x;
		this.emitter.y = this.player.y;
		// Start the emitter by exploding 15 particles that will live 800ms
		this.emitter.start(true, 800, null, 15);
	
		this.bgm.stop();
		this.deadSound.play();
		
	 // When the player dies, we go to the menu
       // delay calls start menu in 1000 ms
		game.time.events.add(1000, this.startMenu, this);
		game.camera.flash(0xffffff, 300);
		game.camera.shake(0.02, 300);
    },
	
	
		startMenu: function() {
		game.state.start('menu');
	},
	
	randomJumps: function(enemy) {
		var randVal = game.rnd.pick([-1, 1, 1, 1]); 
		
		if(enemy.body.onFloor() && randVal == -1){
			enemy.body.velocity.y = -300;
		
		}
		
		
	},
	
	randomize: function(){
		this.enemies.forEachAlive(this.randomJumps, this);
		this.timeT = game.rnd.pick([2000, 2500, 5000]);
	},
	
	setESize: function(enemy) {
		
		enemy.body.setSize(20, 28);
		enemy.body.reset(enemy.x, enemy.y);
	}, 
	
	addMobileInputs: function(){
		// Add the jump button
		var jumpButton = game.add.sprite(400, 240, 'jumpButton');
		jumpButton.inputEnabled = true;
		jumpButton.alpha = 0.5;
		jumpButton.events.onInputDown.add(this.jumpPlayer, this);

		// Movement variables
		this.moveLeft = false;
		this.moveRight = false;

		// Add the move left button
		var leftButton = game.add.sprite(50, 240, 'leftButton');
		leftButton.inputEnabled = true;
		leftButton.alpha = 0.5;
		leftButton.events.onInputOver.add(this.setLeftTrue, this);
		leftButton.events.onInputOut.add(this.setLeftFalse, this);
		leftButton.events.onInputDown.add(this.setLeftTrue, this);
		leftButton.events.onInputUp.add(this.setLeftFalse, this);

		// Add the move right button
		var rightButton = game.add.sprite(130, 240, 'rightButton'); 
		rightButton.inputEnabled = true;
		rightButton.alpha = 0.5;
		rightButton.events.onInputOver.add(this.setRightTrue, this);
		rightButton.events.onInputOut.add(this.setRightFalse, this);
		rightButton.events.onInputDown.add(this.setRightTrue, this);
		rightButton.events.onInputUp.add(this.setRightFalse, this);
	},
	
	jumpPlayer: function() {
		// If the player is touching the ground
		if (this.player.body.onFloor()) {
			// Jump with sound
			this.player.body.velocity.y = -300;
			this.jumpSound.play();
		}
	},
	
	setLeftTrue: function() {
		this.moveLeft = true;
	},
	setLeftFalse: function() {
		this.moveLeft = false;
	},
	setRightTrue: function() {
		this.moveRight = true;
	},
	setRightFalse: function() {
		this.moveRight = false;
	},
		
	orientationChange: function() {
		// If the game is in portrait (wrong orientation)
		if (game.scale.isPortrait) {
			// Pause the game and add a text explanation
			game.paused = true;
			this.rotateLabel.text = 'rotate your device in landscape';
		}
		// If the game is in landscape (good orientation)
		else {
			// Resume the game and remove the text
			game.paused = false;
			this.rotateLabel.text = '';
		}
	},
	
	resizeBody: function(sprite){
		if(sprite.body.width != 20)
			sprite.body.width = 20;
		
		if(sprite.body.height != 27)
			sprite.body.height = 27;
		
	},
	
	fireFBall: function()
	{
		if(game.input.activePointer.leftButton.isDown && game.time.now > this.fireTime)
		{
			var fireball = this.fireballs.getFirstExists(false);
			fireball.animations.add('rotate', [0, 1, 2, 3], 5, true);
			

				if(this.cursor.left.isDown)
				{
					//shoot it to the left
					fireball.reset(this.player.x - 10, this.player.y);
					fireball.animations.play('rotate');
					fireball.body.velocity.x = -400;
				}
				else if(this.cursor.right.isDown)
				{
					//shoot it to the right
					fireball.reset(this.player.x +10, this.player.y);
					fireball.animations.play('rotate');
					fireball.body.velocity.x = 400;
				}
				else
				{
					//shoot it up
					fireball.reset(this.player.x , this.player.y - 10);
					fireball.animations.play('rotate');
					fireball.body.velocity.y = -400;
				}
		
			
			game.time.events.add(800, this.destroyFireball, this, fireball);
			this.fireTime = this.game.time.now + 400;
		}
		
	},
	
	destroyFireball: function(fireball)
	{
		if(fireball.alive)
		{
			fireball.kill();
		}
			
	},
	
	destroyE: function(fireball, enemy){
		
		this.burnSound.play(); // Start the sound
		fireball.kill();
		enemy.kill();
		
	},

};


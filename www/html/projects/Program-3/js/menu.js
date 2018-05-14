var menuState = {
    create: function() {
        // Add a background image
        game.add.image(0, 0, 'background');
        // Display the name of the game
        var nameLabel = game.add.text(game.width/2, -50, 'Super Diamond Box', { font: '50px Arial', fill: '#ffffff' });
        nameLabel.anchor.setTo(0.5, 0.5);
		// Create a tween on the label
		var tween = game.add.tween(nameLabel);

		// Change the y position of the label to 80 in 1000 ms
		tween.to({y: 80}, 1000);

		// Start the tween
		tween.easing(Phaser.Easing.Bounce.Out).start();
		
		
		//Store best score if any / Update the best score
		if (!localStorage.getItem('bestScore')) {
			localStorage.setItem('bestScore', 0);
		}
		// If the score is higher than the best score
		if (game.global.score > localStorage.getItem('bestScore')) {
			// Then update the best score
			localStorage.setItem('bestScore', game.global.score);
		}
		
        // Show the scores at the center of the screen
		var text = 'score: ' + game.global.score + '\nbest score: ' + localStorage.getItem('bestScore');
        var scoreLabel = game.add.text(game.width/2, game.height/2,
            text, { font: '25px Arial', fill: '#ffffff', align: 'center' });
        scoreLabel.anchor.setTo(0.5, 0.5);
		
		var stext;
		
		if(game.device.desktop)
		{
			stext = 'press the up arrow key to start';
		}
		else
		{
			stext = 'touch screen to start';
		}
		
        // Explain how to start the game
        var startLabel = game.add.text(game.width/2, game.height-80,  stext,
            { font: '25px Arial', fill: '#ffffff' });
        startLabel.anchor.setTo(0.5, 0.5);
		
		//Rotates the start label back and forth
		game.add.tween(startLabel).to({angle: -2}, 500).to({angle: 2}, 1000).to({angle: 0}, 500).loop().start();
		
		
		// Add the button that calls the 'toggleSound' function when pressed
		this.muteButton = game.add.button(20, 20, 'mute', this.toggleSound,this);
		
		//changes image if audio is already muted
		this.muteButton.frame = game.sound.mute ? 1 : 0;
		
		if(!game.device.desktop)
		{
			  game.input.onDown.add(this.start, this);
		}
		else
		{
			// Create a new Phaser keyboard variable: the up arrow key
			// When pressed, call the 'start' function once
			var upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
			upKey.onDown.add(this.start, this);
		}
    },
	
    start: function() {
        
		
				// If we tap in the top left corner of the game on mobile
		if (!game.device.desktop && game.input.y < 50 && game.input.x < 60) {
			// It means we want to mute the game, so we don't start the game
			return;
		}
	
		// Start the actual game
        game.state.start('play');
    },
	
	// Function called when the 'muteButton' is pressed
	toggleSound: function() {
		// Switch the variable from true to false, or false to true
		// When 'game.sound.mute = true', Phaser will mute the game
		game.sound.mute = !game.sound.mute;
		// Change the frame of the button
		this.muteButton.frame = game.sound.mute ? 1 : 0;
	},
};
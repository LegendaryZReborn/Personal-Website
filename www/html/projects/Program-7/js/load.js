var loadState = {
    preload: function () {
        // Add a 'loading...' label on the screen
        var loadingLabel = game.add.text(game.width/2, 150, 'loading...', { font: '30px Arial', fill: '#ffffff' });
        loadingLabel.anchor.setTo(0.5, 0.5);
        // Display the progress bar
        var progressBar = game.add.sprite(game.width/2, 200, 'progressBar');
        progressBar.anchor.setTo(0.5, 0.5);
        game.load.setPreloadSprite(progressBar);
        // Load all our assets
        game.load.spritesheet('player', 'assets/playerSheet.png', 32, 32);
        game.load.image('enemy', 'assets/Slug_M.png');
        game.load.image('diamond', 'assets/diamond.png');
		game.load.spritesheet('fireball', 'assets/fireball.png', 64, 64);

        // Load the tileset information
		game.load.image('tileset', 'assets/tileset.png');
		game.load.tilemap('map2', 'assets/map.json', null, Phaser.Tilemap.TILED_JSON);
		game.load.tilemap('map1', 'assets/map2.json', null, Phaser.Tilemap.TILED_JSON);

        // Load a new asset that we will use in the menu state
        game.load.image('background', 'assets/background.png');
		
		game.load.image('pixel', 'assets/pixel.png');
		game.load.spritesheet('mute', 'assets/muteButton.png', 28, 22);
		
		//Button images
		game.load.image('jumpButton', 'assets/circleJ.png');
		game.load.image('rightButton', 'assets/circleR.png');
		game.load.image('leftButton', 'assets/circleL.png');
		
		// Sound when the player jumps
		game.load.audio('jump', ['assets/jump.ogg', 'assets/jump.mp3']);
		// Sound when the player takes a coin
		game.load.audio('coin', ['assets/coin.ogg', 'assets/coin.mp3']);
		// Sound when the player dies
		game.load.audio('dead', ['assets/dead.ogg', 'assets/dead.mp3']);
		
		//Sound when fireball hits the enemy
		game.load.audio('burn', ['assets/acidburn.ogg', 'assets/acidburn.mp3']);
		
		// Background music
		game.load.audio('bgm', ['assets/bgm.ogg', 'assets/bgm.mp3']);
		game.load.audio('bgm2', ['assets/bgm2.ogg', 'assets/bgm2.mp3']);
    },
    create: function() {
        // Go to the menu state
        game.state.start('menu');
    }
};
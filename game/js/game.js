var game = new Phaser.Game(500, 400, Phaser.CANVAS, 'game', { preload: preload, create: create, update: update, render: render });

function preload() {

	game.load.image('background', 'images/forest2.png');
	
}

function create() {

game.physics.startSystem(Phaser.Physics.ARCADE);
	
}

function update() {

	
	/*if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
    {
        hero.x -= 2;
		
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
    {
        hero.x += 2;
    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.UP))
    {
        hero.y -= 1.2;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN))
    {
        hero.y += 4;
    }*/
}
function render() {
}
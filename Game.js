
class Game
{
	constructor()
	{
		this.graphics = new Graphics(640,480,'#263238');
		this.inputs = new Input();

		this.inputs.keyUp = function(){alert('UP from GAME!!');};


		var square = {x:5,y:5};
		// this.graphics.drawBackground();
		this.graphics.drawRect(5,5,20,20,'#FFFFFF');
	}
}

class Game
{
	constructor()
	{
		this.graphics = new Graphics(640,480,'#263238');
		this.snake = new Snake(0,0);
		
		this.inputs = new Input();
		this.setActions();

		this.graphics.drawSnake(this.snake);

		// setInterval(this.update.bind(this),100);
		setInterval(this.update.bind(this),100);
	}

	setActions()
	{
		this.inputs.keyUp = (function(){
			this.snake.dirUp();
		}).bind(this);

		this.inputs.keyDown = (function(){
			this.snake.dirDown();
		}).bind(this);
		this.inputs.keyLeft = (function(){
			this.snake.dirLeft();
		}).bind(this);

		this.inputs.keyRight = (function(){
			this.snake.dirRight();
		}).bind(this);

	}

	update()
	{
		this.snake.move();
		this.graphics.drawSnake(this.snake);
	}
}
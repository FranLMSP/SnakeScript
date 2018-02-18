
class Game
{
	constructor()
	{
		this.graphics = new Graphics(640,480,'#263238');
		this.snake = new Snake(0,0);

		this.food = new Food();
		this.food.generate(this.snake);
		
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
		this.inputs.beginFrame();

		this.snake.move();
		if(this.snake.eat(this.food))
			this.food.generate(this.snake);

		if(this.snake.selfEat())
		{
			alert('You lose!');
			this.snake = new Snake(0,0);
			this.food = new Food();
			this.food.generate(this.snake);


		}
		this.draw();

	}

	draw()
	{
		this.graphics.drawBackground();
		this.graphics.drawFood(this.food);
		this.graphics.drawSnake(this.snake);

	}
}
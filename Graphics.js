class Graphics
{
	constructor(width, height, background)
	{
		this.canvas = document.getElementById('canv');
		// this.canvas.onwheel = function(event){
		// 	event.preventDefault();
		// };
		this.canvas.width = width;
		this.canvas.height = height;
		this.layout = this.canvas.getContext('2d');
		this.backgroundColor = background;
		this.drawBackground();
	}

	drawBackground()
	{
		this.layout.fillStyle = this.backgroundColor;
		this.layout.fillRect(0,0,this.canvas.width,this.canvas.height);
	}

	drawRect(x,y,w,h,color)
	{
		this.layout.fillStyle = color;
		this.layout.fillRect(x,y,w,h);
	}

	drawSnake(snake)
	{
		this.drawRect(snake.head.x*20,snake.head.y*20,20,20,'#FFFFFF');
		for (let i = 0; i<snake.body.points.length ; i++)
		{		
			this.drawRect(snake.body.points[i].x*20,snake.body.points[i].y*20,20,20,'#FFFFFF');
		}
	}

	drawFood(food)
	{
		this.drawRect((food.position.x*20)+5,(food.position.y*20)+5,10,10,'#b71c1c')
	}


}
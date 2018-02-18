class Food
{
	constructor()
	{
		this.position = {};
	}

	generate(snake)
	{
		let not_valid=true;
		let head_collision = false;
		let body_collision = false;
		while(not_valid)
		{
			this.position.x = Math.floor(Math.random()*32);
			this.position.y = Math.floor(Math.random()*24);

			if(this.position.x == snake.head.x && this.position.y == snake.head.y)
				head_collision=true;

			for (let i=0 ; i<snake.body.points.length ; i++)
			{
				if(snake.body.points[i].x == this.position.x && snake.body.points[i].y == this.position.y)
				{
					body_collision=true;
					break;
				}
			}

			if(head_collision&&body_collision)
			{
				alert('NOT VALID');
				not_valid=true;
			}
			else
				not_valid=false;
		}

	}

}
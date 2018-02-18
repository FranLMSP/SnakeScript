class Snake
{
	constructor(x,y,direction = 'r')
	{
		this.direction = direction;
		this.head = {x:x, y:y}
		this.body = {points: [], last: null};
	}

	move(move_body = true)
	{
		if(move_body && this.body.points.length>0)
			this.moveBody();

		switch(this.direction)
		{
			case 'u':
				this.moveUp();
				break;
			case 'd':
				this.moveDown();
				break;
			case 'l':
				this.moveLeft();
				break;
			case 'r':
				this.moveRight();
				break;
			default:
		}
	}

	eat(food)
	{
		if(food.position.x == this.head.x && food.position.y == this.head.y)
		{
			this.growUp();
			return true;
		}
		return false;
	}

	moveUp()
	{
		this.head.y--;
		if(this.head.y < 0)
			this.head.y = 23;
	}

	moveDown()
	{
		this.head.y++;
		if(this.head.y > 23)
			this.head.y = 0;

	}

	moveLeft()
	{
		this.head.x--;
		if(this.head.x < 0)
			this.head.x = 31;
	}

	moveRight()
	{
		this.head.x++;
		if(this.head.x > 31)
			this.head.x = 0;
	}

	dirUp()
	{
		if(this.direction!='d')
			this.direction = 'u';
	}

	dirDown()
	{
		if(this.direction!='u')
			this.direction = 'd';

	}

	dirLeft()
	{
		if(this.direction!='r')
			this.direction = 'l';

	}

	dirRight()
	{
		if(this.direction!='l')
			this.direction = 'r';

	}

	moveBody()
	{
		if(this.body.last!==null)
		{
			this.body.points[this.body.last].x = this.head.x;
			this.body.points[this.body.last].y = this.head.y;

			this.body.last--;
			if(this.body.last<0)
			{
				// alert('Last is 0 now');
				this.body.last = this.body.points.length-1;
			}
		}

	}

	growUp()
	{

		if (this.body.last===null)
			this.body.last = 0;
		this.body.points.push({x: this.head.x, y: this.head.y, flag:'i\'m the position '+this.body.points.length});
		this.move();
		setTimeout(function(){},100);
	}

	hurt()
	{
		this.body.points = removeArrayPosition(this.body.points,this.body.length-1);
	}

	selfEat()
	{
		if(this.body.points.length>3)
		{
			for(let i=0; i<this.body.points.length ; i++)
			{
				if(this.body.points[i].x == this.head.x && this.body.points[i].y == this.head.y )
					return true;
			}
		}
		return false;
	}

}

function removeArrayPosition(array, pos)
{
	let newArr = [];
	for (let i=0 ; i<array.length ; i++)
	{
		if(i!=pos)
		{
			newArr.push(array[i]);
		}
	}

	return newArr;
}
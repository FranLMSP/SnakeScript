class Snake
{
	constructor(x,y,direction = 'r')
	{
		this.direction = direction;
		this.head = {x:x, y:y}
		this.body = [];
	}

	move()
	{
		let pos = this.body.length-1;
		this.body[pos] = this.head;

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

	growUp()
	{
		this.body.push(this.head);
	}

	hurt()
	{
		this.body = removeArrayPosition(this.body,this.body.length-1);
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
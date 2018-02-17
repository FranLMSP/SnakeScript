class Input
{
	constructor(input_mode = 'keydown')
	{
		document.addEventListener(input_mode,this.pressedKey.bind(this));
	}


	pressedKey(event)
	{
		// this.action();38 40 37 39
		switch(event.keyCode)
		{
			case 38:
				this.keyUp();
				break;
			case 40:
				this.keyDown();
				break;
			case 37:
				this.keyLeft();
				break;
			case 39:
				this.keyRight();
				break;
			default:
				console.log(event.keyCode);
				break; 
		}
	}

	action()
	{
		alert('AAA!');
	}

	keyUp()
	{
		alert('Key UP From Input Class');
	}

	keyDown()
	{
		alert('Key DOWN From Input Class');

	}

	keyLeft()
	{
		alert('Key LEFT From Input Class');

	}

	keyRight()
	{
		alert('Key RIGHT From Input Class');

	}
}
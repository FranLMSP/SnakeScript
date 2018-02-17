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
			case 8:
			case 74:
				this.keyBack();
				break;
			case 13: //ENTER
			case 75: //K
				this.keyAction();
				break;
			case 38: //UP Arrow
			case 87: //W
				this.keyUp();
				break;
			case 40: //Down Arrow
			case 83: //S
				this.keyDown();
				break;
			case 37: //Left Arrow
			case 65: //A
				this.keyLeft();
				break;
			case 39: //Right Arrow
			case 68: //D
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

	keyAction()
	{
		alert('action key pressed');
	}

	keyBack()
	{
		alert('back key pressed');
	}
}
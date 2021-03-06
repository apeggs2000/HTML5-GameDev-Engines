function Sprite(canvas, file, width, height, startX, startY, name) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.file = file;
    this.image = new Image();
    this.width = width;
    this.height = height;
    this.name = name;
    this.shown = true;
    this.x = startX;
    this.y = startY;
    this.dx = 0;
    this.dy = 0;
    this.isMoving = false;
    
    //debugging
    if (height === isNaN) {
        console.log("Failure! Height was not set to a number. You wrote " + height);
    } //endif
    if (width === isNaN) {
        console.log("Failure! Width was not set to a number. You wrote " + width);
    } //endif

    //find if sprite is moving
    if (this.dx != 0 || this.dy != 0) {
        this.isMoving = true;
    }
    if (this.dx === 0 || this.dy === 0) {
        this.isMoving = false;
    }
    
    this.setSize = function(newWidth, newHeight) {
        this.width = newWidth;
        this.height = newHeight;
        
        if (newHeight === isNaN) {
            console.log("Failure! Height was not set to a number. You wrote " + newHeight);
        } //endif
        if (newWidth === isNaN) {
            console.log("Failure! Width was not set to  a number. You wrote " + newWidth);
        } //endif
    } //end setSize()
    
    this.setImageFile = function(newFile) {
    	this.file = newFile;
    } //end setImageFile()
    
    this.getSpriteSpeed = function() {
    	spriteSpeed = Math.sqrt((this.dx * this.dx) + (this.dy * this.dy));
    
    	return spriteSpeed;
    } //end getSpeed()
    
    this.getSpriteDX = function() {
    	return this.dx;
    } //end getSpriteDX()
    
    this.getSpriteDY = function() {
    	return this.dy;
    } //end getSpriteDY()
    
    this.spriteReport = function(size) {
    	if (size === "full") {
    	    console.log("Name: " + this.name);
    	    console.log("X: " + this.x);
    	    console.log("Y: " + this.y);
    	    console.log("DX: " + this.dx);
    	    console.log("DY: " + this.dy);
    	    console.log("Shown: " + this.shown);
    	    console.log("Image File: " + this.file);
    	    console.log("Width: " + this.width);
    	    console.log("Height: " + this.height);
    	} //endif
        if (size === "partial") {
            console.log("Name: " + this.name);
    	    console.log("X: " + this.x);
    	    console.log("Y: " + this.y);
    	    console.log("Sprite is Moving: " + this.isMoving);
    	    console.log("Shown: " + this.shown);
        } //endif
    } //end spriteReport()
    
    this.getSpritePosition = function() {
    	spritePosition = Math.sqrt((this.x * this.x) + (this.y * this.y));
    	
    	return spritePosition;
    } //end getSpritePosition()
    
    this.setPosition = function(newX, newY) {
        this.x = newX;
        this.y = newY;
        
        if (newX === isNaN) {
            console.log("Failure! X was not set to a number. You wrote " + newX);
        } //endif
        if (newY === isNaN) {
            console.log("Failure! Y was not set to a number. You wrote " + newY);
        } //endif
    } //end setPosition()
    
    this.setX = function(newX) {
    	this.x = newX;
    } //end setX()
    
    this.setY = function(newY) {
    	this.y = newY;
    } //end setY()
    
    this.setSpeed = function(newDX, newDY) {
        this.dx = newDX;
        this.dy = newDY;
        
        if (newDX === isNaN) {
            console.log("Failure! DX was not set to a number. You wrote " + newDX);
        } //endif
        if (newDY === isNaN) {
            console.log("Failure! DY was not set to a number. You wrote " + newDY);
        } //endif
    } //end setSpeed()
    
    this.setDX = function(newDX) {
    	this.dx = newDX;
    } //end setDX()
    
    this.setDY = function(newDY) {
    	this.dy = newDY;
    } //end setDY()
    
    this.hide = function() {
    	this.shown = false;
    } //end hide()
    
    this.show = function() {
    	this.shown = true;
    } //end show()

    this.draw = function(){

        ctx.save();
    
        ctx.translate(this.x, this.y);
        ctx.rotate(this.imgAngle);
	    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        ctx.restore();
     
    } // end draw()
    
    this.update = function() {
        this.x += this.dx;
        this.y += this.dy;
        if (this.visible){
            this.draw();
        } // end if
    } // end update
    
    this.collides = function(object) {
        if (this.visible && object.visible) {
            thisLeft = this.x - (this.width / 2);
	        thisRight = this.x + (this.width / 2);
	        thisTop = this.y - (this.height / 2);
	        thisBottom = this.y + (this.height / 2);
        	objLeft = sprite.x - (object.width / 2);
          	objRight = sprite.x + (object.width / 2);
        	objTop = sprite.y - (object.height / 2);
        	objBottom = sprite.y + (object.height / 2);
    
	        collision = true;
	
        	if ((thisBottom < objTop) ||
        	    (thisTop > objBottom) ||
        	    (thisRight < objLeft) ||
        	    (thisLeft > objRight)) {
        	        collision = false;
	        } //endif     
        } //endif
    } //end collides()
    

    
} //end Sprite()

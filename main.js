let Cat = function() {
	this.canvas = null;
	this.context = null;
	let self = this;

	window.addEventListener("resize", function() {
		self.resize();
	});

};

Cat.prototype.launch = function() {
	this.canvas = document.createElement("canvas");
	this.canvas.width = window.innerWidth;
	this.canvas.height = window.innerHeight;
	this.context = this.canvas.getContext("2d");
	document.body.appendChild(this.canvas);
	this.canvas.style.position = "fixed";
	this.canvas.style.top = window.innerHeight-165+"px";
	this.canvas.style.left = window.innerWidth-189+"px";
	this.canvas.style.width = window.innerWidth + "px";
	this.canvas.style.height = window.innerHeight + "px";
	this.canvas.style.zIndex = "25000";
	this.canvas.style.backgroundColor = "transparent";

	this.cat1 = document.createElement("img");
	this.cat1.src = ("https://media.discordapp.net/attachments/939539790855045130/939716725212082246/Untitled_Artwork-1.png");
	
	this.cat2 = document.createElement("img");
	this.cat2.src = ("https://cdn.discordapp.com/attachments/939539790855045130/939716725002367016/Untitled_Artwork-2.png")
	
	this.cat3 = document.createElement("img");
	this.cat3.src = ("https://media.discordapp.net/attachments/939539790855045130/939716725132374067/Untitled_Artwork-3.png")

	this.cat4 = document.createElement("img");
	this.cat4.src = ("https://media.discordapp.net/attachments/939539790855045130/939716725316943902/Untitled_Artwork-4.png")

	this.cat5 = document.createElement("img");
	this.cat5.src = ("https://media.discordapp.net/attachments/939539790855045130/939716725161734245/Untitled_Artwork-5.png")
	
	this.cat6 = document.createElement("img");
	this.cat6.src = ("https://media.discordapp.net/attachments/939539790855045130/939716725123985458/Untitled_Artwork-6.png")

	// enter loop
	let self = this;
	requestAnimationFrame(function() {
 		self.animate1()
 	});
}

Cat.prototype.resize = function() {
	this.canvas.width = window.innerWidth;
	this.canvas.height = window.innerHeight;
	this.canvas.style.top = window.innerHeight-165+"px";
	this.canvas.style.left = window.innerWidth-189+"px";
    this.canvas.style.width = window.innerWidth + "px";
    this.canvas.style.height = window.innerHeight + "px";
}

let framesPerSecond = 2;

Cat.prototype.animate1 = function() {
	let ctx = this.context;
	ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
	ctx.drawImage(this.cat1, 0, 0, 189, 165);
	ctx.save();
	ctx.restore();
	
    let self = this;
    setTimeout(() => {
    	requestAnimationFrame(function() {
    		self.animate2();
    	});
    }, 1000/framesPerSecond);
}

Cat.prototype.animate2 = function() {
	let ctx = this.context;
	ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
	ctx.drawImage(this.cat2, 0, 0, 189, 165);

	let self = this;
	setTimeout(() => {
    	requestAnimationFrame(function() {
    		self.animate3();
    	});
    }, 1000/framesPerSecond);
}

Cat.prototype.animate3 = function() {
	let ctx = this.context;
	ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
	ctx.drawImage(this.cat3, 0, 0, 189, 165);

	let self = this;
	setTimeout(() => {
    	requestAnimationFrame(function() {
    		self.animate4();
    	});
    }, 1000/framesPerSecond);
}

Cat.prototype.animate4 = function() {
	let ctx = this.context;
	ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
	ctx.drawImage(this.cat4, 0, 0, 189, 165);

	let self = this;
	setTimeout(() => {
    	requestAnimationFrame(function() {
    		self.animate5();
    	});
    }, 1000/framesPerSecond);
}

Cat.prototype.animate5 = function() {
	let ctx = this.context;
	ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
	ctx.drawImage(this.cat5, 0, 0, 189, 165);

	let self = this;
	setTimeout(() => {
    	requestAnimationFrame(function() {
    		self.animate6();
    	});
    }, 1000/framesPerSecond);
}

Cat.prototype.animate6 = function() {
	let ctx = this.context;
	ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
	ctx.drawImage(this.cat6, 0, 0, 189, 165);

	let self = this;
	setTimeout(() => {
    	requestAnimationFrame(function() {
    		self.animate1();
    	});
    }, 1000/framesPerSecond);
}




let cat = new Cat();
cat.launch();
var Cat = function() {
	this.canvas = null;
	this.context = null;
	this.catImage = null;
	var self = this;

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

	this.canvas.style.position        = "fixed";
	this.canvas.style.top             = window.innerHeight-400+"px"//window.innerHeight-400;
	this.canvas.style.left            = window.innerWidth-400+"px";
	this.canvas.style.width           = window.innerWidth + "px";
	this.canvas.style.height          = window.innerHeight + "px";
	this.canvas.style.zIndex          = "25000";
	this.canvas.style.backgroundColor = "transparent";

	var self = this;

	this.cat1 = document.createElement("img");
	this.cat1.src = ("https://cdn.discordapp.com/attachments/939539790855045130/939692890291060796/Untitled_Artwork-1.png");
	
	this.cat2 = document.createElement("img");
	this.cat2.src = ("https://cdn.discordapp.com/attachments/939539790855045130/939692890370740286/Untitled_Artwork-4.png")

	this.cat3 = document.createElement("img");
	this.cat3.src = ("https://cdn.discordapp.com/attachments/939539790855045130/939692890551103508/Untitled_Artwork-2.png")

	this.cat4 = document.createElement("img");
	this.cat4.src = ("https://cdn.discordapp.com/attachments/939539790855045130/939692890752442398/Untitled_Artwork-3.png")

	this.cat5 = document.createElement("img");
	this.cat5.src = ("https://cdn.discordapp.com/attachments/939539790855045130/939692890542714900/Untitled_Artwork-6.png")

	this.cat6 = document.createElement("img");
	this.cat6.src = ("https://cdn.discordapp.com/attachments/939539790855045130/939692891167674438/Untitled_Artwork-5.png")

	// this.catGif = new GIF();
 // 	this.catGif.load("https://cdn.discordapp.com/attachments/939539790855045130/939678526410461245/Untitled_Artwork.gif");
	requestAnimationFrame(function() {
 		self.animate1()
 	});
}

Cat.prototype.resize = function() {
	if(this.active) {
		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;
		
	    this.canvas.style.width = window.innerWidth + "px";
	    this.canvas.style.height = window.innerHeight + "px";
	}
}

let framesPerSecond = 5;

Cat.prototype.animate1 = function() {
	var ctx = this.context;
	ctx.drawImage(this.cat1, 0, 0);
	ctx.save();
	ctx.restore();
	
    var self = this;
    setTimeout(() => {
    	requestAnimationFrame(function() {
    		self.animate2();
    	});
    }, 1000/framesPerSecond);
}

Cat.prototype.animate2 = function() {
	var ctx = this.context;
	ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
	ctx.drawImage(this.cat2, 0, 0);

	var self = this;
	setTimeout(() => {
    	requestAnimationFrame(function() {
    		self.animate3();
    	});
    }, 1000/framesPerSecond);
}

Cat.prototype.animate3 = function() {
	var ctx = this.context;
	ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
	ctx.drawImage(this.cat3, 0, 0);

	var self = this;
	setTimeout(() => {
    	requestAnimationFrame(function() {
    		self.animate4();
    	});
    }, 1000/framesPerSecond);
}

Cat.prototype.animate4 = function() {
	var ctx = this.context;
	ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
	ctx.drawImage(this.cat4, 0, 0);

	var self = this;
	setTimeout(() => {
    	requestAnimationFrame(function() {
    		self.animate5();
    	});
    }, 1000/framesPerSecond);
}

Cat.prototype.animate5 = function() {
	var ctx = this.context;
	ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
	ctx.drawImage(this.cat5, 0, 0);

	var self = this;
	setTimeout(() => {
    	requestAnimationFrame(function() {
    		self.animate6();
    	});
    }, 1000/framesPerSecond);
}

Cat.prototype.animate6 = function() {
	var ctx = this.context;
	ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
	ctx.drawImage(this.cat6, 0, 0);

	var self = this;
	setTimeout(() => {
    	requestAnimationFrame(function() {
    		self.animate1();
    	});
    }, 1000/framesPerSecond);
}




var cat = new Cat();
cat.launch();
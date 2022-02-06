// // var img = document.createElement('img'); 
// // img.src = 'https://media.geeksforgeeks.org/wp-content/uploads/20190529122828/bs21.png'; 
// // document.getElementById('body').appendChild(img);


// canvas = document.createElement("canvas");
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// document.body.appendChild(canvas);

// canvas.style.position        = "fixed";
// canvas.style.top             = "0px";
// canvas.style.left            = "0px";
// canvas.style.width           = "500px"//window.innerWidth + "px";
// canvas.style.height          = "500px"//window.innerHeight + "px";
// // canvas.style.zIndex          = "25000";
// canvas.style.backgroundColor = "red";

// // cat = document.createElement("img"); 

// ctx = canvas.getContext("2d");

// const cat = new Image();
// cat.src = "0.png";
// ctx.drawImage(cat, 100, 100, 500, 500);
// ctx.fillstyle = 'grey';
// ctx.fillRect(0, 0, 100, 100);


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

	this.cat = document.createElement("img");

	// this.catGif = new GIF();
 // 	this.catGif.load("https://cdn.discordapp.com/attachments/939539790855045130/939678526410461245/Untitled_Artwork.gif");
	this.cat.src = ("https://cdn.discordapp.com/attachments/939539790855045130/939678526410461245/Untitled_Artwork.gif");
	requestAnimationFrame(function() {
 		self.animate()
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

Cat.prototype.animate = function() {

	var ctx = this.context;
	ctx.drawImage(this.cat, 0, 0);
	ctx.save();
	ctx.restore();
	var self = this;
      	requestAnimationFrame(function() {
      	self.animate();
    });

}





var cat = new Cat();
cat.launch();
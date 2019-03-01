//Prepare DOM canvas
const w = d3.select('.plot').node().clientWidth;
const h = d3.select('.plot').node().clientHeight;
const plot1 = d3.select('#plot-1')
	.style('position','relative')
	.append('svg').attr('width',w).attr('height',h);
const plot1Canvas = d3.select('#plot-1')
	.append('canvas').attr('width',w).attr('height',h)
	.style('position','absolute')
	.style('top',0)
	.style('left',0);
const plot2 = d3.select('#plot-2')
	.style('position','relative')
	.append('svg').attr('width',w).attr('height',h);
const plot2Canvas = d3.select('#plot-2')
	.append('canvas').attr('width',w).attr('height',h)
	.style('position','absolute')
	.style('top',0)
	.style('left',0);

//Dummy data
const NUM_NODES = 1000;
const nodesData = Array.from({length:NUM_NODES}).map(d => {
	return {
		x: Math.random()*w,
		y: Math.random()*h,
		vx: (Math.random()-.5)*.9,
		vy: (Math.random()-.5)*.9,
		r: 3,
		color: `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`
	}
});

//EXERCISE 1: Draw basic shapes
//Drawing shapes 
//Rect

//Path
//ctx.beginPath()

//path methods
//ctx.moveTo()
//ctx.lineTo()
//ctx.arc()
//ctx.quadraticCurveTo()
//ctx.bezierCurveTo()

//ctx.closePath()

//ctx.stroke()
//ctx.fill()

//EXERCISE 2: use d3.path() to render path commands to <svg>

//EXERCISE 3: animation and performance
renderFrame();

function renderFrame(){

}




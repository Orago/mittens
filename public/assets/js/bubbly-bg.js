/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS205: Consider reworking code to avoid use of IIFEs
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const sketch = Sketch.create();
sketch.mouse.x = sketch.width / 10;
sketch.mouse.y = sketch.height;
const skylines = [];
let dt = 1;

//
// BUILDINGS
//
  
const Building = function( config ) {
  return this.reset( config );
};

Building.prototype.reset = function(config) {
  this.layer = config.layer;
  this.x = config.x;
  this.y = config.y;
  this.width = config.width;
  this.height = config.height;
  this.color = config.color;  
  this.slantedTop = floor( random( 0, 10 ) ) === 0;
  this.slantedTopHeight = this.width / random( 2, 4 );
  this.slantedTopDirection = round( random( 0, 1 ) ) === 0;
  this.spireTop = floor( random( 0, 15 ) ) === 0;
  this.spireTopWidth = random( this.width * .01, this.width * .07 );
  this.spireTopHeight = random( 10, 20 );
  this.antennaTop = !this.spireTop && (floor( random( 0, 10 ) ) === 0);
  this.antennaTopWidth = this.layer / 2;
  return this.antennaTopHeight = random(5, 20); 
};
    
Building.prototype.render = function() {
  sketch.fillStyle = (sketch.strokeStyle = this.color);
  sketch.lineWidth = 2;
  
  sketch.beginPath();
  sketch.rect( this.x, this.y, this.width, this.height );
  sketch.fill();
  sketch.stroke();
    
  if (this.slantedTop) {
    sketch.beginPath();
    sketch.moveTo( this.x, this.y );
    sketch.lineTo( this.x + this.width, this.y );
    if (this.slantedTopDirection) {
      sketch.lineTo( this.x + this.width, this.y - this.slantedTopHeight );
    } else {
      sketch.lineTo( this.x, this.y - this.slantedTopHeight );
    }
    sketch.closePath();
    sketch.fill();
    sketch.stroke();
  }
     
  if (this.spireTop) {
    sketch.beginPath();
    sketch.moveTo( this.x + ( this.width / 2 ), this.y - this.spireTopHeight );
    sketch.lineTo( this.x + ( this.width / 2 ) + this.spireTopWidth, this.y );
    sketch.lineTo( (this.x + ( this.width / 2 )) - this.spireTopWidth, this.y );
    sketch.closePath();
    sketch.fill();
    sketch.stroke();
  }
   
  if (this.antennaTop) {
    sketch.beginPath();
    sketch.moveTo( this.x + ( this.width / 2 ), this.y - this.antennaTopHeight );
    sketch.lineTo( this.x + ( this.width / 2 ), this.y );
    sketch.lineWidth = this.antennaTopWidth;
    return sketch.stroke();
  }
};

//
// SKYLINES
//

const Skyline = function(config) { 
  this.x = 0;
  this.buildings = [];
  this.layer = config.layer;
  this.width = {
    min: config.width.min,
    max: config.width.max
  };
  this.height = {
    min: config.height.min,
    max: config.height.max
  };
  this.speed = config.speed;
  this.color = config.color;
  this.populate();
  return this;
};
  
Skyline.prototype.populate = function() {
  let totalWidth = 0;
  return (() => {
    const result = [];
    while (totalWidth <= (sketch.width + ( this.width.max * 2 ))) {
      const newWidth = round(( random( this.width.min, this.width.max ) ));
      const newHeight = round(( random( this.height.min, this.height.max ) ));
      this.buildings.push( new Building({
        layer: this.layer,
        x: this.buildings.length === 0 ? 0 : ( this.buildings[ this.buildings.length - 1 ].x + this.buildings[ this.buildings.length - 1 ].width ),
        y: sketch.height - newHeight,
        width: newWidth,
        height: newHeight,
        color: this.color
      }) );
      result.push(totalWidth += newWidth);
    }
    return result;
  })();
};

Skyline.prototype.update = function() {
  this.x -= ( sketch.mouse.x * this.speed ) * dt;
      
  const firstBuilding = this.buildings[ 0 ];
  if ((firstBuilding.width + firstBuilding.x + this.x) < 0) {
    const newWidth = round(( random( this.width.min, this.width.max ) ));
    const newHeight = round(( random( this.height.min, this.height.max ) ));
    const lastBuilding = this.buildings[ this.buildings.length - 1 ];    
    firstBuilding.reset({
      layer: this.layer,
      x: lastBuilding.x + lastBuilding.width,
      y: sketch.height - newHeight,
      width: newWidth,
      height: newHeight,
      color: this.color
    });    
    return this.buildings.push( this.buildings.shift() );
  }
};

Skyline.prototype.render = function() {
  let i = this.buildings.length;
  sketch.save();
  sketch.translate( this.x, (( sketch.height - sketch.mouse.y ) / 20) * this.layer );  
  while (i--) { this.buildings[ i ].render(( i )); }
  return sketch.restore();
};

//
// SETUP
//
  
sketch.setup = function() {    
  let i = 5;
  return (() => {
    const result = [];
    while (i--) {
      result.push(skylines.push( new Skyline({
        layer: i + 1,
        width: {
          min: ( i + 1 ) * 30,
          max: ( i + 1 ) * 40
        },
        height: {
          min: 150 - ( ( i ) * 35 ),
          max: 300 - ( ( i ) * 35 )
        },
        speed: ( i + 1 ) * .003,
        color: 'hsl( 200, ' + ( ( ( i + 1 ) * 1 ) + 10 ) + '%, ' + ( 75 - ( i * 13 ) ) + '% )'
      }) ));
    }
    return result;
  })();
};

//
// CLEAR
//
  
sketch.clear = () => sketch.clearRect( 0, 0, sketch.width, sketch.height );

//
// UPDATE
//
  
sketch.update = function() {
  dt = sketch.dt < .1 ? .1 : sketch.dt / 16;
  dt = dt > 5 ? 5 : dt;
  let i = skylines.length;
  return (() => {
    const result = [];
    while (i--) {
      result.push(skylines[ i ].update( i ));
    }
    return result;
  })();
};
  
//
// DRAW
//
  
sketch.draw = function() {
  let i = skylines.length;
  return (() => {
    const result = [];
    while (i--) {
      result.push(skylines[ i ].render( i ));
    }
    return result;
  })();
};

//
// Mousemove Fix
//  
    
$( window ).on('mousemove', function(e) {
  sketch.mouse.x = e.pageX;
  return sketch.mouse.y = e.pageY;
});

var link = document.createElement('link');  
  
        // set the attributes for link element 
           link.rel = 'stylesheet';  
      
        link.type = 'text/css'; 
      
        link.href = '/assets/css/bg.css';  
  
        // Get HTML head element to append  
        // link element to it  
        document.getElementsByTagName('HEAD')[0].appendChild(link);
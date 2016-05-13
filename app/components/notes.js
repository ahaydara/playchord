  export default class NoteSymbol { 
 
 constructor(height, radiusx, radiusy, noteLength, startingPositionX) {
     this.height = height; 
     this.radiusx = radiusx;
     this.radiusy = radiusy;
     this.noteLength = noteLength;
     this.startingPositionX = startingPositionX;
     this.noteXPositions = {
      'LA':5, 'LB':10, 'LC':15, 'LD':20, 'UG': 30
    };
  }

 say() {
 	console.log("say something");
 }

 transformNoteToD(note, notePosition) { 
        var drawFunction  = (note[0] === 'L') ?  this.lowerNote() : this.upperNote();
        var len =  (note.indexOf('q') != -1 ) ? this.noteLength/5 : this.noteLength;
        var y = this.noteXPositions[note.slice(0,2)];
        var x = this.startingPositionX  + ( len * notePosition) ;
        //return drawFunction(x, y, this.height, this.radiusx, this.radiusy);   
         return "M 303.13715,299.65106 C 299.74131,301.47103 297.93187,304.76561 299.04493,307.24402 C 300.23219,309.88766 304.31194,310.63374 308.15151,308.90939 C 311.99107,307.18503 314.14367,303.63999 312.95641,300.99636 C 311.76914,298.35272 307.6894,297.60664 303.84983,299.33099 C 303.60986,299.43876 303.36355,299.52973 303.13715,299.65106 z";
 }


upperNote() {
  return function(x, y, height, radiusx, radiusy) {
        var drawStr = "M" + x + " " + y ;
        drawStr = drawStr + " A "+ radiusx + " " + radiusy + " " + "0  1  1 " + x +  " " + (y + height/3);
        drawStr = drawStr + "M" + x + " " + y ;
        drawStr = drawStr + " L " + x + " " + (y + height);
        return drawStr;
  }
}

lowerNote() {
  return function(x, y, height, radiusx, radiusy){
        var drawStr = "M" + x + " " + y ;
            drawStr = drawStr + " L " + x + " " + (y + height);
            drawStr = drawStr + " A "+ radiusx + " " + radiusy + " " + "0  1  1 " + x +  " " +(y + height - height/3);
            drawStr = drawStr + " M " + x + " " + y;
        return drawStr;
  }
}

}


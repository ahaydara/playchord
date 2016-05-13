import Ember from 'ember';
import d3 from 'd3';
//import NoteSymbol from './notes'
import symbols from  './symbols';
import positions from  './positions'

export default function PlayChord() {

   var width = 1000,
       height = 1000,
       svg = null,
       symbolJsonFile = "symbols.json";

function chord(selection) {

    svg = selection;

    selection.each(function(data) {
     // svg = d3.select(this)
     //         .append("svg")
     //         .attr("width", width)
     //         .attr("height", height);
     var chord = createSymbols();
     var data = ['A','B','C','D'];
     chord = createEmptySheet(10,50, -300,1000,1000,100,data);    

    })
  }

  chord.Width= function(newWidth){
     width = newWidth;
     return chord;
  }


  chord.Height = function(newHeight){
        height = newHeight;
        return chord;
  }




  function createSymbols()
  {
    //TODO: this should be a generic code that add other symbol definitions
    var group =  svg.append("defs")
       .selectAll("symbol")
        .data(symbols)
        .enter()
        .append("symbol")
        .attr("id", function(d) { return d.id; })
        .attr("viewBox", function(d) { return d.viewbox; })
        .attr("overflow", function(d) { return d.overflow; })
        .append("g") 
        .attr("transform", function(d) { return d.gtranform})
        .each(addPathToSymbol);

     return chord;
  }

  function addPathToSymbol(data)
  {
             d3.select(this)
             .selectAll("path")
             .data(data.path)
             .enter()
             .append('path')
             .attr("d", function(path) {return path.d;})
             .attr("transform", function(path) {return path.transform;})
             .attr("fill", function(path) {return path.fill})
             .attr("stroke", function(path) {return path.stroke;})
             .attr("stroke-width", function(path) {return path.strokewidth;})
  }


   function createEmptySheet(lineNumber, x, y, height, width, gapBetweenLines, data) {


       for (var i = 0; i < lineNumber; i++) {

          svg.append('use')   
          .attr("xmlns:xlink","http://www.w3.org/1999/xlink")
          .attr("xlink:href", "#sheet")
          .attr("x", x)
          .attr("y", y)
          .attr("height", height)
          .attr("width", width);

           data.forEach(function (element, index, array) {

              if(positions[element] == null ) throw "Unknown Symbol Position!";
               addNotes("fullnote", 300 + index * 50, y + positions[element] ,40,40);
           })
          
           y = y + gapBetweenLines; // it is moved down height amount
        }
       return chord;
  };

  function addNotes(type,x,y,height,width)
  {
       svg.append('use')   
          .attr("xmlns:xlink","http://www.w3.org/1999/xlink")
          .attr("xlink:href", "#"+type)
          .attr("x", x)
          .attr("y", y)
          .attr("height", height)
          .attr("width", width); 
  }

  return chord;
}
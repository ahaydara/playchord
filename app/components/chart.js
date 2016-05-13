export default function chart() {
  var width = 720, // default width
      height = 80; // default height

  function my() {
    // generate chart here, using `width` and `height`
    console.log("inside the chart");
  }

  my.width = function(value) {
    if (!arguments.length) return width;
    width = value;
    return my;
  };

  my.height = function(value) {
    if (!arguments.length) return height;
    height = value;
    return my;
  };

  return my;
}

// peki nedeni ne
//sadece yogunlasip yapmak zaman alabilir bunu gormek mesel
// bazi seylerle ugrasirken gerekli motivasyonu bulmak cok zor yaw..
//durum garip ama motivasyon eksikligi var bu durumda..
//anlamadim gitti..

//artik zamani gelmedi mi sence e..
//kod yazmak internete yazmak o programi yapmak bu programi yapmak
//artik zamani gelmedi mi sence de..
//birseyler yapmak cabalamak ve uretmek icin, sence zamani gelmedi mi..
//playchord..huzel fikir..bilemiyorum..gercekten bunu 

//bu projeye inanmiyorsam hangi projeye inaniyorum
//sorular bitmez , en iyisi kendini bu girdaptan almak
//yine ayni seyler oluyor is basladi bak nasil zararli 

// import Ember from 'ember';
// import d3 from 'd3';
// import symbols from './symbols';
// import NoteSymbol from './notes'
// import chart from './chart'

// export default Ember.Component.extend({

//   tagName: 'svg',

//   heigt : 100,

//   width: 200,


//  attributeBindings: 
//     'width height'.w(),
//     margin: {top: 20, right: 20, bottom: 30, left: 40},
    
//     w: function(){
//       return this.get('width') - this.get('margin.left') - this.get('margin.right');
//     }.property('width'),
  
//     h: function(){
//       return this.get('height') - this.get('margin.top') - this.get('margin.bottom');
//     }.property('height'),  
  
//     transformG: function(){
//       return "translate(" + this.get('margin.left') + "," + this.get('margin.top') + ")";
//     }.property(),
      
//     transformX: function(){
//       return "translate(0,"+ this.get('h') +")";
//     }.property('h'),   
  
//     draw: function(){

//       var noteSymbols= symbols.create();
//       console.log(noteSymbols.hello);
//       var noteSymbol = new  NoteSymbol(35, 9, 6, 50, 25);
//       note.say();

//       var obj= chart().width(50);
//       obj();

//       var formatPercent = d3.format(".0%");
//       var width = this.get('w');
//       var height = this.get('h');
//       var data = this.get('data');
//       var svg = d3.select('#'+this.get('elementId'));
//       var x = d3.scale.ordinal().rangeRoundBands([0, width], 0.1);
//       var y = d3.scale.linear().range([height, 0]);
//       var xAxis = d3.svg.axis().scale(x).orient("bottom");
//       var yAxis = d3.svg.axis().scale(y).orient("left").ticks(5).tickFormat(formatPercent);
      
//       x.domain(data.map(function(d) { return d.letter; }));
//       y.domain([0, d3.max(data, function(d) { return d.frequency; })]);
  
//       svg.select(".axis.x").call(xAxis);
//       svg.select(".axis.y").call(yAxis);
  
//       svg.select(".rects").selectAll("rect")
//         .data(data)
//       .enter().append("rect")
//         .attr("class", "bar")
//         .attr("x", function(d) { return x(d.letter); })
//         .attr("width", x.rangeBand())
//         .attr("y", function(d) { return y(d.frequency); })
//         .attr("height", function(d) { return height - y(d.frequency); });
//     },
  
//     didInsertElement: function(){
//       this.draw();
//     } 
// });


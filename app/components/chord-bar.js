import Ember from 'ember';
import d3 from 'd3';
import PlayChord from './playchord';


export default Ember.Component.extend({

	tagName: 'svg',

	heigt : 1000,

	width: 1600,

  viewBox : '0 0 1600 1000' ,


 attributeBindings: 
    'width height'.w(),
    margin: {top: 20, right: 20, bottom: 30, left: 40},
    
    w: function(){
      return this.get('width') - this.get('margin.left') - this.get('margin.right');
    }.property('width'),
  
    h: function(){
      return this.get('height') - this.get('margin.top') - this.get('margin.bottom');
    }.property('height'),  
  
    transformG: function(){
      return "translate(" + this.get('margin.left') + "," + this.get('margin.top') + ")";
    }.property(),
      
    transformX: function(){
      return "translate(0,"+ this.get('h') +")";
    }.property('h'),   
  
    draw: function(){

    var musicData =  //[['LD','LC','LB'],['LA']];
    [
    ['LAq', 'LBq','LDq','LBq','LCq','LB','LC','LD','UG','LA','LB','LC','LD','UG','LA','LB'],
    ['UG','LA','LB','LC','LD','UG','LA','LB','LC','LD','UG','LA','LB','LC','LD','UG','LA'],
    ['LB','LC','LD','UG','LA','LB','LC','LD','UG','LA','LB','LC','LD','UG','LA','LB','LC',],
    ['LD','UG','LA','LB','LC','LD','UG','LC','LD']];

 

    var singleData= [['LAq']];

     var chord = PlayChord().Width(this.height).Height(this.width);

      d3.select('#'+this.get('elementId'))
      .attr("viewBox", this.viewBox)
      .datum(musicData)
      .call(chord);

     //chord.createSymbolDefinition(symbolDefinitions);

    },
  
    didInsertElement: function(){
      this.draw();
    }	
});


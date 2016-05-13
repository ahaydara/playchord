export default function chart() {
  var width = 720, // default width
      height = 80; // default height

  function my() {
    // generate chart here, using `width` and `height`
    console.log("inside the chart");
  }

  my.width = function(value) {
    if (!arguments.length) {
      return width;
    }
    width = value;
    return my;
  };

  my.height = function(value) {
    if (!arguments.length) {
      return height;
    }
    height = value;
    return my;
  };

  return my;
}




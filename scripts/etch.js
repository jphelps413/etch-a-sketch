gRows = 16
gCols = 16

/*
 * Example of CSS insertion from JS. This was simply a capture and is not
 * necessarily relevant to this project.
 */
function testCSS() {
  console.log("testCSS")
  $('div').css({
          'background-color': 'green',
            'height':           '250px',
            'width':            '350px',
  })
}

/*
 * Build up the gridbag div for the etch a sketch.
 */
function buildGridbag(rows,cols) {
  //console.log("buildGrid: Grid will be "+ rows +" by "+ cols)
  $theGrid = $('#gridbag')
  $theGrid.empty()

  for( r = 0; r < rows; r++ ) {
    rowId = "r"+r
    $theGrid.append('<div class="row" id="'+rowId+'"></div>')
    for( c = 0; c < cols; c++ ) {
      //console.log("Append "+rowId+"="+cellDiv)
      $('#'+rowId).append( '<div class="cell" id="c'+r+'.'+c+'"></div>' )
    }
  }
}

$(document).ready( function() {
  buildGridbag(gRows,gCols)
  $('.cell').hover( function() {
    $(this).css({'background-color': 'green'})
  });
})

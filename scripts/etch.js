gRows = 32
gCols = 32

function testCSS() {
  console.log("testCSS")
  $('div').css({
          'background-color': 'green',
            'height':           '250px',
            'width':            '350px',
  })
}

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
})

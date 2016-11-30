gRows = 16
gCols = 16

function testCSS() {
  console.log("testCSS")
  $('div').css({
          'background-color': 'green',
            'height':           '250px',
            'width':            '350px',
  })
}

$(document).ready( function() {
  console.log("buildGrid: Grid will be "+ gRows +" by "+ gCols)

  for( r = 0; r < gRows; r++ ) {
    rowId = "r"+r
    rowDiv = '<div class="row" id="'+rowId+'"></div>'
    console.log( "Append="+rowDiv )
    $('#gridbag').append(rowDiv)
    for( c = 0; c < gCols; c++ ) {
      cellId = "c"+r+"."+c
      cellDiv = '<div class="cell" id="'+cellId+'"></div>'
      console.log("Append "+rowDiv+"="+cellDiv)
      $('#'+rowId).append(cellDiv)
    }
  }
})

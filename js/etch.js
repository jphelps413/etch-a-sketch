
function makeEtcher(size) {
  $etcher = $('#etcher')
  $etcher.empty()

  /*
   * Monkeyed around with optimizing the following loop since there is a
   * noticable delay when working with the larger size values. The first
   * attempt was to accumulate the divs in a string and then invoke append
   * once, and the second was a combo of newing an Array and using join.
   * Neither approach had any significant advantage over the for/append
   * loop so I left it like it is.
   */
  for( c = 0; c < size*size; c++ ) {
    $etcher.append( '<div class="cell"></div>' )
  }

  cellSz = parseFloat($etcher.css('width')) / size
  $('.cell').css({'height': cellSz, 'width': cellSz})

  $('.cell').hover( function() {
    $(this).css({'background-color': '#2F2F2F'})
  });

  return size
}

/*
 * An interesting lesson was learned here regarding startup race conditions
 * between a jQuery 'document ready' vice a 'window load'. The index.html
 * <head> was loading the javascript files first, and then the CSS. The first
 * thing we do below is dive into makeEtcher which expects the CSS values to
 * be in place for the frame and etcher widths. WRONG! Reloading the window
 * fixes the issue, but opening a new one fails the first time through.
 *
 * One fix is to change from using document ready:
 *    $(document).ready( function() {
 *
 * over to a window load:
 *    $(window).on('load', function() {
 *
 * since the window load wont fire until EVERYthing is loaded, like CSS.
 * Another approach, which seems to work, is to list the CSS ahead of the
 * javascript files, which feels like it might still be a race condition
 * and is recommended against in some posts regarding page start up speeds
 * and older browsers.
 */
$(document).ready( function() {
  etchCols = makeEtcher( 32 )

  /*
   * Fast erase, and probably not at all cryptic :-)
   */
  $('#erase').click( function() {
    $('.cell').css({'background-color':
    $('.cell').css( 'background-color')})
  })

  $('#resize').click( function() {
    newSz = prompt("Enter number of columns (1-128):", etchCols)

    if( newSz < 1 || newSz > 128 ) {
      alert( "Size must be in the range of 1 to 128" )
    }
    else {
      etchCols = makeEtcher(newSz)
    }
  })

})

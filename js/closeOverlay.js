import('./hideshowElementById.js')
import('./emptyElementByID.js')

// import { hideshowElementById } from 'hideshowElementById.js'
// import { emptyElementByID } from 'empyElementById.js'

function closeOverlay () {
  hideshowElementById('programoverlay', 'hide')
  emptyElementByID('programoverlay')
  hideshowElementById('maincontent', 'show')
  emptyElementByID('programoverlay')
}

import { hideshowElementById } from 'hideshowElementById.js'
import { emptyElementByID } from 'empyElementById.js'

export function closeOverlay () {
  hideshowElementById('programoverlay', 'hide')
  emptyElementByID('programoverlay')
  hideshowElementById('maincontent', 'show')
  emptyElementByID('programoverlay')
}

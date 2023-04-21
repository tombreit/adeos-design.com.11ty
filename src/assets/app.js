// TODO: Import only used components

import * as bootstrap from 'bootstrap';


const offcanvasElem = document.querySelector(".offcanvas-start");
const offcanvasNavLinksContainer = document.querySelector(".offcanvas-body nav");
const bsOffcanvas = new bootstrap.Offcanvas(offcanvasElem)

offcanvasNavLinksContainer.addEventListener('click', function (event) {
	// Ignore all elements without .nav-item class
	if (!event.target.closest('.nav-item')) return;

	// ...and close our bs offcanvas when clicked on a .nav-item link
    bsOffcanvas.hide();
});

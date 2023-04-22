// TODO: Import only used bootstrap components
import * as bootstrap from 'bootstrap';

/* bs offcanvas will not close and follow an achor link, so we close/dismiss
   the offcanvas via javascript 
*/
const offcanvasElem = document.querySelector(".offcanvas-start");
const offcanvasNavLinksContainer = document.querySelector(".offcanvas-body nav");
const bsOffcanvas = new bootstrap.Offcanvas(offcanvasElem)

offcanvasNavLinksContainer.addEventListener('click', function (event) {
	// Ignore all elements without .nav-item class
	if (!event.target.closest('.nav-item')) return;

	// ...and close our bs offcanvas when clicked on a .nav-item link
    bsOffcanvas.hide();
});

/* detect and mark element when it becomes sticky
*/
const stickyElement = document.querySelector(".site-header")
const observer = new IntersectionObserver( 
	([e]) => e.target.classList.toggle("is-sticky", e.intersectionRatio < 1),
	{ threshold: [1] }
);
observer.observe(stickyElement);

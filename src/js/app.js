import { getVendor} from './vendor.js';
import { getGallary } from './modules/gallary.js';
import { getGsap } from './modules/gsap.js';

document.addEventListener('DOMContentLoaded', () => {
	getVendor();
	getGallary();
	getGsap();
});
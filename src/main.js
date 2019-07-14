// classes
import AMBRTB_ERROR from './classes/ambrtb-error.js';

// features
import location_services from './location-services.js';


// lodash imports
import lodash_throttle from 'lodash.throttle';
import lodash_debounce from 'lodash.debounce';

// let's create the toolbox
window.ambrtb = window.ambrtb || {};
window.ambrtb = Object.assign(window.ambrtb, {
	CLASS : {
		AMBRTB_ERROR : AMBRTB_ERROR
	},
	lodash : {
		throttle : lodash_throttle,
		debounce : lodash_debounce
	},
	locationServices : location_services
});
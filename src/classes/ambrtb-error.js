// create the class
export default class AMBRTB_ERROR {

	constructor(opts) {
		const options = Object.assign({
			code : "",
			message : "",
			errors : {}
		}, opts);
		
		// set the error data
		this.code = options.code;
		this.message = options.message;
		this.errors = options.errors;
	}

}
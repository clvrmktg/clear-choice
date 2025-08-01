document.addEventListener("DOMContentLoaded", function () {
	var bouncer = new Bouncer("[data-validate]", {
		disableSubmit: true, // Prevents submission if invalid
		emitEvents: true
	});

	document.querySelector("[data-validate]").addEventListener("bouncerFormValid", function (event) {
		let form = event.target;
		
		// Check if Netlify reCAPTCHA exists
		if (form.querySelector('[data-netlify-recaptcha]')) {
			return; // Do NOT auto-submit, let Netlify handle it
		}

		form.submit(); // If no reCAPTCHA, submit normally
	});
});
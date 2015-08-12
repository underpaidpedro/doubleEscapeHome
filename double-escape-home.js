/**
 * @name doubleEscapeHome
 * @description double escape redirects home
 * @author @underpaid_pedro https://twitter.com/underpaid_pedro
 * @version 0.1
 * @since 2015-08-12
 */
(function() {

	redirect = false;
	this.doubleEscapeHome = function() {
		window.addEventListener('keydown', handleKeyDown);
	}

	function handleKeyDown(e) {
		// double esc
		if(e.keyCode == 27) {
			if(this.redirect) {
				if(window.location.href != window.location.origin + '/') {
					window.location.href = window.location.origin + '/';
				}
				return;
			}

			this.redirect = true;
			setTimeout(function() {
				cancelDoubleEscape();
			}, 150);
		}
	}

	function cancelDoubleEscape() {
		this.redirect = false;
	}

})('doubleEscapeHome');
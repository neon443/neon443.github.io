function showAlert() {
	alert("Hey! this is under development. i told u not to click.");
}

function notLink() {
	var notLinkToast = document.getElementById("notLinkToast");
	notLinkToast.className = "show";
	setTimeout(
		function() {
			x.className = x.className.replace("show", "");
		}
	, 3000);
}
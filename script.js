function showAlert() {
	alert("Hey! this is under development. i told u not to click.");
};

function ntLnk() {
	var ntLnkToast = document.getElementById("ntLnkToast");
	ntLnkToast.className = "show";
	setTimeout(
		function() {
			ntLnkToast.className = ntLnkToast.className.replace("show", "");
		}, 3000);
}
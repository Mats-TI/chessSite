// Articles Script

//search Option
var Options = function () {
	var searchOption = document.querySelectorAll("select option");
	for (var i = 0; i < searchOption.length; i++) {
		if (searchOption[i].selected) {
			if (searchOption[i].value == "null") {

				document.querySelector('.dateInput').style.visibility = "hidden";
				document.querySelector(".textInput").style.visibility = "hidden";
			} else if (searchOption[i].value == "title") {
				document.querySelector(".textInput").style.visibility = "visible";
				//document.querySelector('.searchArticles button').style.visibility = "visible";
				document.querySelector('.dateInput').style.visibility = "hidden";

			} else if (searchOption[i].value == "date") {

				document.querySelector('.dateInput').style.visibility = "visible";
				//document.querySelector('searchArticles button').style.visibility = "visible";
				var text = document.querySelector(".textInput");
				if (text.style.visibility == "visible") {
					text.style.visibility = "hidden";
				}
			}
		}
	}
}

document.addEventListener("DOMContentLoaded",
	function (event) {

		function TL (event) {
			var inputText = document.getElementById("input").value;
			var outputText = new Array();

			var latin = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

			for (var i = 0; i < inputText.length; i++) {
				if (inputText[i] == "a") {
					outputText[i] = "1";
				}
				else if (inputText[i] == "b") {
					outputText[i] = "2"
				}
				else {
					outputText[i] = "x"
				}
			}

			var result = "";

			for (i = 0; i < outputText.length; i++) {
				result += outputText[i];
			}
			console.log(result);


			document.getElementById("OutputTextBox")
					.textContent = result;

		}

		document.querySelector("button")
				.addEventListener("click", TL);

		window.addEventListener("keyup", function(event) {
			if (event.keyCode == 13) {
				document.querySelector("button").click();
			}
		});

	}
);
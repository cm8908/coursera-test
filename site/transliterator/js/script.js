document.addEventListener("DOMContentLoaded",
	function (event) {

		function TL (event) {
			var inputText = document.getElementById("input").value;
			var outputText = inputText + "ed";


			document.getElementById("OutputTextBox")
					.textContent = outputText;

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
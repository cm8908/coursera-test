document.addEventListener("DOMContentLoaded",
	function (event) {

		function TL (event) {
			var inputText = document.getElementById("input").value;
			var outputText = new Array();


			//  NOT AVAILABLE FOR NOW

			// var latin = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " "];
			// var manchu = ["ᠠ", "ᠪ᠊", "ᠴ᠊", "ᡩ᠊", "ᡝ", "ᡶ‍", "ᡤ᠊", "ᡥ᠊", "ᡳ", "ᠵ᠊", "ᡴ᠊", "ᠯ᠊", "ᠮ᠊", "ᠨ᠊", "ᠣ", "ᡦ᠊", "q", "ᡵ᠊", "ᠰ", "ᡨ᠋᠊", "ᡠ", "ᡡ", "ᠸ᠊", "ᡧ᠊", "ᠶ᠊", "z", " "];

			// for (var i = 0; i < inputText.length; i++) {
			// 	for (var j = 0; latin.length; j++) {
			// 		if(inputText[i] === latin[j]) {
			// 			outputText[i] = manchu[j];
			// 		}
			// 	}
			// }

			//  NOT AVAILABLE FOR NOW

			for (var i = 0; i < inputText.length; i++) {
				if (inputText[i] == "a") {
					outputText[i] = "ᠠ";
				} else if (inputText[i] == " ") {
					outputText[i] = " ";
				} else if (inputText[i] == "\n") {
					outputText[i] = " ";
				} else if (inputText[i] == "e") {
					outputText[i] = "ᡝ";
				} else if (inputText[i] == "i") {
					outputText[i] = "ᡳ";
				} else if (inputText[i] == "o") {
					outputText[i] = "ᠣ";
				} else if (inputText[i] == "u") {
					if (inputText[i+1] == "u") {
						outputText[i] = "ᡡ";
						outputText[i+1] = "";
						i += 1;
					} else { outputText[i] = "ᡠ"; }
				} else if (inputText[i] == "v" || inputText[i] == "ū") {
					outputText[i] = "ᡡ";
				} else if (inputText[i] == "n") {
					if (inputText[i+1] == "g") {
						outputText[i] = "ᠩ";
						outputText[i+1] = "";
						i += 1;
					} else { outputText[i] = "ᠨ"; }
				} else if (inputText[i] == "b") {
					outputText[i] = "ᠪ";
				} else if (inputText[i] == "p") {
					outputText[i] = "ᡦ";
				} else if (inputText[i] == "c") {
					outputText[i] = "ᠴ";
				} else if (inputText[i] == "j") {
					if (inputText[i+1] == "y") {
						outputText[i] = "ᡷᡳ";
						outputText[i+1] = "";
						i += 1;
					} else { outputText[i] = "ᠵ"; }
				} else if (inputText[i] == "f") {
					outputText[i] = "ᡶ";
				} else if (inputText[i] == "y") {
					outputText[i] = "ᠶ";
				} else if (inputText[i] == "w") {
					outputText[i] = "ᠸ";
				} else if (inputText[i] == "r") {
					outputText[i] = "ᡵ";
				} else if (inputText[i] == "k") {
					if (inputText[i+1] == "\'" || inputText[i+1] == "h") {
						outputText[i] = "ᠺ";
						outputText[i+1] = "";
						i += 1;
					} else { outputText[i] = "ᡴ"; }
				} else if (inputText[i] == "g") {
					if (inputText[i+1] == "\'" || inputText[i+1] == "h") {
						outputText[i] = "ᡬ";
						outputText[i+1] = "";
						i += 1;
					} else { outputText[i] = "ᡤ"; }
				} else if (inputText[i] == "h") {
					if (inputText[i+1] == "\'" || inputText[i+1] == "h") {
						outputText[i] = "ᡭ";
						outputText[i+1] = "";
						i += 1;
					} else { outputText[i] = "ᡥ"; }
				} else if (inputText[i] == "m") {
					outputText[i] = "ᠮ";
				} else if (inputText[i] == "l") {
					outputText[i] = "ᠯ";
				} else if (inputText[i] == "t") {
					outputText[i] = "ᡨ";
				} else if (inputText[i] == "d") {
					if (inputText[i+1] == "z") {
						outputText[i] = "ᡯ";
						outputText[i+1] = "";
						i += 1;
					} else { outputText[i] = "ᡩ"; }
				} else if (inputText[i] == "s") {
					if (inputText[i+1] == "h") {
						outputText[i] = "ᡧ";
						outputText[i+1] = "";
						i += 1;
					} else if (inputText[i+1] == "y") {
						outputText[i] = "ᠰᡟ";
						outputText[i+1] = "";
						i += 1;
					} else { outputText[i] = "ᠰ"; }
				} else if (inputText[i] == "x") {
					outputText[i] = "ᡧ";
				} else if (inputText[i] == "ž") {
					outputText[i] = "ᡰ";
				} else if (inputText[i] == "z") {
					if (inputText[i+1] == "h") {
						if(inputText[i+2] == "i") {
							outputText[i] = "ᡷᡳ";
							outputText[i+1] = "";
							outputText[i+2] = "";
							i += 2;
						} else {
							outputText[i] = "ᡷ";
							outputText[i+1] = "";
							i += 1; 
						}
					} else { outputText[i] = "ᡰ"; }
				} 

				
				
			}

			var result = "";

			for (i = 0; i < outputText.length; i++) {
				result += outputText[i];
			}
			console.log(result);
			console.log(inputText);


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
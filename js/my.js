$("#home").on("pageinit", function () {
	$("#userDiv").hide(function () {

	});

	$("#save").click(function (e) {

		alert("Name Has Been Saved");
		e.preventDefault();
		var data = $("#form").serializeArray();
		var id = Math.floor(Math.random() * 10000001);

		var item = {};
		item.First = ['First:', $('#first').val()];
		item.Last = ['Last:', $('#last').val()];

		$.each(data, function (i, obj) {
			localStorage.setItem(id, JSON.stringify(item));

		});

	});

	$("#show").click(function (e) {
		e.preventDefault();
		$("#userDiv").show(function () {

			$("#form").hide(function () {

				if (localStorage.length === 0) {
					alert("There is no data in Local storage so default data was added.");
					autoFillData();

				}



				//$("#sampleData").append('Album:' + " " + album + '<br />');
				//$("#sampleData").append('Song:' + " " + song + '<br />');
				var makeDiv = document.createElement("div");
				makeDiv.setAttribute("id", "items");
				var makeList = document.createElement("listview");
				makeDiv.appendChild(makeList);
				document.body.appendChild(makeDiv);
				//$("#items").style.display = "block";
				for (var i = 0, len = localStorage.length; i < len; i++) {
					var makeLi = document.createElement("li");
					var linksLi = document.createElement("li");
					makeList.appendChild(makeLi);
					var key = localStorage.key(i);
					var value = localStorage.getItem(key);
					var obj = JSON.parse(value);
					var makeSubList = document.createElement("listview");
					makeLi.appendChild(makeSubList);

					for (var n in obj) {
						var makeSubLi = document.createElement("li");
						makeSubList.appendChild(makeSubLi);
						var optSubText = obj[n][0] + " " + obj[n][1];
						makeSubLi.innerHTML = optSubText;
						makeSubList.appendChild(linksLi);
						$("#userDiv").append(items);


					}
					makeItemLinks(localStorage.key(i), linksLi);
				}



				//Auto Populate Local Storage

				function autoFillData() {
					////The actual JSON OBJECT data required for this to work is coming from our json.js file which is loaded from our html page.
					//Store the JSON OBJECT into Local Storage.
					for (var n in json) {
						var id = Math.floor(Math.random() * 100000001);
						localStorage.setItem(id, JSON.stringify(json[n]));
					}
				}

				//create the edit and delete links for each stored item when displayed.

				function makeItemLinks(key, linksLi) {
					var editLink = document.createElement("a");
					editLink.href = "#";
					editLink.key = key;
					var editText = "Edit Sample";
					editLink.addEventListener("click", editItem);
					editLink.innerHTML = editText;
					linksLi.appendChild(editLink);

					//add line break.
					var breakTag = document.createElement("br");
					linksLi.appendChild(breakTag);

					var deleteLink = document.createElement("a");
					deleteLink.href = "#";
					deleteLink.key = key;
					var deleteText = "Delete Sample";
					deleteLink.addEventListener("click", deleteItem);
					deleteLink.innerHTML = deleteText;
					linksLi.appendChild(deleteLink);

				}

				//Fill with data from localstorage to edit

				function editItem() {
					var value = localStorage.getItem(this.key);
					var item = JSON.parse(value);
                        $("#form").show(function () {
						$("#userDiv").hide(function () {});

					$('#first').val(value.first[1]);
					$('#last').val(value.last[1]);
                     

				});
                    //alert(value);


				}

			});

		});

		function deleteItem() {
			var ask = confirm("Are you sure you want to delete this contact?");
			if (ask) {
				localStorage.removeItem(this.key);
				alert("Contact was deleted!!");
				window.location.reload();
			} else {
				alert("Contact was NOT deleted.");
			}

		}



		$("#clear").click(function (e) {
			e.preventDefault();
			if (localStorage.length === 0) {
				alert("There Is No Info To Clear")
			} else {
				localStorage.clear();
				alert("All Names Have Been Deleted!");
				window.location.reload();
				return false;
			}
		});
	});


});
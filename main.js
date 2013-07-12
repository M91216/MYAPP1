//Michael Bain
//1306
//Advanced Scalable Data
$("#home").on("pageinit", function () {

});

$("#uBrowse").on("pageinit", function () {

});

$("#form").on("pageinit", function () {
	// Gets values from Form and saves to local storage.
	$("#submit").click(function (e) {
		alert("Contact Saved!");
		e.preventDefault();
		var data = $("#addForm").serializeArray();
		var id = Math.floor(Math.random()*10000001);
		
		var item= {};
		item.Album=       ["Album:", $("#inAlbum").val()];
		item.Song=        ["Song:", $("#inSong").val()];
		item.Artist=      ["Artist:", $("#inArtist").val()];
		item.Writer=      ["Writer:", $("#inWriter").val()];
		item.Publisher=   ["Publisher:", $("#inPublisher").val()];
		item.Label=       ["Label:", $("#inLabel").val()];
		item.Date=        ["Date:", $("#date").val()];
		item.Length=      ["Length:", $("#sampLength").val()];
		item.Description= ["Description:", $("#comments").val()];
		
		$.each(data, function (i, obj) {
			localStorage.setItem(id,JSON.stringify(item));
			
			function toggleControls(n){
								switch(n){
									case "on":
									   $("home").style.display = "none";
									   $("clear").style.display = "inline";
									   $("displayLink").style.display = "none";
									   $("addNew").style.display = "inline";
									   break;
									case "off":
									   $("home").style.display = "block";
									   $("clear").style.display = "inline";
									   $("displayLink").style.display = "inline";
									   $("addNew").style.display = "none";
									   $("items").style.display = "none";		    
									   break;
									default:
									   return false;
								}
							}			
			
			

			$("#showData")
				.click(function (e) {
					e.preventDefault();
					
					
					
					
					function getData(){
						toggleControls("on");
						if(localStorage.length === 0){
							alert("There is no data in Local storage so default data was added.");
							
						   
						}
					}
		var makeDiv = document.createElement("div");
						makeDiv.setAttribute("id", "item");
						var makeList = document.createElement("ul");
						makeDiv.appendChild(makeList);
						document.body.appendChild(makeDiv);
						$("item").style.display = "display";	
						for(var i=0, len=localStorage.length; i<len; i++){
							var makeLi = document.createElement("li");
							var linksLi = document.createElement("li");
							makeList.appendChild(makeLi);
							var key = localStorage.key(i);
							var value = localStorage.getItem(key);
							// convert the string from local storage value back to an object by using json.parse
							var obj = JSON.parse(value);
							var makeSubList = document.createElement("ul");
							makeLi.appendChild(makeSubList);
							for(var n in obj){
								var makeSubLi = document.createElement("li");
								makeSubList.appendChild(makeSubLi);
								var optSubText = obj[n][0]+" "+obj[n][1];
								makeSubLi.innerHTML = optSubText;
								makeSubList.appendChild(linksLi);
							}
							makeItemLinks(localStorage.key(i),linksLi); //create edit and delete buttons each item in local storage.
						}
						
					


				});




		});

	});




	//Clear local storage function.         
	$("#clearData").click(function (e) {
		alert("All Contacts Are Deleted!");
		window.localStorage.clear();
		e.preventDefault();
		location.reload();
		return false;
	

		var displayLink =$("display");
		displayLink.on("click",getData);	
		var clearLink = $("clear");
		clearLink.on("click" ,clearLocal);
		var save = $("submitAlbum");
		save.on("click", storeData);
		



	});

                   

});

$("#newsFeed").on("pageinit", function () {

});

$("#about").on("pageinit", function () {

});

$("#newForm").on("pageinit", function () {

});

$("#artists").on("pageinit", function () {

});

$("#songs").on("pageinit", function () {

});

$("#writers").on("pageinit", function () {

});

$("#publishers").on("pageinit", function () {

});

$("#sampleNew").on("pageinit", function () {

});

$("#display").on("pageinit", function () {




});
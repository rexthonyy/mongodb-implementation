WEBSITE_URL = "https://mongoatlas-test.herokuapp.com/";

window.onload = () => {
	getCreateBtn().onclick = () => {
		let id = getCreateIDInput().value;
		let name = getCreateNameInput().value;
		if(id && name){
			let data = { id: id, name: name };
			url = WEBSITE_URL + "/createEntry";
			console.log("Create entry");
			sendPostRequest(url, data)
			.then(json => {
				console.log(json.status);
			}).catch(err => {
				console.error(err);
			});
		}else{
			alert("Enter id and name");
		}
	};

	getReadBtn().onclick = () => {
		let data = { };
		url = WEBSITE_URL + "/readEntry";
		console.log("Read entries");
		sendPostRequest(url, data)
		.then(json => {
			if(json.status == "failed"){
				getEntries().innerHTML = "-No entries-";
			}else{
				let html = '';
				json.users.forEach(user => {
					html += "<p>" + user.id + " " + user.name + "</p>";
				});
				getEntries().innerHTML = html;
			}
		}).catch(err => {
			console.error(err);
		});
	};

	getUpdateBtn().onclick = () => {
		let id = getUpdateIDInput().value;
		let name = getUpdateNameInput().value;
		if(id && name){
			let data = { id: id, name: name };
			url = WEBSITE_URL + "/updateEntry";
			console.log("Update entry");
			sendPostRequest(url, data)
			.then(json => {
				console.log(json.status);
			}).catch(err => {
				console.error(err);
			});
		}else{
			alert("Enter id and name");
		}
	};

	getDeleteBtn().onclick = () => {
		let id = getDeleteIDInput().value;
		let name = getDeleteNameInput().value;
		if(id || name){
			let data = { id: id, name: name };
			url = WEBSITE_URL + "/deleteEntry";
			console.log("Delete entry");
			sendPostRequest(url, data)
			.then(json => {
				console.log(json.status);
			}).catch(err => {
				console.error(err);
			});
		}else{
			alert("Enter id or name");
		}
	};
}

async function sendPostRequest(url, data){
	let response = await fetch(url, {
		method: "POST",
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	});

	let json = await response.json();

	return json;
}

function getCreateIDInput(){
	return document.getElementById("createIDInput");
}

function getCreateNameInput(){
	return document.getElementById("createNameInput");
}

function getCreateBtn(){
	return document.getElementById("createBtn");
}

function getReadBtn(){
	return document.getElementById("readBtn");
}

function getEntries(){
	return document.getElementById("entries");
}

function getUpdateIDInput(){
	return document.getElementById("updateIDInput");
}

function getUpdateNameInput(){
	return document.getElementById("updateNameInput");
}

function getUpdateBtn(){
	return document.getElementById("updateBtn");
}

function getDeleteIDInput(){
	return document.getElementById("deleteIDInput");
}

function getDeleteNameInput(){
	return document.getElementById("deleteNameInput");
}

function getDeleteBtn(){
	return document.getElementById("deleteBtn");
}
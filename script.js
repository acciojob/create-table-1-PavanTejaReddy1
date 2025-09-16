const table = document.getElementById("sampleTable");

function insert_Row() {
	const tr = document.createElement("tr");

	const td1 = document.createElement("td");
	td1.innerText = `New Cell1`;

	const td2 = document.createElement("td");
	td2.innerText = `New Cell2`;

	tr.append(td1, td2);

	const tbody = table.tBodies[0];
    tbody.insertBefore(tr, tbody.firstChild);
}

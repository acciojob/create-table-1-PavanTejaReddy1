const table = document.getElementById("sampleTable");

let cellCount = 0;
function insert_Row() {
	const tr = document.createElement("tr");

	const td1 = document.createElement("td");
	cellCount++;
	td1.innerText = `New Cell${cellCount}`;

	const td2 = document.createElement("td");
	cellCount++;
	td2.innerText = `New Cell${cellCount}`;

	tr.append(td1, td2);

	table.prepend(tr);
}

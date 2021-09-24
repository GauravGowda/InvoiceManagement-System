

const showHeader = () => {
	const headerData = JSON.parse(headers);
	const tableRef = document.getElementById("main-table");
	let tableHeader = "<tr>";
	headerData.forEach(element => {
		tableHeader += "<th>" + element + "</th>";
	});
	tableHeader += "</tr>";	
	tableRef.innerHTML += tableHeader;
}

const showOnLoad = () => {
	showHeader();
	const tableData = JSON.parse(data);
	const tableRef = document.getElementById("main-table");
	tableData.forEach(tableRow => {
		let tableEle = "<tr";
		Object.entries(tableRow).forEach(tableRowEle => {
			const [key,value] = tableRowEle;
			tableEle += "<td>" + value + "</td>";
		});
		tableEle += "</tr>";
		tableRef.innerHTML += tableEle;
	})
}

const add = () => {
	const name = document.getElementById("name-input").value;
	const customer = document.getElementById("cust-no").value;
	const invoice = document.getElementById("invoice-no").value;
	const invoiceamt = document.getElementById("invoice-amt").value;
	const duedate = document.getElementById("due").value;
	const notes = document.getElementById("note").value;
	const tableRef = document.getElementById("main-table");
	tableRef.innerHTML += `<tr><td>${name}</td></tr><td>${customer}</td><td>${invoice}</td><td>${invoiceamt}</td><td>${duedate}</td><td>${notes}</td>`;
}
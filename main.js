function addDataBox2 (i, finding) {

	//Make box with class tooltip//
	const newBox = 	document.createElement("div");
	$(newBox).addClass("tooltip highlight fade-in");

	//Add p element with class tooltiptext to the box
	let misconductPTag = document.createElement("p");
	$(misconductPTag).addClass("tooltiptext");
	newBox.appendChild(misconductPTag);

	//Pass finding into the p tag
	let newFinding = document.createTextNode(finding);
	misconductPTag.appendChild(newFinding); 

	document.getElementById("graphic").appendChild(newBox);
};

function removeHighlight(){
	//Remove highlight//
	let oldBoxes = document.getElementsByClassName("tooltip")
	for (var i = 0; i < oldBoxes.length; i++) {
		oldBoxes[i].classList.remove('highlight');
	 }
}

function writeData (data) {
	for (i = 0; i < data.length; i++) {
		let finding = data[i]['finding_category']
		addDataBox2(i, finding)
}};

counter = 0 //Keeps track of where the visualization is.

function Visualize(){
	counter=counter + 1

	if (counter === 1){
		writeData(force_data);
		console.log('Wrote force entries')
		document.getElementById('previous-button').style.opacity = '1';
		document.getElementById('next-button').innerHTML = "Next";
		document.getElementById('caption1').style.display = "block"
	} else if (counter === 2){
		removeHighlight();
		writeData(dwi_data);
		console.log('Wrote DWI entries')
		document.getElementById('caption1').style.display = "none"
		document.getElementById('caption2').style.display = "block"
	} else if (counter === 3){
		removeHighlight();
		writeData(lying_data);
		document.getElementById('caption2').style.display = "none"
		document.getElementById('caption3').style.display = "block"
	} else if (counter === 4){
		removeHighlight();
		writeData(firearm_data);
		document.getElementById('caption3').style.display = "none"
		document.getElementById('caption4').style.display = "block"
	} else if (counter ===5){
		removeHighlight();
		writeData(domesticEEO_data);
		document.getElementById('caption4').style.display = "none"
		document.getElementById('caption5').style.display = "block"
	} else if (counter ===6){
		removeHighlight();
		writeData(offDuty_data);
		document.getElementById('caption5').style.display = "none"
		document.getElementById('caption6').style.display = "block"
	} else if (counter ===7){
		removeHighlight();
		writeData(fado_data); //
		document.getElementById('caption6').style.display = "none"
		document.getElementById('caption7').style.display = "block"
	} else if (counter ===8){
		removeHighlight();
		writeData(commandDiscipline_data); // TK
		document.getElementById('caption7').style.display = "none"
		document.getElementById('caption8').style.display = "block"
	} else {
		removeHighlight();
		console.log('None left to write!') //TK 
	}
	/// Add remaining Data groups
};

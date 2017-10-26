var questions = [
	"Hai, What is your name ?",
	"How old are you?",
	"enter gender male/female",
	"What is your educational qualification?",
	"Tell me your adderess",
	"Tell me your mobile number",
	"Tell me your email-id"
	];
var answers = [];
var controls = [];
var curQn = -1;
var crCtl;
function initChat(){
	questions = [];
	answers = [];
	var formTable = document.getElementById("FormTable");
	var formRows = formTable.rows.length;
	var count = 0;
	for(i = 0; i < formRows; i++){
	var fRow = formTable.rows[i];
		if(fRow.className != undefined && fRow.className.match("ip") ){
			var text = fRow.cells[1].innerHTML;
			if(fRow.className == "ipList"){
				var inp = document.createElement("SELECT");
				inp.className = "chatInput";
				inp.setAttribute("onblur","getAnswer(this)");
				controls[count] = inp;
					var opts = fRow.cells[2].childNodes[0].childNodes;
					for(k = 0; k < opts.length; k++ ){
						if(opts[k].innerHTML != undefined && opts[k].value != undefined){
							var optans = document.createElement("OPTION");
							optans.innerHTML = opts[k].innerHTML; 
							optans.value = opts[k].value;
							inp.appendChild(optans);
						}
						
					}
					
			}else{
				var inp = document.createElement("INPUT");
				inp.className = "chatInput";
				inp.setAttribute("onblur","getAnswer(this)");
				controls[count] = inp;
			}
			questions[count] = text;
			count += 1;
		}
	}
	getAnswer();
}

function getAnswer(ctl){
	if(ctl != undefined){
			crCtl.innerHTML = ctl.value;
			answers.push(ctl.value);
	}
    var tbl = document.getElementById("chatTable");
	var rows = tbl.rows.length;
	var row1 = tbl.insertRow(rows);
	var row2 = tbl.insertRow(rows+1);
	var cell1 = row1.insertCell(0); 
	var cell2 = row2.insertCell(0); 
	var td1 = document.createElement("DIV");
	var td2 = document.createElement("DIV");
	td1.className = "bot";
	td2.className = "me";
	cell1.appendChild(td1);
	cell2.appendChild(td2);
	curQn += 1;
	if(curQn < questions.length){
	/*
		var inp = document.createElement("INPUT");
		inp.className = "chatInput";
		inp.setAttribute("onblur","getAnswer(this)");
		td2.appendChild(inp);
	*/
		td1.innerHTML = questions[curQn];
		td2.appendChild(controls[curQn]);
		crCtl = td2;
	}else{
		td1.innerHTML = "Thanks";
		console.log(answers);
	}
}


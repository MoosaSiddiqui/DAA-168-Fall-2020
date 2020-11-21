var taSol1, taSol2, taSol3;
var btnRun;

window.onload = function() {
	console.log("Hooray! Its working");
	taSol1 = document.getElementById('ta_sol1');
	taSol2 = document.getElementById('ta_sol2');
	taSol3 = document.getElementById('ta_sol3');
	btnRun = document.getElementById('btnRun');
} //end window.onload

function runEmAll(){
	console.log("Running All Solutions")
	taSol1.value = ""; 	taSol2.value = ""; 	taSol3.value = "";
	var start;
	var end;
	var n=4;
	var layout = { 
		title: 'Responsive to window\'s size!',
		font: {size: 18}
	  };
	var x = [];
	var y = [];
	var config = {responsive: true}
	for (var k = 4; k <= 5; k++) {
		debugger;
		//Runs each solution and measures performance in microseconds
		console.log("In Forloop: Line 18, k = "+k+"\n");
		start = performance.now();
		sol1(n);
		end = performance.now();
		taSol1.value+= ""+n+", "+(end-start)*1000+"\n";
		start = performance.now();
		sol2(n);
		end = performance.now();
		taSol2.value+= ""+n+", "+(end-start)*1000+"\n";
		
		x.push(n);
		y.push((end-start)*1000);
		
		start = performance.now();
		sol3(n);
		end = performance.now();
		taSol3.value+= ""+n+", "+(end-start)*1000+"\n";
		n = n * 2;
		}//end for
		var trace1 = {
			type: 'bar',
			x: x,
			y: y,
			marker: {
				color: '#C8A2C8',
				line: {
					width: 2.5
				}
			}
		  };
		  var data = [ trace1 ];
		Plotly.newPlot('myDiv', data, layout, config );

}//end runEmAll

function sol1(n){
	//Implement your brute-force solution here















	//--This is garbage code: Remove this--//
	for (var i = 1; i <= n; i++) {
		for (var j = 1; j <= n ; j=j*2) {
			for(var k=0;k<50;k++);
		}//end for j
	}//end for i
	//-- End of garbage code --//

	//Mention reference where you got the solution
	//Ref: http://
	//Ref: If you found any paper
}//end sol1

function sol2(n){
	//Implement your recursive back-tracking solution here

	// var n = 8;

	solveNQ();
	// document.getElementById("ta_sol2").value = "";
	// function printSolution(board){
	//   for(var i=0; i<n; i++){
	// 	for(var j=0; j<n; j++){
	// 		document.getElementById("ta_sol2").value +=  (" "+board[i][j]+" ");
			
	// 		debugger;
	// 	}
	// 	document.getElementById("ta_sol2").value += ('\n');
	//   }
	//   document.getElementById("ta_sol2").value += ('\n');
	// }
	
	function isSafe(board, row, col){
	
	  // Checks the ← direction
	  for(var i=0; i<col; i++){
		if (board[row][i] === 1) {
		  return false;
		}
	  }
	
	  // Checks the ↖ direction 
	  for(var i=row, j=col; i>=0 && j>=0; i--, j--){
		if (board[i][j] === 1) {
		  return false;
		}
	  }
	
	  // Checks the ↙ direction 
	  for(var i=row, j=col; j>=0 && i<n; i++, j--){
		if (board[i][j] === 1){
		  return false;
		}
	  }
	
	  return true;
	}
	
	
	function recurseNQ(board, col){
	  if(col===n){
		//   printSolution(board); // <-- print another solution when n==8
		return;  
	  }
	
	  for(var i=0; i<n; i++){
		if(isSafe(board, i, col)){
		  board[i][col]=1;
	
		  recurseNQ(board, col+1);
		  //if(recurseNQ(board, col+1)===true) //<-- you don't need this
			  // return true;
	
		  board[i][col]=0;
		}
	  }
	  return false;
	}
	
	
	function solveNQ(){
	  var board = generateBoard(n);
	  recurseNQ(board, 0);
	  //if(recurseNQ(board, 0)===false){
		//console.log("No solution found");
	   // return false;
	 // }
	 // printSolution(board);
	}
	
	function generateBoard(n){
	  var board=[];
	  for(var i=0; i<n; i++){
		board[i]=[];
		for(var j=0; j<n; j++){
		  board[i][j]=0;
		}
	  }
	  return board;
	}
	
	// //--This is garbage code: Remove this--//
	// for (var i = 1; i <= n; i++) {
	// 	for (var j = 1; j <= n; j++) {
	// 		for(var k=0;k<50;k++);
	// 	}//end for i
	// }//end for j
	//-- End of garbage code --//

	//Mention reference where you got the solution
	//Ref: http://
	//Ref: If you found any paper
}//end sol2

function sol3(n){
	//Implement your dynammic programming solution here

	//--This is garbage code: Remove this--//
	for (var i = 1; i <= n; i++) {
		for(var k=0;k<50;k++);
	}//end for j
	//--End of Garbage Code--//

	//Mention reference where you got the solution
	//Ref: http://
	//Ref: If you found any paper
}//end sol3

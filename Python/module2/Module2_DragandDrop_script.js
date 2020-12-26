//var totalscore = 0;
//var countcorrect = 0;

/*function restart()
{
	/*totalscore=0;
	countcorrect = 0;
	document.getElementById("pop-up").style.visibility = "hidden";
	window.location.reload(true);
}*/

function allowDrop(ev) {
  /* The default handling is to not allow dropping elements. */
  /* Here we allow it by preventing the default behaviour. */
  ev.preventDefault();
}

function drag(ev) {
  /* Here is specified what should be dragged. */
  /* This data will be dropped at the place where the mouse button is released */
  /* Here, we want to drag the element itself, so we set it's ID. */
  ev.dataTransfer.setData("text", ev.target.innerText);
}

function drop(ev) {
  ev.preventDefault();
  var data1=init.result;
  var data=ev.dataTransfer.getData("text");
  
  if (data.substr(4) == data1.substr(4))
  {
  	document.getElementById(ev.target.id.toString()).style.backgroundColor="green";
  	document.getElementById(ev.target.id.toString()).ondragover="";
  	document.getElementById(data).draggable="false";
  	ev.target.appendChild(document.getElementById(data));
  	
  	/*if(countcorrect == 6)
  		document.getElementById("pop-up").style.visibility="visible";
  	*/
  }
  else 
  {
  	document.getElementById(ev.target.id.toString()).style.backgroundColor="red";
  	/*
  	var nodeCopy = document.getElementById(data).cloneNode(true);
 	nodeCopy.id = "newId"; //We cannot use the same ID
  	ev.target.appendChild(nodeCopy);*/
  	//totalscore-=50;
  	//document.getElementById("correctscore").innerHTML=totalscore;
  }
}
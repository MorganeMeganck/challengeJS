
var tab1 = document.createElement("p");
var node1 = document.createTextNode("This is new.");
tab1.appendChild(node1);
var element = document.getElementById("table1");
element.appendChild(tab1);

var tab2 = document.createElement("p");
var node2 = document.createTextNode("This is new.");
tab2.appendChild(node2);
var element = document.getElementById("table2");
element.appendChild(tab2);

var grah = document.createElement("p");
var node = document.createTextNode("This is new.");
graph.appendChild(node);

var element = document.getElementById("firstHeading");
var child = document.getElementById("firstHeading");
element.insertBefore(graph, child);

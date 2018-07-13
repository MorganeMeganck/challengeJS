var ourRequest = new XMLHttpRequest();
var dataBecode;
var dataAjax = [];
function createCont(){
  var tabContAjax = document.createElement("div");
  tabContAjax.classList.add("Ajax");
  var tabParAjax = document.getElementById("content");
  var bodyContent = document.getElementById("bodyContent");
  tabParAjax.insertBefore(tabContAjax,bodyContent);
}

createCont();

ourRequest.open ("GET","https://inside.becode.org/api/v1/data/random.json");
ourRequest.onload = function(){
 dataBecode = JSON.parse(ourRequest.responseText);
for (var i = 0; i < dataBecode.length; i++) {
  let obj = {
    "x": dataBecode[i][0],
    "y": dataBecode[i][1]
  }
  dataAjax.push(obj);
}

var svgUp = dimple.newSvg(".Ajax", 800, 600);

     var chartUp = new dimple.chart(svgUp, dataAjax);
     chartUp.addCategoryAxis("x", "x");
     chartUp.addMeasureAxis("y", "y");
     chartUp.addSeries(null, dimple.plot.bar);
     chartUp.draw();
     updateChart();
 console.log(dataAjax)
};
ourRequest.send();

function updateChart(){
  ourRequest.open ("GET","https://inside.becode.org/api/v1/data/random.json");
  ourRequest.onload = function(){
   dataBecode = JSON.parse(ourRequest.responseText);
  for (var i = 0; i < dataBecode.length; i++) {
    let obj = {
      "x": dataBecode[i][0],
      "y": dataBecode[i][1]
    }
    dataAjax.push(obj);

  }
d3.select(".Ajax").remove();
createCont();

  var svgUp = dimple.newSvg(".Ajax", 800, 600);
       var chartUp = new dimple.chart(svgUp, dataAjax);
       chartUp.addCategoryAxis("x", "x");
       chartUp.addMeasureAxis("y", "y");
       chartUp.addSeries(null, dimple.plot.bar);
       chartUp.draw();
   console.log(dataAjax)
  };
  ourRequest.send();

setTimeout(function(){updateChart()}, 1000);

}

// ------------------------------var graph 3-----------------------------------------

var tab2 = document.getElementById("table2")

var tabData2 = [];
var tabYear2 =[];
var data2 = [];
var tabCont2 = document.createElement("div");
var tabPars = document.getElementById("mw-content-text");
tabPars.insertBefore(tabCont2,tab2);

var rowColl2 = tab2.getElementsByTagName("tr");




// -------------------------------2eme graphique--------------------------------


var tab1 = document.getElementById("table1")
var tabCont = document.createElement("div");
var tabPar = document.getElementById("mw-content-text");
tabPar.insertBefore(tabCont,tab1);
var data= [];
var tabData = [];
var tabYear =[];

var rowColl = tab1.getElementsByTagName("tr");


function pays(IndexStart, newData){
if (tabData.lenght < 10) {
  tabData.push(newData);
} else {
  tabData.splice(IndexStart-1,1, newData);
}
};

for (var i = 2; i < rowColl.length; i++) {
  rowColl[i].addEventListener("click", function(){
    var cellColl = this.getElementsByTagName("td");
    var nomPays = cellColl[0].innerHTML;
    for (var j = 1; j < cellColl.length; j++) {
      var numberCell = cellColl[j].innerHTML;
      numberCell = parseFloat(numberCell.replace(/,/g, "."));
      var paysName = cellColl[0].innerHTML;
      pays(j,numberCell);

    }
    createData();
    filterData()
    d3.select("svg").remove();
    createTitle(nomPays);
    createGraph();
    // console.log(tabData);
    // console.log(data);
  })
}

var year = rowColl[1].getElementsByTagName("th");

for (var i = 2; i < year.length; i++) {
  var yearCell = year[i].innerHTML;
  tabYear.push(yearCell);
}

displayFirst2();

function displayFirst2(){
  var cellColl = rowColl[2].getElementsByTagName("td");
  var nomPays = cellColl[0].innerHTML;
  for (var j = 1; j < cellColl.length; j++) {
    var numberCell = cellColl[j].innerHTML;
    numberCell = parseFloat(numberCell.replace(/,/g, "."));
    var paysName = cellColl[0].innerHTML;
    pays(j,numberCell);

  }
  createData();
  filterData()
  d3.select("svg").remove();
  createTitle(nomPays);
  createGraph();
  createGraph2();
}
function createTitle(title){
  var title1 ="<h4>"+title+"</h4><p>Cliquez sur le pays pour l'afficher</p>";
  tabCont.innerHTML = title1;
}

function createData(){
for (var i = 0; i < tabData.length; i++) {
  let obj = {
    "années": tabYear[i],
    "nombres d'incarcerations": tabData[i]
  }

  if (data < 10) {
  data.push(obj);
  }
  else {
    data.splice(i,1,obj);
  }
 }
}

function filterData(){
  data.forEach(function(el){
    if (isNaN(el["nombres d'incarcerations"])) {
      console.log(data.indexOf(el));

      data.splice(data.indexOf(el),data.length-data.indexOf(el))
    }
    return el
  })

  console.log(data)
}



function createGraph(){
var svg1 = dimple.newSvg(tabCont, 600, 400);
var chart1 = new dimple.chart(svg1, data);
var xAxis = chart1.addCategoryAxis("x", "années");
var yAxis = chart1.addMeasureAxis("y", "nombres d'incarcerations");

chart1.addSeries(null, dimple.plot.line);
chart1.draw(1000);
}

// ---------------------------------3egraph------------------------------------------


// var tab2 = document.getElementById("table2")
//
// var tabData2 = [];
// var tabYear2 =[];
// var data2 = [];
// var tabCont2 = document.createElement("div");
// var tabPars = document.getElementById("mw-content-text");
// tabPars.insertBefore(tabCont2,tab2);
//
// var rowColl2 = tab2.getElementsByTagName("tr");


function pays2(IndexStart, newData){
if (tabData2.lenght < 2) {
  tabData2.push(newData);
} else {
  tabData2.splice(IndexStart-1,1, newData);
}
};

for (var i = 1; i < rowColl2.length; i++) {
  rowColl2[i].addEventListener("click", function(){
    var cellColl2 = this.getElementsByTagName("td");
    var nomPays2 = cellColl2[0].innerHTML;
    for (var k = 1; k < cellColl2.length; k++) {
      var numberCell2 = cellColl2[k].innerHTML;
      numberCell2 = parseFloat(numberCell2.replace(/,/g, "."));
      var paysName2 = cellColl2[0].innerHTML;
      pays2(k,numberCell2);

    }
    createData2();
    filterData2()
    d3.select("svg").remove();
    createTitle2(nomPays2);
    // createGraph();
    createGraph2();
    // console.log(tabData);
    // console.log(data);
  })
}
var years = rowColl2[0].getElementsByTagName("th");

for (var i = 2; i < years.length; i++) {
  var yearCell2 = years[i].innerHTML;
  tabYear2.push(yearCell2);
}

displayFirst();

function displayFirst(){

  var cellCollFirst = rowColl2[1].getElementsByTagName("td");
  var nomPaysFirst = cellCollFirst[0].innerHTML;
  for (var k = 1; k < cellCollFirst.length; k++) {
    var numberCellFirst = cellCollFirst[k].innerHTML;
    numberCellFirst = parseFloat(numberCellFirst.replace(/,/g, "."));
    pays2(k,numberCellFirst);

  }

  createData2();
  filterData2()
  d3.select("svg").remove();
  createTitle2(nomPaysFirst);
  createGraph();
  createGraph2();
}

function createTitle2(title){
  var title2 ="<h4>"+title+"</h4><p>Cliquez sur le pays pour l'afficher</p>";
  tabCont2.innerHTML = title2;
}


//console.log(tabYear);


function createData2(){
for (var i = 0; i < tabData2.length; i++) {
  let obj2 = {
    "années": tabYear2[i],
    "population carcérale": tabData2[i]
  }
  console.log(data2)
  if (data2 < 2) {
  data2.push(obj2);
  }
  else {
    data2.splice(i,1,obj2);
  }
 }
}

function filterData2(){
  data2.forEach(function(el){
    if (isNaN(el["population carcérale"])) {
      console.log(data2.indexOf(el));

      data2.splice(data2.indexOf(el),data2.length-data.indexOf(el))
    }
    return el
  })

  console.log(data2)
}



function createGraph2(){
var svg12 = dimple.newSvg(tabCont2, 600, 400);
var chart2 = new dimple.chart(svg12, data2);
var xAxis2 = chart2.addCategoryAxis("x", "années");
xAxis2.addOrderRule("années",false)
var yAxis2 = chart2.addMeasureAxis("y", "population carcérale");

chart2.addSeries(null, dimple.plot.bar);
chart2.draw(1000);
}

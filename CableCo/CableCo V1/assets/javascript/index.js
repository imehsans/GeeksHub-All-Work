// function ToogleData11() {
//   var data = document.getElementById("overlayedSec");
//   if (data.style.display == "block") {
//     data.style.display = "none";
//   }
// }
var startDate = document.getElementById("perBeg");
startDate.innerHTML += document.getElementById("dateBeg").innerHTML;
var endDate = document.getElementById("perEnd");
endDate.innerHTML += document.getElementById("dateEnd").innerHTML;

var startDate2 = document.getElementById("perBeg2");
startDate2.innerHTML += document.getElementById("dateBeg2").innerHTML;
var endDate2 = document.getElementById("perEnd2");
endDate2.innerHTML += document.getElementById("dateEnd2").innerHTML;
var startDate3 = document.getElementById("perBeg3");
startDate3.innerHTML += document.getElementById("dateBeg3").innerHTML;
var endDate3 = document.getElementById("perEnd3");
endDate3.innerHTML += document.getElementById("dateEnd3").innerHTML;
var startDate4 = document.getElementById("perBeg4");
startDate4.innerHTML += document.getElementById("dateBeg4").innerHTML;
var endDate4 = document.getElementById("perEnd4");
endDate4.innerHTML += document.getElementById("dateEnd4").innerHTML;
var startDate5 = document.getElementById("perBeg5");
startDate5.innerHTML += document.getElementById("dateBeg5").innerHTML;
var endDate5 = document.getElementById("perEnd5");
endDate5.innerHTML += document.getElementById("dateEnd5").innerHTML;

var periodBegin = document.getElementById("mydata1");
var periodEnd = document.getElementById("mydata2");
var topPerform = document.getElementById("performers");
var topPerInner = document.getElementById("innerData");
var chartView = document.getElementById("chart-view");
var periodBegin2 = document.getElementById("mydata12");
var periodEnd2 = document.getElementById("mydata22");
var topPerform2 = document.getElementById("performers2");
var topPerInner2 = document.getElementById("innerData2");
var chartView2 = document.getElementById("chart-view2");
var periodBegin3 = document.getElementById("mydata13");
var periodEnd3 = document.getElementById("mydata23");
var topPerform3 = document.getElementById("performers3");
var topPerInner3 = document.getElementById("innerData3");
var chartView3 = document.getElementById("chart-view3");
var periodBegin4 = document.getElementById("mydata14");
var periodEnd4 = document.getElementById("mydata24");
var topPerform4 = document.getElementById("performers4");
var topPerInner4 = document.getElementById("innerData4");
var chartView4 = document.getElementById("chart-view4");
var periodBegin5 = document.getElementById("mydata15");
var periodEnd5 = document.getElementById("mydata25");
var topPerform5 = document.getElementById("performers5");
var topPerInner5 = document.getElementById("innerData5");
var chartView5 = document.getElementById("chart-view5");

// 1111111111111111
function DateBeg() {
  folldAll();
  periodBegin.style.display = "block";
  document.querySelector(".text-color1").style.color = "black";
}

function DateEnd() {
  folldAll();
  periodEnd.style.display = "block";
  document.querySelector(".text-color2").style.color = "black";
}

function TopPerformers() {
  folldAll();
  topPerform.style.display = "block";
}
function toggleInnerData() {
  if (topPerInner.style.display === "block") {
    topPerInner.style.display = "none";
  } else {
    topPerInner.style.display = "block";
  }
}

function listChart() {
  folldAll();
  chartView.style.display = "block";
  document.querySelector(".w-20-1").style.width = "41.8%";
}

// 2222222222222222222
function DateBeg2() {
  folldAll();
  periodBegin2.style.display = "block";
  document.querySelector(".text-color3").style.color = "black";
}

function DateEnd2() {
  folldAll();
  periodEnd2.style.display = "block";
  document.querySelector(".text-color4").style.color = "black";
}
function TopPerformers2() {
  folldAll();
  topPerform2.style.display = "block";
}

function toggleInnerData2() {
  if (topPerInner2.style.display === "block") {
    topPerInner2.style.display = "none";
  } else {
    topPerInner2.style.display = "block";
  }
}

function listChart2() {
  folldAll();
  chartView2.style.display = "block";
  document.querySelector(".w-20-2").style.width = "41.8%";
}

// 3333333333333333333333
function DateBeg3() {
  folldAll();
  periodBegin3.style.display = "block";
  document.querySelector(".text-color5").style.color = "black";
}

function DateEnd3() {
  folldAll();
  periodEnd3.style.display = "block";
  document.querySelector(".text-color6").style.color = "black";
}

function TopPerformers3() {
  folldAll();
  topPerform3.style.display = "block";
}
function toggleInnerData3() {
  if (topPerInner3.style.display === "block") {
    topPerInner3.style.display = "none";
  } else {
    topPerInner3.style.display = "block";
  }
}

function listChart3() {
  folldAll();
  chartView3.style.display = "block";
  document.querySelector(".w-20-3").style.width = "41.8%";
}

// 4444444444444444
function DateBeg4() {
  folldAll();
  periodBegin4.style.display = "block";
  document.querySelector(".text-color7").style.color = "black";
}

function DateEnd4() {
  folldAll();
  periodEnd4.style.display = "block";
  document.querySelector(".text-color8").style.color = "black";
}

function TopPerformers4() {
  folldAll();
  topPerform4.style.display = "block";
}
function toggleInnerData4() {
  if (topPerInner4.style.display === "block") {
    topPerInner4.style.display = "none";
  } else {
    topPerInner4.style.display = "block";
  }
}

function listChart4() {
  folldAll();
  chartView4.style.display = "block";
  document.querySelector(".w-20-4").style.width = "41.8%";
}

// 5555555555555555
function DateBeg5() {
  folldAll();
  periodBegin5.style.display = "block";
  document.querySelector(".text-color9").style.color = "black";
}
function DateEnd5() {
  folldAll();
  periodEnd5.style.display = "block";
  document.querySelector(".text-color10").style.color = "black";
}
function TopPerformers5() {
  folldAll();
  topPerform5.style.display = "block";
}

function toggleInnerData5() {
  if (topPerInner5.style.display === "block") {
    topPerInner5.style.display = "none";
  } else {
    topPerInner5.style.display = "block";
  }
}
function listChart5() {
  folldAll();
  chartView5.style.display = "block";
  document.querySelector(".w-20-5").style.width = "41.8%";
}
function colorWhite() {
  document.querySelector(".text-color1").style.color = "white";
  document.querySelector(".text-color2").style.color = "white";
  document.querySelector(".text-color3").style.color = "white";
  document.querySelector(".text-color4").style.color = "white";
  document.querySelector(".text-color5").style.color = "white";
  document.querySelector(".text-color6").style.color = "white";
  document.querySelector(".text-color7").style.color = "white";
  document.querySelector(".text-color8").style.color = "white";
  document.querySelector(".text-color9").style.color = "white";
  document.querySelector(".text-color10").style.color = "white";
}

function DNone() {
  topPerform5.style.display =
    periodBegin5.style.display =
    periodEnd5.style.display =
    chartView5.style.display =
    topPerform4.style.display =
    periodBegin4.style.display =
    periodEnd4.style.display =
    chartView4.style.display =
    topPerform3.style.display =
    periodBegin3.style.display =
    periodEnd3.style.display =
    chartView3.style.display =
    topPerform2.style.display =
    periodBegin2.style.display =
    periodEnd2.style.display =
    chartView2.style.display =
    topPerform.style.display =
    periodBegin.style.display =
    periodEnd.style.display =
    chartView.style.display =
      "none";
}

function ConWidth() {
  document.querySelector(".w-20-1").style.width = "20%";
  document.querySelector(".w-20-2").style.width = "20%";
  document.querySelector(".w-20-3").style.width = "20%";
  document.querySelector(".w-20-4").style.width = "20%";
  document.querySelector(".w-20-5").style.width = "20%";
}

function folldAll() {
  DNone();
  ConWidth();
  colorWhite();
}

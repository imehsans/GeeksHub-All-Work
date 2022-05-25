var start_Date = document.getElementById("perBeg");
start_Date.innerHTML += document.getElementById("dateBeg").innerHTML;
var end_Date = document.getElementById("perEnd");
end_Date.innerHTML += document.getElementById("dateEnd").innerHTML;
var start_Date2 = document.getElementById("perBeg2");
start_Date2.innerHTML += document.getElementById("dateBeg2").innerHTML;
var end_Date2 = document.getElementById("perEnd2");
end_Date2.innerHTML += document.getElementById("dateEnd2").innerHTML;
var start_Date3 = document.getElementById("perBeg3");
start_Date3.innerHTML += document.getElementById("dateBeg3").innerHTML;
var end_Date3 = document.getElementById("perEnd3");
end_Date3.innerHTML += document.getElementById("dateEnd3").innerHTML;
var start_Date4 = document.getElementById("perBeg4");
start_Date4.innerHTML += document.getElementById("dateBeg4").innerHTML;
var end_Date4 = document.getElementById("perEnd4");
end_Date4.innerHTML += document.getElementById("dateEnd4").innerHTML;
var start_Date5 = document.getElementById("perBeg5");
start_Date5.innerHTML += document.getElementById("dateBeg5").innerHTML;
var end_Date5 = document.getElementById("perEnd5");
end_Date5.innerHTML += document.getElementById("dateEnd5").innerHTML;

var tex_colid = [
  "#mydata1",
  "#mydata2",
  "#mydata12",
  "#mydata22",
  "#mydata13",
  "#mydata23",
  "#mydata14",
  "#mydata24",
  "#mydata15",
  "#mydata25",
];

var tex_col = [
  ".text-color1",
  ".text-color2",
  ".text-color3",
  ".text-color4",
  ".text-color5",
  ".text-color6",
  ".text-color7",
  ".text-color8",
  ".text-color9",
  ".text-color10",
];

var cont_width = [".w-20-1", ".w-20-2", ".w-20-3", ".w-20-4", ".w-20-5"];
var check_viewids = [
  "#chart-view",
  "#chart-view2",
  "#chart-view3",
  "#chart-view4",
  "#chart-view5",
];

var disp_none = [
  "#mydata1",
  "#mydata2",
  "#performers",
  "#chart-view",
  "#mydata12",
  "#mydata22",
  "#performers2",
  "#chart-view2",
  "#mydata13",
  "#mydata23",
  "#performers3",
  "#chart-view3",
  "#mydata14",
  "#mydata24",
  "#performers4",
  "#chart-view4",
  "#mydata15",
  "#mydata25",
  "#performers5",
  "#chart-view5",
];

var sect_display = [
  "#green-sec",
  "#pink-sec",
  "#blue-sec",
  "#lightblue-sec",
  "#orange-sec",
];
var togg_ids = [
  "#toggler1",
  "#toggler2",
  "#toggler3",
  "#toggler4",
  "#toggler5",
];

function sectionExplore(id) {
  document.querySelector(id).style.display = "block";
}

function onToggler(id) {
  for (var i = 0; i < 5; i++) {
    id === togg_ids[i]
      ? (document.querySelector(togg_ids[i]).style.display = "block")
      : (document.querySelector(togg_ids[i]).style.display = "none");
  }
}

function offToggler(id) {
  document.querySelector(id).style.display = "none";
}
function ShowData(myid) {
  folldAll();
  document.querySelector(myid).style.display = "block";
  for (var i = 0; i < tex_col.length; i++)
    if (myid == tex_colid[i])
      document.querySelector(tex_col[i]).style.color = "black";
}

function showInnerData(myid) {
  if (document.querySelector(myid).style.display === "block") {
    document.querySelector(myid).style.display = "none";
  } else {
    document.querySelector(myid).style.display = "block";
  }
}
function listChart(myid) {
  folldAll();
  document.querySelector(myid).style.display = "block";
  for (var i = 0; i < check_viewids.length; i++)
    if (myid == check_viewids[i])
      document.querySelector(cont_width[i]).style.width = "41.8%";
}
function colorWhite() {
  for (var i = 0; i < tex_col.length; i++)
    document.querySelector(tex_col[i]).style.color = "white";
}
function ConWidth() {
  for (var i = 0; i < cont_width.length; i++)
    document.querySelector(cont_width[i]).style.width = "20%";
}
function ShutDownAll() {
  for (var i = 0; i < sect_display.length; i++)
    document.querySelector(sect_display[i]).style.display = "none";
}
function DNone() {
  for (var i = 0; i < disp_none.length; i++)
    document.querySelector(disp_none[i]).style.display = "none";
}

function folldAll() {
  DNone();
  ConWidth();
  colorWhite();
}

// /////////////////////////////////////////////////////

var currentMonth = 4,
  currentYear = 2022,
  monthMap = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ];

$dayList = $(".days");

var addDayElement = function (date, $container) {
  var element = $(document.createElement("div")).addClass("date");
  if (date.getMonth() !== currentMonth) {
    element.addClass("out-of-scope");
  }
  element.text(date.getDate());
  $container.append(element);
};

var getFirstLastDates = function (date) {
  var startDate, endDate;
  //First, find the first Monday prior to the beginning of the current month.
  startDate = new Date(date.getFullYear(), date.getMonth(), 1);
  while (startDate.getDay() !== 1) {
    startDate.setDate(startDate.getDate() - 1);
  }
  //Now, find the Sunday nearest the last day of the current month.
  endDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  while (endDate.getDay() !== 0) {
    endDate.setDate(endDate.getDate() + 1);
  }
  return [startDate, endDate];
};

var renderDays = function (dateRange) {
  $dayList.empty();
  var startDate = dateRange[0],
    endDate = dateRange[1],
    currentDate = startDate;

  while (currentDate <= endDate) {
    addDayElement(currentDate, $dayList);
    currentDate.setDate(currentDate.getDate() + 1);
  }
};

var loadCalendar = function (date) {
  $(".headline .month").text(monthMap[currentMonth]);
  $(".headline .year").text(currentYear);
  renderDays(getFirstLastDates(date));
};

//start us off on the current month & date;
loadCalendar(new Date());

$(".days").on("click", ".date", function (e) {
  $(".date").removeClass("selected");
  $(this).addClass("selected");
});

$(".click-left").on("click", function (e) {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  loadCalendar(new Date(currentYear, currentMonth));
});

$(".click-right").on("click", function (e) {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  loadCalendar(new Date(currentYear, currentMonth));
});

AOS.init();

let chartConfig = {
  graphset: [
    {
      type: "ring",
      backgroundColor: "none",
      legend: {
        item: {
          cursor: "pointer",
        },
        mediaRules: [
          {
            visible: false,
          },
        ],
      },
      plot: {
        tooltip: {
          sticky: true,
          thousandsSeparator: ",",
          x: "50%",
          y: "50%",
        },
        valueBox: [
          {
            type: "all",
            text: "%t",
            placement: "out",
          },
          {
            visible: false,
          },
        ],
        animation: {
          effect: "ANIMATION_EXPAND_VERTICAL",
          sequence: "ANIMATION_BY_PLOT_AND_NODE",
        },
        borderWidth: "0px",
        slice: "50%",
      },
      plotarea: {
        margin: "70px 0px 10px 0px",
        backgroundColor: "transparent",
        borderRadius: "10px",
        borderWidth: "0px",
      },
      scaleR: {
        refAngle: 300,
      },
      series: [
        {
          text: "0.0%",
          values: [0],
          backgroundColor: "#079FCE",
        },
        {
          text: "7.1%",
          values: [1306],
          backgroundColor: "#079FCE",
        },
        {
          text: "1.0%",
          values: [189],
          backgroundColor: "#4EE2C0",
        },
        {
          text: "9.6%",
          values: [1763],
          backgroundColor: "#EF32FF",
        },
        {
          text: "0.4%",
          values: [75],
          backgroundColor: "#DCB337",
        },
        {
          text: "57.1%",
          values: [10497],
          backgroundColor: "#FF325E",
        },
        {
          text: "24.8%",
          values: [4554],
          backgroundColor: "#7FC2F9",
        },
      ],
    },
  ],
};

zingchart.render({
  id: "myChart",
  data: chartConfig,
  height: "350px",
  width: "350px",
});

function rotateArrow(myid) {
  if (myid == "#arr1") {
    document.querySelector(".arrow-r1").style.transform = "rotateX(180deg)";
    document.querySelector(".arrow-r2").style.transform = "rotateX(180deg)";
  }
}

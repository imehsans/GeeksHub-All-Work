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

var dispNoneResp = [
  "#mydat1",
  "#mydat11",
  "#perf1",
  "#chart-v1",
  "#mydat2",
  "#mydat22",
  "#perf2",
  "#chart-v2",
  "#mydat3",
  "#mydat33",
  "#perf3",
  "#chart-v3",
  "#mydat4",
  "#mydat44",
  "#perf4",
  "#chart-v4",
  "#mydat5",
  "#mydat55",
  "#perf5",
  "#chart-v5",
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

function ExpendAnimat(id) {
  document.styleSheets[0].insertRule(
    "\
  @keyframes anim{\
     0% {\
      height:0%;\
    }\
    100% {\
      height:100%;\
    }\
  }"
  );
  var mydiv = document.getElementById(id);
  mydiv.style.animation = "anim 3s linear forwords";
}

function sectionExplore(id) {
  document.querySelector(id).style.display = "block";
  ExpendAnimat(id);
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

function offTogglerResp(id, disp) {
  document.querySelector(id).style.display = "none";
  document.querySelector(disp).style.display = "block";
}

function ShowDataRespon(myid, disp) {
  folldAll();
  document.querySelector(myid).style.display = "block";
  document.querySelector(disp).style.display = "none";
}

function ShowData(myid) {
  folldAll();
  document.querySelector(myid).style.display = "block";
  for (var i = 0; i < tex_col.length; i++)
    if (myid == tex_colid[i])
      document.querySelector(tex_col[i]).style.color = "black";
}

function showInnerData(myid) {
  var showInner = document.querySelector(myid);
  if (showInner.style.display === "block") {
    showInner.style.display = "none";
  } else {
    showInner.style.display = "block";
  }
}

function rotateArrow(arrow1, arrow2) {
  document.querySelector(arrow1).style.transform = "rotateX(180deg)";
  document.querySelector(arrow2).style.transform = "rotateX(180deg)";
}

function Neg_rotateArrow(arrow1, arrow2) {
  document.querySelector(arrow1).style.transform = "rotateX(360deg)";
  document.querySelector(arrow2).style.transform = "rotateX(360deg)";
}

function showDataWIcon(myid, Arrow1, Arrow2) {
  var showInner = document.querySelector(myid);
  if (showInner.style.display == "block") {
    Neg_rotateArrow(Arrow1, Arrow2);
    showInner.style.display = "none";
  } else {
    rotateArrow(Arrow1, Arrow2);
    showInner.style.display = "block";
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

function DNoneResp() {
  for (var i = 0; i < dispNoneResp.length; i++)
    document.querySelector(dispNoneResp[i]).style.display = "none";
}

function folldAll() {
  DNone();
  DNoneResp();
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
        slice: "55%",
      },
      plotarea: {
        margin: "70px 0px 10px 0px",
        backgroundColor: "transparent",
        borderRadius: "10px",
        borderWidth: "0px",
      },
      scaleR: {
        refAngle: 295,
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
  height: "344px",
  width: "344px",
});

function showProg(myid) {
  var showInner = document.querySelector(myid);
  if (showInner.style.display === "block") {
    showInner.style.display = "none";
  } else {
    showInner.style.display = "block";
  }
}

// ????????????????????///?//////////////////

$(document).ready(function () {
  $(".close_icon").click(function () {
    $(".click_to_show").fadeOut();
  });
  $(".add_more").click(function () {
    $(".click_to_show").fadeIn();
  });

  $(".click-div").on("click", function () {
    // $('.upper_container').slideUp();
    $(this).parent().find(".upper_container").slideToggle();
  });
  $(".text_upper i").on("click", function () {
    $(".upper_container").slideUp();
  });

  $(".popup_dots ").on("click", function () {
    $(".popup_inner").fadeOut();
    $(this).parent().find(".popup_inner").fadeIn();
  });
  $(".icon_close i").on("click", function () {
    $(".popup_inner").fadeOut();
  });
  $(".graph_outer ").on("click", function () {
    $(".popup_graph_ex").fadeOut();
    $(this).parent().find(".popup_graph_ex").fadeIn();
  });
  $(".icon_close i").on("click", function () {
    $(".popup_graph_ex").fadeOut();
  });

  $(".alone_click ").on("click", function () {
    $(".alone_popup").fadeOut();
    $(this).parent().find(".alone_popup").fadeIn();
  });
  $(".icon_close i").on("click", function () {
    $(".popup_inner").fadeOut();
  });

  $(".color_txt ").on("click", function () {
    $(".popup_suggestion").fadeOut();
    $(this).parent().find(".popup_suggestion").fadeIn();
  });
  $(".head_primary .fa-close").on("click", function () {
    $(".popup_suggestion").fadeOut();
  });

  /* */
  $(".clicked_suggestion i").on("click", function () {
    $(".popup_suggestion").fadeOut();
  });
  $(".click-nav").on("click", function () {
    $(".nav-hide").toggle();
  });
  $(".image-click").on("click", function () {
    $(".image-show").toggle();
  });

  // Menu toggle
  $(".calender_container > div").click(function () {
    $(".click_calender").removeClass("head_tex");
    $(this).find(".click_calender").toggleClass("head_tex");
    if (!$(this).hasClass("ads")) {
      $(".calender_wrapper").slideUp();
      $(this).find(".calender_wrapper").slideToggle();
      $(".calender_container > div").removeClass("ads");
      $(this).addClass("ads");
    }
    if ($(this).data("view") === "yaba-daba") {
      $(this).closest(".upper_container").addClass("extra-width");
    } else {
      $(this).closest(".upper_container").removeClass("extra-width");
    }
    if ($(this).data("view") === "third") {
      $(this).addClass("set_bc");
    } else {
      $(".calender_container > div").removeClass("set_bc");
    }
  });
  $(".view_all").click(function () {
    $(".last_seven").slideToggle();
  });

  $(".open_close_div > div > div.wifi_container > div").on(
    "click",
    function () {
      $(this).parent().parent().find(".progress_section").slideToggle();
      $(this).toggleClass("clr_white");
    }
  );
  $("#myUpDiv").on("click", function () {
    let vheight = $(window).height();

    $("html, body").animate(
      {
        scrollTop: (Math.ceil($(window).scrollTop() / vheight) - 1) * vheight,
      },
      500
    );
  });
  $("#myBottomDiv").on("click", function () {
    let vheight = $(window).height();
    $("html, body").animate(
      {
        scrollTop: (Math.floor($(window).scrollTop() / vheight) + 1) * vheight,
      },
      500
    );
  });
  allAnimations();
  resanimationFirst();
  resanimationThird();
  resanimationSecond();
});

let val = 0,
  val2 = 0;
$(document).on("scroll", function () {
  allAnimations();
});
function allAnimations() {
  let viewportHeight = $(window).height();
  let cal = null;
  if ($(".comcast_section_u").length) {
    cal = $(".comcast_section_u").offset();
    if ($(this).scrollTop() > cal.top - viewportHeight * (90 / 100)) {
      if (val === 0) {
        animationFirst();
        animationSecond();
        $("#container_svg").show();
        val = 1;
      }
    }
    cal = $(".progress_image").offset();
    if ($(this).scrollTop() > cal.top - viewportHeight * (90 / 100)) {
      if (val2 === 0) {
        animationThird();
        val2 = 1;
      }
    }
  }

  // prog_1_1_1
  cal = $(".prog_1_1_1").offset();
  if ($(this).scrollTop() > cal.top - viewportHeight * (90 / 100)) {
    $(".prog_1_1_1 .progress-bar").css(
      "width",
      $(".prog_1_1_1 .progress-bar").data("percentage") + "%"
    );
  }
  cal = $(".prog_1_1_2").offset();
  if ($(this).scrollTop() > cal.top - viewportHeight * (90 / 100)) {
    $(".prog_1_1_2 .progress-bar").css(
      "width",
      $(".prog_1_1_2 .progress-bar").data("percentage") + "%"
    );
  }

  // prog_1_1_1
  cal = $(".prog_1_1_1").offset();
  if ($(this).scrollTop() > cal.top - viewportHeight * (90 / 100)) {
    $(".prog_1_1_1 .progress-bar").css(
      "width",
      $(".prog_1_1_1 .progress-bar").data("percentage") + "%"
    );
  }

  // prog_1_1_2
  cal = $(".prog_1_1_2").offset();
  if ($(this).scrollTop() > cal.top - viewportHeight * (90 / 100)) {
    $(".prog_1_1_2 .progress-bar").css(
      "width",
      $(".prog_1_1_2 .progress-bar").data("percentage") + "%"
    );
  }

  // prog_1_2_1
  cal = $(".prog_1_2_1").offset();
  if ($(this).scrollTop() > cal.top - viewportHeight * (90 / 100)) {
    $(".prog_1_2_1 .progress-bar").css(
      "width",
      $(".prog_1_2_1 .progress-bar").data("percentage") + "%"
    );
  }
  // prog_1_2_2
  cal = $(".prog_1_2_2").offset();
  if ($(this).scrollTop() > cal.top - viewportHeight * (90 / 100)) {
    $(".prog_1_2_2 .progress-bar").css(
      "width",
      $(".prog_1_2_2 .progress-bar").data("percentage") + "%"
    );
  }
  // prog_1_3_1
  cal = $(".prog_1_3_1").offset();
  if ($(this).scrollTop() > cal.top - viewportHeight * (90 / 100)) {
    $(".prog_1_3_1 .progress-bar").css(
      "width",
      $(".prog_1_3_1 .progress-bar").data("percentage") + "%"
    );
  }

  // prog_1_3_2
  cal = $(".prog_1_3_2").offset();
  if ($(this).scrollTop() > cal.top - viewportHeight * (90 / 100)) {
    $(".prog_1_3_2 .progress-bar").css(
      "width",
      $(".prog_1_3_2 .progress-bar").data("percentage") + "%"
    );
  }

  // prog_1_4_1
  cal = $(".prog_1_4_1").offset();
  if ($(this).scrollTop() > cal.top - viewportHeight * (90 / 100)) {
    $(".prog_1_4_1 .progress-bar").css(
      "width",
      $(".prog_1_4_1 .progress-bar").data("percentage") + "%"
    );
  }
  // prog_1_3_2
  cal = $(".prog_1_4_2").offset();
  if ($(this).scrollTop() > cal.top - viewportHeight * (90 / 100)) {
    $(".prog_1_4_2 .progress-bar").css(
      "width",
      $(".prog_1_4_2 .progress-bar").data("percentage") + "%"
    );
  }
  if ($(this).scrollTop() > 0) {
    $("#myUpDiv").addClass("teal_color");
  } else {
    $("#myUpDiv").removeClass("teal_color");
  }
  if ($(window).scrollTop() + $(window).height() != $(document).height()) {
    $("#myBottomDiv").addClass("teal_color");
  } else {
    $("#myBottomDiv").removeClass("teal_color");
  }
}

function animationFirst() {
  let circle1 = document.querySelector("svg .circle1");
  let percentageElement1 = document.querySelector(".percentage__num1");
  let i = 1;
  let percentageValue1 = percentageElement1.getAttribute("data-percentage");
  let totalLegth1 = 282.2865905761719 || circle1.getTotalLength();
  let counter;
  circle1.style.strokeDashoffset =
    totalLegth1 - (totalLegth1 * percentageValue1) / 100;
  // counter = setInterval(function() {
  //     (i <= percentageValue1) ? percentageElement1.innerHTML = i++ : clearInterval(counter);
  // }, 1000 / percentageValue1);
  let circle11 = document.querySelector("svg .circle11");
  let percentageElement11 = document.querySelector(".percentage__num11");
  let a = 0;
  let percentageValue11 = percentageElement11.getAttribute("data-percentage");
  let totalLegth11 = 282.2865905761719 || circle11.getTotalLength();
  let counter1;
  circle11.style.strokeDashoffset =
    totalLegth11 - (totalLegth11 * percentageValue11) / 100;
  let percentageElement121 = document.querySelector(".percentage__num121");
  let percentageValue121 = percentageElement121.getAttribute("data-percentage");
  counter1 = setInterval(function () {
    a = a + 89;
    if (a <= percentageValue121) {
      percentageElement121.innerHTML = a;
    } else {
      percentageElement121.innerHTML = percentageValue121;
      clearInterval(counter1);
    }
  }, 1000 / percentageValue121);
}

function animationSecond() {
  let circle2 = document.querySelector("svg .circle2");
  let percentageElement1 = document.querySelector(".percentage__num2");
  let i = 1;
  let percentageValue1 = percentageElement1.getAttribute("data-percentage");
  let totalLegth1 = 282.2865905761719 || circle2.getTotalLength();
  let counter;
  circle2.style.strokeDashoffset =
    totalLegth1 - (totalLegth1 * percentageValue1) / 100;
  counter = setInterval(function () {
    i <= percentageValue1
      ? (percentageElement1.innerHTML = i++)
      : clearInterval(counter);
  }, 1000 / percentageValue1);
}

function animationThird() {
  let percentageElement1 = document.querySelector(".percentage__num3");
  let i = 1;
  let percentageValue1 = percentageElement1.getAttribute("data-percentage");
  let counter;
  counter = setInterval(function () {
    i <= percentageValue1
      ? (percentageElement1.innerHTML = i++)
      : clearInterval(counter);
  }, 1000 / percentageValue1);
}

/**
 * Responsive zingchart for mobile screen without any parameter
 */

var myConfigmobile = {
  backgroundColor: "transparent",
  type: "ring",
  plot: {
    slice: "55%",
    borderWidth: 0,
    animation: {
      effect: 2,
      sequence: 3,
    },
    "value-box": {
      placement: "out",
      "offset-r": "-10",
    },
  },
  series: [
    {
      text: "Courses",
      values: [10497],
      lineWidth: 1,
      backgroundColor: "#FF325E",
      fontWeight: "lighter",
    },
    {
      text: "Chapter",
      values: [4554],
      lineWidth: 1,
      backgroundColor: "#7FC2F9",
    },
    {
      text: "Foundation",
      values: [1],
      lineWidth: 1,
      backgroundColor: "#3D4760",
    },
    {
      text: "Certifications",
      values: [1306],
      lineWidth: 1,
      backgroundColor: "#079FCE",
    },
    {
      text: "Volunteers",
      values: [189],
      lineWidth: 1,
      backgroundColor: "#4EE2C0",
    },
    {
      text: "Websites",
      values: [1763],
      lineWidth: 1,
      backgroundColor: "#EF32FF",
    },
    {
      text: "EXPO",
      values: [75],
      lineWidth: 1,
      backgroundColor: "#DCB337",
    },
  ],
};

zingchart.render({
  id: "mymobileChart",
  data: {
    graphset: [myConfigmobile],
  },
  height: "300",
  width: "300",
});

zingchart.MODULESDIR = "https://cdn.zingchart.com/modules/";
ZC.LICENSE = [
  "569d52cefae586f634c54f86dc99e6a9",
  "ee6b7db5b51705a13dc2339db3edaf6d",
];

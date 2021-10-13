function updateClock() {
  let now = new Date();
  let dayName = now.getDay(),
    mo = now.getMonth(),
    dnum = now.getDate(),
    year = now.getFullYear(),
    hou = now.getHours(),
    minutes = now.getMinutes(),
    second = now.getSeconds(),
    pre = "Am";

  if (hou == 0) {
    hou = 12;
  }
  if (hou > 12) {
    hou = hou - 12;
    pre = "PM";
  }

  Number.prototype.pad = function (digits) {
    for (let n = this.toString(); n.length > digits; n = 0 + n);
  };

  let months = [
    "January",
    "Fabruary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let wek = ["Sunday", "Monday", "TuesDay", "Wednesday", "Thursday", "Friday"];
  let ids = [
    "dayname",
    "month",
    "daynum",
    "year",
    "hour",
    "minutes",
    "seconts",
    "period",
  ];
  let value = [wek[dayName], months[mo], dnum, year, hou, minutes, second, pre];

  for (let i = 0; i < ids.length; i++) {
    document.getElementById(ids[i]).firstChild.nodeValue = value[i];
  }
}

function initClock() {
  updateClock();
  window.setInterval("updateClock()", 1);
}

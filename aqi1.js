function getData() {
  fetch("aqi1.json").then(response => {
    response.json().then(data => {
      //console.log(data);
      updateHtml(data[data.length-1]);
    })
  }).catch(err => {
    console.log(err);
  })
}

function updateHtml(data) {
  let aqiPm25 = calcaqiPm25(data.pm25);
  let aqiPm10 = calcaqiPm10(data.pm10);

  //update HTML
  document.getElementById("time").innerHTML = data.time;
  document.getElementById("aqiPm25").innerHTML = aqiPm25;
  document.getElementById("aqiPm10").innerHTML = aqiPm10;
  document.getElementById("pm25").innerHTML = "(PM2.5: " + data.pm25 + " µg/m³)";
  document.getElementById("pm10").innerHTML = "(PM10: " + data.pm10 + " µg/m³)";

  //set colors
  colorsPm25 = getColor(aqiPm25);
  colorsPm10 = getColor(aqiPm10);
  document.getElementById("containerPm25").style.background = colorsPm25.bg;
  document.getElementById("containerPm25").style.color = colorsPm25.text
  document.getElementById("containerPm10").style.background = colorsPm10.bg;
  document.getElementById("containerPm10").style.color = colorsPm10.text
}

function getColor(aqi) {
  switch (true) {
    case (aqi >= 50 && aqi < 100):
      color = "khaki"; //yellow
      break;
    case (aqi >= 100 && aqi < 150):
      color = "sandybrown"; //orange
      break;
    case (aqi >= 150 && aqi < 200):
      color = "tomato"; //red
      break;
    case (aqi >= 200 && aqi < 300):
      color = "crimson"; //purple
      break;
    case (aqi >= 300):
      color = "firebrick"; //brown
      break;
    default:
      color = "mediumaquamarine"; //green
  }
  return {bg: color, text: (aqi > 200) ? "white" : "black"};
}

function calcaqiPm25(pm25) {
  let pm1 = 0;
	let pm2 = 12;
	let pm3 = 35.4;
	let pm4 = 55.4;
	let pm5 = 150.4;
	let pm6 = 250.4;
	let pm7 = 350.4;
	let pm8 = 500.4;

	let aqi1 = 0;
	let aqi2 = 50;
	let aqi3 = 100;
	let aqi4 = 150;
	let aqi5 = 200;
	let aqi6 = 300;
	let aqi7 = 400;
	let aqi8 = 500;

	let aqiPm25 = 0;

	if (pm25 >= pm1 && pm25 <= pm2) {
		aqiPm25 = ((aqi2 - aqi1) / (pm2 - pm1)) * (pm25 - pm1) + aqi1;
	} else if (pm25 >= pm2 && pm25 <= pm3) {
		aqiPm25 = ((aqi3 - aqi2) / (pm3 - pm2)) * (pm25 - pm2) + aqi2;
	} else if (pm25 >= pm3 && pm25 <= pm4) {
		aqiPm25 = ((aqi4 - aqi3) / (pm4 - pm3)) * (pm25 - pm3) + aqi3;
	} else if (pm25 >= pm4 && pm25 <= pm5) {
		aqiPm25 = ((aqi5 - aqi4) / (pm5 - pm4)) * (pm25 - pm4) + aqi4;
	} else if (pm25 >= pm5 && pm25 <= pm6) {
		aqiPm25 = ((aqi6 - aqi5) / (pm6 - pm5)) * (pm25 - pm5) + aqi5;
	} else if (pm25 >= pm6 && pm25 <= pm7) {
		aqiPm25 = ((aqi7 - aqi6) / (pm7 - pm6)) * (pm25 - pm6) + aqi6;
	} else if (pm25 >= pm7 && pm25 <= pm8) {
		aqiPm25 = ((aqi8 - aqi7) / (pm8 - pm7)) * (pm25 - pm7) + aqi7;
	}
	return aqiPm25.toFixed(0);
}

function calcaqiPm10(pm10) {
	let pm1 = 0;
	let pm2 = 54;
	let pm3 = 154;
	let pm4 = 254;
	let pm5 = 354;
	let pm6 = 424;
	let pm7 = 504;
	let pm8 = 604;

	let aqi1 = 0;
	let aqi2 = 50;
	let aqi3 = 100;
	let aqi4 = 150;
	let aqi5 = 200;
	let aqi6 = 300;
	let aqi7 = 400;
	let aqi8 = 500;

	let aqiPm10 = 0;

	if (pm10 >= pm1 && pm10 <= pm2) {
		aqiPm10 = ((aqi2 - aqi1) / (pm2 - pm1)) * (pm10 - pm1) + aqi1;
	} else if (pm10 >= pm2 && pm10 <= pm3) {
		aqiPm10 = ((aqi3 - aqi2) / (pm3 - pm2)) * (pm10 - pm2) + aqi2;
	} else if (pm10 >= pm3 && pm10 <= pm4) {
		aqiPm10 = ((aqi4 - aqi3) / (pm4 - pm3)) * (pm10 - pm3) + aqi3;
	} else if (pm10 >= pm4 && pm10 <= pm5) {
		aqiPm10 = ((aqi5 - aqi4) / (pm5 - pm4)) * (pm10 - pm4) + aqi4;
	} else if (pm10 >= pm5 && pm10 <= pm6) {
		aqiPm10 = ((aqi6 - aqi5) / (pm6 - pm5)) * (pm10 - pm5) + aqi5;
	} else if (pm10 >= pm6 && pm10 <= pm7) {
		aqiPm10 = ((aqi7 - aqi6) / (pm7 - pm6)) * (pm10 - pm6) + aqi6;
	} else if (pm10 >= pm7 && pm10 <= pm8) {
		aqiPm10 = ((aqi8 - aqi7) / (pm8 - pm7)) * (pm10 - pm7) + aqi7;
	}
	return aqiPm10.toFixed(0);
}

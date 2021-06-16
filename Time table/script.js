function timeFunction() {
var min = new Date();
var hour = min.getHours();
var mins = min.getMinutes();
//var session = "AM";

if (hour == 0){
	hour = 12
}
if (hour > 12){
	session = "PM"
	hour = hour - 12
	
}
if (hour < 10) {
	hour = "0" + hour;
}
if (mins < 10) {
	mins = "0" + mins;
}
var time = hour + ":"+ mins;
document.querySelector('.time').innerHTML = time;
document.querySelector('.am').innerHTML = session
console.log(time)
}
timeFunction()
setInterval(timeFunction, 1000);

// date, day, year

// var hello = 
// 		    var month = new Array();
// 		      month[0] = "01"
// 		      month[1] = "02"
// 		      month[2] = "03"
// 		      month[3] = "04"   
// 		      month[4] = "05"  
//             month[5] = "06"
//             month[6] = "07"
//             month[7] = "08"
//             month[8] = "09"
//             month[9] = "10"
//             month[10] = "11"
//             month[11] = "12"

//             var d = new Date();
//             var n = month[d.getMonth()];
//             console.log(n)

// var hlo = new Date();
// var dt = hlo.getDate()
// console.log(dt)
// var yr = hlo.getFullYear();
// console.log(yr)
// document.querySelector('#datata').innerHTML = hello()
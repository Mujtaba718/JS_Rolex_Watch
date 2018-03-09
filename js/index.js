let secondHand = document.querySelector('.second');
let minuteHand = document.querySelector('.minute');
let hourHand = document.querySelector('.hour');


function setDate() {
	const now = new Date();	
	
	const seconds = now.getSeconds();
	// 90 is the offset we started with
	const secondsDegree = ((seconds/ 60) * 360) - 90; 
	secondHand.style.transform = `rotate(${secondsDegree}deg)`;
	
	
	const minute = now.getMinutes();
	// 90 is the offset we stated with
	const minuteDegree = ((minute/ 60) * 360) - 90; 
	minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
	
	
	const hour = now.getHours();
	// 90 is the offset we started with
	const hourDegree = ((hour/ 12) * 360) - 90; 
	hourHand.style.transform = `rotate(${hourDegree}deg)`;
}


setInterval(setDate, 1000);
const letters = document.querySelectorAll('.ipa-letter');

letters.forEach(letter => {
	const soundFile = letter.getAttribute('data-sound');
	letter.addEventListener('click', () => {
		new Audio(soundFile).play();
	});
});

const button1 = document.getElementById("ng");
const button2 = document.getElementById("h");
const button3 = document.getElementById("l");
const button4 = document.getElementById("r");
const button5 = document.getElementById("w");
const button6 = document.getElementById("j");

const data1 = document.getElementById("data1");
const data2 = document.getElementById("data2");
const data3 = document.getElementById("data3");
const data4 = document.getElementById("data4");
const data5 = document.getElementById("data5");
const data6 = document.getElementById("data6");

button1.addEventListener("click", () => {
  hideAllData();
  data1.style.display = "block";
});

button2.addEventListener("click", () => {
  hideAllData();
  data2.style.display = "block";
});

button3.addEventListener("click", () => {
  hideAllData();
  data3.style.display = "block";
});

button4.addEventListener("click", () => {
  hideAllData();
  data4.style.display = "block";
});

button5.addEventListener("click", () => {
  hideAllData();
  data5.style.display = "block";
});

button6.addEventListener("click", () => {
  hideAllData();
  data6.style.display = "block";
});

function hideAllData() {
  data1.style.display = "none";
  data2.style.display = "none";
  data3.style.display = "none";
  data4.style.display = "none";
  data5.style.display = "none";
  data6.style.display = "none";
}
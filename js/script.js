const sliderNextBtn = document.querySelectorAll('.sliderblock__next-arrow');
const items =document.querySelectorAll('.sliderblock__item');
const sliderLine  = document.querySelector('.sliderblock__slider-line');
let container = document.querySelector('.container');
let width;
const timer = document.querySelectorAll('.sliderblock__item-time-passed')
window.addEventListener('resize', init)

function init(){
	width = container.clientWidth;
	console.log(width)
	sliderLine.style.width = width * items.length + 'px';
	items.forEach(item => {
		item.style.width = width + 'px';
	})
}
init();
let count=items.length-1;
function rollNextSlider(){
	if (count < items.length-1){
		if (count==0)
			timer[items.length-1].style.width='0';
		else
			timer[count-1].style.width='0';
		count++;	
		sliderLine.style.transform= `translate(-${width*count}px)`;
		timer[count].style.width = '100%';

	}
	else if (count == items.length-1){
		timer[count-1].style.width='0';
		count=0;
		sliderLine.style.transform= `translate(-${width*count}px)`;
		timer[count].style.width = '100%';
	}
}
let time= 10000;
timer.forEach(i => {
	i.style.transition = `all ${time/1000}s linear 0s`;
})

rollNextSlider();
let timerIdle = setInterval(rollNextSlider,time);

sliderNextBtn.forEach(i => i.addEventListener('click', function(){
	clearInterval(timerIdle);
	rollNextSlider();
}))

const vasesItems = document.querySelectorAll('.vasesPots__item');
const vasesSliderLine = document.querySelector('.vasesPots__list');

let sum=0;
vasesItems.forEach(i => {
	console.log(i)
	sum= sum + i.clientWidth + 10;
	console.log(i.clientWidth)
})

vasesSliderLine.style.width = sum + 'px';
console.log(sum)
let vasesCount = 0;
let sumWidth = 0;
function rollingVasesIdle(){
	if (sumWidth < vasesSliderLine.clientWidth - (vasesItems[vasesItems.length-1].clientWidth +  vasesItems[vasesItems.length-2].clientWidth + vasesItems[vasesItems.length-3].clientWidth)){
		sumWidth+=vasesItems[vasesCount].clientWidth+10;
		vasesCount++;
		vasesSliderLine.style.transform= `translate(-${sumWidth}px)`;
		
	}
	else{
		vasesCount=0;
		sumWidth=0;
		vasesSliderLine.style.transition = 'all 1s linear 0s'
		vasesSliderLine.style.transform= `translate(0px)`;
		setTimeout(() => {vasesSliderLine.style.transition=`all ${time/1000}s linear 0s`
			clearInterval(vasesTimer);

		}, 1000);
		vasesTimer = setInterval(rollingVasesIdle, time);
	}
	console.log(sumWidth);
}
rollingVasesIdle();
vasesSliderLine.style.transition=`all ${time/1000}s linear 0s`
var vasesTimer = setInterval(rollingVasesIdle, time);



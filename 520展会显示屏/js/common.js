// document.querySelector("html").style.fontSize=(function(){return document.documentElement.clientWidth/1600*62.5+"%";}());
$(function(){			
	setInterval((e) => {
		let date = new Date();
		let doubleFn = (t) => {
			return t < 10 ? '0' + t : t;
		}
		let weekFn = (week) => {
			if(week%6 == 0){
				return '天';
			}else if(week%6 == 1){
				return '一';
			}else if(week%6 == 2){
				return '二';
			}else if(week%6 == 3){
				return '三';
			}else if(week%6 == 4){
				return '四';
			}else if(week%6 == 5){
				return '五';
			}else if(week%6 == 6){
				return '六';
			}
			
		}
		/*--当前日期--*/
		let year = date.getFullYear();
		let month = date.getMonth() + 1;
		let day = date.getDate();
		/*--当前时间--*/
		let hours = date.getHours();
		let minutes = date.getMinutes();
		let seconds = date.getSeconds();
		/*--当前周几--*/
		let nowWeek = `星期${weekFn(date.getDay())}`;

		let nowDate = `${year}/${doubleFn(month)}/${doubleFn(day)}`;
		let nowTime = `${doubleFn(hours)}:${doubleFn(minutes)}`;
		$('#date').html(nowDate);
		$('#time').html(nowTime);
		$('#week').html(nowWeek);
	},1000)
	
})
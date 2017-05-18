    
	    // 路径配置
        require.config({
            paths:{ 
                'echarts' : 'js/echarts',
                'echarts/chart/pie' : 'js/echarts'
            }
        });
        
        
        // 使用
        require(
            [
                'echarts',
                'echarts/chart/line' // 使用柱状图就加载bar模块，按需加载
            ],
    function (ec) {
		
		// 基于准备好的dom，初始化echarts图表
var myChart = echarts.init(document.getElementById('linePv'));


option = {
 	title : {
        text: '2015年9-12月份网站流量',
		x:'center',
		textStyle:{color: '#00BFFF'}
    },
    legend: {
		selectedMode :false,
		y:'50px',
		x:'70px',
        data:['PV','UV'],
		textStyle:{color: '#00BFFF',}
    },
	grid:{  borderWidth:0},
    xAxis : [
        {
			show:true,
            type : 'category',
            boundaryGap : false,
			splitLine : {show:false},
			axisLabel : {
				show : true,
				textStyle : {
				color : 'white',
				fontSize : 14,
				fontWeight : 'bolder'
				}
			},
            data : ['9月','10月','11月','12月'],
        }
    ],
    yAxis : [
        {
			show:false,
            type : 'value',
        }
    ],
    series : [
        {
            name:'PV',
            type:'line',
			itemStyle:{
	                normal:{
	                    label:{
	                        show:true,
	                        textStyle:{
	                            fontSize :14
	                        }
	                    }
	                }
			},
            data:[28850,29645,47637,65270],
            
        },
        {
            name:'UV',
            type:'line',
			itemStyle:{
	                normal:{
	                    label:{
	                        show:true,
	                        textStyle:{
	                            fontSize :14
	                        }
	                    }
	                }
			},
            data:[4173,10997,27472,31816],
           
        }
    ]
};
                    
	
// 为echarts对象加载数据
myChart.setOption(option);
});

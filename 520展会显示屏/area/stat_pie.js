    
	    // 路径配置
        require.config({
            paths:{ 
                'echarts' : 'echarts',
                'echarts/chart/pie' : 'echarts'
            }
        });
        
        
        // 使用
        require(
            [
                'echarts',
                'echarts/chart/pie' // 使用柱状图就加载bar模块，按需加载
            ],
    function (ec) {
		// 基于准备好的dom，初始化echarts图表
var myChart = echarts.init(document.getElementById('pie'));
var labelTop = {
    normal : {
        label : {
            show : true,
            position : 'center',
            formatter : '{b}',
            textStyle: {
                baseline : 'bottom'
            }
        },
        labelLine : {
            show : false
        }
    }
};
var labelFromatter = {
    normal : {
        label : {
            formatter : function (params){
                return (100 - params.value).toFixed(2) + '%'
            },
            textStyle: {
				baseline : 'top',
				fontSize:13
            }
        }
    },
}
var labelBottom = {
    normal : {
        color: '#ccc',
        label : {
            show : true,
            position : 'center'
        },
        labelLine : {
            show : false
        }
    },
    emphasis: {
        color: 'rgba(0,0,0,0)'
    }
};

option = {
    title: {
        textStyle : {
            color : 'rgba(30,144,255,0.8)',
            fontFamily : '微软雅黑',
            fontSize : 35,
            fontWeight : 'bolder'
        }
    },
    series : [
        {
            type : 'pie',
            center : ['15%', '18%'],
            radius : radius,
            x: '0%', // for funnel
            itemStyle : labelFromatter,
            data : [
                {name:'other', value:'', itemStyle : labelBottom},
                {name:'', value:'',itemStyle : labelTop}
            ]
        },
        {
            type : 'pie',
            center : ['50%', '18%'],
            radius : radius,
            x:'20%', // for funnel
            itemStyle : labelFromatter,
            data : [
                {name:'other', value:'', itemStyle : labelBottom},
                {name:'', value:'',itemStyle : labelTop}
            ]
        },
        {
            type : 'pie',
            center : ['85%', '18%'],
            radius : radius,
            x:'40%', // for funnel
            itemStyle : labelFromatter,
            data : [
                {name:'other', value:'', itemStyle : labelBottom},
                {name:'', value:'',itemStyle : labelTop}
            ]
        },
		{
            type : 'pie',
            center : ['0%', '10%'],
            radius : radius,
            x:'0%', // for funnel
            itemStyle : labelFromatter,
            data : [
                {name:'other', value:'', itemStyle : labelBottom},
                {name:'', value:'',itemStyle : labelTop}
            ]
        }
    ]
};
        pie_sales = msg.pie_sales;
		for (var i = 0; i < pie_sales.length; i++) {
		option.series[i].data[0].value = 100 - pie_sales[i][1]; 
	   	option.series[i].data[1].value = pie_sales[i][1]; 	
		option.series[i].data[1].name = pie_sales[i][0];
		}           
// 为echarts对象加载数据
myChart.setOption(option);
});

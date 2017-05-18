    
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
var myChart = echarts.init(document.getElementById('pie_peop'));
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
                return (100 - params.value).toFixed(2)  + '%'
            },
            textStyle: {
				fontSize:14
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
    
    series : [
        {
            type : 'pie',
            center : ['50%', '45%'],
            radius : radius,
            x: '0%', // for funnel
            itemStyle : labelFromatter,
            data : [
                {name:'other', value:'', itemStyle : labelBottom},
                {name:'', value:'',itemStyle : labelTop}
            ]
        }
    ]
};

        var plant_area = msg.pie_userarea;
		option.series[0].data[0].value = 100 - plant_area[1];  
		option.series[0].data[1].value = plant_area[1]; 
		
		var bar = msg.bar;
		var bHtml = '';
		 for (var i = 0; i < bar.length; i++) {
			bHtml += '<dl class="barbox"><dd class="barline"><div w="'+bar[i]+'" style="width:0px;" class="charts_bar"></div></dd>'+bar[i]+'%</dl>';
		}
		jQuery("#bar_list").empty().append(bHtml);
		
		animate();
		$("#plant_area").html(msg.area);
		$("#userCount").html(msg.userCount+"人");
// 为echarts对象加载数据
myChart.setOption(option);
});

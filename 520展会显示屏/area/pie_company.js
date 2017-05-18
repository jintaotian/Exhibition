     
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
var myChart = echarts.init(document.getElementById('pie_company'));


option = {
	title: {
        text: pieCompanyName,
        x: 'center',
        y: 'center',
        itemGap: 20,
        textStyle : {
            color : '#92bbd0',
            fontFamily : '微软雅黑',
            fontSize : 36,
            fontWeight : 'bolder'
        }
    },
	color: pie_companyColor,
	dataRange: {
        min : 0,
        max : 48,
        calculable : false,
		show:false,
        color: ['red','orange','yellow']
    },
    series : [
        {
            name:'上线企业',
            type:'pie',
            radius : pieCompany,
            x: '60%',
            width: '100%',
			itemStyle:{
	                normal:{
	                    label:{
	                        show:true,
	                        textStyle:{
	                            fontSize :20,
	                        }
	                    }
	                }
			},
            funnelAlign: 'left',
            max: 1048, 
			textStyle : {
            
            fontSize : 20
           
        },
            data:[
               
            ]
        }
    ]
};

	var arr = [];
 	for (var i = 0; i < pie_companyData.length; i++) {
		arr[i] = {name:pie_companyData[i][0],value:pie_companyData[i][1]};
	}     
   option.series[0].data = arr;  
// 为echarts对象加载数据
myChart.setOption(option);
});

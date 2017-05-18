 /**
 *
 * ━━━━━━神兽出没━━━━━━
 * 　　　┏┓　　　┏┓
 * 　　┏┛┻━━━┛┻┓
 * 　　┃　　　　　　　┃
 * 　　┃　　　━　　　┃
 * 　　┃　┳┛　┗┳　┃
 * 　　┃　　　　　　　┃
 * 　　┃　　　┻　　　┃
 * 　　┃　　　　　　　┃
 * 　　┗━┓　　　┏━┛Code is far away from bug with the animal protecting
 * 　　　　┃　　　┃    	神兽保佑,代码无bug
 * 　　　　┃　　　┃
 * 　　　　┃　　　┗━━━┓
 * 　　　　┃　　　　　　　┣┓
 * 　　　　┃　　　　　　　┏┛
 * 　　　　┗┓┓┏━┳┓┏┛
 * 　　　　　┃┫┫　┃┫┫
 * 　　　　　┗┻┛　┗┻┛
 *
 * ━━━━━━━━━━━━━━━━
 */
 var msg,pie_sales;
 var provinceName,provinceId;
jQuery(function(){
    /**
     * 初始化界面布局
     */
	//initClient(0,2);
    layoutMgr.init();
	dataMap();
	jQuery("#back-upper-level").click(mapMgr.backUpperLevel);
});

/**
 * 初始化界面布局
 */
var layoutMgr = {
    minWidth:550,
    minHeight:550,
    itemMinW:550,
    init:function(){
        layoutMgr.refreshLayout();
        jQuery(window).resize(function(){ 
            layoutMgr.refreshLayout();
        });
    },
    refreshLayout:function(){
        this.setMinSize(570, 470);
        var bodyw = jQuery("body").width();
        var bodyh = jQuery("body").height();
        var mapw = bodyw * 0.6;
        var itemsw = bodyw * 0.3;
        var maxh = 570;
        var maxw = 470;
        mapw = (mapw < maxh) ? mapw : maxh;
        mapw = (mapw < layoutMgr.minWidth ) ? layoutMgr.minWidth : mapw;
        var margin = (bodyw - mapw - itemsw) / 2;
        jQuery("#client-map").css({"width":"60%","margin-left":"4%","margin-top":"2%"});
        jQuery("#client-map").css({"height":"90%"});
        mapMgr.initMap();
    },
    setMinSize: function (w,h) {
        var htmlw = jQuery("html").width();
        var htmlh = jQuery("html").height();
      
    }
}

var cityCodeMap = {}

var cityMap = {
    'china':'000000',
    '北京':'110000',
    '天津':'120000',
    '河北':'130000',
    '山西':'140000',
    '内蒙古':'150000',
    '辽宁':'210000',
    '吉林':'220000',
    '黑龙江':'230000',
    '上海':'310000',
    '江苏':'320000',
    '浙江':'330000',
    '安徽':'340000',
    '福建':'350000',
    '江西':'360000',
    '山东':'370000',
    '河南':'410000',
    '湖北':'420000',
    '湖南':'430000',
    '广东':'440000',
    '广西':'450000',
    '海南':'460000',
    '重庆':'500000',
    '四川':'510000',
    '贵州':'520000',
    '云南':'530000',
    '西藏':'540000',
    '陕西':'610000',
    '甘肃':'620000',
    '青海':'630000',
    '宁夏':'640000',
    '新疆':'650000',
    '台湾':'710000',
    '香港':'810000',
    '澳门':'820000'
};
var mapMgr = {
	    myChart:null,
	    ecConfig:null,
	    mapGeoData:null,
	    zrEvent:null,
	    curMapLevel:0,
	    parentProvinceMapType:'china',

	    //地图的默认配置
	    option:{
	     title : {
        text: '',
        x:'center',
		y:'center',
        textStyle : {
            color: '#333'
        }
    },
    dataRange: {
        min : 0,
        max : 300,
        calculable : false,
		show:false,
        color: ['red','orange','#cdbb1a'],
        label:true
    },
	series:[{
	            type:'map',
	            mapType:'china',
	            hoverable: false,
	            data:[],
				itemStyle:{
	                normal:{
	                    label:{
	                        show:false,
	                        textStyle:{
	                            color:'#555'
	                        }
	                    }
	                },
	                emphasis:{
					
					borderWidth : 1,
					borderColor : '#fff',
					color : '#f60',
	                    label:{
	                         show:true,
							 textStyle:{
	                            color:'#fff'
	                        }
	                    }
	                }
	            },
				markPoint : {
                symbolSize: 0,       // 标注大小，半宽（半径）参数，当图形为方向或菱形则总宽度为symbolSize * 2
                itemStyle: {
                    normal: {
						label:{show:true},
                        borderColor: '#f60',
                        borderWidth: 2           // 标注边线线宽，单位px，默认为1
                    },
                    emphasis: {label: {show: false}}
                },
                data : [
               
					
                   ]
            },
            geoCoord: {
          		  
               
            }
        },
        {
            name: 'Top5',
            type: 'map',
            mapType: 'china',
            data:[],
			itemStyle:{
				normal:{
					label:{
						show:true,
						
					}
				},
				emphasis:{
				
				
					label:{
						show:true
					}
				}
			},
            markPoint : {
                symbol:'emptyCircle',
                symbolSize : function (v){
					
                    return 7
                },
                effect : {
                    show: true,
                    shadowBlur : 0
                },
                itemStyle:{
                    normal:{
                        label:{show:true}
                    }
                },
                data : [
                   
                ]
            }
        }]
	    },

    /**
     * 地图初始化,默认为初始化到 id 为 client-map的div上,
     */
    initMap:function(dom,defaultMapType,defaultmapLevel){
        dom = dom || jQuery("#client-map")[0];
        mapMgr.initEcharts(dom);
       	mapMgr.initExtendMapData();
        mapMgr.myChart.on(mapMgr.ecConfig.EVENT.MAP_SELECTED,mapMgr.onMapSelected);
        mapMgr.myChart.on(mapMgr.ecConfig.EVENT.CLICK,mapMgr.onClickFn);
        mapMgr.refreshMap();

    },
    
    /**
     * 设置地图的数据，即设置示范田的个数
     */
    setData:function(_data){
        mapMgr.option.series[0].data = _data || mapMgr.option.series[0].data;
    },

    onClickFn:function(msg){
        console.log(msg)
        if(msg.name == "埇桥区" || msg.name == "怀远县"){
            $('.maskWrap').show();
            $('#client-map').addClass('leftMoveClass')
            $('.area-info').css('left', '27.5vw');
        }        
    },

    /**
     * Echarts初始化
     */
    initEcharts:function(dom){
        mapMgr.myChart = echarts.init(dom);
        mapMgr.ecConfig = echarts.config;
        mapMgr.zrEvent = zrender.tool.event;
        return mapMgr.myChart;
    },

    /**
     * 地图扩展初始化,
     * 百度Echarts提供的地图数据仅有全国及各省的详细地图，没有市的详细地图，
     * 在此对地图数据进行扩展，扩展到可以显示市的详细地图
     */
    initExtendMapData:function(){
        mapMgr.mapGeoData=echarts.util.mapData.params;
        for (var city in cityMap) {
            if (cityMap[city].indexOf('0000') != -1){
                continue;
            }
            mapMgr.mapGeoData.params[city] = {
                getGeoJson:(function(c){
                    var geoJsonName = cityMap[c];
                    return function(callback){
                       jQuery.getJSON('340100.json',
                            callback);
                    }            
                })(city)
            }
            cityCodeMap[cityMap[city].toString()]=city;
        }
    },

    /**
     * 刷新地图
     * 当curMapLevel>=2时，不应该再刷新
     */
    refreshMap:function(){
        var code = mapMgr.getCurrentMapTypeCode();
        dataMgr.initPointList(code, mapMgr.curMapLevel);
        jQuery("#client-map").fadeOut("fast",function () {
            mapMgr.myChart.setOption(mapMgr.option,true);
            jQuery("#client-map").fadeIn();
        });
    },
    
    getCurrentMapTypeCode:function () {
        var mt = mapMgr.option.series[0].mapType;
        var code = cityMap[mt];
        return code + '000000';
    },
    /**
     * 地图选择事件处理
     */
    onMapSelected:function(args){
        //要展示的地图类型
        var mt = args.target;
        var level = mapMgr.curMapLevel;
		
        //如果已经到市级别,则不再往下展示地图
        
        if(level == 1){
			
			
			mapMgr.option.title.text = mt;
			$(".sheng-xz").hide();
			$(".xian-xz").hide();		
			$("#client-map").addClass("dl3");
			$("#map").addClass("sft-03");
			$("#client-map").removeClass("bgimg01");
			jQuery("#client-map").css({"width":"33%"});
        	jQuery("#client-map").css("height","60%");
			jQuery(".bot").show();
        	mapMgr.initMap();
			$(".ditu-right").show();
			jQuery("#client-map").css("float","left");
			jQuery(".ditu-right").css("float","right");
           	mapMgr.mapGeoData=echarts.util.mapData.params;
			
            mapMgr.mapGeoData.params[mt] = {
                getGeoJson:(function(mt){
                    var geoJsonName = cityMap[mt];
                    return function(callback){
						
                       jQuery.getJSON(mt+'.json',
                            callback);
                    }            
                })(mt)
            }
			
		
		msg = data[mt];
		jQuery.getScript("stat_pie.js", function() {});
		
		jQuery.getScript("stat_pie_peop.js", function() {});
		 mapMgr.curMapLevel ++;
			
        }

        //全国地图->省地图，记录当前的省的mapType，用于进入市后返回上一级使用
        if(level == 0) {
			mapMgr.option.title.text = mt;
			mapMgr.option.series[1].type = '';
			jQuery("#back-upper-level").show();
			$(".sheng-xz").hide();
			$(".xian-xz").show();
			mapMgr.initMap();
			mapMgr.option.series[0].markPoint.data = [];
			var geoJsonName = cityMap[mt].substring(0,2);
			provinceName = mt;
			provinceId = geoJsonName;
			
			mapMgr.mapGeoData=echarts.util.mapData.params;
			//动态加载县
            mapMgr.mapGeoData.params[mt] = {
                getGeoJson:(function(mt){
                   
                    return function(callback){
                       jQuery.getJSON(geoJsonName +'.json',
                            callback);
                    }            
                })(mt)
            }
			
			//获取试点县并高亮显示
			
			var county = province[geoJsonName].county;
			$("#provinceName").html(mt+"试点县");
			$("#countyCount").html(county.length+"个");
			 var arr = [];            
			 var cHtml = '';
			for (var i = 0; i < county.length; i++) {
				arr[i] = {name:county[i],value:0};
                cHtml += '<li><a href="javascript:nextMap3(\''+county[i]+'\')">'+county[i]+'</a></li>';
			}
			$("#county_list").empty().append(cHtml);
			
			mapMgr.option.series[0].data = arr;
			mapMgr.curMapLevel ++;
        }
		

        /**
         * mapMgr.curMapLevel为0：全国->省
         * mapMgr.curMapLevel为1：省->市
         */
       
        mapMgr.option.series[0].mapType = mt;
        mapMgr.refreshMap();
    },
	    /**
     * 返回上一级地图
     * TODO 如果返回到全国,应该更改为返回首页
     */
    backUpperLevel:function(){
		
		
		if (mapMgr.curMapLevel == 1) {
			
			mapMgr.option.title.text = '';
			mapMgr.option.series[1].type = 'map';
            
			$("#map").removeClass("sft-03");
			mapMgr.initMap();
			$(".sheng-xz").show();
			$(".xian-xz").hide();
			jQuery(".bot").hide();
			$("#client-map").addClass("bgimg01");
			$(".ditu-right").hide();
            mapMgr.curMapLevel -- ;
            mapMgr.option.series[0].mapType = 'china';
            mapMgr.refreshMap();
			
		}else if(mapMgr.curMapLevel == 2){
			mapMgr.option.dataRange.color = ['red','orange','#586f7b'];
			
			$("#map").removeClass("sft-03");
			$("#client-map").addClass("bgimg01");
			$("#client-map").removeClass("dl3");
			mapMgr.option.title.text = provinceName;
			jQuery("#client-map").css({"width":"60%","margin-left":"4%","margin-top":"2%"});
       		jQuery("#client-map").css({"height":"90%"});
			$(".sheng-xz").hide();
			$(".xian-xz").show();
			jQuery(".bot").hide();
			$(".ditu-right").hide();
			mapMgr.initMap();
			mapMgr.mapGeoData=echarts.util.mapData.params;
			//动态加载县
            mapMgr.mapGeoData.params[provinceName] = {
                getGeoJson:(function(provinceName){
                   
                    return function(callback){
                       jQuery.getJSON(provinceId+'.json',
                            callback);
                    }            
                })(provinceName)
            }
	 	mapMgr.curMapLevel -- ;
        mapMgr.option.series[0].mapType = provinceName;
        mapMgr.refreshMap();
			
		}else {
            return;
        }
    }
}


/**
 * 数据控制
 */
var dataMgr = {
    regioncode:'0',
    areaLevel:1,
    total:0,
    curMapData:{}, //当前地图数据
    initPointList:function (regioncode,areaLevel,mt) {
        dataMgr.getPointList(regioncode,areaLevel,mt);
    },
    setNull:function (mt) {
        pointListMgr.refreshData(mt, 0);
        pointListMgr.resetList(0,[]);
    },

    getPointList:function (regioncode, areaLevel) {
        dataMgr.regioncode = regioncode;
        dataMgr.areaLevel = areaLevel;
    }

   
}

function dataMap(){
	
		mapMgr.option.title.text = '';
		var arr1 = [];     
		var arr2 = {};
		var i = 0;
		$.each(data,function (key, value) {
			arr1[i] = {name:key,value:200}
			arr2[key] = value.location;
			i++;
		});
		// mapMgr.option.series[0].markPoint.data = [];
        // mapMgr.option.series[1].markPoint.data = arr1;
		
        // mapMgr.option.series[0].geoCoord = arr2;
        mapMgr.option.series[0].hoverable = true;
        mapMgr.option.series[0].itemStyle.normal.borderColor = '#999';
        // mapMgr.option.series[0].itemStyle.normal.label.show = true;
		mapMgr.option.series[0].markPoint.clickable = true;
        mapMgr.option.series[1].data.push({
                                name: '安徽',
                                value: 1,
                                selected: true
                            });
        nextMap2(34,'安徽');
}

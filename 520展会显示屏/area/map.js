$(function(){
	//读取省级
	var htmlStr = ""; 
	var oUl = $('#prov_list');
	$.each(province,function (key, value) {
	 htmlStr += '<li value='+value.sorting+'><a href="javascript:nextMap2('+key+',\''+value.name+'\')"><span class="qy">'+value.name+'</span><span class="sl">'+value.count+'个</span></a></li>'
	});
	oUl.empty().append(htmlStr);
	var lis=oUl.children("li");
	var arr = [];
	for(var i=0;i<lis.length;i++)
	{
		arr.push(lis[i]);
	}
	arr.sort(function(a,b){return a.value - b.value});  //这里用了数组的sort排序。
	oUl.empty();
	for(var i=0;i<arr.length;i++)
	{
		oUl.append(arr[i]);   //重新加入oUl中。排序成功
	}
});

function nextMap2(id,mt){

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
			$("#provinceName").html(mt);
			$("#countyCount").html(county.length+"个");
			 var arr = [];            
			 var cHtml = "";
			for (var i = 0; i < county.length; i++) {
				arr[i] = {name:county[i],value:0};
				cHtml += '<li><a href="javascript:nextMap3(\''+county[i]+'\')">'+county[i]+'</a></li>';
			}
			$("#county_list").empty().append(cHtml);
			
			mapMgr.option.series[0].data = arr;
			// mapMgr.option.series[0].data = [];
			// mapMgr.option.series[0].data.push({
			//                 name: '蛹桥区',
			//                 value: 1,
			//                 selected: true
			//             });
			
			mapMgr.curMapLevel ++;
        mapMgr.option.series[0].mapType = mt;
        mapMgr.refreshMap();
}

function nextMap3(mt){
			mapMgr.option.dataRange.color = ['red','orange','#ccc'];
			mapMgr.option.title.text = mt;
			$(".sheng-xz").hide();
			$(".xian-xz").hide();
			$("#map").addClass("sft-03");
			$("#client-map").addClass("dl3");
			$("#client-map").removeClass("bgimg01");
			jQuery("#client-map").css("width","28%");
        	jQuery("#client-map").css("height","60%");
			jQuery(".bot").show();
        	mapMgr.initMap();
			$(".ditu-right").show();
			jQuery("#client-map").css("float","left");
			jQuery(".ditu-right").css("float","right");
           	mapMgr.mapGeoData = echarts.util.mapData.params;
			
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
        mapMgr.option.series[0].mapType = mt;
        mapMgr.refreshMap();
}
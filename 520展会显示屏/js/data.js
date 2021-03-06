//县级4个饼图厚度
var radius = [65, 35];
//上线企业
var pieCompanyName = "48家"
var pieCompany = [85,135];//业饼图厚度
var pie_companyData = [["种子企业",42],["肥料企业",3],["农业企业",2],["保险公司",1]];//显示的 名称--数量
var pie_companyColor = ['#586f7b', '#708d9c','#83a6b8','#92bbd0'];//饼图颜色

//上线产品
var pieItemName = "640个"
var pieitem = [85,135];//业饼图厚度
var pie_itemData = [["种子",598],["肥料",21],["农药",17],["农险",4]];
var pie_itemColor = ['#586f7b','#708d9c','#83a6b8','#92bbd0'];

var data = {};
var province = {};


  
  
province['34'] = {name:"安徽", sorting:1,count:12,county:["萧县","埇桥区","固镇县","五河县","淮上区","寿县","临泉县","怀远县","灵璧县","砀山县","霍邱县","泗县"]};
province['15'] = {name:"内蒙古",sorting:5,count:1,county:["翁牛特旗"]};
province['23'] = {name:"黑龙江",sorting:6,count:1,county:["萝北县"]};
province['22'] = {name:"吉林",sorting:7,count:1,county:["辉南县"]};
province['37'] = {name:"山东",sorting:3,count:10,county:["夏津县","禹城市","滕州市","宁阳县","平度市","鄄城县","嘉祥县","高密市","冠县","新泰市"]};
province['32'] = {name:"江苏",sorting:2,count:6,county:["江都区","铜山区","丰县","宝应县","大丰市","高邮市"]};
province['36'] = {name:"江西",sorting:8,count:2,county:["泰和县","鄱阳县"]};
province['42'] = {name:"湖北",sorting:9,count:1,county:["枝江市"]};
province['43'] = {name:"湖南",sorting:10,count:1,county:["岳阳县"]};
province['61'] = {name:"陕西",sorting:11,count:1,county:["蒲城县"]};
province['41'] = {name:"河南",sorting:4,count:7,county:["滑县","浚县","西华县","郸城县","柘城县","新乡县","濮阳县"]};
//试点县：坐标、平台注册人数、注册人数耕地面积比例、耕地面积、 平台上线品种当地销售比例：（玉米、小麦、水稻）、当地农作物面积占总耕地面积地比例：
data['萧县']= {location : [116.93,34.18],userCount : 477,pie_userarea:["耕种面积",7.24],area: 140,pie_sales:[["小麦",75],["玉米",55],["水稻",0]],bar:[60,50,0]};
data['埇桥区']= {location : [116.97,33.63],userCount : 381,pie_userarea:["耕种面积",7.34],area: 230,pie_sales:[["小麦",90],["玉米",65],["水稻",0]],bar:[65,60,0]};
data['固镇县']={location : [117.32,33.32],userCount : 444,pie_userarea:["耕种面积",5.12],area: 150,pie_sales:[["小麦",46],["玉米",53],["水稻",0]],bar:[15,50,0]};
data['五河县']={location : [117.88,33.15],userCount : 5,pie_userarea:["耕种面积",0.2],area: 143,pie_sales:[["小麦",63],["玉米",20],["水稻",34.90]],bar:[20,60,55]};
data['淮上区']={location : [117.35,32.97]};
data['临泉县']={location : [115.25,33.07]};
data['寿县']={location : [116.78,32.58]};
data['怀远县']={location : [117.18,32.97],userCount : 11,pie_userarea:["耕种面积",0],area: 200,pie_sales:[["小麦",70],["玉米",50],["水稻",90]],bar:[380,70,80]};
data['灵璧县']={location : [117.55,33.55]};
data['砀山县']={location : [116.35,34.42]};
data['霍邱县']={location : [116.27,32.33]};
data['泗县']={location : [117.88,33.48]};

data['翁牛特旗']= {location : [119.02,42.93],userCount : 772,pie_userarea:["耕种面积",1.28],area: 450.6,pie_sales:[["小麦",4.88],["玉米",43.28],["水稻",3.55]],bar:[0,10,0]};
data['萝北县']= {location : [130.83,47.58],userCount : 3,pie_userarea:["耕种面积",0.1],area: 120,pie_sales:[["小麦",0],["玉米",54.17],["水稻",41.67]],bar:[0,30,0]};
data['辉南县']= {location : [126.03,42.68],userCount : 426,pie_userarea:["耕种面积",5.34],area: 120,pie_sales:[["小麦",0],["玉米",50],["水稻",40]],bar:[0,2,0]};
//山东
data['夏津县']={location : [116,36.95],userCount : 147,pie_userarea:["耕种面积",1.4],area: 80,pie_sales:[["小麦",65],["玉米",60],["水稻",0]],bar:[10,50,0]};
data['禹城市']={location : [116.63,36.93],userCount : 65,pie_userarea:["耕种面积",2.67],area: 65,pie_sales:[["小麦",75],["玉米",75],["水稻",0]],bar:[10,15,0]};
data['滕州市']={location : [117.15,35.08],userCount : 629,pie_userarea:["耕种面积",0.44],area: 100,pie_sales:[["小麦",90],["玉米",70],["水稻",0]],bar:[10,65,0]};
data['宁阳县']={location : [116.8,35.77],userCount : 217,pie_userarea:["耕种面积",3.47],area: 80,pie_sales:[["小麦",85],["玉米",75],["水稻",0]],bar:[10,60,0]};
data['平度市']={location : [119.95,36.78],userCount : 60,pie_userarea:["耕种面积",0.03],area: 270,pie_sales:[["小麦",75],["玉米",65],["水稻",0]],bar:[10,50,0]};
data['鄄城县']={location : [115.5,35.57]};
data['嘉祥县']={location : [116.33,35.42]};
data['高密市']={location : [119.75,36.38]};
data['冠县']={location : [115.43,36.48]};
data['新泰市']={location : [117.77,35.92]};
//江苏
data['江都区']={location : [119.55,32.43],userCount : 1107,pie_userarea:["耕种面积",20.49],area: 90,pie_sales:[["小麦",55],["玉米",30],["水稻",61]],bar:[60,30,85]};
data['铜山区']={location : [117.17,34.18],userCount : 320,pie_userarea:["耕种面积",3.33],area: 170,pie_sales:[["小麦",58],["玉米",32],["水稻",31]],bar:[75,85,70]};
data['丰县']={location : [116.6,34.7],userCount : 165,pie_userarea:["耕种面积",0.92],area: 125,pie_sales:[["小麦",48],["玉米",68],["水稻",6.40]],bar:[80,60,20]};
data['宝应县']={location : [119.3,33.23],userCount : 2871,pie_userarea:["耕种面积",31.94],area: 90,pie_sales:[["小麦",85],["玉米",0],["水稻",95]],bar:[50,0,75]};
data['大丰市']={location : [120.47,33.2],userCount : 188,pie_userarea:["耕种面积",6.12],area: 138,pie_sales:[["小麦",65],["玉米",50],["水稻",43]],bar:[78,12,55]};
data['高邮市']={location : [119.43,32.78]};
//江西
data['泰和县']={location : [114.88,26.8]};
data['鄱阳县']={location : [116.67,29]};
//湖北
data['枝江市']={location : [111.77,30.43],userCount : 1,pie_userarea:["耕种面积",0],area: 70,pie_sales:[["小麦",13],["玉米",10],["水稻",20]],bar:[20,20,50]};
//湖南
data['岳阳县']={location : [113.12,29.15],userCount : 0,pie_userarea:["耕种面积",0],area: 60,pie_sales:[["小麦",0],["玉米",8],["水稻",90]],bar:[0,10,25]};
//陕西
data['蒲城县']={location : [109.58,34.95]};
//河南
data['滑县']={location : [114.52,35.58],userCount : 472,pie_userarea:["耕种面积",1.21],area: 180,pie_sales:[["小麦",77],["玉米",55],["水稻",0]],bar:[15,25,0]};	
data['浚县']={location : [114.55,35.67],userCount : 93,pie_userarea:["耕种面积",1],area: 90,pie_sales:[["小麦",66],["玉米",87],["水稻",0]],bar:[7,8,0]};	
data['西华县']={location : [114.53,33.8],userCount : 54,pie_userarea:["耕种面积",0.52],area: 100,pie_sales:[["小麦",60],["玉米",90],["水稻",0]],bar:[5,6,0]};
data['郸城县']={location : [115.2,33.65],userCount : 74,pie_userarea:["耕种面积",1.6],area: 163,pie_sales:[["小麦",48],["玉米",80],["水稻",0]],bar:[10,7,0]};
data['柘城县']={location : [115.3,34.07],userCount : 1,pie_userarea:["耕种面积",0],area: 80,pie_sales:[["小麦",75],["玉米",87],["水稻",0]],bar:[5,7,0]};
data['新乡县']={location : [113.8,35.2]};
data['濮阳县']={location : [115.02,35.7]};

var county_data = {};
//2016试点县



/*
county_data['辉南县']={location : [126.03,42.68],is_start:1}
county_data['萝北县']={location : [130.83,47.58],is_start:1}
county_data['丰县']={location : [116.6,34.7],is_start:1}
county_data['冠县']={location : [115.43,36.48],is_start:1}
county_data['滑县']={location : [114.52,35.58],is_start:1}
county_data['翁牛特旗']={location : [119.02,42.93],is_start:1}
county_data['萧县']={location : [116.93,34.18],is_start:1}
county_data['泗县']={location : [117.88,33.48],is_start:1}
county_data['岳阳县']={location : [113.12,29.15],is_start:1}
county_data['鄱阳县']={location : [116.67,29],is_start:1}
county_data['寿县']={location : [116.78,32.58],is_start:1}
county_data['浚县']={location : [114.55,35.67],is_start:1}

*/

county_data['科尔沁右翼前旗']={location : [121.92,46.07],is_start:0}
county_data['科尔沁左翼中旗']={location : [123.32,44.13],is_start:0}
county_data['科尔沁区']={location : [122.27,43.62],is_start:0}
county_data['赤峰市']={location : [118.92,42.27],is_start:0}
county_data['通辽市']={location : [122.27,43.62],is_start:0}
county_data['新民市']={location : [122.82,42],is_start:0}
county_data['辽中县']={location : [122.72,41.52],is_start:0}
county_data['康平县']={location : [123.35,42.75],is_start:0}
county_data['东港市']={location : [124.15,39.87],is_start:0}
county_data['黑山县']={location : [122.12,41.7],is_start:0}
county_data['大洼县']={location : [122.07,40.98],is_start:0}
county_data['铁岭县']={location : [123.83,42.3],is_start:0}
county_data['开原市']={location : [124.03,42.55],is_start:0}
county_data['昌图县']={location : [124.1,42.78],is_start:0}
county_data['长春市']={location : [125.32,43.9],is_start:0}
county_data['松原市']={location : [124.82,45.13],is_start:0}
county_data['榆树市']={location : [126.55,44.82],is_start:0}
county_data['公主岭市']={location : [124.82,43.5],is_start:0}
county_data['农安县']={location : [125.18,44.43],is_start:0}
county_data['梨树县']={location : [124.33,43.32],is_start:0}
county_data['扶余市']={location : [126.02,44.98],is_start:0}
county_data['长岭县']={location : [123.98,44.28],is_start:0}
county_data['德惠市']={location : [125.7,44.53],is_start:0}
county_data['双辽市']={location : [123.5,43.52],is_start:0}
county_data['九台市']={location : [125.83,44.15],is_start:0}
county_data['伊通满族自治县']={location : [125.3,43.35],is_start:0}
county_data['镇赉县']={location : [123.2,45.85],is_start:0}
county_data['舒兰市']={location : [126.95,44.42],is_start:0}
county_data['洮南市']={location : [122.78,45.33],is_start:0}
county_data['乾安县']={location : [124.02,45.02],is_start:0}
county_data['东丰县']={location : [125.53,42.68],is_start:0}
county_data['洮北区']={location : [122.85,45.62],is_start:0}
county_data['同江市']={location : [132.52,47.65],is_start:0}
county_data['哈尔滨市']={location : [126.53,45.8],is_start:0}
county_data['齐齐哈尔市']={location : [123.95,47.33],is_start:0}
county_data['大庆市']={location : [125.03,46.58],is_start:0}
county_data['房山']={location : [116.13,39.75],is_start:0}
county_data['宝坻']={location : [117.3,39.72],is_start:0}
county_data['大名']={location : [115.15,36.28],is_start:0}
county_data['定州']={location : [114.97,38.52],is_start:0}
county_data['深圳']={location : [114.05,22.55],is_start:0}
county_data['魏县']={location : [114.93,36.37],is_start:0}
county_data['景县']={location : [116.27,37.7],is_start:0}
county_data['临漳']={location : [114.62,36.35],is_start:0}
county_data['藁城']={location : [114.83,38.03],is_start:0}
county_data['辛集']={location : [115.22,37.92],is_start:0}
county_data['河间']={location : [116.08,38.43],is_start:0}
county_data['张北']={location : [114.7,41.15],is_start:0}
county_data['尚义']={location : [113.97,41.08],is_start:0}
county_data['康保']={location : [114.62,41.85],is_start:0}
county_data['沽源']={location : [115.7,41.67],is_start:0}
county_data['赤诚']={location : [115.83,40.92],is_start:0}
county_data['崇礼']={location : [115.27,40.97],is_start:0}
county_data['宣化']={location : [115.05,40.6],is_start:0}
county_data['蔚县']={location : [114.57,39.85],is_start:0}
county_data['平度']={location : [119.95,36.78],is_start:0}
county_data['滕州']={location : [117.15,35.08],is_start:0}
county_data['宁阳']={location : [116.8,35.77],is_start:0}
county_data['禹城']={location : [116.63,36.93],is_start:0}
county_data['夏津']={location : [116,36.95],is_start:0}
county_data['商河']={location : [117.15,37.32],is_start:0}
county_data['莱西']={location : [120.5,36.87],is_start:0}
county_data['高密']={location : [119.75,36.38],is_start:0}
county_data['寿光']={location : [118.73,36.88],is_start:0}
county_data['汶上']={location : [116.48,35.73],is_start:0}
county_data['梁山']={location : [116.08,35.8],is_start:0}
county_data['嘉祥']={location : [116.33,35.42],is_start:0}
county_data['曲阜']={location : [116.98,35.58],is_start:0}
county_data['岱岳']={location : [117,36.18],is_start:0}
county_data['肥城']={location : [116.77,36.18],is_start:0}
county_data['郯城']={location : [118.35,34.62],is_start:0}
county_data['齐河']={location : [116.75,36.8],is_start:0}
county_data['东昌府']={location : [115.98,36.45],is_start:0}
county_data['惠民']={location : [117.5,37.48],is_start:0}
county_data['曹县']={location : [115.53,34.83],is_start:0}
county_data['鄄城']={location : [115.5,35.57],is_start:0}
county_data['成武']={location : [115.88,34.95],is_start:0}
county_data['东平']={location : [116.47,35.93],is_start:0}
county_data['邹城']={location : [116.97,35.4],is_start:0}
county_data['昌乐']={location : [118.82,36.7],is_start:0}
county_data['郸城']={location : [115.2,33.65],is_start:0}
county_data['柘城']={location : [115.3,34.07],is_start:0}
county_data['西华']={location : [114.53,33.8],is_start:0}
county_data['唐河']={location : [112.83,32.7],is_start:0}
county_data['太康']={location : [114.85,34.07],is_start:0}
county_data['邓州']={location : [112.08,32.68],is_start:0}
county_data['商水']={location : [114.6,33.53],is_start:0}
county_data['鹿邑']={location : [115.48,33.87],is_start:0}
county_data['淮阳']={location : [114.88,33.73],is_start:0}
county_data['项城']={location : [114.9,33.45],is_start:0}
county_data['民权']={location : [115.13,34.65],is_start:0}
county_data['方城']={location : [113,33.27],is_start:0}
county_data['长葛']={location : [113.77,34.22],is_start:0}
county_data['新野']={location : [112.35,32.52],is_start:0}
county_data['沈丘']={location : [115.07,33.4],is_start:0}
county_data['内黄']={location : [114.9,35.95],is_start:0}
county_data['南阳']={location : [112.52,33],is_start:0}
county_data['江都']={location : [119.55,32.43],is_start:0}
county_data['铜山']={location : [117.17,34.18],is_start:0}
county_data['宝应']={location : [119.3,33.23],is_start:0}
county_data['大丰']={location : [120.47,33.2],is_start:0}
county_data['高邮']={location : [119.43,32.78],is_start:0}
county_data['兴化']={location : [119.85,32.92],is_start:0}
county_data['如东']={location : [121.18,32.32],is_start:0}
county_data['邳州']={location : [117.95,34.32],is_start:0}
county_data['睢宁']={location : [117.95,33.9],is_start:0}
county_data['金湖']={location : [119.02,33.02],is_start:0}
county_data['射阳']={location : [120.25,33.78],is_start:0}
county_data['沭阳']={location : [118.77,34.13],is_start:0}
county_data['泗洪']={location : [118.22,33.47],is_start:0}
county_data['滨海']={location : [117.68,39.03],is_start:0}
county_data['埇桥']={location : [116.97,33.63],is_start:0}
county_data['固镇']={location : [117.32,33.32],is_start:0}
county_data['五河']={location : [117.88,33.15],is_start:0}
county_data['怀远']={location : [117.18,32.97],is_start:0}
county_data['临泉']={location : [115.25,33.07],is_start:0}
county_data['霍邱']={location : [116.27,32.33],is_start:0}
county_data['蒙城']={location : [116.57,33.27],is_start:0}
county_data['涡阳']={location : [116.22,33.52],is_start:0}
county_data['天长']={location : [119,32.7],is_start:0}
county_data['颍上']={location : [116.27,32.63],is_start:0}
county_data['无为']={location : [117.92,31.3],is_start:0}
county_data['长丰']={location : [117.17,32.48],is_start:0}
county_data['砀山']={location : [116.35,34.42],is_start:0}
county_data['和县']={location : [118.37,31.72],is_start:0}
county_data['仁寿']={location : [104.15,30],is_start:0}
county_data['中江']={location : [104.68,31.03],is_start:0}
county_data['三台']={location : [105.08,31.1],is_start:0}
county_data['宣汉']={location : [107.72,31.35],is_start:0}
county_data['岳池']={location : [106.43,30.55],is_start:0}
county_data['雁江']={location : [104.65,30.12],is_start:0}
county_data['泸县']={location : [105.38,29.15],is_start:0}
county_data['宜宾']={location : [104.62,28.77],is_start:0}
county_data['罗定']={location : [111.57,22.77],is_start:0}
county_data['梅县']={location : [116.05,24.28],is_start:0}
county_data['监利县']={location : [112.88,29.82],is_start:0}
county_data['洪湖市']={location : [113.45,29.8],is_start:0}
county_data['公安县']={location : [112.23,30.07],is_start:0}
county_data['荆州市']={location : [112.23,30.33],is_start:0}
county_data['武汉市']={location : [114.3,30.6],is_start:0}
county_data['十堰市']={location : [110.78,32.65],is_start:0}
county_data['襄阳市']={location : [112.2,32.08],is_start:0}
county_data['长沙县']={location : [113.07,28.25],is_start:0}
county_data['宁乡县']={location : [112.55,28.25],is_start:0}
county_data['醴陵市']={location : [113.48,27.67],is_start:0}
county_data['桃源县']={location : [111.48,28.9],is_start:0}
county_data['上高县']={location : [114.92,28.23],is_start:0}
county_data['德兴市']={location : [117.57,28.95],is_start:0}
county_data['东乡县']={location : [116.62,28.23],is_start:0}
county_data['临川县']={location : [116.35,27.98],is_start:0}
county_data['金溪县']={location : [116.77,27.92],is_start:0}
county_data['乐安县']={location : [115.83,27.43],is_start:0}
county_data['万年县']={location : [117.07,28.7],is_start:0}
county_data['余江县']={location : [116.82,28.2],is_start:0}
county_data['贵溪市']={location : [117.22,28.28],is_start:0}
county_data['余干县']={location : [116.68,28.7],is_start:0}
county_data['乐平市']={location : [117.12,28.97],is_start:0}
county_data['崇仁县']={location : [116.05,27.77],is_start:0}
county_data['吉安市']={location : [114.98,27.12],is_start:0}
county_data['太原市']={location : [112.55,37.87],is_start:0}
county_data['闻喜县']={location : [111.22,35.35],is_start:0}
county_data['临潼区']={location : [109.22,34.37],is_start:0}
county_data['城固县']={location : [107.33,33.15],is_start:0}
county_data['眉县']={location : [107.75,34.28],is_start:0}
county_data['岐山县']={location : [107.62,34.45],is_start:0}
county_data['凤翔县']={location : [107.38,34.52],is_start:0}
county_data['陈仓区']={location : [107.37,34.37],is_start:0}
county_data['扶风县']={location : [107.87,34.37],is_start:0}
county_data['杨凌区']={location : [108.07,34.28],is_start:0}
county_data['武功县']={location : [108.2,34.27],is_start:0}
county_data['周至县']={location : [108.2,34.17],is_start:0}
county_data['洛川县']={location : [109.43,35.77],is_start:0}
county_data['甘泉县']={location : [109.35,36.28],is_start:0}
county_data['富县']={location : [109.37,35.98],is_start:0}
county_data['榆林市']={location : [109.73,38.28],is_start:0}
county_data['广河县']={location : [103.58,35.48],is_start:0}
county_data['安定县']={location : [104.62,35.58],is_start:0}
county_data['凉州区']={location : [102.63,37.93],is_start:0}
county_data['民勤县']={location : [103.08,38.62],is_start:0}
county_data['泾川县']={location : [107.37,35.33],is_start:0}
county_data['宁县']={location : [107.92,35.5],is_start:0}
county_data['甘谷县']={location : [105.33,34.73],is_start:0}
county_data['高台县']={location : [99.82,39.38],is_start:0}
county_data['临泽县']={location : [100.17,39.13],is_start:0}
county_data['民和县']={location : [102.8,36.33],is_start:0}
county_data['西吉县']={location : [105.73,35.97],is_start:0}
county_data['奇台县']={location : [89.58,44.02],is_start:0}
county_data['乌什县']={location : [79.23,41.22],is_start:0}
county_data['莎车县']={location : [77.23,38.42],is_start:0}
county_data['农一师（阿拉尔市）']={location : [81.28,40.55],is_start:0}
county_data['农二师（巴音郭楞）']={location : [86.15,41.77],is_start:0}
county_data['农十师（阿勒泰）']={location : [88.13,47.85],is_start:0}


county_data['萧县']= {location : [116.93,34.18],is_start:1};
county_data['埇桥区']= {location : [116.97,33.63],is_start:1};
county_data['固镇县']={location : [117.32,33.32],is_start:1};
county_data['五河县']={location : [117.88,33.15],is_start:1};
county_data['淮上区']={location : [117.35,32.97],is_start:1};
county_data['临泉县']={location : [115.25,33.07],is_start:1};
county_data['寿县']={location : [116.78,32.58],is_start:1};
county_data['怀远县']={location : [117.18,32.97],is_start:1};
county_data['灵璧县']={location : [117.55,33.55],is_start:1};
county_data['砀山县']={location : [116.35,34.42],is_start:1};
county_data['霍邱县']={location : [116.27,32.33],is_start:1};
county_data['泗县']={location : [117.88,33.48],is_start:1};

county_data['翁牛特旗']= {location : [119.02,42.93],is_start:1};
county_data['萝北县']= {location : [130.83,47.58],is_start:1};
county_data['辉南县']= {location : [126.03,42.68],is_start:1};
//山东
county_data['夏津县']={location : [116,36.95],is_start:1};
county_data['禹城市']={location : [116.63,36.93],is_start:1};
county_data['滕州市']={location : [117.15,35.08],is_start:1};
county_data['宁阳县']={location : [116.8,35.77],is_start:1};
county_data['平度市']={location : [119.95,36.78],is_start:1};
county_data['鄄城县']={location : [115.5,35.57],is_start:1};
county_data['嘉祥县']={location : [116.33,35.42],is_start:1};
county_data['高密市']={location : [119.75,36.38],is_start:1};
county_data['冠县']={location : [115.43,36.48],is_start:1};
county_data['新泰市']={location : [117.77,35.92],is_start:1};
//江苏
county_data['江都区']={location : [119.55,32.43],is_start:1};
county_data['铜山区']={location : [117.17,34.18],is_start:1};
county_data['丰县']={location : [116.6,34.7],is_start:1};
county_data['宝应县']={location : [119.3,33.23],is_start:1};
county_data['大丰市']={location : [120.47,33.2],is_start:1};
county_data['高邮市']={location : [119.43,32.78],is_start:1};
//江西
county_data['泰和县']={location : [114.88,26.8],is_start:1};
county_data['鄱阳县']={location : [116.67,29],is_start:1};
//湖北
county_data['枝江市']={location : [111.77,30.43],is_start:1};
//湖南
county_data['岳阳县']={location : [113.12,29.15],is_start:1};
//陕西
county_data['蒲城县']={location : [109.58,34.95],is_start:1};
//河南
county_data['滑县']={location : [114.52,35.58],is_start:1};
county_data['浚县']={location : [114.55,35.67],is_start:1};
county_data['西华县']={location : [114.53,33.8],is_start:1};
county_data['郸城县']={location : [115.2,33.65],is_start:1};
county_data['柘城县']={location : [115.3,34.07],is_start:1};
county_data['新乡县']={location : [113.8,35.2],is_start:1};
county_data['濮阳县']={location : [115.02,35.7],is_start:1};


var countyHtml = {};
countyHtml["翁牛特旗"] = {text:"<a>11111</a>"};


//柱形图模块1,立即执行函数
(function(){
	
	 var myChart = echarts.init(document.querySelector(".bar .chart"));
	//柱形图
	option = {
	    color: ['#2f89cf'],//修改数据显示颜色
	    tooltip: {//提示框组件
	        trigger: 'axis',
	        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
	            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
	        }
	    },
	    grid: {//修改图表网格
			top:'10px',
	        left: '0%',
	        right: '10px',
	        bottom: '0%',
	        containLabel: true
	    },
	    xAxis: [//x轴与y轴
	        {
	            type: 'category',
	            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周六'],
	            axisTick: {
	                alignWithLabel: true
	            },
				//刻度便签
				axisLabel:{
					color:"rgba(255,255,255,.6)",
					fontSize: "12px"
				},
				//刻度线
				axisLine:{
					show:false
				}
	        }
	    ],
	    yAxis: [
	        {
	            type: 'value',
				//刻度便签
				axisLabel:{
					color:"rgba(255,255,255,.6)",
					fontSize: "12px"
				},
				axisLine:{
					lineStyle:{
						color:"rgba(255,255,255,.1)"
					}
				},
				//y轴分割线
				splitLine:{
					lineStyle:{
						color:"rgba(255,255,255,.1)"
					}
				}
	        }
			
	    ],
		//系列数据
	    series: [
	        {
	            name: '访客人数',
	            type: 'bar',
	            barWidth: '50%',
	            data: [73, 52, 35, 45, 80, 130, 120],
				itemStyle:{
					barBorderRadius: 7
				}
	        }
	    ]
	};
	//配置项给实例对象
	myChart.setOption(option);
	window.addEventListener('resize',function(){
		myChart.resize();
	})
})();
(function(){
	var myColor=["#CCFFCC","#CCCC99","#CCCCFF","#FF6600","#FF99CC","#FFFF33"];
	var mychart=echarts.init(document.querySelector(".bar2 .chart"));
	option = {
	    grid: {
			top:'5%',
	        left: '2%',
			right:'2%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis: {		
	     show: false
	    },
	    yAxis: [{
	        type: 'category',
			inverse: true,
	        data: ['流感', '地震', '火灾', '空调病', '高血压','其他'],
			//线
			axisLine:{
				show: false
			},
			//刻度
			axisTick:{
				show: false
			},
			axisLabel:{
				color: "rgba(255,255,255,0.5)"
			}
	    },
		{
			inverse: true,
		    data: [],
			//线
			axisLine:{
				show: false
			},
			//刻度
			axisTick:{
				show: false
			},
			axisLabel:{
				color: "rgba(255,255,255,0.5)"
			}
		},
		],
	    series: [
	        {
	            name: '条',
	            type: 'bar',
				yAxisIndex:0,
	            data: [60, 56, 43, 31, 25, 15],
				itemStyle:{
					barBorderRadius:10,
					color:function(params){
						return myColor[params.dataIndex];
					}
				},
				//柱子间距
				barCategoryGap:50,
				//柱子宽度
				barWidth:15,
				//柱子内显示文本
				label:{
					color:'#000',
					show:true,
					position:'inside',
					formatter:"{c}%"
				}
	        },
	        {
	            name: '框',
	            type: 'bar',
				//柱子间距
				barCategoryGap:50,
				//柱子宽度
				barWidth: 15,
				yAxisIndex:1,
				//实现动态，接口调用
	            data: [100,100,100,100,100,100],
				itemStyle:{
					color: "none",
					boderWidth: 3,
					borderColor:'#00c1de',
					barBorderRadius: 15
				}
	        }
	    ]
	};
	mychart.setOption(option);
	window.addEventListener('resize',function(){
		mychart.resize();
	});
})();
(function(){
	var yearData=[{
		year:"2020",
		data: [[20, 32, 1, 34, 90,30,10,20,50,30,50,70],
			 [50,32, 1, 54, 90, 30, 10,50,40,20,21,30,57]
		]},{
		year:"2019",
		data: [[20, 32, 21, 34, 90,10,20,10,50,30,50,70],
			[10, 22, 1, 54, 90, 30, 10,40,40,20,21,10,37]
		]}];
	var mychart=echarts.init(document.querySelector(".line .chart"));
	var	option = {
		color:["#CCFF99","#6666FF","#FF9933"],
	    tooltip: {
	        trigger: 'axis'
	    },
	    legend: {
			textStyle:{
				color:"#4c9bfd"
			}
	    },
	    grid: {
			top:'12%',
	        left: '0%',
	        right: '3%',
	        bottom: '3%',
	        show: true,
			borderColor:"rgba(255,255,255,0.1)",
			containLabel:true//包含边框文字在内
	    },
	    xAxis: {
	        type: 'category',
	        boundaryGap: false,
	        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月','8月','9月','10月','11月','12月'],
			axiasTick:{
				//刻度线
				show:false
			},
			axisLabel:{
				color:"rgba(255,255,255,0.5)"
			},
			axisLine:{
				//轴线
				show:false
			}
		},
	    yAxis: {
	        type: 'value',
			axiasTick:{
				//刻度线
				show:false
			},
			axisLabel:{
				color:"rgba(255,255,255,0.5)"
			},
			axisLine:{
				//轴线
				show:false
			},
			splitLine:{
				lineStyle:{
					color:"rgba(255,255,255,0.3)"
				}
			}
	    },
	    series: [
	        {
	            name: '遗失物品',
	            type: 'line',
				smooth:true,
	            data: [20, 32, 1, 14, 90,30,10,20,50,30,50,70]
	        },
	        {
	            name: '邻里冲突',
	            type: 'line',
				smooth:true,
	            data: [50, 32, 1, 54, 90, 30, 10,5,40,20,21,30,57]
	        },
	    ]
	};
	mychart.setOption(option);
	window.addEventListener('resize',function(){
		mychart.resize();
	});
	//点击切换效果
	$(".line h2").on("click","a",function(){
		// console.log($(this).index());
		var obj=yearData[$(this).index()];
		option.series[0].data=obj.data[0];
		mychart.setOption(option);
	});
})();
(function(){
	var mychart=echarts.init(document.querySelector(".line2 .chart"));
	option = {
	    legend: {
			top:'0',
			textStyle:{
				color:"rgba(255,255,255,0.5)",
				fontSize:12
			}	   
	   },
	   tooltip: {
	           trigger: 'axis'
	     },
	    grid: {
			top:'20',
			left:'30',
			right:'10',
	        bottom: '10',
	        containLabel: true
	    },
	    xAxis: [
	        {
	            type: 'category',
	            boundaryGap: false,
	            data: ['01', '02', '03', '04', '05', '06', '07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'],
				axisLabel:{
					textStyle:{
						color:"rgba(255,255,255,0.6)",
						fontSize:12
					}
				},
				axisLine:{
					lineStyle:{
						color:"rbga(255,255,255,0.2)"
					}
				}
			}
	    ],
	    yAxis: [
	        {
	            type: 'value',
				axisLabel:{
					textStyle:{
						color:"rgba(255,255,255,0.6)",
						fontSize:12
					}
				},
				axisLine:{
					lineStyle:{
						color:"rbga(255,255,255,0.2)"
					}
				},
				splitLine:{
					lineStyle:{
						Color:"rgba(255,255,255,.1)"
					}
				}
	        }
	    ],
	    series: [
	        {
	            name: '室内温度',
	            type: 'line',
				smooth:true,
				lineStyle:{
					color:"white",
					width:3
				},
	            areaStyle: {
					color: new echarts.graphic.LinearGradient(
					0,0,0,1,[{
						offset:0,
						color:"red"
					},{
						offset:0.8,
						color:"green"
					}
					],
					false
					)
				},
				symbol:"circle",
				symbolSize:6,
				showSymbol:false,
				itemStyle:{
					color:"red",
					borderColor:"rgba(211,220,107,.1)",
					borderWidth:12
				},
	            data: [32, 30, 28, 37, 36, 39, 42,32,27,26,36,16,35,21,25,43,16,25,10,52,44,35,37,38,19,42,48,50,42,30,12,20]
	        },
	        {
	            name: '用电量',
	            type: 'line',
				smooth:true,
				lineStyle:{
					color:"white",
					width:3
				},
	            areaStyle: {
					color: new echarts.graphic.LinearGradient(
					0,0,0,1,[{
						offset:0,
						color:"red"
					},{
						offset:0.8,
						color:"green"
					}
					],
					false
					)
				},
				symbol:"circle",
				symbolSize:6,
				showSymbol:false,
				itemStyle:{
					color:"blue",
					borderColor:"rgba(211,220,107,.1)",
					borderWidth:12
				},
	            data: [20, 32, 16, 34, 25, 30, 40,32,16,15,13,24,32,45,32,27,26,36,16,41,25,12,42,02,32,10,16,27,29,34,15]
	        },
	      
	    ]
	};
	mychart.setOption(option);
	window.addEventListener('resize',function(){
		mychart.resize();
	});
})();
(function(){
	var mychart=echarts.init(document.querySelector(".pie .chart"));
	option = {
	    tooltip: {
	        trigger: 'item',
	        formatter: '{a} <br/>{b}: {c} ({d}%)'
	    },
	    legend: {
	        bottom:'5%',
			itemWidth:10,
			itemHeight:10,
			textStyle:{
				color:"rgba(255,255,255,0.5)",
				fontSize:10,
			}
	    },
	    series: [
	        {
	            name: '年龄分布',
	            type: 'pie',
	            radius: ['40%', '60%'],
				center: ['50%', '40%'],
	            avoidLabelOverlap: false,
	            label: {
	                show: false,
	                // position: 'center'
	            },
				labelLine: {
				    show: true
				},
	            emphasis: {
	                label: {
	                    show: true,
	                    fontSize: '20',
	                    fontWeight: 'bold'
	                }
	            },          
	            data: [
	                {value: 335, name: '70岁以上'},
	                {value: 310, name: '40-70岁'},
	                {value: 234, name: '22-40岁'},
	                {value: 135, name: '12-22岁'},
	                {value: 1.548, name: '12岁以下'}
	            ]
	        }
	    ]
	};
	mychart.setOption(option);
	window.addEventListener('resize',function(){
		mychart.resize();
	});
})();
(function(){
	var myChart=echarts.init(document.querySelector(".pie2 .chart"));
	var option = {
		// color:["#fff","#CCCC99","#CCCCFF","#FF6600","#FF99CC","#FFFF33"],
	    tooltip: {
	        trigger: 'item',
	        formatter: '{a} <br/>{b} : {c} ({d}%)'
	    },
	    legend: {
			bottom:'1%',
			itemHeight:10,
			itemWidth:10,
			textStyle:{
				color:"rgba(255,255,255,0.4)"
			}
	    },
	    series: [
	        {
	            name: '户籍分布',
	            type: 'pie',
	            radius: ['10%', '70%'],
	            // center: ['50%','50%','0%','50%'],
	            roseType: 'radius',
	            label: {
	                show: true,
					fontSize:10
	            },
				labelLine:{
					length:5
				},
	            emphasis: {
	                label: {
	                    show: true
	                }
	            },
	            data: [
	                {value: 10, name: '黑龙江'},
	                {value: 15, name: '甘肃'},
	                {value: 25, name: '四川'},
	                {value: 20, name: '北京'},
	                {value: 35, name: '浙江'},
	                {value: 30, name: '云南'},
	                {value: 40, name: '湖北'}
	            ]
	        }
	    ]
	};
	myChart.setOption(option);
	window.addEventListener('resize',function(){
		myChart.resize();
	});	
})();

/* (function(){
	var mychart=echarts.init(document.querySelector(".map .chart"));
	/* var option = {
		
	};
 */

	// mychart.setOption(option);
// })();
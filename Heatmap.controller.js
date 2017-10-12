sap.ui.define([
        'jquery.sap.global',
        'sap/ui/core/mvc/Controller',
        'sap/ui/model/json/JSONModel',
        'sap/viz/ui5/controls/common/feeds/FeedItem',
        'sap/viz/ui5/format/ChartFormatter',
        'sap/viz/ui5/api/env/Format',
        './InitPage'
    ], function(jQuery, Controller, JSONModel, FeedItem, ChartFormatter, Format, InitPageUtil) {
    "use strict"; 
    
    var Controller = Controller.extend("sap.viz.sample.Heatmap.Heatmap", {
        
        dataPath : "local",
        
        settingsModel : {
            dataset : {
                name: "Dataset",
                defaultSelected : 1,
                values : [{
                    name : "Small",
                    value : "/small.json"
                },{
                    name : "Medium",
                    value : "/medium.json"
                },{
                    name : "Large",
                    value : "/large.json"
                }]
            },
            dataLabel : {
                name : "Value Label",
                defaultState : false
            },
            axisTitle : {
                name : "Axis Title",
                defaultState : false
            },
            color : {
                name : "Color",
                defaultSelected : 1,
                values : [{
                    name : "3 Sections",
                    value : [{
                        "feed": "color",
                        "type": "color",
                        "numOfSegments": 3,
                        "palette": ["sapUiChartPaletteSequentialHue1Light2", "sapUiChartPaletteSequentialHue1", 
                            "sapUiChartPaletteSequentialHue1Dark2"]
                    }]
                },{
                    name : "5 Sections",
                    value : [{
                        "feed": "color",
                        "type": "color",
                        "numOfSegments": 5,
                        "palette": ["sapUiChartPaletteSequentialHue1Light2", "sapUiChartPaletteSequentialHue1Light1", 
                            "sapUiChartPaletteSequentialHue1", "sapUiChartPaletteSequentialHue1Dark1", 
                            "sapUiChartPaletteSequentialHue1Dark2"]
                    }]
                },{
                    name : "8 Sections",
                    value : [{
                        "feed": "color",
                        "type": "color",
                        "numOfSegments": 8,
                        "palette": ["sapUiChartPaletteSequentialHue3Dark1", "sapUiChartPaletteSequentialHue3",
                            "sapUiChartPaletteSequentialHue3Light1", "sapUiChartPaletteSequentialHue3Light2", 
                            "sapUiChartPaletteSequentialHue1Light2", "sapUiChartPaletteSequentialHue1Light1", 
                            "sapUiChartPaletteSequentialHue1", "sapUiChartPaletteSequentialHue1Dark1"]
                    }]
                }]
            }
        },
        
        oVizFrame : null, datasetRadioGroup : null, colorRadioGroup : null,
        onInit : function (evt) {
            Format.numericFormatter(ChartFormatter.getInstance());
            var formatPattern = ChartFormatter.DefaultPattern;
            // set explored app's demo model on this sample
			

            var oModel = new JSONModel(this.settingsModel);
            oModel.setDefaultBindingMode(sap.ui.model.BindingMode.OneWay);
            this.getView().setModel(oModel);
            
            var oVizFrame = this.oVizFrame = this.getView().byId("idVizFrame");
            oVizFrame.setVizProperties({
                plotArea: {
                    background: {
                        border: {
                            top: {
                                visible: false
                            },
                            bottom: {
                                visible: false
                            },
                            left: {
                                visible: false
                            },
                            right: {
                                visible: false
                            }
                        }
                    },
                    dataLabel: {
                        formatString:formatPattern.SHORTFLOAT_MFD2,
                        visible: false
                    }
                },
                categoryAxis: {
                    title: {
                        visible: false
                    }
                },
                categoryAxis2: {
                    title: {
                        visible: false
                    }
                },
                legend: {
                    visible: true,
                    formatString:formatPattern.SHORTFLOAT,
                    title: {
                        visible: false
                    }
                },
                title: {
                    visible: false,
                    text: 'Revenue by City and Store Name'
                }
            });


$.getJSON("http://vhhal202.pro.coil:8000/dhi/dhi.xsodata/InputParams(i_div_inside='F.S.H_5',i_div_outside='F.S.H_5',time_stamp=datetime'2017-09-07T00:00:00')/Execute/?$format=json", 
              function(data) {

 var bJson = new Array();
		var cJson = new Object();
console.log(data);
                var _bundle1 = new Array();
                  _bundle1[1] =data.d.results[0].N_ATT1; 
                  _bundle1[2] =data.d.results[0].N_ATT2; 
                  _bundle1[3] =data.d.results[0].N_ATT3;
                  _bundle1[4] =data.d.results[0].N_ATT4;
                  _bundle1[5] =data.d.results[0].N_ATT5;
                  _bundle1[6] =data.d.results[0].N_ATT6;
                  _bundle1[7] =data.d.results[0].N_ATT7;
                  _bundle1[8] =data.d.results[0].N_ATT8;
                  _bundle1[9] =data.d.results[0].N_ATT9;
                  _bundle1[10] =data.d.results[0].N_ATT10;
                  var _bundle2 = new Array();
                  _bundle2[1] =data.d.results[1].N_ATT1; 
                  _bundle2[2] =data.d.results[1].N_ATT2; 
                  _bundle2[3] =data.d.results[1].N_ATT3;
                  _bundle2[4] =data.d.results[1].N_ATT4;
                  _bundle2[5] =data.d.results[1].N_ATT5;
                  _bundle2[6] =data.d.results[1].N_ATT6;
                  _bundle2[7] =data.d.results[1].N_ATT7;
                  _bundle2[8] =data.d.results[1].N_ATT8;
                  _bundle2[9] =data.d.results[1].N_ATT9;
                  _bundle2[10] =data.d.results[1].N_ATT10;

                  
                  var i;
                //   console.log(_bundle);
                  for(i=1;i<11;i++){
                    var aJson = new Object();
                    aJson.TubeNumber = 1;
        		aJson.Temperature = _bundle1[i];
	            aJson.BundleName = i;
		        bJson.push(aJson);
		        
		        var aJson1 = new Object();
                    aJson1.TubeNumber = 2;
        		aJson1.Temperature = _bundle2[i];
	            aJson1.BundleName = i;
		        bJson.push(aJson1);

                }
                cJson.fsh_5=bJson;

                var oModelxx = new JSONModel();
                oModelxx.setData(cJson);

        	oVizFrame.setModel(oModelxx);	

              }); 
 //           var dataModel = new JSONModel(this.dataPath + "/medium.json");
     //       oVizFrame.setModel(dataModel);
            
            var oPopOver = this.getView().byId("idPopOver");
            oPopOver.connect(oVizFrame.getVizUid());
            oPopOver.setFormatString(formatPattern.STANDARDFLOAT);
            
            InitPageUtil.initPageSettings(this.getView());
        },
        onAfterRendering : function(){
            this.datasetRadioGroup = this.getView().byId('datasetRadioGroup');
            this.datasetRadioGroup.setSelectedIndex(this.settingsModel.dataset.defaultSelected);

            this.colorRadioGroup = this.getView().byId('colorRadioGroup');
            this.colorRadioGroup.setSelectedIndex(this.settingsModel.color.defaultSelected);
        },
        onDatasetSelected : function(oEvent){
            var datasetRadio = oEvent.getSource();
            if(this.oVizFrame && datasetRadio.getSelected()){
                var bindValue = datasetRadio.getBindingContext().getObject();
                var dataModel = new JSONModel(this.dataPath + bindValue.value);
                this.oVizFrame.setModel(dataModel);
            }
        },
        onDataLabelChanged : function(oEvent){
            if(this.oVizFrame){
                this.oVizFrame.setVizProperties({
                    plotArea: {
                        dataLabel: {
                            visible: oEvent.getParameter('state')
                        }
                    }
                });
            }
        },
        onAxisTitleChanged : function(oEvent){
            if(this.oVizFrame){
                var state = oEvent.getParameter('state');
                this.oVizFrame.setVizProperties({
                    valueAxis: {
                        title: {
                            visible: state
                        }
                    },
                    categoryAxis: {
                        title: {
                            visible: state
                        }
                    },
                    categoryAxis2: {
                        title: {
                            visible: state
                        }
                    }
                });
            }
        },
        onColorSelected :function(oEvent){
            var colorRadio = oEvent.getSource();
            if(this.oVizFrame&&colorRadio.getSelected()){
                var bindValue = colorRadio.getBindingContext().getObject();
                this.oVizFrame.setVizScales(bindValue.value);
            }
        }
    }); 
 
    return Controller;
 
});
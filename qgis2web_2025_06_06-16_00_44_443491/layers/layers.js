var wms_layers = [];

var format_Sumaryczny_przebieg_Bugu_0 = new ol.format.GeoJSON();
var features_Sumaryczny_przebieg_Bugu_0 = format_Sumaryczny_przebieg_Bugu_0.readFeatures(json_Sumaryczny_przebieg_Bugu_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sumaryczny_przebieg_Bugu_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sumaryczny_przebieg_Bugu_0.addFeatures(features_Sumaryczny_przebieg_Bugu_0);
var lyr_Sumaryczny_przebieg_Bugu_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sumaryczny_przebieg_Bugu_0, 
                style: style_Sumaryczny_przebieg_Bugu_0,
                popuplayertitle: 'Sumaryczny_przebieg_Bugu',
                interactive: true,
                title: '<img src="styles/legend/Sumaryczny_przebieg_Bugu_0.png" /> Sumaryczny_przebieg_Bugu'
            });
var format_Wyczny_przebieg_Bugu_1 = new ol.format.GeoJSON();
var features_Wyczny_przebieg_Bugu_1 = format_Wyczny_przebieg_Bugu_1.readFeatures(json_Wyczny_przebieg_Bugu_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wyczny_przebieg_Bugu_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wyczny_przebieg_Bugu_1.addFeatures(features_Wyczny_przebieg_Bugu_1);
var lyr_Wyczny_przebieg_Bugu_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wyczny_przebieg_Bugu_1, 
                style: style_Wyczny_przebieg_Bugu_1,
                popuplayertitle: 'Wyłączny_przebieg_Bugu',
                interactive: true,
                title: '<img src="styles/legend/Wyczny_przebieg_Bugu_1.png" /> Wyłączny_przebieg_Bugu'
            });
var format_Bug_1940_2 = new ol.format.GeoJSON();
var features_Bug_1940_2 = format_Bug_1940_2.readFeatures(json_Bug_1940_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bug_1940_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bug_1940_2.addFeatures(features_Bug_1940_2);
var lyr_Bug_1940_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bug_1940_2, 
                style: style_Bug_1940_2,
                popuplayertitle: 'Bug_1940',
                interactive: true,
                title: '<img src="styles/legend/Bug_1940_2.png" /> Bug_1940'
            });
var format_Bug_2000_3 = new ol.format.GeoJSON();
var features_Bug_2000_3 = format_Bug_2000_3.readFeatures(json_Bug_2000_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bug_2000_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bug_2000_3.addFeatures(features_Bug_2000_3);
var lyr_Bug_2000_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bug_2000_3, 
                style: style_Bug_2000_3,
                popuplayertitle: 'Bug_2000',
                interactive: true,
                title: '<img src="styles/legend/Bug_2000_3.png" /> Bug_2000'
            });
var format_Bug_2024_4 = new ol.format.GeoJSON();
var features_Bug_2024_4 = format_Bug_2024_4.readFeatures(json_Bug_2024_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bug_2024_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bug_2024_4.addFeatures(features_Bug_2024_4);
var lyr_Bug_2024_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bug_2024_4, 
                style: style_Bug_2024_4,
                popuplayertitle: 'Bug_2024',
                interactive: true,
                title: '<img src="styles/legend/Bug_2024_4.png" /> Bug_2024'
            });

lyr_Sumaryczny_przebieg_Bugu_0.setVisible(true);lyr_Wyczny_przebieg_Bugu_1.setVisible(true);lyr_Bug_1940_2.setVisible(true);lyr_Bug_2000_3.setVisible(true);lyr_Bug_2024_4.setVisible(true);
var layersList = [lyr_Sumaryczny_przebieg_Bugu_0,lyr_Wyczny_przebieg_Bugu_1,lyr_Bug_1940_2,lyr_Bug_2000_3,lyr_Bug_2024_4];
lyr_Sumaryczny_przebieg_Bugu_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FID_sat_koniec': 'FID_sat_koniec', 'Id': 'Id', 'gridcode': 'gridcode', 'FID_Historyczny_BUG2': 'FID_Historyczny_BUG2', 'Id_1': 'Id', 'FID_HYDRO_WODY_POWIERZCHNIO_Clip': 'FID_HYDRO_WODY_POWIERZCHNIO_Clip', 'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID_12': 'ID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Wyczny_przebieg_Bugu_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FID_sat_koniec': 'FID_sat_koniec', 'Id': 'Id', 'gridcode': 'gridcode', 'FID_HYDRO_WODY_POWIERZCHNIO_Clip': 'FID_HYDRO_WODY_POWIERZCHNIO_Clip', 'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID_1': 'ID', 'FID_Historyczny_BUG2': 'FID_Historyczny_BUG2', 'Id_12': 'Id', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Bug_1940_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Wskaznik_ksztaltu': 'Wskaznik_ksztaltu', });
lyr_Bug_2000_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID': 'ID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Wskaznik_ksztaltu': 'Wskaznik_ksztaltu', });
lyr_Bug_2024_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Sumaryczny_przebieg_Bugu_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'FID_sat_koniec': 'Range', 'Id': 'Range', 'gridcode': 'Range', 'FID_Historyczny_BUG2': 'Range', 'Id_1': 'Range', 'FID_HYDRO_WODY_POWIERZCHNIO_Clip': 'Range', 'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID_12': 'Range', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Wyczny_przebieg_Bugu_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'FID_sat_koniec': 'Range', 'Id': 'Range', 'gridcode': 'Range', 'FID_HYDRO_WODY_POWIERZCHNIO_Clip': 'Range', 'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID_1': 'Range', 'FID_Historyczny_BUG2': 'Range', 'Id_12': 'Range', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Bug_1940_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'Range', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'Wskaznik_ksztaltu': 'TextEdit', });
lyr_Bug_2000_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID': 'Range', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'Wskaznik_ksztaltu': 'TextEdit', });
lyr_Bug_2024_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'Range', 'gridcode': 'Range', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Sumaryczny_przebieg_Bugu_0.set('fieldLabels', {'OBJECTID': 'no label', 'FID_sat_koniec': 'no label', 'Id': 'no label', 'gridcode': 'no label', 'FID_Historyczny_BUG2': 'no label', 'Id_1': 'no label', 'FID_HYDRO_WODY_POWIERZCHNIO_Clip': 'no label', 'DLUG_BRZEG': 'no label', 'DLUGOSC': 'no label', 'DOKLADNOSC': 'no label', 'DOSTEPNOSC': 'no label', 'GLEBOKOSC': 'no label', 'ISTNIENIE': 'no label', 'KAT_HYDRO': 'no label', 'KAT_PLYWU': 'no label', 'KAT_POJEMN': 'no label', 'KAT_POLOZ': 'no label', 'KAT_WODY': 'no label', 'NAJW_WYS': 'no label', 'NAZWA': 'no label', 'OBIEKT': 'no label', 'OPR_UPUST': 'no label', 'OPR_ZBURZ': 'no label', 'POCH_HYDRO': 'no label', 'PRED_PRZEP': 'no label', 'SREDNIA_GL': 'no label', 'STAT_EKSPL': 'no label', 'SZEROKOSC': 'no label', 'TAJNOSC': 'no label', 'TYP_AKWED': 'no label', 'TYP_WYBRZ': 'no label', 'ZN_ORIENT': 'no label', 'POWIERZCHN': 'no label', 'ID_12': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Wyczny_przebieg_Bugu_1.set('fieldLabels', {'OBJECTID': 'no label', 'FID_sat_koniec': 'no label', 'Id': 'no label', 'gridcode': 'no label', 'FID_HYDRO_WODY_POWIERZCHNIO_Clip': 'no label', 'DLUG_BRZEG': 'no label', 'DLUGOSC': 'no label', 'DOKLADNOSC': 'no label', 'DOSTEPNOSC': 'no label', 'GLEBOKOSC': 'no label', 'ISTNIENIE': 'no label', 'KAT_HYDRO': 'no label', 'KAT_PLYWU': 'no label', 'KAT_POJEMN': 'no label', 'KAT_POLOZ': 'no label', 'KAT_WODY': 'no label', 'NAJW_WYS': 'no label', 'NAZWA': 'no label', 'OBIEKT': 'no label', 'OPR_UPUST': 'no label', 'OPR_ZBURZ': 'no label', 'POCH_HYDRO': 'no label', 'PRED_PRZEP': 'no label', 'SREDNIA_GL': 'no label', 'STAT_EKSPL': 'no label', 'SZEROKOSC': 'no label', 'TAJNOSC': 'no label', 'TYP_AKWED': 'no label', 'TYP_WYBRZ': 'no label', 'ZN_ORIENT': 'no label', 'POWIERZCHN': 'no label', 'ID_1': 'no label', 'FID_Historyczny_BUG2': 'no label', 'Id_12': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Bug_1940_2.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', 'Wskaznik_ksztaltu': 'no label', });
lyr_Bug_2000_3.set('fieldLabels', {'OBJECTID': 'no label', 'DLUG_BRZEG': 'no label', 'DLUGOSC': 'no label', 'DOKLADNOSC': 'no label', 'DOSTEPNOSC': 'no label', 'GLEBOKOSC': 'no label', 'ISTNIENIE': 'no label', 'KAT_HYDRO': 'no label', 'KAT_PLYWU': 'no label', 'KAT_POJEMN': 'no label', 'KAT_POLOZ': 'no label', 'KAT_WODY': 'no label', 'NAJW_WYS': 'no label', 'NAZWA': 'no label', 'OBIEKT': 'no label', 'OPR_UPUST': 'no label', 'OPR_ZBURZ': 'no label', 'POCH_HYDRO': 'no label', 'PRED_PRZEP': 'no label', 'SREDNIA_GL': 'no label', 'STAT_EKSPL': 'no label', 'SZEROKOSC': 'no label', 'TAJNOSC': 'no label', 'TYP_AKWED': 'no label', 'TYP_WYBRZ': 'no label', 'ZN_ORIENT': 'no label', 'POWIERZCHN': 'no label', 'ID': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', 'Wskaznik_ksztaltu': 'no label', });
lyr_Bug_2024_4.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'gridcode': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Bug_2024_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
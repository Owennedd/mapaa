var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_readeInters_1 = new ol.format.GeoJSON();
var features_readeInters_1 = format_readeInters_1.readFeatures(json_readeInters_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_readeInters_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_readeInters_1.addFeatures(features_readeInters_1);
var lyr_readeInters_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_readeInters_1, 
                style: style_readeInters_1,
                popuplayertitle: 'Área de Interés',
                interactive: false,
                title: '<img src="styles/legend/readeInters_1.png" /> Área de Interés'
            });
var format_reasVerdes_2 = new ol.format.GeoJSON();
var features_reasVerdes_2 = format_reasVerdes_2.readFeatures(json_reasVerdes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasVerdes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasVerdes_2.addFeatures(features_reasVerdes_2);
var lyr_reasVerdes_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasVerdes_2, 
                style: style_reasVerdes_2,
                popuplayertitle: 'Áreas Verdes',
                interactive: true,
                title: '<img src="styles/legend/reasVerdes_2.png" /> Áreas Verdes'
            });
var format_RedVial_3 = new ol.format.GeoJSON();
var features_RedVial_3 = format_RedVial_3.readFeatures(json_RedVial_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RedVial_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RedVial_3.addFeatures(features_RedVial_3);
var lyr_RedVial_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RedVial_3, 
                style: style_RedVial_3,
                popuplayertitle: 'Red Vial',
                interactive: true,
                title: '<img src="styles/legend/RedVial_3.png" /> Red Vial'
            });
var format_ServiciosDeEducacin_4 = new ol.format.GeoJSON();
var features_ServiciosDeEducacin_4 = format_ServiciosDeEducacin_4.readFeatures(json_ServiciosDeEducacin_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ServiciosDeEducacin_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServiciosDeEducacin_4.addFeatures(features_ServiciosDeEducacin_4);
var lyr_ServiciosDeEducacin_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServiciosDeEducacin_4, 
                style: style_ServiciosDeEducacin_4,
                popuplayertitle: 'Servicios De Educación',
                interactive: true,
                title: '<img src="styles/legend/ServiciosDeEducacin_4.png" /> Servicios De Educación'
            });
var format_Aeropuerto_5 = new ol.format.GeoJSON();
var features_Aeropuerto_5 = format_Aeropuerto_5.readFeatures(json_Aeropuerto_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aeropuerto_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aeropuerto_5.addFeatures(features_Aeropuerto_5);
var lyr_Aeropuerto_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Aeropuerto_5, 
                style: style_Aeropuerto_5,
                popuplayertitle: 'Aeropuerto',
                interactive: true,
                title: '<img src="styles/legend/Aeropuerto_5.png" /> Aeropuerto'
            });
var format_ServiciosDeSalud_6 = new ol.format.GeoJSON();
var features_ServiciosDeSalud_6 = format_ServiciosDeSalud_6.readFeatures(json_ServiciosDeSalud_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ServiciosDeSalud_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServiciosDeSalud_6.addFeatures(features_ServiciosDeSalud_6);
var lyr_ServiciosDeSalud_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServiciosDeSalud_6, 
                style: style_ServiciosDeSalud_6,
                popuplayertitle: 'Servicios De Salud',
                interactive: true,
                title: '<img src="styles/legend/ServiciosDeSalud_6.png" /> Servicios De Salud'
            });
var format_ServiciosDeCarabineros_7 = new ol.format.GeoJSON();
var features_ServiciosDeCarabineros_7 = format_ServiciosDeCarabineros_7.readFeatures(json_ServiciosDeCarabineros_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ServiciosDeCarabineros_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServiciosDeCarabineros_7.addFeatures(features_ServiciosDeCarabineros_7);
var lyr_ServiciosDeCarabineros_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServiciosDeCarabineros_7, 
                style: style_ServiciosDeCarabineros_7,
                popuplayertitle: 'Servicios De Carabineros',
                interactive: true,
                title: '<img src="styles/legend/ServiciosDeCarabineros_7.png" /> Servicios De Carabineros'
            });

lyr_OSMStandard_0.setVisible(true);lyr_readeInters_1.setVisible(true);lyr_reasVerdes_2.setVisible(true);lyr_RedVial_3.setVisible(true);lyr_ServiciosDeEducacin_4.setVisible(true);lyr_Aeropuerto_5.setVisible(true);lyr_ServiciosDeSalud_6.setVisible(true);lyr_ServiciosDeCarabineros_7.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_readeInters_1,lyr_reasVerdes_2,lyr_RedVial_3,lyr_ServiciosDeEducacin_4,lyr_Aeropuerto_5,lyr_ServiciosDeSalud_6,lyr_ServiciosDeCarabineros_7];
lyr_readeInters_1.set('fieldAliases', {'qc_id': 'qc_id', 'objectid': 'objectid', 'shape_leng': 'shape_leng', 'dis_elec': 'dis_elec', 'cir_sena': 'cir_sena', 'cod_comuna': 'cod_comuna', 'codregion': 'codregion', 'st_area_sh': 'st_area_sh', 'st_length_': 'st_length_', 'region': 'region', 'comuna': 'comuna', 'provincia': 'provincia', });
lyr_reasVerdes_2.set('fieldAliases', {'qc_id': 'qc_id', 'target_fid': 'target_fid', 'cut': 'cut', 'region': 'region', 'provincia': 'provincia', 'comuna': 'comuna', 'cod_urbano': 'cod_urbano', 'urbano_cen': 'urbano_cen', 'tipo_ep': 'tipo_ep', 'nombre_ep': 'nombre_ep', 'observacio': 'observacio', 'sup_total_': 'sup_total_', 'uso': 'uso', 'id_text': 'id_text', 'fuente': 'fuente', 'nombre_min': 'nombre_min', 'extension': 'extension', 'aplicabili': 'aplicabili', 'cierres': 'cierres', 'valor_pers': 'valor_pers', 'valor_veh': 'valor_veh', 'bancas_esc': 'bancas_esc', 'pileta_fue': 'pileta_fue', 'bebedero_a': 'bebedero_a', 'juegos_agu': 'juegos_agu', 'juegos_inf': 'juegos_inf', 'escenario_': 'escenario_', 'maquinas_e': 'maquinas_e', 'mesa_juego': 'mesa_juego', 'pergolas_t': 'pergolas_t', 'infraest_d': 'infraest_d', 'cancha_ska': 'cancha_ska', 'basureros': 'basureros', 'banos': 'banos', 'banos_acce': 'banos_acce', 'luminarias': 'luminarias', 'arenero': 'arenero', 'rutas_peat': 'rutas_peat', 'otros_mobi': 'otros_mobi', 'estado_mob': 'estado_mob', 'limpieza': 'limpieza', 'rtapeat_co': 'rtapeat_co', 'rtapeat__1': 'rtapeat__1', 'rtapeat__2': 'rtapeat__2', 'rtapeat_su': 'rtapeat_su', 'rtapeat_li': 'rtapeat_li', 'rtapeat__3': 'rtapeat__3', 'zna_descan': 'zna_descan', 'rtapeat_ac': 'rtapeat_ac', 'zona_juego': 'zona_juego', 'ventaconsu': 'ventaconsu', 'guardias': 'guardias', 'estratos_v': 'estratos_v', 'estado_veg': 'estado_veg', 'fecha_encu': 'fecha_encu', 'mg': 'mg', 'vg': 'vg', 'au': 'au', 'sg': 'sg', 'de': 'de', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'calidad': 'calidad', 'rango_cali': 'rango_cali', });
lyr_RedVial_3.set('fieldAliases', {'qc_id': 'qc_id', 'shape_leng': 'shape_leng', 'st_length_': 'st_length_', 'nom_ruta': 'nom_ruta', 'rol_mop': 'rol_mop', 'clase_ruta': 'clase_ruta', 'tipo_carpe': 'tipo_carpe', 'catego': 'catego', 'cod_region': 'cod_region', });
lyr_ServiciosDeEducacin_4.set('fieldAliases', {'qc_id': 'qc_id', 'agno': 'agno', 'rbd': 'rbd', 'dgv_rbd': 'dgv_rbd', 'nom_rbd': 'nom_rbd', 'tipo_sost': 'tipo_sost', 'cod_reg_rb': 'cod_reg_rb', 'nom_reg_rb': 'nom_reg_rb', 'cod_pro_rb': 'cod_pro_rb', 'cod_com_rb': 'cod_com_rb', 'nom_com_rb': 'nom_com_rb', 'cod_deprov': 'cod_deprov', 'nom_deprov': 'nom_deprov', 'tipo_depen': 'tipo_depen', 'direccion': 'direccion', 'numero': 'numero', 'referencia': 'referencia', 'latitud': 'latitud', 'longitud': 'longitud', 'mat_parv': 'mat_parv', 'mat_bas_re': 'mat_bas_re', 'mat_bas_ad': 'mat_bas_ad', 'mat_esp': 'mat_esp', 'mat_mhc_re': 'mat_mhc_re', 'mat_mhc_ad': 'mat_mhc_ad', 'mat_mtp_re': 'mat_mtp_re', 'mat_mtp_ad': 'mat_mtp_ad', 'mat_total': 'mat_total', 'mat_hom_to': 'mat_hom_to', 'mat_muj_to': 'mat_muj_to', 'mat_si_tot': 'mat_si_tot', 'cur_sim_to': 'cur_sim_to', 'cur_comb_t': 'cur_comb_t', });
lyr_Aeropuerto_5.set('fieldAliases', {'qc_id': 'qc_id', 'objectid_1': 'objectid_1', 'cod_comuna': 'cod_comuna', 'categoría': 'categoría', 'cod_oaci': 'cod_oaci', 'cod_iata': 'cod_iata', 'aerodromo': 'aerodromo', 'region': 'region', 'provincia': 'provincia', 'comuna': 'comuna', });
lyr_ServiciosDeSalud_6.set('fieldAliases', {'qc_id': 'qc_id', 'id_orig': 'id_orig', 'cod_ant': 'cod_ant', 'cod_vig': 'cod_vig', 'cod_m_ant': 'cod_m_ant', 'cod_m_nuev': 'cod_m_nuev', 'cod_reg': 'cod_reg', 'nom_reg': 'nom_reg', 'cod_dep': 'cod_dep', 'dependenc': 'dependenc', 'pertenenci': 'pertenenci', 'tipo': 'tipo', 'ambito': 'ambito', 'nombre': 'nombre', 'certifi': 'certifi', 'dep_adm': 'dep_adm', 'nivel': 'nivel', 'cod_com': 'cod_com', 'nom_com': 'nom_com', 'via': 'via', 'numero': 'numero', 'direccion': 'direccion', 'fono': 'fono', 'f_inicio': 'f_inicio', 'urgencia': 'urgencia', 'tipo_urge': 'tipo_urge', 'clas_sapu': 'clas_sapu', 'latitud': 'latitud', 'longitud': 'longitud', 'prestador': 'prestador', 'estado': 'estado', 'complejida': 'complejida', 'tipo_aten': 'tipo_aten', 'cut_comuna': 'cut_comuna', 'cut_region': 'cut_region', 'cut_provin': 'cut_provin', 'nom_region': 'nom_region', 'nom_provin': 'nom_provin', 'nom_comuna': 'nom_comuna', 'ir_google': 'ir_google', 'simbologia': 'simbologia', });
lyr_ServiciosDeCarabineros_7.set('fieldAliases', {'qc_id': 'qc_id', 'nombre_reg': 'nombre_reg', 'nombre_pro': 'nombre_pro', 'nombre_com': 'nombre_com', 'nombre_uni': 'nombre_uni', 'tipo_de_un': 'tipo_de_un', 'tipo_de_vi': 'tipo_de_vi', 'nombre_de': 'nombre_de', 'numero': 'numero', 'point_x': 'point_x', 'point_y': 'point_y', 'hecho': 'hecho', 'rg': 'rg', 'prefectura': 'prefectura', 'tipo': 'tipo', 'zona': 'zona', 'uni_cod': 'uni_cod', 'unid_encri': 'unid_encri', });
lyr_readeInters_1.set('fieldImages', {'qc_id': 'TextEdit', 'objectid': 'TextEdit', 'shape_leng': 'TextEdit', 'dis_elec': 'TextEdit', 'cir_sena': 'TextEdit', 'cod_comuna': 'TextEdit', 'codregion': 'TextEdit', 'st_area_sh': 'TextEdit', 'st_length_': 'TextEdit', 'region': 'TextEdit', 'comuna': 'TextEdit', 'provincia': 'TextEdit', });
lyr_reasVerdes_2.set('fieldImages', {'qc_id': 'TextEdit', 'target_fid': 'TextEdit', 'cut': 'TextEdit', 'region': 'TextEdit', 'provincia': 'TextEdit', 'comuna': 'TextEdit', 'cod_urbano': 'TextEdit', 'urbano_cen': 'TextEdit', 'tipo_ep': 'TextEdit', 'nombre_ep': 'TextEdit', 'observacio': 'TextEdit', 'sup_total_': 'TextEdit', 'uso': 'TextEdit', 'id_text': 'TextEdit', 'fuente': 'TextEdit', 'nombre_min': 'TextEdit', 'extension': 'TextEdit', 'aplicabili': 'TextEdit', 'cierres': 'TextEdit', 'valor_pers': 'TextEdit', 'valor_veh': 'TextEdit', 'bancas_esc': 'TextEdit', 'pileta_fue': 'TextEdit', 'bebedero_a': 'TextEdit', 'juegos_agu': 'TextEdit', 'juegos_inf': 'TextEdit', 'escenario_': 'TextEdit', 'maquinas_e': 'TextEdit', 'mesa_juego': 'TextEdit', 'pergolas_t': 'TextEdit', 'infraest_d': 'TextEdit', 'cancha_ska': 'TextEdit', 'basureros': 'TextEdit', 'banos': 'TextEdit', 'banos_acce': 'TextEdit', 'luminarias': 'TextEdit', 'arenero': 'TextEdit', 'rutas_peat': 'TextEdit', 'otros_mobi': 'TextEdit', 'estado_mob': 'TextEdit', 'limpieza': 'TextEdit', 'rtapeat_co': 'TextEdit', 'rtapeat__1': 'TextEdit', 'rtapeat__2': 'TextEdit', 'rtapeat_su': 'TextEdit', 'rtapeat_li': 'TextEdit', 'rtapeat__3': 'TextEdit', 'zna_descan': 'TextEdit', 'rtapeat_ac': 'TextEdit', 'zona_juego': 'TextEdit', 'ventaconsu': 'TextEdit', 'guardias': 'TextEdit', 'estratos_v': 'TextEdit', 'estado_veg': 'TextEdit', 'fecha_encu': 'TextEdit', 'mg': 'TextEdit', 'vg': 'TextEdit', 'au': 'TextEdit', 'sg': 'TextEdit', 'de': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', 'calidad': 'TextEdit', 'rango_cali': 'TextEdit', });
lyr_RedVial_3.set('fieldImages', {'qc_id': 'TextEdit', 'shape_leng': 'TextEdit', 'st_length_': 'TextEdit', 'nom_ruta': 'TextEdit', 'rol_mop': 'TextEdit', 'clase_ruta': 'TextEdit', 'tipo_carpe': 'TextEdit', 'catego': 'TextEdit', 'cod_region': 'TextEdit', });
lyr_ServiciosDeEducacin_4.set('fieldImages', {'qc_id': 'TextEdit', 'agno': 'TextEdit', 'rbd': 'TextEdit', 'dgv_rbd': 'TextEdit', 'nom_rbd': 'TextEdit', 'tipo_sost': 'TextEdit', 'cod_reg_rb': 'TextEdit', 'nom_reg_rb': 'TextEdit', 'cod_pro_rb': 'TextEdit', 'cod_com_rb': 'TextEdit', 'nom_com_rb': 'TextEdit', 'cod_deprov': 'TextEdit', 'nom_deprov': 'TextEdit', 'tipo_depen': 'TextEdit', 'direccion': 'TextEdit', 'numero': 'TextEdit', 'referencia': 'TextEdit', 'latitud': 'TextEdit', 'longitud': 'TextEdit', 'mat_parv': 'TextEdit', 'mat_bas_re': 'TextEdit', 'mat_bas_ad': 'TextEdit', 'mat_esp': 'TextEdit', 'mat_mhc_re': 'TextEdit', 'mat_mhc_ad': 'TextEdit', 'mat_mtp_re': 'TextEdit', 'mat_mtp_ad': 'TextEdit', 'mat_total': 'TextEdit', 'mat_hom_to': 'TextEdit', 'mat_muj_to': 'TextEdit', 'mat_si_tot': 'TextEdit', 'cur_sim_to': 'TextEdit', 'cur_comb_t': 'TextEdit', });
lyr_Aeropuerto_5.set('fieldImages', {'qc_id': 'TextEdit', 'objectid_1': 'TextEdit', 'cod_comuna': 'TextEdit', 'categoría': 'TextEdit', 'cod_oaci': 'TextEdit', 'cod_iata': 'TextEdit', 'aerodromo': 'TextEdit', 'region': 'TextEdit', 'provincia': 'TextEdit', 'comuna': 'TextEdit', });
lyr_ServiciosDeSalud_6.set('fieldImages', {'qc_id': 'TextEdit', 'id_orig': 'TextEdit', 'cod_ant': 'TextEdit', 'cod_vig': 'TextEdit', 'cod_m_ant': 'TextEdit', 'cod_m_nuev': 'TextEdit', 'cod_reg': 'TextEdit', 'nom_reg': 'TextEdit', 'cod_dep': 'TextEdit', 'dependenc': 'TextEdit', 'pertenenci': 'TextEdit', 'tipo': 'TextEdit', 'ambito': 'TextEdit', 'nombre': 'TextEdit', 'certifi': 'TextEdit', 'dep_adm': 'TextEdit', 'nivel': 'TextEdit', 'cod_com': 'TextEdit', 'nom_com': 'TextEdit', 'via': 'TextEdit', 'numero': 'TextEdit', 'direccion': 'TextEdit', 'fono': 'TextEdit', 'f_inicio': 'DateTime', 'urgencia': 'TextEdit', 'tipo_urge': 'TextEdit', 'clas_sapu': 'TextEdit', 'latitud': 'TextEdit', 'longitud': 'TextEdit', 'prestador': 'TextEdit', 'estado': 'TextEdit', 'complejida': 'TextEdit', 'tipo_aten': 'TextEdit', 'cut_comuna': 'TextEdit', 'cut_region': 'TextEdit', 'cut_provin': 'TextEdit', 'nom_region': 'TextEdit', 'nom_provin': 'TextEdit', 'nom_comuna': 'TextEdit', 'ir_google': 'TextEdit', 'simbologia': 'TextEdit', });
lyr_ServiciosDeCarabineros_7.set('fieldImages', {'qc_id': 'TextEdit', 'nombre_reg': 'TextEdit', 'nombre_pro': 'TextEdit', 'nombre_com': 'TextEdit', 'nombre_uni': 'TextEdit', 'tipo_de_un': 'TextEdit', 'tipo_de_vi': 'TextEdit', 'nombre_de': 'TextEdit', 'numero': 'TextEdit', 'point_x': 'TextEdit', 'point_y': 'TextEdit', 'hecho': 'TextEdit', 'rg': 'TextEdit', 'prefectura': 'TextEdit', 'tipo': 'TextEdit', 'zona': 'TextEdit', 'uni_cod': 'TextEdit', 'unid_encri': 'TextEdit', });
lyr_readeInters_1.set('fieldLabels', {'qc_id': 'hidden field', 'objectid': 'hidden field', 'shape_leng': 'hidden field', 'dis_elec': 'hidden field', 'cir_sena': 'hidden field', 'cod_comuna': 'hidden field', 'codregion': 'hidden field', 'st_area_sh': 'hidden field', 'st_length_': 'hidden field', 'region': 'inline label - always visible', 'comuna': 'inline label - always visible', 'provincia': 'hidden field', });
lyr_reasVerdes_2.set('fieldLabels', {'qc_id': 'hidden field', 'target_fid': 'hidden field', 'cut': 'hidden field', 'region': 'hidden field', 'provincia': 'hidden field', 'comuna': 'hidden field', 'cod_urbano': 'hidden field', 'urbano_cen': 'hidden field', 'tipo_ep': 'inline label - always visible', 'nombre_ep': 'inline label - always visible', 'observacio': 'hidden field', 'sup_total_': 'inline label - always visible', 'uso': 'hidden field', 'id_text': 'hidden field', 'fuente': 'inline label - always visible', 'nombre_min': 'hidden field', 'extension': 'hidden field', 'aplicabili': 'hidden field', 'cierres': 'hidden field', 'valor_pers': 'hidden field', 'valor_veh': 'hidden field', 'bancas_esc': 'inline label - always visible', 'pileta_fue': 'inline label - always visible', 'bebedero_a': 'inline label - always visible', 'juegos_agu': 'inline label - always visible', 'juegos_inf': 'inline label - always visible', 'escenario_': 'inline label - always visible', 'maquinas_e': 'inline label - always visible', 'mesa_juego': 'inline label - always visible', 'pergolas_t': 'inline label - always visible', 'infraest_d': 'inline label - always visible', 'cancha_ska': 'inline label - always visible', 'basureros': 'inline label - always visible', 'banos': 'inline label - always visible', 'banos_acce': 'inline label - always visible', 'luminarias': 'inline label - always visible', 'arenero': 'inline label - always visible', 'rutas_peat': 'inline label - always visible', 'otros_mobi': 'hidden field', 'estado_mob': 'hidden field', 'limpieza': 'inline label - always visible', 'rtapeat_co': 'hidden field', 'rtapeat__1': 'hidden field', 'rtapeat__2': 'hidden field', 'rtapeat_su': 'hidden field', 'rtapeat_li': 'hidden field', 'rtapeat__3': 'hidden field', 'zna_descan': 'hidden field', 'rtapeat_ac': 'hidden field', 'zona_juego': 'hidden field', 'ventaconsu': 'hidden field', 'guardias': 'hidden field', 'estratos_v': 'hidden field', 'estado_veg': 'inline label - always visible', 'fecha_encu': 'hidden field', 'mg': 'hidden field', 'vg': 'hidden field', 'au': 'hidden field', 'sg': 'hidden field', 'de': 'hidden field', 'shape_leng': 'hidden field', 'shape_area': 'hidden field', 'calidad': 'hidden field', 'rango_cali': 'hidden field', });
lyr_RedVial_3.set('fieldLabels', {'qc_id': 'hidden field', 'shape_leng': 'hidden field', 'st_length_': 'hidden field', 'nom_ruta': 'inline label - always visible', 'rol_mop': 'hidden field', 'clase_ruta': 'inline label - always visible', 'tipo_carpe': 'inline label - always visible', 'catego': 'inline label - always visible', 'cod_region': 'hidden field', });
lyr_ServiciosDeEducacin_4.set('fieldLabels', {'qc_id': 'hidden field', 'agno': 'hidden field', 'rbd': 'hidden field', 'dgv_rbd': 'hidden field', 'nom_rbd': 'inline label - always visible', 'tipo_sost': 'hidden field', 'cod_reg_rb': 'hidden field', 'nom_reg_rb': 'hidden field', 'cod_pro_rb': 'hidden field', 'cod_com_rb': 'hidden field', 'nom_com_rb': 'hidden field', 'cod_deprov': 'hidden field', 'nom_deprov': 'hidden field', 'tipo_depen': 'hidden field', 'direccion': 'inline label - always visible', 'numero': 'inline label - always visible', 'referencia': 'inline label - always visible', 'latitud': 'hidden field', 'longitud': 'hidden field', 'mat_parv': 'hidden field', 'mat_bas_re': 'hidden field', 'mat_bas_ad': 'hidden field', 'mat_esp': 'hidden field', 'mat_mhc_re': 'hidden field', 'mat_mhc_ad': 'hidden field', 'mat_mtp_re': 'hidden field', 'mat_mtp_ad': 'hidden field', 'mat_total': 'hidden field', 'mat_hom_to': 'hidden field', 'mat_muj_to': 'hidden field', 'mat_si_tot': 'hidden field', 'cur_sim_to': 'hidden field', 'cur_comb_t': 'hidden field', });
lyr_Aeropuerto_5.set('fieldLabels', {'qc_id': 'hidden field', 'objectid_1': 'hidden field', 'cod_comuna': 'hidden field', 'categoría': 'hidden field', 'cod_oaci': 'hidden field', 'cod_iata': 'hidden field', 'aerodromo': 'inline label - always visible', 'region': 'hidden field', 'provincia': 'inline label - always visible', 'comuna': 'inline label - always visible', });
lyr_ServiciosDeSalud_6.set('fieldLabels', {'qc_id': 'hidden field', 'id_orig': 'hidden field', 'cod_ant': 'hidden field', 'cod_vig': 'hidden field', 'cod_m_ant': 'hidden field', 'cod_m_nuev': 'hidden field', 'cod_reg': 'hidden field', 'nom_reg': 'hidden field', 'cod_dep': 'hidden field', 'dependenc': 'inline label - always visible', 'pertenenci': 'inline label - always visible', 'tipo': 'inline label - always visible', 'ambito': 'inline label - always visible', 'nombre': 'inline label - always visible', 'certifi': 'hidden field', 'dep_adm': 'inline label - always visible', 'nivel': 'inline label - always visible', 'cod_com': 'hidden field', 'nom_com': 'hidden field', 'via': 'inline label - always visible', 'numero': 'hidden field', 'direccion': 'inline label - always visible', 'fono': 'hidden field', 'f_inicio': 'hidden field', 'urgencia': 'inline label - always visible', 'tipo_urge': 'inline label - always visible', 'clas_sapu': 'inline label - always visible', 'latitud': 'hidden field', 'longitud': 'hidden field', 'prestador': 'hidden field', 'estado': 'inline label - always visible', 'complejida': 'inline label - always visible', 'tipo_aten': 'inline label - always visible', 'cut_comuna': 'hidden field', 'cut_region': 'hidden field', 'cut_provin': 'hidden field', 'nom_region': 'hidden field', 'nom_provin': 'hidden field', 'nom_comuna': 'hidden field', 'ir_google': 'hidden field', 'simbologia': 'hidden field', });
lyr_ServiciosDeCarabineros_7.set('fieldLabels', {'qc_id': 'hidden field', 'nombre_reg': 'hidden field', 'nombre_pro': 'hidden field', 'nombre_com': 'hidden field', 'nombre_uni': 'inline label - always visible', 'tipo_de_un': 'inline label - always visible', 'tipo_de_vi': 'inline label - always visible', 'nombre_de': 'inline label - always visible', 'numero': 'inline label - always visible', 'point_x': 'hidden field', 'point_y': 'hidden field', 'hecho': 'hidden field', 'rg': 'hidden field', 'prefectura': 'hidden field', 'tipo': 'hidden field', 'zona': 'hidden field', 'uni_cod': 'hidden field', 'unid_encri': 'hidden field', });
lyr_ServiciosDeCarabineros_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
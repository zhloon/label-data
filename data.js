const initDataJson = [
  {
    "groupTitle": "通用",
    "items": [
      { "name": "欧盟代表（名字、地址、电话）", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/221-ecrep.png" },
      { "name": "美国代表（名字、地址、电话）", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/us-rep.png" },
      { "name": "欧盟代表（名字、地址、电话）", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/eu-rep.png" },
      { "name": "土耳其代表（名字、地址、电话）", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/1/tur-rep.png" },
      { "name": "英国代表（名字、地址、电话）", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/221-ukrep.png" },
      { "name": "土耳其代表（名字、地址、电话）", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/1/tr-rep.png" },
      { "name": "欧盟 CE 认证", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/221-ce.png" },
      { "name": "美国 FCC 认证", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/221-fc.png" },
      { "name": "英国 UKCA 认证", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/221-ukca.png" },
      { "name": "欧盟食品接触材料安全认证", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/222-bz.png" },
      { "name": "环保标志，商品可回收利用", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/221-qiu.png" },
      { "name": "欧盟不带电池的废弃电子电器回收标志", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/221-lj1.png" },
      { "name": "欧盟电池回收标志", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/222-lj2.png" },
      { "name": "欧盟标志", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/221-eu.png" },
      { "name": "欧洲共同体标志", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/221-ec.png" },
      { "name": "危险警示标签", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/227-Warning.png" },
      { "name": "危险警示标签", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/227-Warnings.png" },
      { "name": "填写数字+（以上的人群使用）", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/227-round.png" },
      { "name": "禁止0-1岁儿童接触", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/227-01.png" },
      { "name": "禁止0-3岁儿童接触", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/227-03.png" },
      { "name": "禁止0-3岁儿童接触", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/1/general_6.png" },
      { "name": "禁止0-6岁儿童接触", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/227-06.png" },
      { "name": "通用可回收标志", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/227-environmentala.png" },
      { "name": "聚氯乙烯（PVC）回收标志", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/227-3pvc.png" },
      { "name": "低密度聚乙烯（PE-LD）回收标志", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/1/227-4peld.png" },
      { "name": "聚丙烯（PP）回收标志", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/227-5pp.png" },
      { "name": "聚苯乙烯（PS）回收标志", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/227-6ps.png" },
      { "name": "带有盖子且可开启的容器", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/227-empty.png" },
      { "name": "建议开封 6 个月内使用完毕", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/227-6M.png" },
      { "name": "建议开封 12 个月内使用完毕", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/227-12M.png" },
      { "name": "投放回收标志，产品或其包装应回收处理", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/227-Littering.png" },
      { "name": "通用可回收标志", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/1/general_13.png" },
      { "name": "日本 PSE 菱形标志", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/227-PSE.png" },
      { "name": "中国强制性产品认证（CCC）", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/227-ccc.png" },
      { "name": "美国儿童产品证书（CPC）", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/227-cpc.png" },
      { "name": "美国 FDA 认证", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/227-FDA.png" },
      { "name": "美国 UL 认证", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/227-UL.png" },
      { "name": "美国和加拿大双重标准 UL 认证", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/1/general_12.png" },
      { "name": "美国 ETL 认证", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/227-ETL.png" },
      { "name": "海湾 GCC 认证", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/227-GCC.png" },
      { "name": "韩国 KC 认证", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/1/general_3.png" },
      { "name": "中国 QS 质量安全认证", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/227-QS.png" },
      { "name": "日本 TELEC 认证", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/1/general_1.png" },
      { "name": "日本 MIC 认证", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/1/general_2.png" },
      { "name": "热表面警告", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/1/general_4.png" },
      { "name": "热表面警告", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/1/general_7.png" },
      { "name": "易燃危险物品", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/227-fireproof.png" },
      { "name": "让儿童在水环境中受到监督", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/1/general_5.png" },
      { "name": "含有电池产品的警告标志", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/1/general_11.png" },
      { "name": "放在儿童接触不到的地方", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/1/general_9.png" },
      { "name": "直流电源标志", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/1/general_8.png" },
      { "name": "双重绝缘（无需地线）", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/1/general_10.png" },
      { "name": "欧盟 RoHS 标志", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/1/general_14.png" },
      { "name": "欧盟 RoHS 标志", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/1/general_24.png" },
      { "name": "欧盟 RoHS 标志", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/1/general_33.png" },
      { "name": "进口商", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/1/general_23.png" },
      { "name": "不适合驾驶和道路使用", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/1/general_26.png" },
      { "name": "不适合驾驶和道路使用", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/1/general_25.png" },
      { "name": "避免窒息危险，请将袋子远离婴儿和儿童", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/1/general_32.png" },
      { "name": "美国 Soy Ink 认证", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/1/general_31.png" },
      { "name": "美国 FCC 符合声明", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/221-content.png" },
      { "name": "儿童玩具警示语", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/221-warn2.png" },
      { "name": "窒息危险警示", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/1/general_15.png" },
      { "name": "法国 Triman 标识（纺织品）", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/221-bf.png" },
      { "name": "法国 Triman 标识（包装）", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/221-1f.png" },
      { "name": "法国 Triman 标识（电器）", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/221-2f.png" },
      { "name": "法国 Triman 标识（玩具）", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/221-3f.png" },
      { "name": "纽扣/硬币电池吞食危险警示", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/221-warn1.png" },
      { "name": "纽扣/硬币电池吞食危险警示", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/1/general_16.png" },
      { "name": "弹性行李带警告标签", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/1/general_34.png" },
      { "name": "窒息危险警示语-3至6岁含小部件", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/1/general_36.png" },
      { "name": "滤光片类别编号为0", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/1/general_37.png" },
      { "name": "滤光片类别编号为1", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/1/general_38.png" },
      { "name": "滤光片类别编号为2", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/1/general_39.png" },
      { "name": "滤光片类别编号为3", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/1/general_40.png" },
      { "name": "滤光片类别编号为4", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/1/general_41.png" },
      { "name": "环保标识", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/1/general_42.png" },
      { "name": "重型包裹标识", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/1/general_43.png" }
    ]
  },
  {
    "groupTitle": "法国标",
    "items": [
      { "name": "法国 Triman 标识", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/2/france_1.png" },
      { "name": "法国 Triman 标识（包装）", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/227-triman-bg.png" },
      { "name": "法国 Triman 标识（包装）", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/227-triman-fr.png" },
      { "name": "法国 Triman 标识（包装）", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/2/france_6.png" },
      { "name": "法国 Triman 标识（包装）", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/2/france_7.png" },
      { "name": "法国 Triman 标识（纺织品）", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/221-bf.png" },
      { "name": "法国 Triman 标识（纺织品）", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/227-triman-fzp.png" },
      { "name": "法国 Triman 标识（电器）", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/227-triman-epr.png" },
      { "name": "法国 Triman 标识（玩具）", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/227-triman-wj.png" },
      { "name": "法国 Triman 标识（电器）", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/221-2f.png" },
      { "name": "法国 Triman 标识（电器）", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/227-triman-dq.png" },
      { "name": "法国 Triman 标识（电器）", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/2/france_2.png" },
      { "name": "法国 Triman 标识（电器）", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/2/france_3.png" },
      { "name": "法国 Triman 标识（包装）", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/2/france_8.png" },
      { "name": "法国 Triman 标识（纺织品）", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/2/france_4.png" },
      { "name": "法国 Triman 标识（纺织品）", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/2/france_5.png" }
    ]
  },
  {
    "groupTitle": "西班牙包装标",
    "items": [
      { "name": "黄（塑料、金属或硬纸盒）", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/12/spain_recicla_yellow.png" },
      { "name": "蓝（纸、纸板或瓦愣纸）", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/12/spain_recycling_blue.png" },
      { "name": "棕（可降解包装）", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/12/spain_composta_brown.png" },
      { "name": "绿（玻璃）", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/12/spain_recicla_green.png" }
    ]
  },
  {
    "groupTitle": "化妆品",
    "items": [
      { "name": "通用可回收标志", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/227-environmentala.png" },
      { "name": "建议开封 6 个月内使用完毕", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/227-6M.png" },
      { "name": "建议开封 12 个月内使用完毕", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/227-12M.png" },
      { "name": "建议开封 24 个月内使用完毕", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/3/24M.png" },
      { "name": "需阅读说明书", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/227-book.png" },
      { "name": "欧盟无动物测试标志", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/3/eu_no_animal_test_mark.png" }
    ]
  },
  {
    "groupTitle": "纽扣电池",
    "items": [
      { "name": "含有电池产品的警告标志", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/10/battery_4.png" },
      { "name": "放在儿童接触不到的地方", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/10/battery_5.png" },
      { "name": "纽扣/硬币电池吞食危险警示-组合", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/10/battery_3.png" }
    ]
  },
  {
    "groupTitle": "欧盟能效",
    "items": [
      { "name": "欧盟", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/6/eu_energy_1.png" },
      { "name": "欧盟能源标志", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/6/eu_energy_2.png" },
      { "name": "能效 A", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/6/eu_energy_9.png" },
      { "name": "能效等级", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/6/eu_energy_12.png" }
    ]
  },
  {
    "groupTitle": "医疗器械标",
    "items": [
      { "name": "生产日期", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/8/medical_3.png" },
      { "name": "朝上摆放", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/8/medical_6.png" },
      { "name": "温度限制", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/8/medical_10.png" },
      { "name": "批次编号", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/8/medical_27.png" }
    ]
  },
  {
    "groupTitle": "水洗标",
    "items": [
      { "name": "手洗", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/227-sx5.png" },
      { "name": "可熨烫", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/227-yd66.png" },
      { "name": "不可熨烫", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/227-ydx67.png" },
      { "name": "平放晾干", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/227-yty60.png" }
    ]
  },
  {
    "groupTitle": "GHS全球危险品统一标识",
    "items": [
      { "name": "易燃品标志", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/7/ghs_danger_5.png" },
      { "name": "剧毒物标志", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/7/ghs_danger_4.png" },
      { "name": "腐蚀品标志", "type": "image", "img": "https://recruit-student.51miniapps.com/tool/icon/7/ghs_danger_13.png" }
    ]
  }
];

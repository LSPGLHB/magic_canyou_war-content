
//获取魔法选择列表
GameEvents.Subscribe( "getRandomMagicListLUATOJS", getRandomMagicListLUATOJS);
GameEvents.Subscribe( "getRebuildMagicListToForgetLUATOJS", getRebuildMagicListToForgetLUATOJS);
GameEvents.Subscribe( "getRebuildRandomMagicListLUATOJS", getRebuildRandomMagicListLUATOJS);

function closeMagicList(){
    GameEvents.SendCustomGameEventToServer( "closeMagicListJSTOLUA", {})
}

function refreshMagicList(){
    GameEvents.SendCustomGameEventToServer( "refreshMagicListJSTOLUA", {})
}

function learnMagicByNum(num){
    GameEvents.SendCustomGameEventToServer( "learnMagicByNameJSTOLUA", {num:num})
}

function learnRebuildMagicByNum(num){
    //GameEvents.SendCustomGameEventToServer( "learnMagicByNameJSTOLUA", {num:num})
    GameEvents.SendCustomGameEventToServer( "getRebuildMagicListByNameJSTOLUA", {num:num})
}

function getRandomGoldAndCloseList(){
    GameEvents.SendCustomGameEventToServer( "getRandomGoldJSTOLUA", {min:20,max:50})
    GameEvents.SendCustomGameEventToServer( "closeMagicListJSTOLUA", {})
}

function createMagicList(data,funcCallBack){
    var listLength = data.listLength
    var titleValue = data.titleValue
    var magicNameList = data.magicNameList
    var magicIconList = data.magicIconList
    var magicLvList = data.magicLvList
    var unitTypeList = data.unitTypeList
    var abilityCooldownList = data.abilityCooldownList
    var abilityManaCostList = data.abilityManaCostList
    var speedList_01 = data.speedList_01
    var speedList_02 = data.speedList_02
    var speedList_14 = data.speedList_14
    var maxDistanceList_03 = data.maxDistanceList_03
    var aoeRadiusList_04 = data.aoeRadiusList_04
    var aoeRadiusList_05 = data.aoeRadiusList_05
    var maxDistanceList_06 = data.maxDistanceList_06
    var maxDistanceList_15 = data.maxDistanceList_15
    var damageList_07 = data.damageList_07
    var damageList_08 = data.damageList_08
    var damageList_09 = data.damageList_09
    var maxChargesList_10 = data.maxChargesList_10
    var chargeReplenishTimeList_11 = data.chargeReplenishTimeList_11
    var energyList_12 = data.energyList_12
    var energyList_13 = data.energyList_13
    var debuffDurationList_21 = data.debuffDurationList_21
    var beatBackDistanceList_22 = data.beatBackDistanceList_22
    var debuffDurationList_23 = data.debuffDurationList_23
    var aoeDurationList_24 = data.aoeDurationList_24
    var debuffDurationList_25 = data.debuffDurationList_25
    var debuffDurationList_26 = data.debuffDurationList_26
    var stunDebuffDurationList_27 = data.stunDebuffDurationList_27
    var sleepDebuffDurationList_28 = data.sleepDebuffDurationList_28
    var aoeDurationList_29 = data.aoeDurationList_29
    var debuffDurationList_30 = data.debuffDurationList_30
    var aoeDurationList_31 = data.aoeDurationList_31
    var debuffDurationList_32 = data.debuffDurationList_32
    var debuffDurationList_33 = data.debuffDurationList_33
    var debuffDurationList_34 = data.debuffDurationList_34
    var aoeDurationList_35 = data.aoeDurationList_35
    var debuffDurationList_36 = data.debuffDurationList_36
    var GSpeedList_37 = data.GSpeedList_37
    var aoeDurationList_38 = data.aoeDurationList_38
    var disableTurningTimeList_39 = data.disableTurningTimeList_39

    var boomDelayList_50 = data.boomDelayList_50
    var visionRadiusList_51 = data.visionRadiusList_51
    var aoeDurationList_52 = data.aoeDurationList_52
    var debuffDurationList_53 = data.debuffDurationList_53
    var aoeDurationList_54 = data.aoeDurationList_54
    var visionTimeList_55 = data.visionTimeList_55
    var debuffDelayList_56 = data.debuffDelayList_56
    var debuffDurationList_57 = data.debuffDurationList_57
    var searchRangeList_58 = data.searchRangeList_58
    var doubleDamagePercentageList_59 = data.doubleDamagePercentageList_59
    var bounsDamagePercentageList_60 = data.bounsDamagePercentageList_60
    var sendDelayList_61 = data.sendDelayList_61
    var chargeTimeList_62 = data.chargeTimeList_62
    var turnRatePercentList_63 = data.turnRatePercentList_63
    var speedPercentList_64 = data.speedPercentList_64
    var channelTimeList_65 = data.channelTimeList_65
    var stageDurationList_66 = data.stageDurationList_66
    var debuffSpeedPercentList_67 = data.debuffSpeedPercentList_67
    var bounsDamagePercentageList_68 = data.bounsDamagePercentageList_68
    var debuffDurationList_69 = data.debuffDurationList_69
    var aoeRadiusList_70 = data.aoeRadiusList_70
    var damageByDistanceList_71 = data.damageByDistanceList_71
    var diffuseSpeedList_72 = data.diffuseSpeedList_72
    var catchRadiusList_75 = data.catchRadiusList_75
    var windSpeedList_76 = data.windSpeedList_76
    var windDamagePercentList_77 = data.windDamagePercentList_77
    var boundsDamagePercentList_78 = data.boundsDamagePercentList_78
    var windSpeedList_79 = data.windSpeedList_79
    var boundsDamageList_80 = data.boundsDamageList_80
    var boundsDamageCountList_81 = data.boundsDamageCountList_81
    var shootCountList_82 = data.shootCountList_82
    var GSpeedList_83 = data.GSpeedList_83

    $.Msg("=======getRandomMagicListLUATOJS======")
    $("#UIMagicListPanelBox").AddClass("UIMagicListPanelBox")
    var UIMagicListPanelBg = $.CreatePanel('Panel', $("#UIMagicListPanelBox"),"UIMagicListPanelBg");
    UIMagicListPanelBg.AddClass("UIMagicListPanelBg")

    var UIMagicListPanelTitle = $.CreatePanel('Panel', $("#UIMagicListPanelBg"),"UIMagicListPanelTitle");
    UIMagicListPanelTitle.AddClass("UIMagicListPanelTitle")
    var UIMagicListLabelTitle = $.CreatePanel('Label', $("#UIMagicListPanelTitle"),"UIMagicListLabelTitle");
    UIMagicListLabelTitle.AddClass("UIMagicListLabelTitle")
    UIMagicListLabelTitle.text = titleValue
    /*
    var UIMagicTitleCloseBtn = $.CreatePanel('Panel', $("#UIMagicListPanelTitle"),"UIMagicTitleCloseBtn");
    UIMagicTitleCloseBtn.AddClass("UIMagicListTitleCloseBtn") 
    UIMagicTitleCloseBtn.SetPanelEvent("onactivate",function(){closeMagicList()})
    */
    var UIMagicListPanel = $.CreatePanel('Panel', $("#UIMagicListPanelBg"),"UIMagicListPanel");
    UIMagicListPanel.AddClass("UIMagicListPanel")

    for(i=1;i<=listLength;i++){
        //var UIMagicListBtn = $.CreatePanel('Panel', $("#UIMagicListPanel"),"UIMagicListBtn"+i);
        //UIMagicListBtn.AddClass("UIMagicListBtn")
        var magicPanel = $.CreatePanel('Panel', $("#UIMagicListPanel"),"magicPanel"+i);
        magicPanel.AddClass("magicPanel")
        magicPanel.SetPanelEvent("onactivate",function(num){return function(){funcCallBack(num)}}(i))
        if (i == 1) {
            magicPanel.AddClass("magicPanel_firstChild")  
        }

        var magicTopBanner = $.CreatePanel('Panel', $("#magicPanel"+i),"magicTopBanner"+i);
        magicTopBanner.AddClass("magicTopBanner")

        var magic_img = $.CreatePanel('DOTAAbilityImage', $("#magicTopBanner"+i),"magic_img"+i);
        magic_img.AddClass("magic_img")
        magic_img.SetImage(magicIconList[i])

        var magicMsg = $.CreatePanel('Panel', $("#magicTopBanner"+i),"magicMsg"+i);
        magicMsg.AddClass("magicMsg")

        var magicCDMC = $.CreatePanel('Panel', $("#magicTopBanner"+i),"magicCDMC"+i);
        magicCDMC.AddClass("magicCDMC")

        var magicMC = $.CreatePanel('Label', $("#magicCDMC"+i),"magicMC"+i);
        magicMC.AddClass("magicMC")
        magicMC.text = abilityManaCostList[i]

        var magicCD = $.CreatePanel('Label', $("#magicCDMC"+i),"magicCD"+i);
        magicCD.AddClass("magicCD")
        magicCD.text = abilityCooldownList[i] + 's'

        

        var magicAttrBox = $.CreatePanel('Label', $("#magicMsg"+i),"magicAttr"+i);
        magicAttrBox.AddClass("magicAttr")
        var magicLvName
        if (magicLvList[i] == 'c') {
            magicLvName = "初级"
        }
        if (magicLvList[i] == 'b') {
            magicLvName = "中级"
        }
        if (magicLvList[i] == 'a') {
            magicLvName = "高级"
        }
        var unitTypeName
        if (unitTypeList[i] == 'huo') {
            unitTypeName = "火属性"
        }
        if (unitTypeList[i] == 'feng') {
            unitTypeName = "风属性"
        }
        if (unitTypeList[i] == 'lei') {
            unitTypeName = "雷属性"
        }
        if (unitTypeList[i] == 'tu') {
            unitTypeName = "土属性"
        }
        if (unitTypeList[i] == 'shui') {
            unitTypeName = "水属性"
        }
        magicAttrBox.text = magicLvName+" - "+unitTypeName

    

        var magicNameBox = $.CreatePanel('Label', $("#magicMsg"+i),"magicName"+i);
        magicNameBox.AddClass("magicName")
        var magicShowName = "#DOTA_Tooltip_ability_"+ magicNameList[i]
        magicNameBox.text = $.Localize(magicShowName)

        var magicValueBox = $.CreatePanel('Panel', $("#magicPanel"+i),"magicValue"+i);
        magicValueBox.AddClass('magicValue')

        var magicDescribeBox = $.CreatePanel('Label', $("#magicValue"+i),"magicDescribe"+i);
        magicDescribeBox.AddClass("magicDescribe")
        var magicDescribe = "#DOTA_Tooltip_ability_"+ magicNameList[i] + "_Description"
        var tempMagicDescribe = $.Localize(magicDescribe)
        var tempNum = tempMagicDescribe.indexOf('<br/><br/>')+10
        tempMagicDescribe = tempMagicDescribe.slice(tempNum);
        tempMagicDescribe = tempMagicDescribe.replace(/\s+/g,"")
        magicDescribeBox.SetAlreadyLocalizedText(tempMagicDescribe)

        var magicSpecialValBox = $.CreatePanel('Panel', $("#magicValue"+i),"magicSpecialValBox"+i);
        magicSpecialValBox.AddClass('magicSpecialValBox')

        var magicSpecialValBox1 = $.CreatePanel('Panel', $("#magicSpecialValBox"+i),"magicSpecialVal1"+i);
        magicSpecialValBox1.AddClass('magicSpecialValBox1')
        if (speedList_01[i] != 'null'){
            var magicSpeed01 = $.CreatePanel('Panel', $("#magicSpecialVal1"+i),"magicSpeed01"+i);
            magicSpeed01.AddClass("magicSpecialValItem")
            var magicSpeed01Title = $.CreatePanel('Label', $("#magicSpeed01"+i),"magicSpeed01Title"+i);
            magicSpeed01Title.AddClass("magicSpeedTitle")
            magicSpeed01Title.text = '基础飞行速度：'
            var magicSpeed01Value = $.CreatePanel('Label', $("#magicSpeed01"+i),"magicSpeed01Value"+i);
            magicSpeed01Value.AddClass("magicSpecialValue")
            magicSpeed01Value.text = speedList_01[i] 
        }

        if (speedList_02[i] != 'null'){
            var magicSpeed02 = $.CreatePanel('Panel', $("#magicSpecialVal1"+i),"magicSpeed02"+i);
            magicSpeed02.AddClass("magicSpecialValItem")
            var magicSpeed02Title = $.CreatePanel('Label', $("#magicSpeed02"+i),"magicSpeed02Title"+i);
            magicSpeed02Title.AddClass("magicSpeedTitle")
            magicSpeed02Title.text = '最大飞行速度：'
            var magicSpeed02Value = $.CreatePanel('Label', $("#magicSpeed02"+i),"magicSpeed02Value"+i);
            magicSpeed02Value.AddClass("magicSpecialValue")
            magicSpeed02Value.text = speedList_02[i] 
        }

        if (speedList_14[i] != 'null'){
            var magicSpeed14 = $.CreatePanel('Panel', $("#magicSpecialVal1"+i),"magicSpeed14"+i);
            magicSpeed14.AddClass("magicSpecialValItem")
            var magicSpeed14Title = $.CreatePanel('Label', $("#magicSpeed14"+i),"magicSpeed14Title"+i);
            magicSpeed14Title.AddClass("magicSpeedTitle")
            magicSpeed14Title.text = '吸引基础飞行速度：'
            var magicSpeed14Value = $.CreatePanel('Label', $("#magicSpeed14"+i),"magicSpeed14Value"+i);
            magicSpeed14Value.AddClass("magicSpecialValue")
            magicSpeed14Value.text = speedList_14[i] 
        }

        if (maxDistanceList_03[i] != 'null'){
            var magicMaxDistance03 = $.CreatePanel('Panel', $("#magicSpecialVal1"+i),"magicMaxDistance03"+i);
            magicMaxDistance03.AddClass("magicSpecialValItem")
            var magicMaxDistance03Title = $.CreatePanel('Label', $("#magicMaxDistance03"+i),"magicMaxDistance03Title"+i);
            magicMaxDistance03Title.AddClass("magicDistanceTitle")
            magicMaxDistance03Title.text = '基础射程：'
            var magicMaxDistance03Value = $.CreatePanel('Label', $("#magicMaxDistance03"+i),"magicMaxDistance03Value"+i);
            magicMaxDistance03Value.AddClass("magicSpecialValue")
            magicMaxDistance03Value.text = maxDistanceList_03[i] 
        }

        if (maxDistanceList_06[i] != 'null'){
            var magicMaxDistance06 = $.CreatePanel('Panel', $("#magicSpecialVal1"+i),"magicMaxDistance06"+i);
            magicMaxDistance06.AddClass("magicSpecialValItem")    
            var magicMaxDistance06Title = $.CreatePanel('Label', $("#magicMaxDistance06"+i),"magicMaxDistance06Title"+i);
            magicMaxDistance06Title.AddClass("magicDistanceTitle")
            magicMaxDistance06Title.text = '基础射程：'
            var magicMaxDistance06Value = $.CreatePanel('Label', $("#magicMaxDistance06"+i),"magicMaxDistance06Value"+i);
            magicMaxDistance06Value.AddClass("magicSpecialValue")
            magicMaxDistance06Value.text = maxDistanceList_06[i] 
        }

        if (maxDistanceList_15[i] != 'null'){
            var magicMaxDistance15 = $.CreatePanel('Panel', $("#magicSpecialVal1"+i),"magicMaxDistance15"+i);
            magicMaxDistance15.AddClass("magicSpecialValItem")
            var magicMaxDistance15Title = $.CreatePanel('Label', $("#magicMaxDistance15"+i),"magicMaxDistance15Title"+i);
            magicMaxDistance15Title.AddClass("magicDistanceTitle")
            magicMaxDistance15Title.text = '基础射程：'
            var magicMaxDistance15Value = $.CreatePanel('Label', $("#magicMaxDistance15"+i),"magicMaxDistance15Value"+i);
            magicMaxDistance15Value.AddClass("magicSpecialValue")
            magicMaxDistance15Value.text = maxDistanceList_15[i] 
        }

        if (aoeRadiusList_04[i] != 'null'){
            var magicAoeRadius04 = $.CreatePanel('Panel', $("#magicSpecialVal1"+i),"magicAoeRadius04"+i);
            magicAoeRadius04.AddClass("magicSpecialValItem") 
            var magicAoeRadius04Title = $.CreatePanel('Label', $("#magicAoeRadius04"+i),"magicAoeRadius04Title"+i);
            magicAoeRadius04Title.AddClass("magicRadiusTitle")
            magicAoeRadius04Title.text = '基础作用范围：'
            var magicAoeRadius04Value = $.CreatePanel('Label', $("#magicAoeRadius04"+i),"magicAoeRadius04Value"+i);
            magicAoeRadius04Value.AddClass("magicSpecialValue")
            magicAoeRadius04Value.text = aoeRadiusList_04[i] 
        }

        if (aoeRadiusList_05[i] != 'null'){
            var magicAoeRadius05 = $.CreatePanel('Panel', $("#magicSpecialVal1"+i),"magicAoeRadius05"+i);
            magicAoeRadius05.AddClass("magicSpecialValItem")     
            var magicAoeRadius05Title = $.CreatePanel('Label', $("#magicAoeRadius05"+i),"magicAoeRadius05Title"+i);
            magicAoeRadius05Title.AddClass("magicRadiusTitle")
            magicAoeRadius05Title.text = '基础作用范围：'
            var magicAoeRadius05Value = $.CreatePanel('Label', $("#magicAoeRadius05"+i),"magicAoeRadius05Value"+i);
            magicAoeRadius05Value.AddClass("magicSpecialValue")
            magicAoeRadius05Value.text = aoeRadiusList_05[i] 
        }

        if (damageList_07[i] != 'null'){
            var magicDamage07 = $.CreatePanel('Panel', $("#magicSpecialVal1"+i),"magicDamage07"+i);
            magicDamage07.AddClass("magicSpecialValItem")     
            var magicDamage07Title = $.CreatePanel('Label', $("#magicDamage07"+i),"magicDamage07Title"+i);
            magicDamage07Title.AddClass("magicDamageTitle")
            magicDamage07Title.text = '基础伤害：'
            var magicDamage07Value = $.CreatePanel('Label', $("#magicDamage07"+i),"magicDamage07Value"+i);
            magicDamage07Value.AddClass("magicSpecialValue")
            magicDamage07Value.text = damageList_07[i] 
        }
        if (damageList_08[i] != 'null'){
            var magicDamage08 = $.CreatePanel('Panel', $("#magicSpecialVal1"+i),"magicDamage08"+i);
            magicDamage08.AddClass("magicSpecialValItem")     
            var magicDamage08Title = $.CreatePanel('Label', $("#magicDamage08"+i),"magicDamage08Title"+i);
            magicDamage08Title.AddClass("magicDamageTitle")
            magicDamage08Title.text = '基础总伤害：'
            var magicDamage08Value = $.CreatePanel('Label', $("#magicDamage08"+i),"magicDamage08Value"+i);
            magicDamage08Value.AddClass("magicSpecialValue")
            magicDamage08Value.text = damageList_08[i] 
        }

        if (damageList_09[i] != 'null'){
            var magicDamage09 = $.CreatePanel('Panel', $("#magicSpecialVal1"+i),"magicDamage09"+i);
            magicDamage09.AddClass("magicSpecialValItem")     
            var magicDamage09Title = $.CreatePanel('Label', $("#magicDamage09"+i),"magicDamage09Title"+i);
            magicDamage09Title.AddClass("magicDamageTitle")
            magicDamage09Title.text = '伤害值：'
            var magicDamage09Value = $.CreatePanel('Label', $("#magicDamage09"+i),"magicDamage09Value"+i);
            magicDamage09Value.AddClass("magicSpecialValue")
            magicDamage09Value.text = damageList_09[i] 
        }

        if (energyList_12[i] != 'null'){
            var magicEnergy12 = $.CreatePanel('Panel', $("#magicSpecialVal1"+i),"magicEnergy12"+i);
            magicEnergy12.AddClass("magicSpecialValItem")     
            var magicEnergy12Title = $.CreatePanel('Label', $("#magicEnergy12"+i),"magicEnergy12Title"+i);
            magicEnergy12Title.AddClass("magicEnergyTitle")
            magicEnergy12Title.text = '基础法魂量：'
            var magicEnergy12Value = $.CreatePanel('Label', $("#magicEnergy12"+i),"magicEnergy12Value"+i);
            magicEnergy12Value.AddClass("magicSpecialValue")
            magicEnergy12Value.text = energyList_12[i] 
        }

        if (energyList_13[i] != 'null'){
            var magicEnergy13 = $.CreatePanel('Panel', $("#magicSpecialVal1"+i),"magicEnergy13"+i);
            magicEnergy13.AddClass("magicSpecialValItem")     
            var magicEnergy13Title = $.CreatePanel('Label', $("#magicEnergy13"+i),"magicEnergy13Title"+i);
            magicEnergy13Title.AddClass("magicEnergyTitle")
            magicEnergy13Title.text = '最大法魂量：'
            var magicEnergy13Value = $.CreatePanel('Label', $("#magicEnergy13"+i),"magicEnergy13Value"+i);
            magicEnergy13Value.AddClass("magicSpecialValue")
            magicEnergy13Value.text = energyList_13[i] 
        }
        
        if (debuffDurationList_21[i] != 'null'){
            var magicDebuffDuration21 = $.CreatePanel('Panel', $("#magicSpecialVal1"+i),"magicDebuffDuration21"+i);
            magicDebuffDuration21.AddClass("magicSpecialValItem")     
            var magicDebuffDuration21Title = $.CreatePanel('Label', $("#magicDebuffDuration21"+i),"magicDebuffDuration21Title"+i);
            magicDebuffDuration21Title.AddClass("magicEffectTitle")
            magicDebuffDuration21Title.text = '视野减少时间：'
            var magicDebuffDuration21Value = $.CreatePanel('Label', $("#magicDebuffDuration21"+i),"magicDebuffDuration21Value"+i);
            magicDebuffDuration21Value.AddClass("magicSpecialValue")
            magicDebuffDuration21Value.text = debuffDurationList_21[i] + 's'
        }
        
        if (beatBackDistanceList_22[i] != 'null'){
            var magicBeatBackDistance22 = $.CreatePanel('Panel', $("#magicSpecialVal1"+i),"magicBeatBackDistance22"+i);
            magicBeatBackDistance22.AddClass("magicSpecialValItem")     
            var magicBeatBackDistance22Title = $.CreatePanel('Label', $("#magicBeatBackDistance22"+i),"magicBeatBackDistance22Title"+i);
            magicBeatBackDistance22Title.AddClass("magicEffectTitle")
            magicBeatBackDistance22Title.text = '基础击退距离：'
            var magicBeatBackDistance22Value = $.CreatePanel('Label', $("#magicBeatBackDistance22"+i),"magicBeatBackDistance22Value"+i);
            magicBeatBackDistance22Value.AddClass("magicSpecialValue")
            magicBeatBackDistance22Value.text = beatBackDistanceList_22[i]
        }

        if (debuffDurationList_23[i] != 'null'){
            var magicDebuffDuration23 = $.CreatePanel('Panel', $("#magicSpecialVal1"+i),"magicDebuffDuration23"+i);
            magicDebuffDuration23.AddClass("magicSpecialValItem")     
            var magicDebuffDuration23Title = $.CreatePanel('Label', $("#magicDebuffDuration23"+i),"magicDebuffDuration23Title"+i);
            magicDebuffDuration23Title.AddClass("magicEffectTitle")
            magicDebuffDuration23Title.text = '缠绕时间：'
            var magicDebuffDuration23Value = $.CreatePanel('Label', $("#magicDebuffDuration23"+i),"magicDebuffDuration23Value"+i);
            magicDebuffDuration23Value.AddClass("magicSpecialValue")
            magicDebuffDuration23Value.text = debuffDurationList_23[i] + 's'
        }

        if (aoeDurationList_24[i] != 'null'){
            var magicAoeDuration24 = $.CreatePanel('Panel', $("#magicSpecialVal1"+i),"magicAoeDuration24"+i);
            magicAoeDuration24.AddClass("magicSpecialValItem")     
            var magicAoeDuration24Title = $.CreatePanel('Label', $("#magicAoeDuration24"+i),"magicAoeDuration24Title"+i);
            magicAoeDuration24Title.AddClass("magicEffectTitle")
            magicAoeDuration24Title.text = '沼泽持续时间：'
            var magicAoeDuration24Value = $.CreatePanel('Label', $("#magicAoeDuration24"+i),"magicAoeDuration24Value"+i);
            magicAoeDuration24Value.AddClass("magicSpecialValue")
            magicAoeDuration24Value.text = aoeDurationList_24[i] + 's'
        }

        if (debuffDurationList_25[i] != 'null'){
            var magicDebuffDuration25 = $.CreatePanel('Panel', $("#magicSpecialVal1"+i),"magicDebuffDuration25"+i);
            magicDebuffDuration25.AddClass("magicSpecialValItem")     
            var magicDebuffDuration25Title = $.CreatePanel('Label', $("#magicDebuffDuration25"+i),"magicDebuffDuration25Title"+i);
            magicDebuffDuration25Title.AddClass("magicEffectTitle")
            magicDebuffDuration25Title.text = '单个缠绕时间：'
            var magicDebuffDuration25Value = $.CreatePanel('Label', $("#magicDebuffDuration25"+i),"magicDebuffDuration25Value"+i);
            magicDebuffDuration25Value.AddClass("magicSpecialValue")
            magicDebuffDuration25Value.text = debuffDurationList_25[i] + 's'
        }

        if (debuffDurationList_26[i] != 'null'){
            var magicDebuffDuration26 = $.CreatePanel('Panel', $("#magicSpecialVal1"+i),"magicDebuffDuration26"+i);
            magicDebuffDuration26.AddClass("magicSpecialValItem")     
            var magicDebuffDuration26Title = $.CreatePanel('Label', $("#magicDebuffDuration26"+i),"magicDebuffDuration26Title"+i);
            magicDebuffDuration26Title.AddClass("magicEffectTitle")
            magicDebuffDuration26Title.text = '触电时间：'
            var magicDebuffDuration26Value = $.CreatePanel('Label', $("#magicDebuffDuration26"+i),"magicDebuffDuration26Value"+i);
            magicDebuffDuration26Value.AddClass("magicSpecialValue")
            magicDebuffDuration26Value.text = debuffDurationList_26[i] + 's'
        }

        if (stunDebuffDurationList_27[i] != 'null'){
            var magicStunDebuffDuration27 = $.CreatePanel('Panel', $("#magicSpecialVal1"+i),"magicStunDebuffDuration27"+i);
            magicStunDebuffDuration27.AddClass("magicSpecialValItem")     
            var magicStunDebuffDuration27Title = $.CreatePanel('Label', $("#magicStunDebuffDuration27"+i),"magicStunDebuffDuration27Title"+i);
            magicStunDebuffDuration27Title.AddClass("magicEffectTitle")
            magicStunDebuffDuration27Title.text = '基础最大眩晕时间：'
            var magicStunDebuffDuration27Value = $.CreatePanel('Label', $("#magicStunDebuffDuration27"+i),"magicStunDebuffDuration27Value"+i);
            magicStunDebuffDuration27Value.AddClass("magicSpecialValue")
            magicStunDebuffDuration27Value.text = stunDebuffDurationList_27[i] + 's'
        }

        if (sleepDebuffDurationList_28[i] != 'null'){
            var magicSleepDebuffDuration28 = $.CreatePanel('Panel', $("#magicSpecialVal1"+i),"magicSleepDebuffDuration28"+i);
            magicSleepDebuffDuration28.AddClass("magicSpecialValItem")     
            var magicSleepDebuffDuration28Title = $.CreatePanel('Label', $("#magicSleepDebuffDuration28"+i),"magicSleepDebuffDuration28Title"+i);
            magicSleepDebuffDuration28Title.AddClass("magicEffectTitle")
            magicSleepDebuffDuration28Title.text = '基础最大昏睡时间：'
            var magicSleepDebuffDuration28Value = $.CreatePanel('Label', $("#magicSleepDebuffDuration28"+i),"magicSleepDebuffDuration28Value"+i);
            magicSleepDebuffDuration28Value.AddClass("magicSpecialValue")
            magicSleepDebuffDuration28Value.text = sleepDebuffDurationList_28[i] + 's'
        }

        if (aoeDurationList_29[i] != 'null'){
            var magicAoeDuration29 = $.CreatePanel('Panel', $("#magicSpecialVal1"+i),"magicAoeDuration29"+i);
            magicAoeDuration29.AddClass("magicSpecialValItem")     
            var magicAoeDuration29Title = $.CreatePanel('Label', $("#magicAoeDuration29"+i),"magicAoeDuration29Title"+i);
            magicAoeDuration29Title.AddClass("magicEffectTitle")
            magicAoeDuration29Title.text = '电力墙持续时间：'
            var magicAoeDuration29Value = $.CreatePanel('Label', $("#magicAoeDuration29"+i),"magicAoeDuration29Value"+i);
            magicAoeDuration29Value.AddClass("magicSpecialValue")
            magicAoeDuration29Value.text = aoeDurationList_29[i] + 's'
        }

        if (debuffDurationList_30[i] != 'null'){
            var magicDebuffDuration30 = $.CreatePanel('Panel', $("#magicSpecialVal1"+i),"magicDebuffDuration30"+i);
            magicDebuffDuration30.AddClass("magicSpecialValItem")     
            var magicDebuffDuration30Title = $.CreatePanel('Label', $("#magicDebuffDuration30"+i),"magicDebuffDuration30Title"+i);
            magicDebuffDuration30Title.AddClass("magicEffectTitle")
            magicDebuffDuration30Title.text = '基础眩晕时间：'
            var magicDebuffDuration30Value = $.CreatePanel('Label', $("#magicDebuffDuration30"+i),"magicDebuffDuration30Value"+i);
            magicDebuffDuration30Value.AddClass("magicSpecialValue")
            magicDebuffDuration30Value.text = debuffDurationList_30[i] + 's'
        }

        if (aoeDurationList_31[i] != 'null'){
            var magicAoeDuration31 = $.CreatePanel('Panel', $("#magicSpecialVal1"+i),"magicAoeDuration31"+i);
            magicAoeDuration31.AddClass("magicSpecialValItem")     
            var magicAoeDuration31Title = $.CreatePanel('Label', $("#magicAoeDuration31"+i),"magicAoeDuration31Title"+i);
            magicAoeDuration31Title.AddClass("magicEffectTitle")
            magicAoeDuration31Title.text = '雷电区域持续时间：'
            var magicAoeDuration31Value = $.CreatePanel('Label', $("#magicAoeDuration31"+i),"magicAoeDuration31Value"+i);
            magicAoeDuration31Value.AddClass("magicSpecialValue")
            magicAoeDuration31Value.text = aoeDurationList_31[i] + 's'
        }

        if (debuffDurationList_32[i] != 'null'){
            var magicDebuffDuration32 = $.CreatePanel('Panel', $("#magicSpecialVal1"+i),"magicDebuffDuration32"+i);
            magicDebuffDuration32.AddClass("magicSpecialValItem")     
            var magicDebuffDuration32Title = $.CreatePanel('Label', $("#magicDebuffDuration32"+i),"magicDebuffDuration32Title"+i);
            magicDebuffDuration32Title.AddClass("magicEffectTitle")
            magicDebuffDuration32Title.text = '基础昏睡时间：'
            var magicDebuffDuration32Value = $.CreatePanel('Label', $("#magicDebuffDuration32"+i),"magicDebuffDuration32Value"+i);
            magicDebuffDuration32Value.AddClass("magicSpecialValue")
            magicDebuffDuration32Value.text = debuffDurationList_32[i] + 's'
        }

        if (debuffDurationList_33[i] != 'null'){
            var magicDebuffDuration33 = $.CreatePanel('Panel', $("#magicSpecialVal1"+i),"magicDebuffDuration33"+i);
            magicDebuffDuration33.AddClass("magicSpecialValItem")     
            var magicDebuffDuration33Title = $.CreatePanel('Label', $("#magicDebuffDuration33"+i),"magicDebuffDuration33Title"+i);
            magicDebuffDuration33Title.AddClass("magicEffectTitle")
            magicDebuffDuration33Title.text = '减速时间：'
            var magicDebuffDuration33Value = $.CreatePanel('Label', $("#magicDebuffDuration33"+i),"magicDebuffDuration33Value"+i);
            magicDebuffDuration33Value.AddClass("magicSpecialValue")
            magicDebuffDuration33Value.text = debuffDurationList_33[i] + 's'
        }

        if (debuffDurationList_34[i] != 'null'){
            var magicDebuffDuration34 = $.CreatePanel('Panel', $("#magicSpecialVal1"+i),"magicDebuffDuration34"+i);
            magicDebuffDuration34.AddClass("magicSpecialValItem")     
            var magicDebuffDuration34Title = $.CreatePanel('Label', $("#magicDebuffDuration34"+i),"magicDebuffDuration34Title"+i);
            magicDebuffDuration34Title.AddClass("magicEffectTitle")
            magicDebuffDuration34Title.text = '减速时间：'
            var magicDebuffDuration34Value = $.CreatePanel('Label', $("#magicDebuffDuration34"+i),"magicDebuffDuration34Value"+i);
            magicDebuffDuration34Value.AddClass("magicSpecialValue")
            magicDebuffDuration34Value.text = debuffDurationList_34[i] + 's'
        }

        if (aoeDurationList_35[i] != 'null'){
            var magicAoeDuration35 = $.CreatePanel('Panel', $("#magicSpecialVal1"+i),"magicAoeDuration35"+i);
            magicAoeDuration35.AddClass("magicSpecialValItem")     
            var magicAoeDuration35Title = $.CreatePanel('Label', $("#magicAoeDuration35"+i),"magicAoeDuration35Title"+i);
            magicAoeDuration35Title.AddClass("magicEffectTitle")
            magicAoeDuration35Title.text = '冰冻区域持续时间：'
            var magicAoeDuration35Value = $.CreatePanel('Label', $("#magicAoeDuration35"+i),"magicAoeDuration35Value"+i);
            magicAoeDuration35Value.AddClass("magicSpecialValue")
            magicAoeDuration35Value.text = aoeDurationList_35[i] + 's'
        }

        if (debuffDurationList_36[i] != 'null'){
            var magicDebuffDuration36 = $.CreatePanel('Panel', $("#magicSpecialVal1"+i),"magicDebuffDuration36"+i);
            magicDebuffDuration36.AddClass("magicSpecialValItem")     
            var magicDebuffDuration36Title = $.CreatePanel('Label', $("#magicDebuffDuration36"+i),"magicDebuffDuration36Title"+i);
            magicDebuffDuration36Title.AddClass("magicEffectTitle")
            magicDebuffDuration36Title.text = '束缚持续时间：'
            var magicDebuffDuration36Value = $.CreatePanel('Label', $("#magicDebuffDuration36"+i),"magicDebuffDuration36Value"+i);
            magicDebuffDuration36Value.AddClass("magicSpecialValue")
            magicDebuffDuration36Value.text = debuffDurationList_36[i] + 's'
        }

        if (GSpeedList_37[i] != 'null'){
            var magicGSpeed37 = $.CreatePanel('Panel', $("#magicSpecialVal1"+i),"magicGSpeed37"+i);
            magicGSpeed37.AddClass("magicSpecialValItem")     
            var magicGSpeed37Title = $.CreatePanel('Label', $("#magicGSpeed37"+i),"magicGSpeed37Title"+i);
            magicGSpeed37Title.AddClass("magicEffectTitle")
            magicGSpeed37Title.text = '基础牵引速度：'
            var magicGSpeed37Value = $.CreatePanel('Label', $("#magicGSpeed37"+i),"magicGSpeed37Value"+i);
            magicGSpeed37Value.AddClass("magicSpecialValue")
            magicGSpeed37Value.text = GSpeedList_37[i]
        }

        if (aoeDurationList_38[i] != 'null'){
            var magicAoeDuration38 = $.CreatePanel('Panel', $("#magicSpecialVal1"+i),"magicAoeDuration38"+i);
            magicAoeDuration38.AddClass("magicSpecialValItem")     
            var magicAoeDuration38Title = $.CreatePanel('Label', $("#magicAoeDuration38"+i),"magicAoeDuration38Title"+i);
            magicAoeDuration38Title.AddClass("magicEffectTitle")
            magicAoeDuration38Title.text = '基础持续时间：'
            var magicAoeDuration38Value = $.CreatePanel('Label', $("#magicAoeDuration38"+i),"magicAoeDuration38Value"+i);
            magicAoeDuration38Value.AddClass("magicSpecialValue")
            magicAoeDuration38Value.text = aoeDurationList_38[i] + 's'
        }

        if (aoeDurationList_38[i] != 'null'){
            var magicAoeDuration38 = $.CreatePanel('Panel', $("#magicSpecialVal1"+i),"magicAoeDuration38"+i);
            magicAoeDuration38.AddClass("magicSpecialValItem")     
            var magicAoeDuration38Title = $.CreatePanel('Label', $("#magicAoeDuration38"+i),"magicAoeDuration38Title"+i);
            magicAoeDuration38Title.AddClass("magicEffectTitle")
            magicAoeDuration38Title.text = '基础持续时间：'
            var magicAoeDuration38Value = $.CreatePanel('Label', $("#magicAoeDuration38"+i),"magicAoeDuration38Value"+i);
            magicAoeDuration38Value.AddClass("magicSpecialValue")
            magicAoeDuration38Value.text = aoeDurationList_38[i] + 's'
        }
        
        if (disableTurningTimeList_39[i] != 'null'){
            var magicAoeDuration38 = $.CreatePanel('Panel', $("#magicSpecialVal1"+i),"magicAoeDuration38"+i);
            magicAoeDuration38.AddClass("magicSpecialValItem")     
            var magicAoeDuration38Title = $.CreatePanel('Label', $("#magicAoeDuration38"+i),"magicAoeDuration38Title"+i);
            magicAoeDuration38Title.AddClass("magicEffectTitle")
            magicAoeDuration38Title.text = '基础僵直持续时间：'
            var magicAoeDuration38Value = $.CreatePanel('Label', $("#magicAoeDuration38"+i),"magicAoeDuration38Value"+i);
            magicAoeDuration38Value.AddClass("magicSpecialValue")
            magicAoeDuration38Value.text = disableTurningTimeList_39[i] + 's'
        }


        //var magicSpecialValBox2 = $.CreatePanel('Panel', $("#magicSpecialValBox"+i),"magicSpecialVal2"+i);
        //magicSpecialValBox2.AddClass('magicSpecialValBox2')
        if (maxChargesList_10[i] != 'null'){
            var magicMaxCharges10 = $.CreatePanel('Panel', $("#magicSpecialVal1"+i),"magicMaxCharges10"+i);
            magicMaxCharges10.AddClass("magicSpecialValItem")     
            var magicMaxCharges10Title = $.CreatePanel('Label', $("#magicMaxCharges10"+i),"magicMaxCharges10Title"+i);
            magicMaxCharges10Title.AddClass("magicCommonTitle")
            magicMaxCharges10Title.text = '储能上限：'
            var magicMaxCharges10Value = $.CreatePanel('Label', $("#magicMaxCharges10"+i),"magicMaxCharges10Value"+i);
            magicMaxCharges10Value.AddClass("magicSpecialValue")
            magicMaxCharges10Value.text = maxChargesList_10[i] 
        }

        if (chargeReplenishTimeList_11[i] != 'null'){
            var magicChargeReplenishTime11 = $.CreatePanel('Panel', $("#magicSpecialVal1"+i),"magicChargeReplenishTime11"+i);
            magicChargeReplenishTime11.AddClass("magicSpecialValItem")     
            var magicChargeReplenishTime11Title = $.CreatePanel('Label', $("#magicChargeReplenishTime11"+i),"magicChargeReplenishTime11Title"+i);
            magicChargeReplenishTime11Title.AddClass("magicCommonTitle")
            magicChargeReplenishTime11Title.text = '充能时间：'
            var magicChargeReplenishTime11Value = $.CreatePanel('Label', $("#magicChargeReplenishTime11"+i),"magicChargeReplenishTime11Value"+i);
            magicChargeReplenishTime11Value.AddClass("magicSpecialValue")
            magicChargeReplenishTime11Value.text = chargeReplenishTimeList_11[i] + 's'
        }

        if (boomDelayList_50[i] != 'null'){
            var magicBoomDelay50 = $.CreatePanel('Panel', $("#magicSpecialVal1"+i),"magicBoomDelay50"+i);
            magicBoomDelay50.AddClass("magicSpecialValItem")     
            var magicBoomDelay50Title = $.CreatePanel('Label', $("#magicBoomDelay50"+i),"magicBoomDelay50Title"+i);
            magicBoomDelay50Title.AddClass("magicCommonTitle")
            magicBoomDelay50Title.text = '蓄力时间：'
            var magicBoomDelay50Value = $.CreatePanel('Label', $("#magicBoomDelay50"+i),"magicBoomDelay50Value"+i);
            magicBoomDelay50Value.AddClass("magicSpecialValue")
            magicBoomDelay50Value.text = boomDelayList_50[i] + 's'
        }

        if (visionRadiusList_51[i] != 'null'){
            var magicVisionRadius51 = $.CreatePanel('Panel', $("#magicSpecialVal1"+i),"magicVisionRadius51"+i);
            magicVisionRadius51.AddClass("magicSpecialValItem")     
            var magicVisionRadius51Title = $.CreatePanel('Label', $("#magicVisionRadius51"+i),"magicVisionRadius51Title"+i);
            magicVisionRadius51Title.AddClass("magicCommonTitle")
            magicVisionRadius51Title.text = '命中目标视野减少：'
            var magicVisionRadius51Value = $.CreatePanel('Label', $("#magicVisionRadius51"+i),"magicVisionRadius51Value"+i);
            magicVisionRadius51Value.AddClass("magicSpecialValue")
            magicVisionRadius51Value.text = visionRadiusList_51[i] * -1
        }
        
        if (aoeDurationList_52[i] != 'null'){
            var magicAoeDuration52 = $.CreatePanel('Panel', $("#magicSpecialVal1"+i),"magicAoeDuration52"+i);
            magicAoeDuration52.AddClass("magicSpecialValItem")     
            var magicAoeDuration52Title = $.CreatePanel('Label', $("#magicAoeDuration52"+i),"magicAoeDuration52Title"+i);
            magicAoeDuration52Title.AddClass("magicCommonTitle")
            magicAoeDuration52Title.text = '燃烧持续时间：'
            var magicAoeDuration52Value = $.CreatePanel('Label', $("#magicAoeDuration52"+i),"magicAoeDuration52Value"+i);
            magicAoeDuration52Value.AddClass("magicSpecialValue")
            magicAoeDuration52Value.text = aoeDurationList_52[i] + 's'
        }

        if (debuffDurationList_53[i] != 'null'){
            var magicDebuffDuration53 = $.CreatePanel('Panel', $("#magicSpecialVal1"+i),"magicDebuffDuration53"+i);
            magicDebuffDuration53.AddClass("magicSpecialValItem")     
            var magicDebuffDuration53Title = $.CreatePanel('Label', $("#magicDebuffDuration53"+i),"magicDebuffDuration53Title"+i);
            magicDebuffDuration53Title.AddClass("magicCommonTitle")
            magicDebuffDuration53Title.text = '伤害结算时间：'
            var magicDebuffDuration53Value = $.CreatePanel('Label', $("#magicDebuffDuration53"+i),"magicDebuffDuration53Value"+i);
            magicDebuffDuration53Value.AddClass("magicSpecialValue")
            magicDebuffDuration53Value.text = debuffDurationList_53[i] + 's'
        }

        if (aoeDurationList_54[i] != 'null'){
            var magicAoeDuration54 = $.CreatePanel('Panel', $("#magicSpecialVal1"+i),"magicAoeDuration54"+i);
            magicAoeDuration54.AddClass("magicSpecialValItem")     
            var magicAoeDuration54Title = $.CreatePanel('Label', $("#magicAoeDuration54"+i),"magicAoeDuration54Title"+i);
            magicAoeDuration54Title.AddClass("magicCommonTitle")
            magicAoeDuration54Title.text = '光球持续时间：'
            var magicAoeDuration54Value = $.CreatePanel('Label', $("#magicAoeDuration54"+i),"magicAoeDuration54Value"+i);
            magicAoeDuration54Value.AddClass("magicSpecialValue")
            magicAoeDuration54Value.text = aoeDurationList_54[i] + 's'
        }

        if (visionTimeList_55[i] != 'null'){
            var magicVisionTime55 = $.CreatePanel('Panel', $("#magicSpecialVal1"+i),"magicVisionTime55"+i);
            magicVisionTime55.AddClass("magicSpecialValItem")     
            var magicVisionTime55Title = $.CreatePanel('Label', $("#magicVisionTime55"+i),"magicVisionTime55Title"+i);
            magicVisionTime55Title.AddClass("magicCommonTitle")
            magicVisionTime55Title.text = '累计时间：'
            var magicVisionTime55Value = $.CreatePanel('Label', $("#magicVisionTime55"+i),"magicVisionTime55Value"+i);
            magicVisionTime55Value.AddClass("magicSpecialValue")
            magicVisionTime55Value.text = visionTimeList_55[i] + 's'
        }
        
        if (debuffDelayList_56[i] != 'null'){
            var magicDebuffDelay56 = $.CreatePanel('Panel', $("#magicSpecialVal1"+i),"magicDebuffDelay56"+i);
            magicDebuffDelay56.AddClass("magicSpecialValItem")     
            var magicDebuffDelay56Title = $.CreatePanel('Label', $("#magicDebuffDelay56"+i),"magicDebuffDelay56Title"+i);
            magicDebuffDelay56Title.AddClass("magicCommonTitle")
            magicDebuffDelay56Title.text = '延迟触发时间：'
            var magicDebuffDelay56Value = $.CreatePanel('Label', $("#magicDebuffDelay56"+i),"magicDebuffDelay56Value"+i);
            magicDebuffDelay56Value.AddClass("magicSpecialValue")
            magicDebuffDelay56Value.text = debuffDelayList_56[i] + 's'
        }

        if (debuffDurationList_57[i] != 'null'){
            var magicDebuffDuration57 = $.CreatePanel('Panel', $("#magicSpecialVal1"+i),"magicDebuffDuration57"+i);
            magicDebuffDuration57.AddClass("magicSpecialValItem")     
            var magicDebuffDuration57Title = $.CreatePanel('Label', $("#magicDebuffDuration57"+i),"magicDebuffDuration57Title"+i);
            magicDebuffDuration57Title.AddClass("magicCommonTitle")
            magicDebuffDuration57Title.text = '移动受伤时间：'
            var magicDebuffDuration57Value = $.CreatePanel('Label', $("#magicDebuffDuration57"+i),"magicDebuffDuration57Value"+i);
            magicDebuffDuration57Value.AddClass("magicSpecialValue")
            magicDebuffDuration57Value.text = debuffDurationList_57[i] + 's'
        }

        if (searchRangeList_58[i] != 'null'){
            var magicSearchRange58 = $.CreatePanel('Panel', $("#magicSpecialVal1"+i),"magicSearchRange58"+i);
            magicSearchRange58.AddClass("magicSpecialValItem")     
            var magicSearchRange58Title = $.CreatePanel('Label', $("#magicSearchRange58"+i),"magicSearchRange58Title"+i);
            magicSearchRange58Title.AddClass("magicCommonTitle")
            magicSearchRange58Title.text = '搜索距离：'
            var magicSearchRange58Value = $.CreatePanel('Label', $("#magicSearchRange58"+i),"magicSearchRange58Value"+i);
            magicSearchRange58Value.AddClass("magicSpecialValue")
            magicSearchRange58Value.text = searchRangeList_58[i]
        }

        if (doubleDamagePercentageList_59[i] != 'null'){
            var magicDoubleDamagePercentage59 = $.CreatePanel('Panel', $("#magicSpecialVal1"+i),"magicDoubleDamagePercentage59"+i);
            magicDoubleDamagePercentage59.AddClass("magicSpecialValItem")     
            var magicDoubleDamagePercentage59Title = $.CreatePanel('Label', $("#magicDoubleDamagePercentage59"+i),"magicDoubleDamagePercentage59Title"+i);
            magicDoubleDamagePercentage59Title.AddClass("magicCommonTitle")
            magicDoubleDamagePercentage59Title.text = '暴击概率：'
            var magicDoubleDamagePercentage59Value = $.CreatePanel('Label', $("#magicDoubleDamagePercentage59"+i),"magicDoubleDamagePercentage59Value"+i);
            magicDoubleDamagePercentage59Value.AddClass("magicSpecialValue")
            magicDoubleDamagePercentage59Value.text = doubleDamagePercentageList_59[i] + '%'
        }

        if (bounsDamagePercentageList_60[i] != 'null'){
            var magicBounsDamagePercentage60 = $.CreatePanel('Panel', $("#magicSpecialVal1"+i),"magicBounsDamagePercentage60"+i);
            magicBounsDamagePercentage60.AddClass("magicSpecialValItem")     
            var magicBounsDamagePercentage60Title = $.CreatePanel('Label', $("#magicBounsDamagePercentage60"+i),"magicBounsDamagePercentage60Title"+i);
            magicBounsDamagePercentage60Title.AddClass("magicCommonTitle")
            magicBounsDamagePercentage60Title.text = '增加伤害目标已损生命比例：'
            var magicBounsDamagePercentage60Value = $.CreatePanel('Label', $("#magicBounsDamagePercentage60"+i),"magicBounsDamagePercentage60Value"+i);
            magicBounsDamagePercentage60Value.AddClass("magicSpecialValue")
            magicBounsDamagePercentage60Value.text = bounsDamagePercentageList_60[i] + '%'
        }

        if (sendDelayList_61[i] != 'null'){
            var magicSendDelay61 = $.CreatePanel('Panel', $("#magicSpecialVal1"+i),"magicSendDelay61"+i);
            magicSendDelay61.AddClass("magicSpecialValItem")     
            var magicSendDelay61Title = $.CreatePanel('Label', $("#magicSendDelay61"+i),"magicSendDelay61Title"+i);
            magicSendDelay61Title.AddClass("magicCommonTitle")
            magicSendDelay61Title.text = '蓄能时间：'
            var magicSendDelay61Value = $.CreatePanel('Label', $("#magicSendDelay61"+i),"magicSendDelay61Value"+i);
            magicSendDelay61Value.AddClass("magicSpecialValue")
            magicSendDelay61Value.text = sendDelayList_61[i] + 's'
        }

        if (chargeTimeList_62[i] != 'null'){
            var magicChargeTime62 = $.CreatePanel('Panel', $("#magicSpecialVal1"+i),"magicChargeTime62"+i);
            magicChargeTime62.AddClass("magicSpecialValItem")     
            var magicChargeTime62Title = $.CreatePanel('Label', $("#magicChargeTime62"+i),"magicChargeTime62Title"+i);
            magicChargeTime62Title.AddClass("magicCommonTitle")
            magicChargeTime62Title.text = '蓄力时间：'
            var magicChargeTime62Value = $.CreatePanel('Label', $("#magicChargeTime62"+i),"magicChargeTime62Value"+i);
            magicChargeTime62Value.AddClass("magicSpecialValue")
            magicChargeTime62Value.text = chargeTimeList_62[i] + 's'
        }

        if (turnRatePercentList_63[i] != 'null'){
            var magicTurnRatePercent63 = $.CreatePanel('Panel', $("#magicSpecialVal1"+i),"magicTurnRatePercent63"+i);
            magicTurnRatePercent63.AddClass("magicSpecialValItem")     
            var magicTurnRatePercent63Title = $.CreatePanel('Label', $("#magicTurnRatePercent63"+i),"magicTurnRatePercent63Title"+i);
            magicTurnRatePercent63Title.AddClass("magicCommonTitle")
            magicTurnRatePercent63Title.text = '转身速度减缓：'
            var magicTurnRatePercent63Value = $.CreatePanel('Label', $("#magicTurnRatePercent63"+i),"magicTurnRatePercent63Value"+i);
            magicTurnRatePercent63Value.AddClass("magicSpecialValue")
            magicTurnRatePercent63Value.text = turnRatePercentList_63[i] * -1 + '%'
        }

        if (speedPercentList_64[i] != 'null'){
            var magicSpeedPercent64 = $.CreatePanel('Panel', $("#magicSpecialVal1"+i),"magicSpeedPercent64"+i);
            magicSpeedPercent64.AddClass("magicSpecialValItem")     
            var magicSpeedPercent64Title = $.CreatePanel('Label', $("#magicSpeedPercent64"+i),"magicSpeedPercent64Title"+i);
            magicSpeedPercent64Title.AddClass("magicCommonTitle")
            magicSpeedPercent64Title.text = '移动速度减缓：'
            var magicSpeedPercent64Value = $.CreatePanel('Label', $("#magicSpeedPercent64"+i),"magicSpeedPercent64Value"+i);
            magicSpeedPercent64Value.AddClass("magicSpecialValue")
            magicSpeedPercent64Value.text = speedPercentList_64[i] * -1 + '%'
        }

        if (channelTimeList_65[i] != 'null'){
            var magicChannelTime65 = $.CreatePanel('Panel', $("#magicSpecialVal1"+i),"magicChannelTime65"+i);
            magicChannelTime65.AddClass("magicSpecialValItem")     
            var magicChannelTime65Title = $.CreatePanel('Label', $("#magicChannelTime65"+i),"magicChannelTime65Title"+i);
            magicChannelTime65Title.AddClass("magicCommonTitle")
            magicChannelTime65Title.text = '蓄力时间：'
            var magicChannelTime65Value = $.CreatePanel('Label', $("#magicChannelTime65"+i),"magicChannelTime65Value"+i);
            magicChannelTime65Value.AddClass("magicSpecialValue")
            magicChannelTime65Value.text = channelTimeList_65[i] + 's'
        }

        if (stageDurationList_66[i] != 'null'){
            var magicStageDuration66 = $.CreatePanel('Panel', $("#magicSpecialVal1"+i),"magicStageDuration66"+i);
            magicStageDuration66.AddClass("magicSpecialValItem")     
            var magicStageDuration66Title = $.CreatePanel('Label', $("#magicStageDuration66"+i),"magicStageDuration66Title"+i);
            magicStageDuration66Title.AddClass("magicCommonTitle")
            magicStageDuration66Title.text = '施放状态维持时间：'
            var magicStageDuration66Value = $.CreatePanel('Label', $("#magicStageDuration66"+i),"magicStageDuration66Value"+i);
            magicStageDuration66Value.AddClass("magicSpecialValue")
            magicStageDuration66Value.text = stageDurationList_66[i] + 's'
        }
        
        if (debuffSpeedPercentList_67[i] != 'null'){
            var magicDebuffSpeedPercent67 = $.CreatePanel('Panel', $("#magicSpecialVal1"+i),"magicDebuffSpeedPercent67"+i);
            magicDebuffSpeedPercent67.AddClass("magicSpecialValItem")     
            var magicDebuffSpeedPercent67Title = $.CreatePanel('Label', $("#magicDebuffSpeedPercent67"+i),"magicDebuffSpeedPercent67Title"+i);
            magicDebuffSpeedPercent67Title.AddClass("magicCommonTitle")
            magicDebuffSpeedPercent67Title.text = '目标每层移速减少：'
            var magicDebuffSpeedPercent67Value = $.CreatePanel('Label', $("#magicDebuffSpeedPercent67"+i),"magicDebuffSpeedPercent67Value"+i);
            magicDebuffSpeedPercent67Value.AddClass("magicSpecialValue")
            magicDebuffSpeedPercent67Value.text = debuffSpeedPercentList_67[i] *-1 + '%'
        }
        
        if (bounsDamagePercentageList_68[i] != 'null'){
            var magicBounsDamagePercentage68 = $.CreatePanel('Panel', $("#magicSpecialVal1"+i),"magicBounsDamagePercentage68"+i);
            magicBounsDamagePercentage68.AddClass("magicSpecialValItem")     
            var magicBounsDamagePercentage68Title = $.CreatePanel('Label', $("#magicBounsDamagePercentage68"+i),"magicBounsDamagePercentage68Title"+i);
            magicBounsDamagePercentage68Title.AddClass("magicCommonTitle")
            magicBounsDamagePercentage68Title.text = '增加目标已损魔法值百分比伤害：'
            var magicBounsDamagePercentage68Value = $.CreatePanel('Label', $("#magicBounsDamagePercentage68"+i),"magicBounsDamagePercentage68Value"+i);
            magicBounsDamagePercentage68Value.AddClass("magicSpecialValue")
            magicBounsDamagePercentage68Value.text = bounsDamagePercentageList_68[i] + '%'
        }
        
        if (debuffDurationList_69[i] != 'null'){
            var magicDebuffDuration69 = $.CreatePanel('Panel', $("#magicSpecialVal1"+i),"magicDebuffDuration69"+i);
            magicDebuffDuration69.AddClass("magicSpecialValItem")     
            var magicDebuffDuration69Title = $.CreatePanel('Label', $("#magicDebuffDuration69"+i),"magicDebuffDuration69Title"+i);
            magicDebuffDuration69Title.AddClass("magicCommonTitle")
            magicDebuffDuration69Title.text = '混乱状态持续时间：'
            var magicDebuffDuration69Value = $.CreatePanel('Label', $("#magicDebuffDuration69"+i),"magicDebuffDuration69Value"+i);
            magicDebuffDuration69Value.AddClass("magicSpecialValue")
            magicDebuffDuration69Value.text = debuffDurationList_69[i] + 's'
        }
        
        if (aoeRadiusList_70[i] != 'null'){
            var magicAoeRadius70 = $.CreatePanel('Panel', $("#magicSpecialVal1"+i),"magicAoeRadius70"+i);
            magicAoeRadius70.AddClass("magicSpecialValItem")     
            var magicAoeRadius70Title = $.CreatePanel('Label', $("#magicAoeRadius70"+i),"magicAoeRadius70Title"+i);
            magicAoeRadius70Title.AddClass("magicCommonTitle")
            magicAoeRadius70Title.text = '作用范围：'
            var magicAoeRadius70Value = $.CreatePanel('Label', $("#magicAoeRadius70"+i),"magicAoeRadius70Value"+i);
            magicAoeRadius70Value.AddClass("magicSpecialValue")
            magicAoeRadius70Value.text = aoeRadiusList_70[i]
        }
        
        if (damageByDistanceList_71[i] != 'null'){
            var magicDamageByDistance71 = $.CreatePanel('Panel', $("#magicSpecialVal1"+i),"magicDamageByDistance71"+i);
            magicDamageByDistance71.AddClass("magicSpecialValItem")     
            var magicDamageByDistance71Title = $.CreatePanel('Label', $("#magicDamageByDistance71"+i),"magicDamageByDistance71Title"+i);
            magicDamageByDistance71Title.AddClass("magicCommonTitle")
            magicDamageByDistance71Title.text = '每点伤害提升所需飞行距离：'
            var magicDamageByDistance71Value = $.CreatePanel('Label', $("#magicDamageByDistance71"+i),"magicDamageByDistance71Value"+i);
            magicDamageByDistance71Value.AddClass("magicSpecialValue")
            magicDamageByDistance71Value.text = damageByDistanceList_71[i]
        }

        if (diffuseSpeedList_72[i] != 'null'){
            var magicDiffuseSpeed72 = $.CreatePanel('Panel', $("#magicSpecialVal1"+i),"magicDiffuseSpeed72"+i);
            magicDiffuseSpeed72.AddClass("magicSpecialValItem")     
            var magicDiffuseSpeed72Title = $.CreatePanel('Label', $("#magicDiffuseSpeed72"+i),"magicDiffuseSpeed72Title"+i);
            magicDiffuseSpeed72Title.AddClass("magicCommonTitle")
            magicDiffuseSpeed72Title.text = '冰霜扩散速度：'
            var magicDiffuseSpeed72Value = $.CreatePanel('Label', $("#magicDiffuseSpeed72"+i),"magicDiffuseSpeed72Value"+i);
            magicDiffuseSpeed72Value.AddClass("magicSpecialValue")
            magicDiffuseSpeed72Value.text = diffuseSpeedList_72[i]
        }
        
        if (catchRadiusList_75[i] != 'null'){
            var magicCatchRadius75 = $.CreatePanel('Panel', $("#magicSpecialVal1"+i),"magicCatchRadius75"+i);
            magicCatchRadius75.AddClass("magicSpecialValItem")     
            var magicCatchRadius75Title = $.CreatePanel('Label', $("#magicCatchRadius75"+i),"magicCatchRadius75Title"+i);
            magicCatchRadius75Title.AddClass("magicCommonTitle")
            magicCatchRadius75Title.text = '束缚范围：'
            var magicCatchRadius75Value = $.CreatePanel('Label', $("#magicCatchRadius75"+i),"magicCatchRadius75Value"+i);
            magicCatchRadius75Value.AddClass("magicSpecialValue")
            magicCatchRadius75Value.text = catchRadiusList_75[i]
        }
        
        if (windSpeedList_76[i] != 'null'){
            var magicWindSpeed76 = $.CreatePanel('Panel', $("#magicSpecialVal1"+i),"magicWindSpeed76"+i);
            magicWindSpeed76.AddClass("magicSpecialValItem")     
            var magicWindSpeed76Title = $.CreatePanel('Label', $("#magicWindSpeed76"+i),"magicWindSpeed76Title"+i);
            magicWindSpeed76Title.AddClass("magicCommonTitle")
            magicWindSpeed76Title.text = '增加飞行速度：'
            var magicWindSpeed76Value = $.CreatePanel('Label', $("#magicWindSpeed76"+i),"magicWindSpeed76Value"+i);
            magicWindSpeed76Value.AddClass("magicSpecialValue")
            magicWindSpeed76Value.text = windSpeedList_76[i]
        }
        
        if (windDamagePercentList_77[i] != 'null'){
            var magicWindDamagePercent77 = $.CreatePanel('Panel', $("#magicSpecialVal1"+i),"magicWindDamagePercent77"+i);
            magicWindDamagePercent77.AddClass("magicSpecialValItem")     
            var magicWindDamagePercent77Title = $.CreatePanel('Label', $("#magicWindDamagePercent77"+i),"magicWindDamagePercent77Title"+i);
            magicWindDamagePercent77Title.AddClass("magicCommonTitle")
            magicWindDamagePercent77Title.text = '命中背部额外伤害：'
            var magicWindDamagePercent77Value = $.CreatePanel('Label', $("#magicWindDamagePercent77"+i),"magicWindDamagePercent77Value"+i);
            magicWindDamagePercent77Value.AddClass("magicSpecialValue")
            magicWindDamagePercent77Value.text = windDamagePercentList_77[i] + '%'
        }
        
        if (boundsDamagePercentList_78[i] != 'null'){
            var magicBoundsDamagePercent78 = $.CreatePanel('Panel', $("#magicSpecialVal1"+i),"magicBoundsDamagePercent78"+i);
            magicBoundsDamagePercent78.AddClass("magicSpecialValItem")     
            var magicBoundsDamagePercent78Title = $.CreatePanel('Label', $("#magicBoundsDamagePercent78"+i),"magicBoundsDamagePercent78Title"+i);
            magicBoundsDamagePercent78Title.AddClass("magicCommonTitle")
            magicBoundsDamagePercent78Title.text = '增加目标当前生命比例伤害：'
            var magicBoundsDamagePercent78Value = $.CreatePanel('Label', $("#magicBoundsDamagePercent78"+i),"magicBoundsDamagePercent78Value"+i);
            magicBoundsDamagePercent78Value.AddClass("magicSpecialValue")
            magicBoundsDamagePercent78Value.text = boundsDamagePercentList_78[i] + '%'
        }
        
        if (windSpeedList_79[i] != 'null'){
            var magicWindSpeed79 = $.CreatePanel('Panel', $("#magicSpecialVal1"+i),"magicWindSpeed79"+i);
            magicWindSpeed79.AddClass("magicSpecialValItem")     
            var magicWindSpeed79Title = $.CreatePanel('Label', $("#magicWindSpeed79"+i),"magicWindSpeed79Title"+i);
            magicWindSpeed79Title.AddClass("magicCommonTitle")
            magicWindSpeed79Title.text = '每次增加飞行速度：'
            var magicWindSpeed79Value = $.CreatePanel('Label', $("#magicWindSpeed79"+i),"magicWindSpeed79Value"+i);
            magicWindSpeed79Value.AddClass("magicSpecialValue")
            magicWindSpeed79Value.text = windSpeedList_79[i]
        }
        
        if (boundsDamageList_80[i] != 'null'){
            var magicBoundsDamage80 = $.CreatePanel('Panel', $("#magicSpecialVal1"+i),"magicBoundsDamage80"+i);
            magicBoundsDamage80.AddClass("magicSpecialValItem")     
            var magicBoundsDamage80Title = $.CreatePanel('Label', $("#magicBoundsDamage80"+i),"magicBoundsDamage80Title"+i);
            magicBoundsDamage80Title.AddClass("magicCommonTitle")
            magicBoundsDamage80Title.text = '每次叠加伤害增加：'
            var magicBoundsDamage80Value = $.CreatePanel('Label', $("#magicBoundsDamage80"+i),"magicBoundsDamage80Value"+i);
            magicBoundsDamage80Value.AddClass("magicSpecialValue")
            magicBoundsDamage80Value.text = boundsDamageList_80[i]
        }
        
        if (boundsDamageCountList_81[i] != 'null'){
            var magicBoundsDamageCount81 = $.CreatePanel('Panel', $("#magicSpecialVal1"+i),"magicBoundsDamageCount81"+i);
            magicBoundsDamageCount81.AddClass("magicSpecialValItem")     
            var magicBoundsDamageCount81Title = $.CreatePanel('Label', $("#magicBoundsDamageCount81"+i),"magicBoundsDamageCount81Title"+i);
            magicBoundsDamageCount81Title.AddClass("magicCommonTitle")
            magicBoundsDamageCount81Title.text = '叠加层数上限：'
            var magicBoundsDamageCount81Value = $.CreatePanel('Label', $("#magicBoundsDamageCount81"+i),"magicBoundsDamageCount81Value"+i);
            magicBoundsDamageCount81Value.AddClass("magicSpecialValue")
            magicBoundsDamageCount81Value.text = boundsDamageCountList_81[i]
        }
        
        if (shootCountList_82[i] != 'null'){
            var magicShootCount82 = $.CreatePanel('Panel', $("#magicSpecialVal1"+i),"magicShootCount82"+i);
            magicShootCount82.AddClass("magicSpecialValItem")     
            var magicShootCount82Title = $.CreatePanel('Label', $("#magicShootCount82"+i),"magicShootCount82Title"+i);
            magicShootCount82Title.AddClass("magicCommonTitle")
            magicShootCount82Title.text = '旋风飞斧数量：'
            var magicShootCount82Value = $.CreatePanel('Label', $("#magicShootCount82"+i),"magicShootCount82Value"+i);
            magicShootCount82Value.AddClass("magicSpecialValue")
            magicShootCount82Value.text = shootCountList_82[i]
        }
        
        if (GSpeedList_83[i] != 'null'){
            var magicGSpeed83 = $.CreatePanel('Panel', $("#magicSpecialVal1"+i),"magicGSpeed83"+i);
            magicGSpeed83.AddClass("magicSpecialValItem")     
            var magicGSpeed83Title = $.CreatePanel('Label', $("#magicGSpeed83"+i),"magicGSpeed83Title"+i);
            magicGSpeed83Title.AddClass("magicCommonTitle")
            magicGSpeed83Title.text = '坍缩牵引速度：'
            var magicGSpeed83Value = $.CreatePanel('Label', $("#magicGSpeed83"+i),"magicGSpeed83Value"+i);
            magicGSpeed83Value.AddClass("magicSpecialValue")
            magicGSpeed83Value.text = GSpeedList_83[i]
        }

/*
        var learnMagicButton = $.CreatePanel('Label', $("#magicPanel"+i),"learnMagicButton"+i);
        learnMagicButton.AddClass("learnMagicButton")
        learnMagicButton.text = "学习"

        if(i==1){
            learnMagicButton.SetPanelEvent("onactivate",function(){funcCallBack(1)})
        }else if(i==2){
            learnMagicButton.SetPanelEvent("onactivate",function(){funcCallBack(2)})
        }else if(i==3){
            learnMagicButton.SetPanelEvent("onactivate",function(){funcCallBack(3)})
        }
*/
    }
    /*
    var magicButtonBg = $.CreatePanel('Panel', $("#UIMagicListPanelBg"),"magicButtonBg");
    magicButtonBg.AddClass("magicButtonBg")

    var shopCancel = $.CreatePanel('Label', $("#magicButtonBg"),"magicCancel");
    shopCancel.AddClass("magicCancel")
    shopCancel.AddClass("magicButton")
    shopCancel.text = "关闭"
    shopCancel.SetPanelEvent("onactivate",function(){closeMagicList()})
*/
}

function getRandomMagicListLUATOJS(data){   
    createMagicList(data,learnMagicByNum)
}




function getRebuildMagicListToForgetLUATOJS(data){
    var listLength = 3
    var magicNameList = data.magicNameList
    var magicIconList = data.magicIconList
    $.Msg("=======getRebuildMagicListToForgetLUATOJS======")
    //$.Msg(listLength)
    $("#UIMagicListPanelBox").AddClass("UIMagicListPanelBoxForRebuild")

    var UIMagicListPanelBg = $.CreatePanel('Panel', $("#UIMagicListPanelBox"),"UIMagicListPanelBg");
    UIMagicListPanelBg.AddClass("UIMagicListPanelBgForRebuild")

    var UIMagicListPanelTitle = $.CreatePanel('Panel', $("#UIMagicListPanelBg"),"UIMagicListPanelTitle");
    UIMagicListPanelTitle.AddClass("UIMagicListPanelTitleForRebuild")


    var UIMagicListLabelTitle = $.CreatePanel('Label', $("#UIMagicListPanelTitle"),"UIMagicListLabelTitle");
    UIMagicListLabelTitle.AddClass("UIMagicListLabelTitleForRebuild")
    UIMagicListLabelTitle.text = "选择一个法术重修或获得金币奖励"
    /*
    var UIMagicTitleCloseBtn = $.CreatePanel('Panel', $("#UIMagicListPanelTitle"),"UIMagicTitleCloseBtn");
    UIMagicTitleCloseBtn.AddClass("UIMagicListTitleCloseBtn") 
    UIMagicTitleCloseBtn.SetPanelEvent("onactivate",function(){closeMagicList()})
    */

    var UIMagicListPanel = $.CreatePanel('Panel', $("#UIMagicListPanelBg"),"UIMagicListPanel1");
    UIMagicListPanel.AddClass("UIMagicListPanel")

    for(i=1;i<=listLength;i++){
        var magicPanel = $.CreatePanel('Panel', $("#UIMagicListPanel1"),"magicPanel"+i);
        magicPanel.AddClass("magicPanelForRebuild")
        magicPanel.SetPanelEvent("onactivate",function(num){return function(){rebuildMagicByNum(num)}}(i))

        if (i== 1) {
            magicPanel.AddClass("magicPanel_firstChild")
        }

        var magicTopBanner = $.CreatePanel('Panel', $("#magicPanel"+i),"magicTopBanner"+i);
        magicTopBanner.AddClass("magicTopBanner")

        var magic_img = $.CreatePanel('DOTAAbilityImage', $("#magicTopBanner"+i),"magic_img"+i);
        magic_img.AddClass("magic_img")
        //$.Msg(magicIconList[i])
        magic_img.SetImage(magicIconList[i])
        //magic_img.abilityname(magicNameList[i])

        var magicMsg = $.CreatePanel('Panel', $("#magicTopBanner"+i),"magicMsg"+i);
        magicMsg.AddClass("magicMsg")

        var magicNameBox = $.CreatePanel('Label', $("#magicMsg"+i),"magicName"+i);
        magicNameBox.AddClass("magicName")
        var magicShowName = "#DOTA_Tooltip_ability_"+ magicNameList[i]
        magicNameBox.text = $.Localize(magicShowName)

        /*
        var learnMagicButton = $.CreatePanel('Label', $("#magicPanel"+i),"learnMagicButton"+i);
        learnMagicButton.AddClass("learnMagicButton")
        learnMagicButton.text = "遗忘"
        */
        //var magicName = magicNameList[i]
        /*
        if(i==1){
            learnMagicButton.SetPanelEvent("onactivate",function(){rebuildMagicByNum(1)})
        }else if(i==2){
            learnMagicButton.SetPanelEvent("onactivate",function(){rebuildMagicByNum(2)})
        }else if(i==3){
            learnMagicButton.SetPanelEvent("onactivate",function(){rebuildMagicByNum(3)})
        }
       */
    }

    var magicButtonBg = $.CreatePanel('Panel', $("#UIMagicListPanelBg"),"magicButtonBg");
    magicButtonBg.AddClass("magicButtonBg")

    var shopCancel = $.CreatePanel('Label', $("#magicButtonBg"),"magicCancel");
    shopCancel.AddClass("magicCancel")
    shopCancel.AddClass("magicButton")
    shopCancel.text = "获取随机金币奖励(20-50)"
    shopCancel.SetPanelEvent("onactivate",function(){getRandomGoldAndCloseList()})

}



function rebuildMagicByNum(num){
    GameEvents.SendCustomGameEventToServer( "rebuildMagicByNameJSTOLUA", {num:num})
}


function getRebuildRandomMagicListLUATOJS(data){
    createMagicList(data,learnRebuildMagicByNum)
}
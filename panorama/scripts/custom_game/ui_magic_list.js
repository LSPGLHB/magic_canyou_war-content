
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

function createMagicList(data,funcCallBack){
    var listLength = data.listLength
    var magicNameList = data.magicNameList
    var magicIconList = data.magicIconList

    //$.Msg("=======getRandomMagicListLUATOJS======")
    $("#UIMagicListPanelBox").AddClass("UIMagicListPanelBox")
    var UIMagicListPanelBg = $.CreatePanel('Panel', $("#UIMagicListPanelBox"),"UIMagicListPanelBg");
    UIMagicListPanelBg.AddClass("UIMagicListPanelBg")

    var UIMagicListPanel = $.CreatePanel('Panel', $("#UIMagicListPanelBg"),"UIMagicListPanel");
    UIMagicListPanel.AddClass("UIMagicListPanel")

    for(i=1;i<=listLength;i++){

        var magicPanel
        magicPanel = $.CreatePanel('Panel', $("#UIMagicListPanel"),"magicPanel"+i);
        magicPanel.AddClass("magicPanel")
        if (i== 1) {
            magicPanel.AddClass("magicPanel_firstChild")
        }

        var magicTopBanner = $.CreatePanel('Panel', $("#magicPanel"+i),"magicTopBanner"+i);
        magicTopBanner.AddClass("magicTopBanner")

        var magic_img = $.CreatePanel('DOTAAbilityImage', $("#magicTopBanner"+i),"magic_img"+i);
        magic_img.AddClass("magic_img")
        magic_img.SetImage(magicIconList[i])

        var magicMsg = $.CreatePanel('Panel', $("#magicTopBanner"+i),"magicMsg"+i);
        magicMsg.AddClass("magicMsg")

        var magicNameBox = $.CreatePanel('Label', $("#magicMsg"+i),"magicName"+i);
        magicNameBox.AddClass("magicName")
        var magicShowName = "#DOTA_Tooltip_ability_"+ magicNameList[i]
        magicNameBox.text = $.Localize(magicShowName)

        var magicAttrBox = $.CreatePanel('Label', $("#magicPanel"+i),"magicAttr"+i);
        magicAttrBox.AddClass("magicAttr")
        magicAttrBox.text = "法术属性："

        var magicDescribeBox = $.CreatePanel('Label', $("#magicPanel"+i),"magicDescribe"+i);
        magicDescribeBox.AddClass("magicDescribe")
        var magicDescribe = "#DOTA_Tooltip_ability_"+ magicNameList[i] + "_Description"

        var tempMagicDescribe = $.Localize(magicDescribe)
        var tempNum = tempMagicDescribe.indexOf('\n')
        tempMagicDescribe = tempMagicDescribe.slice(tempNum);
        tempMagicDescribe = tempMagicDescribe.replace(/\s+/g,"")
        magicDescribeBox.SetAlreadyLocalizedText(tempMagicDescribe)

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

    }
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
    $("#UIMagicListPanelBox").AddClass("UIMagicListPanelBox")
    var UIMagicListPanelBg = $.CreatePanel('Panel', $("#UIMagicListPanelBox"),"UIMagicListPanelBg");
    UIMagicListPanelBg.AddClass("UIMagicListPanelBg")


    for(i=1;i<=listLength;i++){

        var UIMagicListPanel = $.CreatePanel('Panel', $("#UIMagicListPanelBg"),"UIMagicListPanel1");
        UIMagicListPanel.AddClass("UIMagicListPanel")

        var magicPanel

        magicPanel = $.CreatePanel('Panel', $("#UIMagicListPanel1"),"magicPanel"+i);
        magicPanel.AddClass("magicPanel")


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

       // var magicDescribeBox = $.CreatePanel('Label', $("#magicPanel"+i),"magicDescribe"+i);
        //magicDescribeBox.AddClass("magicDescribe")
       // var magicDescribe = "#DOTA_Tooltip_ability_"+ magicNameList[i] + "_Description"
       // magicDescribeBox.text = $.Localize(magicDescribe)

        var magicDescribeBox = $.CreatePanel('Label', $("#magicPanel"+i),"magicDescribe"+i);
        magicDescribeBox.AddClass("magicDescribe")
        var magicDescribe = "#DOTA_Tooltip_ability_"+ magicNameList[i] + "_Description"
        magicDescribeBox.SetAlreadyLocalizedText($.Localize(magicDescribe))


        





        var learnMagicButton = $.CreatePanel('Label', $("#magicPanel"+i),"learnMagicButton"+i);
        learnMagicButton.AddClass("learnMagicButton")
        learnMagicButton.text = "遗忘"
        //var magicName = magicNameList[i]
        if(i==1){
            learnMagicButton.SetPanelEvent("onactivate",function(){rebuildMagicByNum(1)})
        }else if(i==2){
            learnMagicButton.SetPanelEvent("onactivate",function(){rebuildMagicByNum(2)})
        }else if(i==3){
            learnMagicButton.SetPanelEvent("onactivate",function(){rebuildMagicByNum(3)})
        }
       



    }

    var magicButtonBg = $.CreatePanel('Panel', $("#UIMagicListPanelBg"),"magicButtonBg");
    magicButtonBg.AddClass("magicButtonBg")

    var shopCancel = $.CreatePanel('Label', $("#magicButtonBg"),"magicCancel");
    shopCancel.AddClass("magicCancel")
    shopCancel.AddClass("magicButton")
    shopCancel.text = "关闭"
    shopCancel.SetPanelEvent("onactivate",function(){closeMagicList()})
}



function rebuildMagicByNum(num){
    GameEvents.SendCustomGameEventToServer( "rebuildMagicByNameJSTOLUA", {num:num})
}


function getRebuildRandomMagicListLUATOJS(data){
    var listLength = data.listLength
    var magicNameList = data.magicNameList
    var magicIconList = data.magicIconList
    //$.Msg("=======getRandomMagicListLUATOJS======")
    //$.Msg(listLength)
    $("#UIMagicListPanelBox").AddClass("UIMagicListPanelBox")
    var UIMagicListPanelBg = $.CreatePanel('Panel', $("#UIMagicListPanelBox"),"UIMagicListPanelBg");
    UIMagicListPanelBg.AddClass("UIMagicListPanelBg")


    for(i=1;i<=listLength;i++){

        var UIMagicListPanel = $.CreatePanel('Panel', $("#UIMagicListPanelBg"),"UIMagicListPanel1");
        UIMagicListPanel.AddClass("UIMagicListPanel")


        var magicPanel

        magicPanel = $.CreatePanel('Panel', $("#UIMagicListPanel1"),"magicPanel"+i);
        magicPanel.AddClass("magicPanel")


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

       // var magicDescribeBox = $.CreatePanel('Label', $("#magicPanel"+i),"magicDescribe"+i);
        //magicDescribeBox.AddClass("magicDescribe")
       // var magicDescribe = "#DOTA_Tooltip_ability_"+ magicNameList[i] + "_Description"
       // magicDescribeBox.text = $.Localize(magicDescribe)

        var magicDescribeBox = $.CreatePanel('Label', $("#magicPanel"+i),"magicDescribe"+i);
        magicDescribeBox.AddClass("magicDescribe")
        var magicDescribe = "#DOTA_Tooltip_ability_"+ magicNameList[i] + "_Description"
        magicDescribeBox.SetAlreadyLocalizedText($.Localize(magicDescribe))


        var learnMagicButton = $.CreatePanel('Label', $("#magicPanel"+i),"learnMagicButton"+i);
        learnMagicButton.AddClass("learnMagicButton")
        learnMagicButton.text = "学习"
    
        if(i==1){
            learnMagicButton.SetPanelEvent("onactivate",function(){learnRebuildMagicByNum(1)})
        }else if(i==2){
            learnMagicButton.SetPanelEvent("onactivate",function(){learnRebuildMagicByNum(2)})
        }else if(i==3){
            learnMagicButton.SetPanelEvent("onactivate",function(){learnRebuildMagicByNum(3)})
        }
       
    }
}
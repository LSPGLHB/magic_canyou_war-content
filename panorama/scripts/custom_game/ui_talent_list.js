
//获取天赋选择列表
GameEvents.Subscribe("getRandomTalentListLUATOJS", getRandomTalentListLUATOJS);

function getRandomTalentListLUATOJS(data){
    $.Msg("=======getRandomTalentListLUATOJS======")
    var listLength = data.listLength
    var talentType = data.talentType
    var talentNameList = data.nameList
    var talentTextureNameList = data.textureNameList
    var talentShowNameList = data.showNameList
    var talentDescribeList = data.describeList
    $.Msg(talentType)

    $("#UITalentListPanelBox").AddClass("UITalentListPanelBox")
    var UITalentListPanelBg = $.CreatePanel('Panel', $("#UITalentListPanelBox"),"UITalentListPanelBg");
    UITalentListPanelBg.AddClass("UITalentListPanelBg")

    var UITalentListTitlePanel = $.CreatePanel('Panel', $("#UITalentListPanelBg"),"UITalentListTitlePanel");
    UITalentListTitlePanel.AddClass("UITalentTitlePanel")


    var UITalentListTitleLabel = $.CreatePanel('Label', $("#UITalentListTitlePanel"),"UITalentListTitleLabel");
    UITalentListTitleLabel.AddClass("UITalentListTitleLabel")
    UITalentListTitleLabel.text = "选择你的铭文"
/*
    var UITitleCloseBtn = $.CreatePanel('Panel', $("#UITalentListTitlePanel"),"UITalentTitleCloseBtn");
    UITitleCloseBtn.AddClass("UITalentListTitleCloseBtn") 
    UITitleCloseBtn.SetPanelEvent("onactivate",function(){closeTalentList()})
*/

    var UITalentListPanel = $.CreatePanel('Panel', $("#UITalentListPanelBg"),"UITalentListPanel");
    UITalentListPanel.AddClass("UITalentListPanel")

    for(i=1;i<=listLength;i++){

        var talentPanel = $.CreatePanel('Panel', $("#UITalentListPanel"),"talentPanel"+i);
        talentPanel.AddClass("talentPanel")


        var talentTopBanner = $.CreatePanel('Panel', $("#talentPanel"+i),"talentTopBanner"+i);
        talentTopBanner.AddClass("talentTopBanner")

        var talent_img = $.CreatePanel('Image', $("#talentTopBanner"+i),"talent_img"+i);
        talent_img.AddClass("talent_img")
        var talentIconSrc = "file://{images}/custom_game/talent_icon/"+talentTextureNameList[i]+".png"
        talent_img.SetImage(talentIconSrc)

        var talentMsg = $.CreatePanel('Panel', $("#talentTopBanner"+i),"talentMsg"+i);
        talentMsg.AddClass("talentMsg")

        var talentName = $.CreatePanel('Label', $("#talentMsg"+i),"talentName"+i);
        talentName.AddClass("talentName")
        var talentNameLoc = "#"+talentNameList[i]
        talentName.text = $.Localize(talentNameLoc)

        var talentDescribe = $.CreatePanel('Label', $("#talentPanel"+i),"talentDescribe"+i);
        talentDescribe.AddClass("talentDescribe")
        var talentDescribeLoc = "#"+talentNameList[i]+"_Description"
        talentDescribe.text = $.Localize(talentDescribeLoc)

        var learnTalentButton = $.CreatePanel('Label', $("#talentPanel"+i),"learntalentButton"+i);
        learnTalentButton.AddClass("learntalentButton")
        learnTalentButton.text = "选择"
        learnTalentButton.SetPanelEvent("onactivate",(function(num,talentType){return function(){learnTalentByNum(num,talentType)}}(i,talentType)))

    }
/*
    var talentButtonBg = $.CreatePanel('Panel', $("#UITalentListPanelBg"),"talentButtonBg");
    talentButtonBg.AddClass("talentButtonBg")

    var shopRefresh = $.CreatePanel('Label', $("#talentButtonBg"),"talentRefresh");
    shopRefresh.AddClass("talentRefresh")
    shopRefresh.AddClass("talentButton")
    shopRefresh.text = "刷新"
    shopRefresh.SetPanelEvent("onactivate",function(){refreshTalentList()})

    var shopCancel = $.CreatePanel('Label', $("#talentButtonBg"),"talentCancel");
    shopCancel.AddClass("talentCancel")
    shopCancel.AddClass("talentButton")
    shopCancel.text = "关闭"
    shopCancel.SetPanelEvent("onactivate",function(){closeTalentList()})
*/
}

function closeTalentList(){
    GameEvents.SendCustomGameEventToServer( "closeTalentListJSTOLUA", {})
}

function refreshTalentList(){
    GameEvents.SendCustomGameEventToServer( "refreshTalentListJSTOLUA", {})
}

function learnTalentByNum(num,talentType){
    GameEvents.SendCustomGameEventToServer( "learnTalentByNameJSTOLUA", {num:num,talentType:talentType})
}
GameEvents.Subscribe( "setTalentUILUATOJS", setTalentUILUATOJS);

function setTalentUILUATOJS(data){
    var talentName = data.talentName
    var talentTextureName = data.talentTextureName
    //var talentDescribe = data.talentDescribe
    var talentType = data.talentType
    var talentIconSrc = "file://{images}/custom_game/talent_icon/"+talentTextureName+".png"
    //$.Msg(talentDescribe)
    var talentNameStr = $.Localize("#"+talentName+"_Description")

    $("#UITalentPanelIcon"+talentType).SetImage(talentIconSrc)
    $("#UITalentPanelDescribe"+talentType).html = true
    $("#UITalentPanelDescribe"+talentType).text = talentNameStr

}
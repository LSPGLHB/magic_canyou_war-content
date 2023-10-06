GameEvents.Subscribe( "setTalentUILUATOJS", setTalentUILUATOJS);


function setTalentUILUATOJS(data){
    var talentTextureName = data.talentTextureName
    var talentDescribe = data.talentDescribe
    var talentType = data.talentType
    var talentIconSrc = "file://{images}/custom_game/talent_icon/"+talentTextureName+".png"
    $.Msg(talentDescribe)

    $("#UITalentPanelIcon"+talentType).SetImage(talentIconSrc)

    $("#UITalentPanelDescribe"+talentType).text = talentDescribe

}
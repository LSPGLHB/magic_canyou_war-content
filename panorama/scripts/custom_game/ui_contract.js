GameEvents.Subscribe( "setContractUILUATOJS", setContractUILUATOJS);
GameEvents.Subscribe( "closeKillCamLUATOJS", closeKillCamLUATOJS);

function setContractUILUATOJS(data){
    var contractName = data.contractName
    var contractShowName = data.contractShowName
    
    var contractDescribe = data.contractDescribe
    var contractIconSrc = "file://{images}/custom_game/contract_icon/"+contractName+".png"
    $("#UIContractPanelIcon").SetImage(contractIconSrc)
    $("#UIContractPanelName").html = true
    $("#UIContractPanelName").text = contractShowName
    $("#UIContractPanelDescribe").html = true
    $("#UIContractPanelDescribe").text = contractDescribe
}

function closeKillCamLUATOJS(data){

    $.GetContextPanel().GetParent().GetParent().FindChild("CustomHudElements").FindChildTraverse("KillCam").style.visibility = "collapse";

}
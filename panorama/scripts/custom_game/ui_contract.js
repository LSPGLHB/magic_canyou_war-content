GameEvents.Subscribe( "setContractUILUATOJS", setContractUILUATOJS);


function setContractUILUATOJS(data){
    var contractName = data.contractName
    var contractShowName = data.contractShowName
    
    var contractDescribe = data.contractDescribe
    var contractIconSrc = "file://{images}/custom_game/contract_icon/"+contractName+".png"
    $("#UIContractPanelIcon").SetImage(contractIconSrc)
    $("#UIContractPanelName").text = contractShowName
    $("#UIContractPanelDescribe").text = contractDescribe

}
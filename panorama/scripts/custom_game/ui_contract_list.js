
//获取天赋选择列表
GameEvents.Subscribe("getRandomContractListLUATOJS", getRandomContractListLUATOJS);

function getRandomContractListLUATOJS(data){
    $.Msg("=======getRandomContractListLUATOJS======")
    var listLength = data.listLength
    var contractNameList = data.contractNameList
    var contractShowNameList = data.contractShowNameList
    var contractDescribeList = data.contractDescribeList
   

    $("#UIContractListPanelBox").AddClass("UIContractListPanelBox")
    var UIContractListPanelBg = $.CreatePanel('Panel', $("#UIContractListPanelBox"),"UIContractListPanelBg");
    UIContractListPanelBg.AddClass("UIContractListPanelBg")

    

    var UIContractTitlePanel = $.CreatePanel('Panel', $("#UIContractListPanelBg"),"UIContractTitlePanel");
    UIContractTitlePanel.AddClass("UIContractTitlePanel")

    var UIContractTitleLabel = $.CreatePanel('Label', $("#UIContractTitlePanel"),"UIContractTitleLabel");
    UIContractTitleLabel.AddClass("UIContractTitleLabel")
    UIContractTitleLabel.text = "选择你的契约"
/*
    var UITitleCloseBtn = $.CreatePanel('Panel', $("#UIContractTitlePanel"),"UIContractTitleCloseBtn");
    UITitleCloseBtn.AddClass("UIContractListTitleCloseBtn") 
    UITitleCloseBtn.SetPanelEvent("onactivate",function(){closeContractList()})
*/

    for(i=1;i<=listLength;i++){
        var contractPanel
        if(i<4){
            if(i==1){
                var UIContractListPanel = $.CreatePanel('Panel', $("#UIContractListPanelBg"),"UIContractListPanel1");
                UIContractListPanel.AddClass("UIContractListPanel")
            }
            contractPanel = $.CreatePanel('Panel', $("#UIContractListPanel1"),"contractPanel"+i);
        }else{
            if(i==4){
                var UIContractListPanel = $.CreatePanel('Panel', $("#UIContractListPanelBg"),"UIContractListPanel2");
                UIContractListPanel.AddClass("UIContractListPanel")
            }
            contractPanel = $.CreatePanel('Panel', $("#UIContractListPanel2"),"contractPanel"+i);    
        }
        contractPanel.AddClass("contractPanel")
        contractPanel.SetPanelEvent("onactivate",function(num){return function(){learnContractByNum(num)}}(i))

        var contractTopBanner = $.CreatePanel('Panel', $("#contractPanel"+i),"contractTopBanner"+i);
        contractTopBanner.AddClass("contractTopBanner")

        var contract_img = $.CreatePanel('Image', $("#contractTopBanner"+i),"contract_img"+i);
        contract_img.AddClass("contract_img")
        var contractIconSrc = "file://{images}/custom_game/contract_icon/"+contractNameList[i]+".png"
        contract_img.SetImage(contractIconSrc)

        var contractMsg = $.CreatePanel('Panel', $("#contractTopBanner"+i),"contractMsg"+i);
        contractMsg.AddClass("contractMsg")

        var contractName = $.CreatePanel('Label', $("#contractMsg"+i),"contractName"+i);
        contractName.AddClass("contractName")
        contractName.text = contractShowNameList[i]

        var contractDescribe = $.CreatePanel('Label', $("#contractPanel"+i),"contractDescribe"+i);
        contractDescribe.AddClass("contractDescribe")
        contractDescribe.html = true
        contractDescribe.text = contractDescribeList[i]
/*
        var learnContractButton = $.CreatePanel('Label', $("#contractPanel"+i),"learnContractButton"+i);
        learnContractButton.AddClass("learnContractButton")
        learnContractButton.text = "签订"
        learnContractButton.SetPanelEvent("onactivate",function(num){return function(){learnContractByNum(num)}}(i))
*/




    }
/*
    var contractButtonBg = $.CreatePanel('Panel', $("#UIContractListPanelBg"),"contractButtonBg");
    contractButtonBg.AddClass("contractButtonBg")

    var shopRefresh = $.CreatePanel('Label', $("#contractButtonBg"),"contractRefresh");
    shopRefresh.AddClass("contractRefresh")
    shopRefresh.AddClass("contractButton")
    shopRefresh.text = "刷新"
    shopRefresh.SetPanelEvent("onactivate",function(){refreshContractList()})

    var shopCancel = $.CreatePanel('Label', $("#contractButtonBg"),"contractCancel");
    shopCancel.AddClass("contractCancel")
    shopCancel.AddClass("contractButton")
    shopCancel.text = "关闭"
    shopCancel.SetPanelEvent("onactivate",function(){closeContractList()})
*/
}

function closeContractList(){
    GameEvents.SendCustomGameEventToServer("closeContractListJSTOLUA", {})
}

function refreshContractList(){
    GameEvents.SendCustomGameEventToServer("refreshContractListJSTOLUA", {})
}

function learnContractByNum(num){
    GameEvents.SendCustomGameEventToServer("learnContractByNameJSTOLUA", {num:num})
}
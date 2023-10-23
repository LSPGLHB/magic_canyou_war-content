//扫描商人
GameEvents.Subscribe( "checkShopLUATOJS", checkShopLUATOJS)
GameEvents.Subscribe( "initJS", initJS)

//CSS隐藏不能lua隐藏的东西
function initJS(){
    $.Msg("initJSinitJSinitJSinitJSinitJSinitJS")
    var tempPanel = $.GetContextPanel().GetParent().GetParent().GetParent().FindChildTraverse("HUDElements")
    tempPanel.FindChildTraverse("Ability6").style.visibility = "collapse";//隐藏本该隐藏的技能
    tempPanel.FindChildTraverse("Ability7").style.visibility = "collapse";//隐藏本该隐藏的技能
}

function checkShopLUATOJS(data){
    var shopFlag = data.flag
    var playerGold = data.playerGold
    //var shopUI = $.GetContextPanel().GetParent().GetParent().FindChild("CustomHudElements")
    //var UIShopButton = shopUI.FindChildTraverse("UIShopButton")
    var UIShopButton =  $('#UIShopButton')
    var shopButtonText = UIShopButton.FindChildTraverse("shopButtonText")
   
    if (shopFlag == "active" ){
        UIShopButton.RemoveClass("shopUnknow")
        UIShopButton.AddClass("shopActive")
        UIShopButton.SetPanelEvent("onactivate",function(){shopActive()})
    }else{
        if(UIShopButton.BHasClass("shopOpen")){
            UIShopButton.RemoveClass("shopOpen")
            //$.Msg("shopCloseshopCloseshopCloseshopCloseshopCloseshopCloseshopCloseshopCloseshopCloseshopCloseshopCloseshopCloseshopCloseshopClose")
            shopClose()
        }
        UIShopButton.RemoveClass("shopActive")
        UIShopButton.AddClass("shopUnknow")
        UIShopButton.SetPanelEvent("onactivate",function(){shopUnknow()})
    }
    shopButtonText.text = playerGold
}

function shopActive(){
    //var shopUI = $.GetContextPanel().GetParent().GetParent().FindChild("CustomHudElements")
    //var UIShopButton = shopUI.FindChildTraverse("UIShopButton")
    var UIShopButton =  $('#UIShopButton')
    var buttonStats = UIShopButton.BHasClass("shopOpen")
    if(buttonStats){
        UIShopButton.RemoveClass("shopOpen")
        shopClose()
    }else{
        UIShopButton.AddClass("shopOpen")
        shopOpen()
    }
}

function shopOpen(){
    $.Msg("==============shopOpen==========")
    GameEvents.SendCustomGameEventToServer( "openShopJSTOLUA", {})
}

function shopClose(){
    $.Msg("==============shopClose==========")
    GameEvents.SendCustomGameEventToServer( "closeShopJSTOLUA", {})
}

function shopUnknow(){
    $.Msg("==============shopUnknow==========")
}

//商店快捷键设置
const command = `On${"B"}${Date.now()}`;
Game.CreateCustomKeyBind("B", `+${command}`);
Game.AddCommand(
    `+${command}`,
    () => {
        // key down callback
    },
    ``,
    1 << 32
);
Game.AddCommand(
    `-${command}`,
    () => {
        // key up callback
        var UIShopButton =  $('#UIShopButton')
        var shopOpen = UIShopButton.BHasClass("shopOpen")
        var shopActive = UIShopButton.BHasClass("shopActive")
        var shopUnknow = UIShopButton.BHasClass("shopUnknow")
        if(shopActive){
            if(shopOpen){
                UIShopButton.RemoveClass("shopOpen")
                $.Msg("==============shopClose==========")
                GameEvents.SendCustomGameEventToServer( "closeShopJSTOLUA", {})
            }else{
                UIShopButton.AddClass("shopOpen")
                $.Msg("==============shopOpen==========")
                GameEvents.SendCustomGameEventToServer( "openShopJSTOLUA", {})
            }
        }else if (shopUnknow){
            $.Msg("==============shopUnknow==========")
        }
    },
    ``,
    1 << 32
);




function playerStatusActive(){

    var mainUI = $.GetContextPanel().GetParent().GetParent().FindChild("CustomHudElements")
    var UIShopButton = mainUI.FindChildTraverse("UIPlayerStatusButton")
    var buttonStats = UIShopButton.BHasClass("UIPlayerStatusButtonActive")
   
    if(buttonStats){
        UIShopButton.RemoveClass("UIPlayerStatusButtonActive")
        closePlayerStstus()
    }else{
        UIShopButton.AddClass("UIPlayerStatusButtonActive")
        openPlayerStatus()
    }
}




function openPlayerStatus(){
    $.Msg("==============playerStatusOpen==========")
    GameEvents.SendCustomGameEventToServer( "openPlayerStatusJSTOLUA", {})
}

function closePlayerStstus(){
    $.Msg("==============playerStatusClose==========")
    GameEvents.SendCustomGameEventToServer( "closePlayerStatusJSTOLUA", {})
}




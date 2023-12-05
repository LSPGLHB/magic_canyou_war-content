GameEvents.Subscribe( "getShopItemListLUATOJS", getShopItemListLUATOJS);
GameEvents.Subscribe( "checkGoldLUATOJS", checkGoldLUATOJS);

function getShopItemListLUATOJS(data) {
    var lock = data.lock
    var refreshCost = data.refreshCost
    var nameList = data.randomItemNameList
    var costList = data.randomItemCostList
    var textureNameList = data.randomItemTextureNameList
    //$.Msg(data.num)
    $("#UIShopBox").AddClass("UIShopBox")
    var UIShopBg = $.CreatePanel('Panel', $("#UIShopBox"),"UIShopBg");
    UIShopBg.AddClass("UIShopBg")

    var UIShopTitlePanel = $.CreatePanel('Panel', $("#UIShopBg"),"UIShopTitlePanel");
    UIShopTitlePanel.AddClass("UIShopTitlePanel")

    var UIShopTitleTitle = $.CreatePanel('Label', $("#UIShopTitlePanel"),"UIShopTitleTitle");
    UIShopTitleTitle.AddClass("UIShopTitleTitle")
    UIShopTitleTitle.text = "装备购买"

    var UIShopCloseBtn = $.CreatePanel('Panel', $("#UIShopTitlePanel"),"UIShopCloseBtn");
    UIShopCloseBtn.AddClass("UIShopCloseBtn") 
    UIShopCloseBtn.SetPanelEvent("onactivate",function(){shopClose()})


    var shopPanelTop = $.CreatePanel('Panel', $("#UIShopBg"),"UIShop1");
    shopPanelTop.AddClass("UIShop")

    var shopPanelBottom = $.CreatePanel('Panel', $("#UIShopBg"),"UIShop2");
    shopPanelBottom.AddClass("UIShop")

    for( i = 1; i <= data.num; i++ ){
        if (i < 4){
            var shopItemPanelBG = $.CreatePanel('Panel', $("#UIShop1"),"shopItemPanelBG"+i);
            shopItemPanelBG.AddClass("shopItemPanelBG")
        }else{
            var shopItemPanelBG = $.CreatePanel('Panel', $("#UIShop2"),"shopItemPanelBG"+i);
            shopItemPanelBG.AddClass("shopItemPanelBG")
        }

        var shopItemPanel = $.CreatePanel('Panel', $("#shopItemPanelBG"+i),"shopItemPanel"+i);
        shopItemPanel.AddClass("shopItemPanel")

        if (nameList[i] == "sellOut"){
            var shopItemPanelLabel = $.CreatePanel('Label', $("#shopItemPanel"+i),"shopItemPanelLabel"+i);
            shopItemPanelLabel.AddClass("shopItemPanelLabel")
            shopItemPanelLabel.text = "Sell Out"
        }

        if (nameList[i] != "sellOut") {
            shopItemPanel.SetPanelEvent("onactivate",(function(num){return function(){shopBuy(num)}}(i)))

            var itemTopBanner = $.CreatePanel('Panel', $("#shopItemPanel"+i),"itemTopBanner"+i);
            itemTopBanner.AddClass("itemTopBanner")

            var itemImage = $.CreatePanel('Image', $("#itemTopBanner"+i),"itemImg"+i);
            itemImage.AddClass("shop_item_img")
            var iconSrc = "file://{images}/custom_game/shop_item/" + textureNameList[i] + ".png"
            itemImage.SetImage(iconSrc)
        
            var itemMsg = $.CreatePanel('Panel', $("#itemTopBanner"+i),"itemMsg"+i);
            itemMsg.AddClass("itemMsg")

            var itemName = $.CreatePanel('Label', $("#itemMsg"+i),"itemName"+i);
            itemName.AddClass("itemName")
            itemName.html = true
            itemName.text = $.Localize("#DOTA_Tooltip_ability_" + nameList[i])

            var itemCostPanel = $.CreatePanel('Panel', $("#itemMsg"+i),"itemCostPanel"+i);
            itemCostPanel.AddClass("itemCostPanel")

            var goldIcon = $.CreatePanel('Panel', $("#itemCostPanel"+i),"goldIcon"+i);
            goldIcon.AddClass("goldIcon")

            var itemCost = $.CreatePanel('Label', $("#itemCostPanel"+i),"itemCost"+i);
            itemCost.AddClass("itemCost")
            var itemCostVal = costList[i]
            itemCost.text = itemCostVal

            var itemDescribeStr = $.Localize("#DOTA_Tooltip_ability_"+ nameList[i] +"_Description")
            var itemDescribe = $.CreatePanel('Label', $("#shopItemPanel"+i),"itemDescribe"+i);
            itemDescribe.AddClass("itemDescribe")
            itemDescribe.html = true
            itemDescribe.text = itemDescribeStr
        }
    }

    var shopButtonBg = $.CreatePanel('Panel', $("#UIShopBg"),"shopButtonBg");
    shopButtonBg.AddClass("shopButtonBg")


    var shopLock = $.CreatePanel('Label', $("#shopButtonBg"),"shopLock");
    shopLock.AddClass("shopLock")
    shopLock.AddClass("shopButton")
    shopLock.text = "锁定"
    if (lock == 1){
        shopLock.AddClass("lock")
        shopLock.text = "已锁定"
    }
    
    shopLock.SetPanelEvent("onactivate",function(){shopLockFunc()})

    var shopRefresh = $.CreatePanel('Label', $("#shopButtonBg"),"shopRefresh");
    shopRefresh.AddClass("shopRefresh")
    shopRefresh.AddClass("shopButton")
    shopRefresh.html = true
    shopRefresh.text = "刷新(-" + refreshCost + ")"
    shopRefresh.SetPanelEvent("onactivate",function(){shopRefreshButton()})

}


function checkGoldLUATOJS(data){
    var playerGold = data.playerGold
    var mainUI = $.GetContextPanel().GetParent().GetParent().FindChild("CustomHudElements");
    var UIShopButton = mainUI.FindChildTraverse("UIShopButton")
    var shopButtonText = UIShopButton.FindChildTraverse("shopButtonText")
    shopButtonText.text = playerGold
}

function shopClose(){
    $.Msg("==============shopClose==========")
    var shopUI = $.GetContextPanel().GetParent().GetParent().FindChild("CustomHudElements");
    var shopButton = shopUI.FindChildTraverse("UIShopButton")
    shopButton.RemoveClass("shopOpen")
    GameEvents.SendCustomGameEventToServer( "closeShopJSTOLUA", {})
}

function shopRefreshButton(){
    $.Msg("==============shopRefresh==========")
    GameEvents.SendCustomGameEventToServer( "refreshShopJSTOLUA", {})
}

function shopBuy(num){
    $.Msg("==============shopBuy==========",num)
    GameEvents.SendCustomGameEventToServer( "buyShopJSTOLUA", {num:num})
    //GameEvents.SendCustomGameEventToServer( "closeShopJSTOLUA", {})
    //GameEvents.SendCustomGameEventToServer( "openShopJSTOLUA", {})
}

function shopLockFunc(){
    $.Msg("==============shopLock==========")
    /*
    var mainUI = $.GetContextPanel().GetParent().GetParent().FindChild("CustomHudElements");
    var lockBtn = mainUI.FindChildTraverse("shopLock")
    var locking = lockBtn.BHasClass("lock")
    if(locking){
        lockBtn.RemoveClass("lock")
        lockBtn.text = "锁定"
    }else{
        lockBtn.AddClass("lock")
        lockBtn.text = "已锁定"
    } */
    GameEvents.SendCustomGameEventToServer( "lockShopJSTOLUA", {})
    GameEvents.SendCustomGameEventToServer( "closeShopJSTOLUA", {})
    GameEvents.SendCustomGameEventToServer( "openShopJSTOLUA", {})
}


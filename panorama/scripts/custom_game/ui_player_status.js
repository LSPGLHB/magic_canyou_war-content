GameEvents.Subscribe( "openPlayerStatusLUATOJS", openPlayerStatusLUATOJS)


function openPlayerStatusLUATOJS(data){
    $.Msg("==============playerStatusGet==========")
    //var mainUI = $.GetContextPanel().GetParent().GetParent().FindChild("CustomHudElements");
    //var scUI = mainUI.FindChildTraverse("scoreboard")

    //$.CreatePanel('Panel', scUI,"UIPlayerStatusPanelBG");
    

    $("#UIPlayerStatusPanelBG").AddClass("UIPlayerStatusPanelBG")

    var heroNameList = data.playerStatusHeroList
    var playerContractList = data.playerContractList
    var playerAbilityNameList = data.playerStatusAbilityList
    var playerStatusItemList = data.playerStatusItemList


    for(i=0;i<10;i++){
        if(i==0 || i==5){
            var playerStatusTitleId
            var playerStatusTitleTeamId
            var playerStatusTitleTeamText
            var playerStatusTitleContractId
            var playerStatusTitleContractText
            var playerStatusTitleSkillId
            var playerStatusTitleSkillText
            var playerStatusTitleEquipId
            var playerStatusTitleEquipText
            var UIPlayerStatusPanelOffId
            var playerStatusTeamId
            if(i==0){
                playerStatusTitleId = "playerStatusTitle1"
                playerStatusTitleTeamId = "playerStatusTitleTeam1"
                playerStatusTitleTeamText = "天辉"
                playerStatusTitleContractId = "playerStatusTitleContract1"
                playerStatusTitleContractText = "契约"
                playerStatusTitleSkillId = "playerStatusTitleSkill1"
                playerStatusTitleSkillText = "技能"
                playerStatusTitleEquipId = "playerStatusTitleEquip1"
                playerStatusTitleEquipText = "装备"
                UIPlayerStatusPanelOffId = "UIPlayerStatusPanelOff1"
                playerStatusTeamId = "playerStatusTeam1"
            }
            if(i==5){
                playerStatusTitleId = "playerStatusTitle2"
                playerStatusTitleTeamId = "playerStatusTitleTeam2"
                playerStatusTitleTeamText = "夜魇"
                playerStatusTitleContractId = "playerStatusTitleContract2"
                playerStatusTitleContractText = "契约"
                playerStatusTitleSkillId = "playerStatusTitleSkill2"
                playerStatusTitleSkillText = "技能"
                playerStatusTitleEquipId = "playerStatusTitleEquip2"
                playerStatusTitleEquipText = "装备"
                UIPlayerStatusPanelOffId = "UIPlayerStatusPanelOff2"
                playerStatusTeamId = "playerStatusTeam2"
            }
            var playerStatusTitle = $.CreatePanel('Panel', $("#UIPlayerStatusPanelBG"),playerStatusTitleId);
            playerStatusTitle.AddClass("playerStatusTitle")
            var playerStatusTitleTeam = $.CreatePanel('Label', playerStatusTitle, playerStatusTitleTeamId);
            playerStatusTitleTeam.AddClass("playerStatusTitleTeam")
            playerStatusTitleTeam.text = playerStatusTitleTeamText
            var playerStatusTitleContract = $.CreatePanel('Label', playerStatusTitle, playerStatusTitleContractId);
            playerStatusTitleContract.AddClass("playerStatusTitleContract")
            playerStatusTitleContract.text = playerStatusTitleContractText
            var playerStatusTitleSkill = $.CreatePanel('Label', playerStatusTitle, playerStatusTitleSkillId);
            playerStatusTitleSkill.AddClass("playerStatusTitleSkill")
            playerStatusTitleSkill.text = playerStatusTitleSkillText
            var playerStatusTitleEquip = $.CreatePanel('Label', playerStatusTitle, playerStatusTitleEquipId);
            playerStatusTitleEquip.AddClass("playerStatusTitleEquip")
            playerStatusTitleEquip.text = playerStatusTitleEquipText
            if(i==0){
                var UIPlayerStatusPanelOff = $.CreatePanel('Image', playerStatusTitle, UIPlayerStatusPanelOffId);
                UIPlayerStatusPanelOff.AddClass("UIPlayerStatusPanelOff")
                UIPlayerStatusPanelOff.SetImage("s2r://panorama/images/icon_x_red_off_png.vtex")
                UIPlayerStatusPanelOff.SetPanelEvent("onactivate",function(){playerStatusClose()})
            }
            var playerStatusTeam = $.CreatePanel('Panel', $("#UIPlayerStatusPanelBG"),playerStatusTeamId);
            playerStatusTeam.AddClass("playerStatusTeam")
        }
        
        if(i<5){
            var playerStatusPlayerBox = $.CreatePanel('Panel', $("#playerStatusTeam1"),"playerStatusPlayerBox" + i);
        }else{
            var playerStatusPlayerBox = $.CreatePanel('Panel', $("#playerStatusTeam2"),"playerStatusPlayerBox" + i);
        }
        playerStatusPlayerBox.AddClass("playerStatusPlayerBox")

        var heroName = heroNameList[i]
        var heroIconId = "#playerStatusPlayerIcon"+i
        var heroIconSrc = "file://{images}/heroes/"+heroName+".png"
  
        var playerStatusPlayerIcon = $.CreatePanel('Image', playerStatusPlayerBox, heroIconId);
        playerStatusPlayerIcon.AddClass("playerStatusPlayerIcon")
        playerStatusPlayerIcon.SetImage(heroIconSrc)

        var playerStatusSEPanel = $.CreatePanel('Panel', playerStatusPlayerBox, "playerStatusSEPanel"+i);
        playerStatusSEPanel.AddClass("playerStatusSEPanel")

        var playerContractName = playerContractList[i]
        var playerStatusContract = $.CreatePanel('Image', playerStatusSEPanel, "playerStatusContract"+i);
        playerStatusContract.AddClass("playerStatusContract")
       
        playerStatusContract.SetImage("file://{images}/custom_game/contract_icon/"+playerContractName+".png")


        if (i == 0){
            playerStatusContract.SetPanelEvent("onactivate",function(){getContractDetailByNum(0)})
        }
        if (i == 1){
            playerStatusContract.SetPanelEvent("onactivate",function(){getContractDetailByNum(1)})
        }
        if (i == 2){
            playerStatusContract.SetPanelEvent("onactivate",function(){getContractDetailByNum(2)})
        }
        if (i == 3){
            playerStatusContract.SetPanelEvent("onactivate",function(){getContractDetailByNum(3)})
        }
        if (i == 4){
            playerStatusContract.SetPanelEvent("onactivate",function(){getContractDetailByNum(4)})
        }
        if (i == 5){
            playerStatusContract.SetPanelEvent("onactivate",function(){getContractDetailByNum(5)})
        }
        if (i == 6){
            playerStatusContract.SetPanelEvent("onactivate",function(){getContractDetailByNum(6)})
        }
        if (i == 7){
            playerStatusContract.SetPanelEvent("onactivate",function(){getContractDetailByNum(7)})
        }
        if (i == 8){
            playerStatusContract.SetPanelEvent("onactivate",function(){getContractDetailByNum(8)})
        }
        if (i == 9){
            playerStatusContract.SetPanelEvent("onactivate",function(){getContractDetailByNum(9)})
        }
        

        var playerStatusSkillPanel = $.CreatePanel('Panel', playerStatusSEPanel, "playerStatusSkillPanel"+i);
        playerStatusSkillPanel.AddClass("playerStatusSkillPanel")
        

        for(j=0;j<3;j++){
            var abilityIcon = playerAbilityNameList[i][j]
            var abilityIconId = "#playerStatusSkill"+i+j
            var playerStatusSkill = $.CreatePanel('Image', playerStatusSkillPanel, abilityIconId);
            var abilityIconSrc = "file://{images}/custom_game/ability_button/"+abilityIcon+".png"
            playerStatusSkill.AddClass("playerStatusSkill")
            playerStatusSkill.SetImage(abilityIconSrc)
            
            if(i==0){
                if (j==0){
                    playerStatusSkill.SetPanelEvent("onactivate",function(){getMagicDetailByNum(0,0)})
                }
               
            }
          
        }

        var playerStatusEquipPanel = $.CreatePanel('Panel', playerStatusSEPanel, "playerStatusEquipPanel"+i);
        playerStatusEquipPanel.AddClass("playerStatusEquipPanel")
        for(k=1;k<7;k++){
            var playerStatusItem = playerStatusItemList[i][k]
            var itemIconId = "#playerStatusEquip"+i+k
            var playerStatusEquip = $.CreatePanel('Image', playerStatusEquipPanel, itemIconId);
            playerStatusEquip.AddClass("playerStatusEquip")
            playerStatusEquip.SetImage(playerStatusItem)
        }

        
    }

    
}

function playerStatusClose(){
    var mainUI = $.GetContextPanel().GetParent().GetParent().FindChild("CustomHudElements")
    var UIShopButton = mainUI.FindChildTraverse("UIPlayerStatusButton")
    UIShopButton.RemoveClass("UIPlayerStatusButtonActive")
    GameEvents.SendCustomGameEventToServer( "closePlayerStatusJSTOLUA", {})
}

function getContractDetailByNum(num){
    GameEvents.SendCustomGameEventToServer( "getContractDetailByNumJSTOLUA", {num:num})
}

function getMagicDetailByNum(num, grid){
    GameEvents.SendCustomGameEventToServer( "getMagicDetailByNumJSTOLUA", {num:num,grid:grid})
}
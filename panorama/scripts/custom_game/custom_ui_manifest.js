var newUI = $.GetContextPanel().GetParent().GetParent().FindChildTraverse("HUDElements");
var centerBlock = newUI.FindChildTraverse("center_block");
newUI.FindChildTraverse("shop_launcher_block").style.visibility = "collapse"; //隐藏右下部分

//newUI.FindChildTraverse("scoreboard").FindChildTraverse("Background").style.visibility = "collapse";

centerBlock.FindChildTraverse("AghsStatusContainer").style.visibility = "collapse"; //隐藏神杖
// centerBlock.FindChildTraverse("AbilitiesAndStatBranch").style.visibility = "visible";
centerBlock.FindChildTraverse("StatBranch").style.visibility = "collapse";//隐藏天赋面板
centerBlock.FindChildTraverse("level_stats_frame").style.visibility = "collapse";//隐藏天赋闪烁

centerBlock.FindChildTraverse("right_flare").style.visibility = "collapse";//隐藏装饰
newUI.FindChildTraverse("GlyphScanContainer").style.visibility = "collapse";//隐藏地图装饰2


//$.GetContextPanel().GetParent().GetParent().FindChildTraverse("HUDElements").FindChildTraverse("Ability6").style.visibility = "visible";//隐藏本该隐藏的技能



centerBlock.FindChildTraverse("inventory_composition_layer_container").style.visibility = "collapse";//隐藏回城和中立物品栏
//you are not spawning the talent UI, fuck off (Disabling mouseover and onactivate)
centerBlock.FindChildTraverse("StatBranch").SetPanelEvent("onmouseover", function(){});
centerBlock.FindChildTraverse("StatBranch").SetPanelEvent("onactivate", function(){});


var HUD_UI = $.GetContextPanel().GetParent().GetParent().FindChildTraverse("HUDElements");
var centerBlock = HUD_UI.FindChildTraverse("center_block");
HUD_UI.FindChildTraverse("shop_launcher_block").style.visibility = "collapse"; //隐藏右下部分

//HUD_UI.FindChildTraverse("scoreboard").FindChildTraverse("Background").style.visibility = "collapse";

centerBlock.FindChildTraverse("AghsStatusContainer").style.visibility = "collapse"; //隐藏神杖
// centerBlock.FindChildTraverse("AbilitiesAndStatBranch").style.visibility = "visible";
centerBlock.FindChildTraverse("StatBranch").style.visibility = "collapse";//隐藏天赋面板
centerBlock.FindChildTraverse("level_stats_frame").style.visibility = "collapse";//隐藏天赋闪烁

centerBlock.FindChildTraverse("right_flare").style.visibility = "collapse";//隐藏装饰
HUD_UI.FindChildTraverse("GlyphScanContainer").style.visibility = "collapse";//隐藏地图装饰2

var Pre_UI = $.GetContextPanel().GetParent().GetParent().FindChildTraverse("PreGame");//隐藏选英雄后等待画面
//Pre_UI.FindChildTraverse("RightContainer").style.visibility = "collapse";
Pre_UI.FindChildTraverse("StrategyTab").style.visibility = "collapse";
Pre_UI.FindChildTraverse("SelectedHeroAbilities").style.visibility = "collapse";
Pre_UI.FindChildTraverse("SelectedHeroAbilitiesHitTargets").style.visibility = "collapse";
Pre_UI.FindChildTraverse("HeroAbilities").style.visibility = "collapse";
Pre_UI.FindChildTraverse("HeroSimpleDescription").style.visibility = "collapse";
Pre_UI.FindChildTraverse("HeroStats").style.visibility = "collapse";
Pre_UI.FindChildTraverse("HeroSlots").style.visibility = "collapse";





//$.GetContextPanel().GetParent().GetParent().FindChildTraverse("HUDElements").FindChildTraverse("Ability6").style.visibility = "visible";//隐藏本该隐藏的技能



centerBlock.FindChildTraverse("inventory_composition_layer_container").style.visibility = "collapse";//隐藏回城和中立物品栏
//you are not spawning the talent UI, fuck off (Disabling mouseover and onactivate)
centerBlock.FindChildTraverse("StatBranch").SetPanelEvent("onmouseover", function(){});
centerBlock.FindChildTraverse("StatBranch").SetPanelEvent("onactivate", function(){});


ServerEvents.tags('item', event => {
	// Add silent gear tools to the vanilla tags lists
	// Lets them perform vanilla functions

	const swordsList = [
		"sword",
		"katana",
		"machete"
	];

	const pickaxesList = [
		"pickaxe",
		"paxel"
	];

	const axesList = [
		"axe",
		"machete",
		"paxel",
		"mattock"
	];

	const shovelsList = [
		"shovel",
		"paxel"
	];

	const hoesList = [
		"hoe",
		"mattock"
	];

	const knivesList = [
		"knife"
	];

	const armorsList = [
		"helmet",
		"chestplate",
		"leggings",
		"boots"
	];

	var toolID = "";
	function addToolToTag(tool,tag,event){
		toolID = "silentgear:" + tool;
		event.add(tag, toolID);
	};

	var armorID = "";
	var tagID = "";
	function addArmorToTag(armor,event){
		armorID = "silentgear:" + armor;
		if (armor.slice(-1) == "s"){
			tagID = "forge:armors/" + armor;
		} else {
			tagID = "forge:armors/" + armor + "s";
		}

		event.add(tagID, armorID);
	};

	swordsList.forEach(sword => {
		addToolToTag(sword,"minecraft:swords",event)
	})

	pickaxesList.forEach(pickaxe => {
		addToolToTag(pickaxe,"minecraft:pickaxes",event)
	})

	axesList.forEach(axe => {
		addToolToTag(axe,"minecraft:axes",event)
	})

	shovelsList.forEach(shovel => {
		addToolToTag(shovel,"minecraft:shovels",event)
	})

	hoesList.forEach(hoe => {
		addToolToTag(hoe,"minecraft:hoes",event)
	})

	armorsList.forEach(armor => {
		addArmorToTag(armor,event)
	})

	const AxeItem = Java.loadClass('net.minecraft.world.item.AxeItem');
	
})

ServerEvents.compostableRecipes(event => {
	event.add("silentgear:flax_seeds", 0.1)
})

Ingredient.of('#minecraft:logs').itemIds.forEach(itemId => {

	if (player=null || player.isCrouching() || item != housing) return
		
	if (player.mainHandItem.id == housing){
		player.mainHandItem.count -= 1;
	} else if (player.offHandItem.id == housing){
		player.offHandItem.count -= 1;
	}
	if (itemId.indexOf("stripped") === -1) {
		BlockEvents.rightClicked(itemId, e => {
			if(!(e.item.item instanceof AxeItem)) return;
			e.block.popItemFromFace('farmersdelight:tree_bark', e.facing)
		});
	}
});
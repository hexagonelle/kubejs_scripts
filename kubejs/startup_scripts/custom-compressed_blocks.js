StartupEvents.registry("block", (event) => {
	let toCompress = [
		["andesite", "stone", "pickaxe"],
		["clay", "clay", "shovel"],
		["cobblestone", "stone", "pickaxe"],
		["cobbled_deepslate", "stone", "pickaxe"],
		["diorite", "stone", "pickaxe"],
		["dirt", "dirt", "shovel"],
		["granite", "stone", "pickaxe"],
		["gravel", "dirt", "shovel"],
		["netherrack", "stone", "pickaxe"],
		["sand", "sand", "shovel"],
		["red_sand", "sand", "shovel"],
		["snow", "snow", "shovel"],
		["soul_sand", "sand", "shovel"],
		["soul_soil", "dirt", "shovel"]
	];

	let compressLevel = [
		["single", 1],
		["double", 2],
		["triple", 3],
		["quadruple", 4],
		["quintuple", 5],
		["hextuple", 6]
	];

	function toTitleCase(str) {
		var output = "";
		var text = str.split("_");
		text.forEach(word=> {
			var capitalize =
				word.charAt(0).toUpperCase() +
				word.substring(1);
			output = output + capitalize + " ";
		})

		return output.trim();
	}

	var internalName = "";
	var internalCompressedName = "";
	var displayCompressedName = "";
	var materialType = "";
	var toolNeeded = "";
	var compressionLevel = "";
	var blockHardness = "";

	toCompress.forEach(block=> {
		internalName = block[0];
		materialType = block[1];
		toolNeeded = block[2];

		compressLevel.forEach(level=> {
			compressionLevel = level[0];
			blockHardness = 1.0*level[1]/2;

			internalCompressedName =
				compressionLevel +
				"_compressed_" + 
				internalName;
			displayCompressedName = toTitleCase(internalCompressedName);

			event.create(internalCompressedName)
				.displayName(displayCompressedName)
				.material(materialType)
				.hardness(blockHardness)
				.resistance(blockHardness)
				.requiresTool(true)
				.tagBlock("mineable/" + toolNeeded)
				.tagBlock('minecraft:needs_stone_tool');
		})
	})
})
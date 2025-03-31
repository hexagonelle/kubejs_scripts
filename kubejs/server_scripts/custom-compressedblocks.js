ServerEvents.recipes(event=> {
	let toCompress = [
		"andesite",
		"clay",
		"cobblestone",
		"cobbled_deepslate",
		"diorite",
		"dirt",
		"granite",
		"gravel",
		"netherrack",
		"sand",
		"red_sand",
		"snow",
		"soul_sand",
		"soul_soil"
	];

	let compressLevel = [
		"single",
		"double",
		"triple",
		"quadruple",
		"quintuple",
		"hextuple"
	];

	let compressionDepth = compressLevel.length;

	var internalCompressedName = ""
	var previousLevelInternalName = ""

	toCompress.forEach(block=> {
		for(var i = 0; i < compressionDepth; i++){
			internalCompressedName =
				"kubejs:" + 
				compressLevel[i] +
				"_compressed_" + 
				block;
			if(i==0){
				previousLevelInternalName = 
				"minecraft:" + block;
			} else {
				previousLevelInternalName = 
				"kubejs:" + 
				compressLevel[i-1] +
				"_compressed_" + 
				block;
			}

			
			event.shapeless(
				internalCompressedName,
				[Item.of(previousLevelInternalName, 9)]
			)
			event.shapeless(
				Item.of(previousLevelInternalName, 9),
				[internalCompressedName]
			)
		}
	})
})
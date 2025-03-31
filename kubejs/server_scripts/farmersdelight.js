ServerEvents.recipes(event => {

	// this recipe is more general
	// conflict b/t minecraft and farmer's delight
	event.remove({id:"minecraft:cake"})
	event.replaceInput(
		{id:"farmersdelight:cake_from_milk_bottle"},
		"#forge:eggs/bird",
		"#forge:eggs",
	)

	// unify conflicting dough recipes
	event.remove({output:"farmersdelight:wheat_dough"})

	// overlap with create
	event.remove({id:"embers:copper_nugget_to_ingot"})

});
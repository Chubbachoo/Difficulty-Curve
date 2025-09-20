GTCEuServerEvents.oreVeins(event => {
	event.add("gtceu:ow_sulfur_vein", vein => {
		vein.density(0.25)
		vein.clusterSize(40)
		vein.discardChanceOnAirExposure(0)
		vein.layer("deepslate")
		vein.dimensions("minecraft:overworld")
		vein.biomes("#minecraft:is_overworld")
		vein.heightRangeUniform(-60, -30)
		vein.dikeVeinGenerator(generator => generator
			.withBlock(GTMaterials.Sulfur, 3, -60, -30)
			.withBlock(GTMaterials.Sphalerite, 1, -60, -30)
			.withBlock(GTMaterials.Pyrite, 1, -60, -30)
			.withBlock(GTMaterials.Stibnite, 1, -60, -30)
		)
		vein.surfaceIndicatorGenerator(indicator => indicator
			.block(Block.getBlock("minecraft:magma_block"))
			.placement("above")
			.density(0.4)
			.radius(5)
		)
		.weight(60)


	})
	event.add("gtceu:ow_beryllium_vein", vein => {
		vein.density(0.25)
		vein.clusterSize(20)
		vein.discardChanceOnAirExposure(0)
		vein.layer("deepslate")
		vein.dimensions("minecraft:overworld")
		vein.biomes("#minecraft:is_mountain")
		vein.heightRangeUniform(-60, 30)
		vein.dikeVeinGenerator(generator => generator
			.withBlock(GTMaterials.Beryllium, 3, -60, 30)
			.withBlock(GTMaterials.Emerald, 2, -60, 30)
			.withBlock(GTMaterials.Thorium, 1, -60, 30)
		)
		vein.surfaceIndicatorGenerator(indicator => indicator
			.block(Block.getBlock("gtceu:beryllium_indicator"))
			.placement("above")
			.density(0.4)
			.radius(5)
		)
		.weight(500)

	})
})

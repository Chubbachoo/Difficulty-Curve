ServerEvents.recipes(event => {
	event.remove({"id":"gtceu:shaped/steam_compressor_bronze"})
	event.shaped("gtceu:lp_steam_compressor",[
		"PFP",
		"EGE",
		"PFP"
	], {
		G: "gtceu:bronze_machine_casing",
		F: "gtceu:bronze_small_fluid_pipe",
		P: "#create:mechanical_pistons",
		E: "#create_sa:steam_engine"
	})
	event.remove({"id":"gtceu:shaped/steam_macerator_bronze"})
	event.shaped("gtceu:lp_steam_macerator",[
		"DFD",
		"PGP",
		"EFE"
	], {
		G: "gtceu:bronze_machine_casing",
		D: "#forge:gems/diamond",
		F: "gtceu:bronze_small_fluid_pipe",
		P: "#create:mechanical_pistons",
		E: "#create_sa:steam_engine"
	})
	event.remove({"id":"gtceu:shaped/steam_hammer_bronze"})
	event.shaped("gtceu:lp_steam_forge_hammer",[
		"EPE",
		"FGF",
		"FAF"
	], {
		G: "gtceu:bronze_machine_casing",
		A: "#minecraft:anvil",
		F: "gtceu:bronze_small_fluid_pipe",
		P: "#create:mechanical_pistons",
		E: "#create_sa:steam_engine"
	})
	event.remove({"id":"gtceu:shaped/steam_rock_breaker_bronze"})
	event.shaped("gtceu:lp_steam_rock_crusher",[
		"PEP",
		"FGF",
		"DFD"
	], {
		G: "gtceu:bronze_machine_casing",
		D: "#forge:gems/diamond",
		F: "gtceu:bronze_small_fluid_pipe",
		P: "#create:mechanical_pistons",
		E: "#create_sa:steam_engine"
	})
	event.remove({"id":"gtceu:shaped/steam_miner_bronze"})
	event.shaped("gtceu:lp_steam_miner",[
		"DED",
		"FGF",
		"BFB"
	], {
		G: "gtceu:bronze_machine_casing",
		D: "#forge:gems/diamond",
		F: "gtceu:bronze_small_fluid_pipe",
		B: "#forge:small_gears/bronze",
		E: "#create_sa:steam_engine"
	})
	event.remove({"id":"gtceu:shaped/steam_extractor_bronze"})
	event.shaped("gtceu:lp_steam_extractor",[
		"EFF",
		"PGX",
		"EFF"
	], {
		G: "gtceu:bronze_machine_casing",
		X: "minecraft:glass",
		F: "gtceu:bronze_small_fluid_pipe",
		P: "#create:mechanical_pistons",
		E: "#create_sa:steam_engine"
	})
	
	event.remove({"id":"gtceu:shaped/electronic_circuit_lv"})
	event.recipes.create.sequenced_assembly([
		Item.of("gtceu:basic_electronic_circuit").withChance(95.0),
		Item.of("2x gtceu:vacuum_tube").withChance(1.0),
		Item.of("2x gtceu:resistor").withChance(2.0),,
		Item.of("2x gtceu:glass_dust").withChance(1.0),
		Item.of("gtceu:resin_printed_circuit_board").withChance(1.0)
	], "gtceu:resin_printed_circuit_board", [
		event.recipes.createDeploying("gtceu:incomplete_basic_electronic_circuit", ["gtceu:incomplete_basic_electronic_circuit", "gtceu:vacuum_tube"]),
		event.recipes.createDeploying("gtceu:incomplete_basic_electronic_circuit", ["gtceu:incomplete_basic_electronic_circuit", "gtceu:vacuum_tube"]),
		event.recipes.createDeploying("gtceu:incomplete_basic_electronic_circuit", ["gtceu:incomplete_basic_electronic_circuit", "gtceu:resistor"]),
		event.recipes.createDeploying("gtceu:incomplete_basic_electronic_circuit", ["gtceu:incomplete_basic_electronic_circuit", "gtceu:resistor"]),
		event.recipes.createDeploying("gtceu:incomplete_basic_electronic_circuit", ["gtceu:incomplete_basic_electronic_circuit", "gtceu:red_alloy_single_cable"]),
		event.recipes.createDeploying("gtceu:incomplete_basic_electronic_circuit", ["gtceu:incomplete_basic_electronic_circuit", "gtceu:red_alloy_single_cable"]),
		event.recipes.createDeploying("gtceu:incomplete_basic_electronic_circuit", ["gtceu:incomplete_basic_electronic_circuit", "gtceu:red_alloy_single_cable"]),
		event.recipes.createDeploying("gtceu:incomplete_basic_electronic_circuit", ["gtceu:incomplete_basic_electronic_circuit", "#forge:plates/steel"]),
		event.recipes.greate.pressing("gtceu:incomplete_basic_electronic_circuit", "gtceu:incomplete_basic_electronic_circuit").recipeTier(0)
	]).transitionalItem("gtceu:incomplete_basic_electronic_circuit").loops(1)
	
	event.replaceInput({"id":"gtceu:forge_hammer/cobblestone_to_gravel"}, "#minecraft:stone_crafting_materials", "minecraft:cobblestone")
	event.recipes.gtceu.forge_hammer("hammer_sand")
		.itemInputs(
			"#forge:sand"
		)
		.itemOutputs(
			"exdeorum:dust"
		)
		.duration(20)
		.EUt(2)
	event.recipes.gtceu.forge_hammer("hammer_nrack")
		.itemInputs(
			"minecraft:netherrack"
		)
		.itemOutputs(
			"exdeorum:crushed_netherrack"
		)
		.duration(20)
		.EUt(2)
	event.recipes.gtceu.forge_hammer("hammer_nrack_twice")
		.itemInputs(
			"exdeorum:crushed_netherrack"
		)
		.itemOutputs(
			"minecraft:red_sand"
		)
		.duration(20)
		.EUt(2)
	event.recipes.gtceu.forge_hammer("hammer_endstone")
		.itemInputs(
			"minecraft:end_stone"
		)
		.itemOutputs(
			"exdeorum:crushed_end_stone"
		)
		.duration(20)
		.EUt(2)
	event.recipes.gtceu.forge_hammer("hammer_bstone")
		.itemInputs(
			"minecraft:blackstone"
		)
		.itemOutputs(
			"exdeorum:crushed_blackstone"
		)
		.duration(20)
		.EUt(2)
	event.recipes.gtceu.forge_hammer("hammer_dslate")
		.itemInputs(
			"minecraft:deepslate"
		)
		.itemOutputs(
			"exdeorum:crushed_deepslate"
		)
		.duration(20)
		.EUt(2)
	event.recipes.gtceu.forge_hammer("hammer_cdslate")
		.itemInputs(
			"minecraft:cobbled_deepslate"
		)
		.itemOutputs(
			"exdeorum:crushed_deepslate"
		)
		.duration(20)
		.EUt(2)
	event.remove({"output":"create:crushed_raw_iron"})
	event.remove({"output":"create:crushed_raw_gold"})
	event.remove({"output":"create:crushed_raw_copper"})
	event.remove({"output":"create:crushed_raw_zinc"})
	event.remove({"output":"create:crushed_raw_platinum"})
	event.remove({"output":"create:crushed_raw_silver"})
	event.remove({"output":"create:crushed_raw_tin"})
	event.remove({"output":"create:crushed_raw_lead"})
	event.remove({"output":"create:crushed_raw_nickel"})
	
	event.recipes.gtceu.coke_oven("char_cactus")
		.itemInputs(
			"minecraft:cactus"
		)
		.itemOutputs(
			"gtceu:cactus_charcoal_gem"
		)
		.outputFluids(
			Fluid.of("gtceu:creosote", 30)
		)
		.duration(900)
	event.recipes.gtceu.coke_oven("coke_cactus")
		.itemInputs(
			"#forge:gems/cactus_charcoal"
		)
		.itemOutputs(
			"gtceu:cactus_coke_gem"
		)
		.outputFluids(
			Fluid.of("gtceu:creosote", 30)
		)
		.duration(900)
	event.recipes.gtceu.coke_oven("char_sugar")
		.itemInputs(
			"minecraft:sugar_cane"
		)
		.itemOutputs(
			"gtceu:sugar_charcoal_gem"
		)
		.outputFluids(
			Fluid.of("gtceu:creosote", 30)
		)
		.duration(900)
	event.recipes.gtceu.coke_oven("coke_sugar")
		.itemInputs(
			"#forge:gems/sugar_charcoal"
		)
		.itemOutputs(
			"gtceu:sugar_coke_gem"
		)
		.outputFluids(
			Fluid.of("gtceu:creosote", 30)
		)
		.duration(900)
	event.recipes.gtceu.coke_oven("coke_kelp")
		.itemInputs(
			"minecraft:dried_kelp"
		)
		.itemOutputs(
			"gtceu:tiny_kelp_coke_dust"
		)
		.outputFluids(
			Fluid.of("gtceu:creosote", 3)
		)
		.duration(900)
	event.recipes.gtceu.coke_oven("coke_kelp_block")
		.itemInputs(
			"minecraft:dried_kelp_block"
		)
		.itemOutputs(
			"gtceu:kelp_coke_dust"
		)
		.outputFluids(
			Fluid.of("gtceu:creosote", 30)
		)
		.duration(8100)
	
	event.remove({"output":"exdeorum:golden_mesh"})
	event.recipes.gtceu.alloy_smelter("make_gold_mesh")
		.itemInputs(
			"minecraft:deepslate"
		)
		.itemOutputs(
			"exdeorum:crushed_deepslate"
		)
		.duration(20)
		.EUt(2)
	
	event.shaped("2x minecraft:torch",[
		"C ",
		"S "
	], {
		C: "#forge:gems/cactus_charcoal",
		S: "#forge:rods/wood"
	})
	event.shaped("4x minecraft:torch",[
		"C ",
		"S "
	], {
		C: "#forge:gems/cactus_coke",
		S: "#forge:rods/wood"
	})
	event.shaped("2x minecraft:torch",[
		"C ",
		"S "
	], {
		C: "#forge:gems/sugar_charcoal",
		S: "#forge:rods/wood"
	})
	event.shaped("4x minecraft:torch",[
		"C ",
		"S "
	], {
		C: "#forge:gems/sugar_coke",
		S: "#forge:rods/wood"
	})
	
	event.shaped("2x minecraft:torch",[
		"C ",
		"S "
	], {
		C: "#forge:dusts/cactus_charcoal",
		S: "#forge:rods/wood"
	})
	event.shaped("4x minecraft:torch",[
		"C ",
		"S "
	], {
		C: "#forge:dusts/cactus_coke",
		S: "#forge:rods/wood"
	})
	event.shaped("2x minecraft:torch",[
		"C ",
		"S "
	], {
		C: "#forge:dusts/sugar_charcoal",
		S: "#forge:rods/wood"
	})
	event.shaped("4x minecraft:torch",[
		"C ",
		"S "
	], {
		C: "#forge:dusts/sugar_coke",
		S: "#forge:rods/wood"
	})
	event.recipes.gtceu.primitive_blast_furnace("steel_from_cactus_charcoal")
		.itemInputs(
			"4x #forge:gems/cactus_charcoal",
			"#forge:ingots/iron"
		)
		.itemOutputs(
			"gtceu:steel_ingot",
			"4x gtceu:tiny_dark_ash_dust"
		)
		.duration(1800)
	event.recipes.gtceu.primitive_blast_furnace("steel_block_from_cactus_charcoal")
		.itemInputs(
			"4x #forge:storage_blocks/cactus_charcoal",
			"#forge:storage_blocks/iron"
		)
		.itemOutputs(
			"gtceu:steel_block",
			"4x gtceu:dark_ash_dust"
		)
		.duration(16200)
	event.recipes.gtceu.primitive_blast_furnace("steel_from_cactus_charcoal_wrought")
		.itemInputs(
			"4x #forge:gems/cactus_charcoal",
			"#forge:ingots/wrought_iron"
		)
		.itemOutputs(
			"gtceu:steel_ingot",
			"4x gtceu:tiny_dark_ash_dust"
		)
		.duration(800)
	event.recipes.gtceu.primitive_blast_furnace("steel_block_from_cactus_charcoal_wrought")
		.itemInputs(
			"4x #forge:storage_blocks/cactus_charcoal",
			"#forge:storage_blocks/wrought_iron"
		)
		.itemOutputs(
			"gtceu:steel_block",
			"4x gtceu:dark_ash_dust"
		)
		.duration(7200)
	
	event.recipes.gtceu.primitive_blast_furnace("steel_from_sugar_charcoal")
		.itemInputs(
			"4x #forge:gems/sugar_charcoal",
			"#forge:ingots/iron"
		)
		.itemOutputs(
			"gtceu:steel_ingot",
			"4x gtceu:tiny_dark_ash_dust"
		)
		.duration(1800)
	event.recipes.gtceu.primitive_blast_furnace("steel_block_from_sugar_charcoal")
		.itemInputs(
			"4x #forge:storage_blocks/sugar_charcoal",
			"#forge:storage_blocks/iron"
		)
		.itemOutputs(
			"gtceu:steel_block",
			"4x gtceu:dark_ash_dust"
		)
		.duration(16200)
	event.recipes.gtceu.primitive_blast_furnace("steel_from_sugar_charcoal_wrought")
		.itemInputs(
			"4x #forge:gems/sugar_charcoal",
			"#forge:ingots/wrought_iron"
		)
		.itemOutputs(
			"gtceu:steel_ingot",
			"4x gtceu:tiny_dark_ash_dust"
		)
		.duration(800)
	event.recipes.gtceu.primitive_blast_furnace("steel_block_from_sugar_charcoal_wrought")
		.itemInputs(
			"4x #forge:storage_blocks/sugar_charcoal",
			"#forge:storage_blocks/wrought_iron"
		)
		.itemOutputs(
			"gtceu:steel_block",
			"4x gtceu:dark_ash_dust"
		)
		.duration(7200)
	event.recipes.gtceu.primitive_blast_furnace("steel_from_cactus_coke")
		.itemInputs(
			"2x #forge:gems/cactus_coke",
			"#forge:ingots/iron"
		)
		.itemOutputs(
			"gtceu:steel_ingot",
			"2x gtceu:tiny_ash_dust"
		)
		.duration(1500)
	event.recipes.gtceu.primitive_blast_furnace("steel_block_from_cactus_coke")
		.itemInputs(
			"2x #forge:storage_blocks/cactus_coke",
			"#forge:storage_blocks/iron"
		)
		.itemOutputs(
			"gtceu:steel_block",
			"2x gtceu:ash_dust"
		)
		.duration(13500)
	event.recipes.gtceu.primitive_blast_furnace("steel_from_cactus_coke_wrought")
		.itemInputs(
			"2x #forge:gems/cactus_coke",
			"#forge:ingots/wrought_iron"
		)
		.itemOutputs(
			"gtceu:steel_ingot",
			"2x gtceu:tiny_ash_dust"
		)
		.duration(600)
	event.recipes.gtceu.primitive_blast_furnace("steel_block_from_cactus_coke_wrought")
		.itemInputs(
			"2x #forge:storage_blocks/cactus_coke",
			"#forge:storage_blocks/wrought_iron"
		)
		.itemOutputs(
			"gtceu:steel_block",
			"2x gtceu:ash_dust"
		)
		.duration(5400)
	
	event.recipes.gtceu.primitive_blast_furnace("steel_from_sugar_coke")
		.itemInputs(
			"2x #forge:gems/sugar_coke",
			"#forge:ingots/iron"
		)
		.itemOutputs(
			"gtceu:steel_ingot",
			"2x gtceu:tiny_ash_dust"
		)
		.duration(1500)
	event.recipes.gtceu.primitive_blast_furnace("steel_block_from_sugar_coke")
		.itemInputs(
			"2x #forge:storage_blocks/sugar_coke",
			"#forge:storage_blocks/iron"
		)
		.itemOutputs(
			"gtceu:steel_block",
			"2x gtceu:ash_dust"
		)
		.duration(13500)
	event.recipes.gtceu.primitive_blast_furnace("steel_from_sugar_coke_wrought")
		.itemInputs(
			"2x #forge:gems/sugar_coke",
			"#forge:ingots/wrought_iron"
		)
		.itemOutputs(
			"gtceu:steel_ingot",
			"2x gtceu:tiny_ash_dust"
		)
		.duration(600)
	event.recipes.gtceu.primitive_blast_furnace("steel_block_from_sugar_coke_wrought")
		.itemInputs(
			"2x #forge:storage_blocks/sugar_coke",
			"#forge:storage_blocks/wrought_iron"
		)
		.itemOutputs(
			"gtceu:steel_block",
			"2x gtceu:ash_dust"
		)
		.duration(5400)
	
	event.recipes.gtceu.primitive_blast_furnace("steel_from_kelp_coke")
		.itemInputs(
			"2x #forge:small_dusts/kelp_coke",
			"#forge:ingots/iron"
		)
		.itemOutputs(
			"gtceu:steel_ingot",
			"gtceu:tiny_ash_dust"
		)
		.duration(1500)
	event.recipes.gtceu.primitive_blast_furnace("steel_block_from_kelp_coke")
		.itemInputs(
			"2x #forge:dusts/kelp_coke",
			"#forge:storage_blocks/iron"
		)
		.itemOutputs(
			"gtceu:steel_block",
			"gtceu:ash_dust"
		)
		.duration(13500)
	event.recipes.gtceu.primitive_blast_furnace("steel_from_kelp_coke_wrought")
		.itemInputs(
			"2x #forge:small_dusts/kelp_coke",
			"#forge:ingots/wrought_iron"
		)
		.itemOutputs(
			"gtceu:steel_ingot",
			"gtceu:tiny_ash_dust"
		)
		.duration(600)
	event.recipes.gtceu.primitive_blast_furnace("steel_block_from_kelp_coke_wrought")
		.itemInputs(
			"2x #forge:dusts/kelp_coke",
			"#forge:storage_blocks/wrought_iron"
		)
		.itemOutputs(
			"gtceu:steel_block",
			"gtceu:ash_dust"
		)
		.duration(5400)
	
	
	
	event.recipes.gtceu.alloy_smelter("smelt_gold_mesh")
		.itemInputs(
			"2x #forge:foils/gold",
			"exdeorum:string_mesh"
		)
		.itemOutputs(
			"exdeorum:golden_mesh"
		)
		.duration(20)
		.EUt(16)
	event.remove({"output":"exdeorum:diamond_mesh"})
})
ServerEvents.tags("item", event => {
})

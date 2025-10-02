ServerEvents.recipes(event => {
	event.remove({"id":"create_sa:steam_engine_recipe"})
	event.recipes.create.sequenced_assembly([
		Item.of("create_sa:steam_engine").withChance(91.0),
		Item.of("gtceu:andesite_alloy_rotor").withChance(3.0),
		Item.of("gtceu:brass_plate").withChance(3.0),
		Item.of("greate:andesite_alloy_cogwheel").withChance(3.0),
	], "#forge:plates/bronze", [
		event.recipes.createDeploying("create_sa:incomplete_steam_engine", ["create_sa:incomplete_steam_engine", "greate:steel_cogwheel"]),
		event.recipes.createDeploying("create_sa:incomplete_steam_engine", ["create_sa:incomplete_steam_engine", "greate:large_steel_cogwheel"]),
		event.recipes.createDeploying("create_sa:incomplete_steam_engine", ["create_sa:incomplete_steam_engine", "#forge:alloys/steel"]),
		event.recipes.createDeploying("create_sa:incomplete_steam_engine", ["create_sa:incomplete_steam_engine", "gtceu:glass_tube"])
	]).transitionalItem("create_sa:incomplete_steam_engine").loops(1)
	
	event.remove({"id":"greate:sequenced_assembly/precision_mechanism"})
	event.recipes.create.sequenced_assembly([
		Item.of("create:precision_mechanism").withChance(91.0),
		Item.of("minecraft:clock").withChance(3.0),
		Item.of("gtceu:brass_plate").withChance(3.0),
		Item.of("greate:andesite_alloy_cogwheel").withChance(3.0),
	], "#forge:plates/brass", [
		event.recipes.createDeploying("create:incomplete_precision_mechanism", ["create:incomplete_precision_mechanism", "greate:andesite_alloy_cogwheel"]),
		event.recipes.createDeploying("create:incomplete_precision_mechanism", ["create:incomplete_precision_mechanism", "greate:large_andesite_alloy_cogwheel"]),
		event.recipes.createDeploying("create:incomplete_precision_mechanism", ["create:incomplete_precision_mechanism", "#forge:rounds/iron"]),
		event.recipes.createDeploying("create:incomplete_precision_mechanism", ["create:incomplete_precision_mechanism", "#forge:rounds/iron"]),
		event.recipes.createDeploying("create:incomplete_precision_mechanism", ["create:incomplete_precision_mechanism", "#forge:rounds/iron"]),
		event.recipes.createDeploying("create:incomplete_precision_mechanism", ["create:incomplete_precision_mechanism", "#forge:rounds/iron"])
	]).transitionalItem("create:incomplete_precision_mechanism").loops(1)
	
	
	
	event.remove({"output":"create_sa:zinc_handle"})
	event.replaceInput({"input":"create_sa:zinc_handle"}, "create_sa:zinc_handle", "#forge:rods/zinc")
	event.remove({"output":"create_sa:zinc_helmet"})
	event.remove({"output":"create_sa:zinc_chestplate"})
	event.remove({"output":"create_sa:zinc_leggings"})
	event.remove({"output":"create_sa:zinc_boots"})
	event.remove({"output":"create_sa:zinc_pickaxe"})
	event.remove({"output":"create_sa:zinc_axe"})
	event.remove({"output":"create_sa:zinc_sword"})
	event.remove({"output":"create_sa:zinc_shovel"})
	event.remove({"output":"create_sa:zinc_hoe"})
	event.remove({"output":"create_sa:copper_helmet"})
	event.remove({"output":"create_sa:copper_chestplate"})
	event.remove({"output":"create_sa:copper_leggings"})
	event.remove({"output":"create_sa:copper_boots"})
	event.remove({"output":"create_sa:copper_pickaxe"})
	event.remove({"output":"create_sa:copper_axe"})
	event.remove({"output":"create_sa:copper_sword"})
	event.remove({"output":"create_sa:copper_shovel"})
	event.remove({"output":"create_sa:copper_hoe"})
	event.remove({"output":"create_sa:brass_helmet"})
	event.remove({"output":"create_sa:brass_chestplate"})
	event.remove({"output":"create_sa:brass_leggings"})
	event.remove({"output":"create_sa:brass_boots"})
	event.remove({"output":"create_sa:brass_pickaxe"})
	event.remove({"output":"create_sa:brass_axe"})
	event.remove({"output":"create_sa:brass_sword"})
	event.remove({"output":"create_sa:brass_shovel"})
	event.remove({"output":"create_sa:brass_hoe"})
	
	event.remove({"output":"create:steam_engine"})
	event.shaped("create:steam_engine",[
		" B ",
		" M ",
		"PCP"
	], {
		C: "create:fluid_pipe",
		P: "create:precision_mechanism",
		M: "#create:mechanical_pistons",
		B: "#forge:plates/bronze"
	})
	
	event.shaped("3x gtceu:wood_plate",[
		"L ",
		"S "
	], {
		L: "#minecraft:logs",
		S: "#forge:tools/saws"
	})
	
	event.remove({"output":"create:deployer"})
	event.shaped("create:deployer",[
		" P ",
		"SAS",
		"FBH"
	], {
		B: "create:brass_hand",
		P: "create:piston_extension_pole",
		S: "greate:andesite_alloy_shaft",
		A: "create:andesite_casing",
		H: "#forge:tools/hammers",
		F: "#forge:tools/files"
	})
	event.recipes.greate.pressing("gtceu:wrought_iron_ingot", "#forge:ingots/heated_iron").recipeTier(0).circuitNumber(8)
	event.recipes.greate.pressing("gtceu:wrought_iron_plate", "#forge:ingots/heated_iron").recipeTier(1).circuitNumber(1)
	event.recipes.greate.pressing("gtceu:double_wrought_iron_plate", "#forge:ingots/heated_iron").recipeTier(1).circuitNumber(2)
	event.remove({"id":"gtceu:shapeless/dust_bronze"})
	event.remove({"id":"create:crafting/materials/electron_tube"})
	
	event.remove({"id":"create:crafting/kinetics/piston_extension_pole"})
	event.shaped("8x create:piston_extension_pole",[
		" P ",
		"SAM",
		" P "
	], {
		P: "#minecraft:planks",
		S: "#forge:tools/saws",
		A: "#forge:alloys/wrought_iron",
		M: "#gtceu:tools/crafting_mallets"
	})
	
	event.remove({"output":"create_sa:hydraulic_engine"})
	event.remove({"output":"create_sa:heat_engine"})
	
	event.replaceInput({not:{"mod":"gtceu"}}, "gtceu:ulv_machine_casing", "create:andesite_casing")
	event.replaceInput({"output":"greate:andesite_alloy_mechanical_mixer"}, "#forge:plates/andesite_alloy", "create:precision_mechanism")
	event.replaceInput({"output":"greate:andesite_alloy_mechanical_mixer"}, "#forge:shafts/andesite_alloy", "#forge:cogwheels/andesite_alloy")
	event.replaceInput({"output":"greate:andesite_alloy_mechnical_press"}, "#forge:plates/andesite_alloy", "create:precision_mechanism")
	event.replaceInput({"output":"greate:andesite_alloy_mechnical_saw"}, "#forge:plates/andesite_alloy", "create:precision_mechanism")
	event.replaceInput({"output":"greate:andesite_alloy_millstone"}, "#forge:plates/andesite_alloy", "create:precision_mechanism")
	event.replaceInput({"output":"greate:andesite_alloy_encased_fan"}, "#forge:plates/andesite_alloy", "create:precision_mechanism")
	
	event.shaped("4x create:white_sail",[
		"WS",
		"SA"
	], {
		W: "#minecraft:wool",
		S: "#forge:rods/wooden",
		A: "#forge:alloys/steel"
	})
	event.shaped("8x create:white_sail",[
		"WS",
		"SA"
	], {
		W: "#minecraft:wool",
		S: "#forge:rods/long/wood",
		A: "#forge:alloys/aluminium"
	})
	event.shaped("16x create:white_sail",[
		"WSW",
		"SAS",
		"   "
	], {
		W: "#minecraft:wool",
		S: "#forge:rods/long/wood",
		A: "#forge:alloys/stainless_steel"
	})
	
	event.remove({"id":"greate:mixing/integration/gtceu/mixer/wrought_iron_alloy"})
	event.recipes.greate.mixing("create:andesite_alloy", ["#forge:ingots/wrought_iron", "minecraft:andesite"]).recipeTier(0)
	
	event.recipes.create.deploying("gtceu:matches", ["#forge:bolts/wood", "#forge:dusts/tricalcium_phosphate"])
	
	
	event.remove({"id":"create:crafting/materials/copper_nugget"})
	event.remove({"id":"create:crafting/materials/copper_ingot"})
	
	
	
	event.remove({"id":"greate:compacting/integration/gtceu/compressor/compressed_fireclay"})
	event.recipes.greate.compacting("gtceu:firebrick", ["#forge:dusts/fireclay"]).recipeTier(1).heated()
})
ServerEvents.tags("item", event => {
	event.add("create:mechanical_pistons","create:mechanical_piston")
	event.add("create:mechanical_pistons","create:sticky_mechanical_piston")
	event.add("forge:extended_pistons","#create:mechanical_pistons")
	event.add("forge:extended_pistons","#forge:pistons")
	event.add("create_sa:steam_engine","create_sa:steam_engine")
	event.add("create_sa:steam_engine","create:steam_engine")
	event.add("create:chain_rideable","create:wrench")
})
ServerEvents.tags("block", event => {
	event.add("create:wrench_pickup", "#forge:mineable/wrench")
	event.add("create:fan_processing_catalysts/haunting", "exdeorum:witch_water")
})

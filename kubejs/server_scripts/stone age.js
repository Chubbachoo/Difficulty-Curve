ServerEvents.recipes(event => {
	event.remove({"output":"minecraft:stone_shovel"})
	event.remove({"output":"minecraft:stone_pickaxe"})
	event.remove({"output":"minecraft:stone_axe"})
	event.remove({"output":"minecraft:stone_hoe"})
	event.remove({"output":"minecraft:stone_sword"})
	event.remove({"output":"minecraft:iron_shovel"})
	event.remove({"output":"minecraft:iron_pickaxe"})
	event.remove({"output":"minecraft:iron_axe"})
	event.remove({"output":"minecraft:iron_hoe"})
	event.remove({"output":"minecraft:iron_sword"})
	event.remove({"output":"minecraft:golden_shovel"})
	event.remove({"output":"minecraft:golden_pickaxe"})
	event.remove({"output":"minecraft:golden_axe"})
	event.remove({"output":"minecraft:golden_hoe"})
	event.remove({"output":"minecraft:golden_sword"})
	event.remove({"output":"minecraft:diamond_shovel"})
	event.remove({"output":"minecraft:diamond_pickaxe"})
	event.remove({"output":"minecraft:diamond_axe"})
	event.remove({"output":"minecraft:diamond_hoe"})
	event.remove({"output":"minecraft:diamond_sword"})
	event.shapeless("2x minecraft:flint",["3x #forge:gravel"])
	
	event.remove({"output":"#exdeorum:hammers"})
	event.shaped("exdeorum:stone_hammer",[
		"SS ",
		"SSR",
		"SS "
	], {
		R: "#forge:rods/wooden",
		S: "minecraft:cobblestone"
	})
	
	event.shapeless("2x kubejs:woven_grass_fibre",["3x kubejs:grass_fibre"])
	event.smelting("minecraft:string", "kubejs:woven_grass_fibre")
	event.campfireCooking("minecraft:string", "kubejs:woven_grass_fibre")
	event.smoking("minecraft:string", "kubejs:woven_grass_fibre")
	event.smelting("farmersdelight:straw", "kubejs:grass_fibre")
	event.campfireCooking("farmersdelight:straw", "kubejs:grass_fibre")
	event.smoking("farmersdelight:straw", "kubejs:grass_fibre")
	
	event.remove({"output":"framedblocks:framed_cube"})
	event.replaceInput({"input":"framedblocks:framed_wrench"},"framedblocks:framed_wrench", "#forge:tools/wrenches")
	event.remove({"output":"framedblocks:framed_wrench"})
	event.replaceInput({"input":"framedblocks:framed_hammer"},"framedblocks:framed_hammer", "#forge:tools/soft_mallets")
	
	event.smelting("gtceu:heated_iron_ingot", "#forge:ingots/iron")
	event.blasting("gtceu:heated_iron_ingot", "#forge:ingots/iron")
	
	event.shaped("gtceu:wrought_iron_ingot",[
		"  ",
		"SH"
	], {
		H: "#forge:ingots/heated_iron",
		S: "#forge:tools/hammers"
	})
	event.shaped("gtceu:wrought_iron_plate",[
		" S ",
		" H ",
		" H "
	], {
		H: "#forge:ingots/heated_iron",
		S: "#forge:tools/hammers"
	})
	event.shaped("gtceu:wrought_iron_rod",[
		"FS",
		" H"
	], {
		H: "#forge:ingots/heated_iron",
		S: "#forge:tools/hammers",
		F: "#forge:tools/files"
	})
	event.shaped("minecraft:iron_ingot",[
		"H ",
		"W "
	], {
		H: "#forge:ingots/heated_iron",
		W: "#forge:buckets/water"
	})
	
	event.shapeless("minecraft:clay_ball",["#forge:buckets/water", "2x #forge:dusts/clay"])
	
	event.remove({"output":"exdeorum:flint_mesh"})
	event.shaped("exdeorum:flint_mesh",[
		"SDS",
		"DSD",
		"SDS"
	], {
		S: "#forge:string",
		D: "#forge:dusts/flint"
	})
	event.remove({"output":"exdeorum:iron_mesh"})
	event.shaped("exdeorum:iron_mesh",[
		"WWW",
		"W W",
		"WWW"
	], {
		W: "#forge:fine_wires/iron"
	})
	event.remove({"mod":"exmachinis"})
	event.remove({"output":"exdeorum:mechanical_sieve"})
	event.remove({"output":"exdeorum:mechanical_hammer"})
	
	event.remove({"id":"create:crafting/materials/brass_ingot_from_decompacting"})
	event.remove({"id":"create:crafting/materials/brass_ingot_from_compacting"})
	event.remove({"id":"create:crafting/materials/brass_nugget_from_decompacting"})
	event.remove({"id":"create:crafting/materials/brass_block_from_compacting"})
	
	event.remove({"id":"create:crafting/materials/zinc_ingot_from_decompacting"})
	event.remove({"id":"create:crafting/materials/zinc_ingot_from_compacting"})
	event.remove({"id":"create:crafting/materials/zinc_nugget_from_decompacting"})
	event.remove({"id":"create:crafting/materials/zinc_block_from_compacting"})
	event.remove({"id":"create:crafting/materials/raw_zinc"})
	event.remove({"id":"create:crafting/materials/raw_zinc_block"})
	
	event.remove({"id":"greate:cutting/integration/create/cutting/runtime_generated/compat/create/tag_runtime_generated/compat/gtceu/rubber_to_rubber_planks"})
	event.remove({"id":"create:crafting/kinetics/fluid_tank"})
	
	event.remove({"output":"create_enchantment_industry:printer"})
	event.shaped("create_enchantment_industry:printer",[
		" T ",
		"MRH",
		" P "
	], {
		T: "create:fluid_tank",
		R: "#forge:plates/rubber",
		P: "gtceu:steel_pipe_casing",
		H: "#forge:tools/hammers",
		M: "#gtceu:tools/crafting_mallets"
	})
	
	
	event.smelting("kubejs:textile", "kubejs:raw_grass_textile")
	event.campfireCooking("kubejs:textile", "kubejs:raw_grass_textile")
	event.smoking("kubejs:textile", "kubejs:raw_grass_textile")
	event.shapeless("kubejs:raw_grass_textile",["4x kubejs:woven_grass_fibre"])
	
	event.remove({"id":"exdeorum:granite"})
	event.remove({"id":"exdeorum:andesite"})
	event.remove({"id":"exdeorum:diorite"})
	event.shaped("cobbled:cobbled_granite",[
		"PP",
		"PP"
	], {
		P: "exdeorum:granite_pebble"
	})
	event.shaped("cobbled:cobbled_andesite",[
		"PP",
		"PP"
	], {
		P: "exdeorum:andesite_pebble"
	})
	event.shaped("cobbled:cobbled_diorite",[
		"PP",
		"PP"
	], {
		P: "exdeorum:diorite_pebble"
	})
	event.shaped("cobbled:cobbled_andesite",[
		"SP",
		"PS"
	], {
		P: "exdeorum:diorite_pebble",
		S: "exdeorum:stone_pebble"
	})
	event.remove({"id":"exdeorum:hammer/gravel"})
	event.custom({
		"type":"exdeorum:hammer","ingredient":{
			"item":"cobbled:cobbled_granite"
		},
		"result":"minecraft:gravel",
		"result_amount":1.0
	})
	event.custom({
		"type":"exdeorum:hammer","ingredient":{
			"item":"cobbled:cobbled_andesite"
		},
		"result":"minecraft:gravel",
		"result_amount":1.0
	})
	event.custom({
		"type":"exdeorum:hammer","ingredient":{
			"item":"cobbled:cobbled_diorite"
		},
		"result":"minecraft:gravel",
		"result_amount":1.0
	})
	event.custom({
		"type":"exdeorum:hammer","ingredient":{
			"item":"minecraft:cobblestone"
		},
		"result":"minecraft:gravel",
		"result_amount":1.0
	})
	event.replaceInput({"input":"create:rose_quartz"}, "create:rose_quartz", "#forge:gems/rose_quartz")
	event.remove({"id":"create:crafting/materials/rose_quartz"})
	
	event.remove({"id":"exdeorum:stone_barrel"})
	event.shaped("gtceu:wrought_iron_plate",[
		"S S",
		"S S",
		"SSS"
	], {
		S: "#forge:plates/stone"
	})
	
	event.remove({"id":"exdeorum:barrel_mixing/end_stone"})
	event.remove({"id":"exdeorum:barrel_mixing/magma_cream"})
})
ServerEvents.tags("item", event => {
	event.add("exdeorum:hammers", "#forge:tools/hammers")
	event.add("exdeorum:compressed_hammers", "#forge:tools/hammers")
	event.add("forge:gems/rose_quartz", "create:rose_quartz")
})

ServerEvents.recipes(event => {
	
	event.remove({"id":"productivebees:wax_block"})
	event.remove({"id":"productivebees:wax_from_wax_block"})
	
	event.replaceOutput({"output": "productivebees:honey_bucket"}, "productivebees:honey_bucket", "create:honey_bucket")
	event.remove({"id": "create:fill_minecraft_bucket_with_productivebees_honey"})
	//event.replaceOutput({"output": Fluid.of("productivebees:honey")}, Fluid.of("productivebees:honey"), Fluid.of("create:honey"))
	
	event.remove({"output":"productivebees:bottler"})
	event.remove({"type":"productivebees:bottler"})
	
	event.recipes.gtceu.macerator("crush_honeycomb")
		.itemInputs(
			"#forge:honeycombs"
		)
		.itemOutputs(
			"gtceu:wax_dust"
		)
		.duration(30)
		.EUt(8)
	event.recipes.gtceu.macerator("crush_honeycomb_block")
		.itemInputs(
			"#forge:storage_blocks/honeycombs"
		)
		.itemOutputs(
			"4x gtceu:wax_dust"
		)
		.duration(30)
		.EUt(8)
	
	event.recipes.gtceu.canner("bottle_honey_bottle")
		.itemInputs(
			"minecraft:glass_bottle"
		)
		.inputFluids(
			Fluid.of("create:honey", 250)
		)
		.itemOutputs(
			"minecraft:honey_bottle"
		)
		.duration(30)
		.EUt(2)
	event.recipes.gtceu.canner("bottle_honey_treat")
		.itemInputs(
			"minecraft:honeycomb"
		)
		.inputFluids(
			Fluid.of("create:honey", 250)
		)
		.itemOutputs(
			"productivebees:honey_treat"
		)
		.duration(30)
		.EUt(32)
	event.recipes.gtceu.canner("bottle_milk_bottle")
		.itemInputs(
			"minecraft:glass_bottle"
		)
		.inputFluids(
			Fluid.of("minecraft:milk", 250)
		)
		.itemOutputs(
			"farmersdelight:milk_bottle"
		)
		.duration(30)
		.EUt(2)
	event.recipes.gtceu.canner("bottle_builder_tea")
		.itemInputs(
			"minecraft:glass_bottle"
		)
		.inputFluids(
			Fluid.of("create:tea", 250)
		)
		.itemOutputs(
			"create:builders_tea"
		)
		.duration(30)
		.EUt(2)
	event.recipes.gtceu.canner("bottle_experience")
		.itemInputs(
			"minecraft:glass_bottle"
		)
		.inputFluids(
			Fluid.of("create_enchantment_industry:experience", 10)
		)
		.itemOutputs(
			"minecraft:experience_bottle"
		)
		.duration(30)
		.EUt(2)
	
	
	event.replaceInput({"output": "#productivebees:canvas_beehives"}, "minecraft:paper", "farmersdelight:canvas")
	event.replaceInput({"output": "#productivebees:canvas_expansion_boxes"}, "minecraft:paper", "farmersdelight:canvas")
	
	event.remove({"output":"productivebees:centrifuge"})
	event.remove({"output":"productivebees:powered_centrifuge"})
	event.recipes.gtceu.assembler("make_bee_centrifuge")
		.itemInputs(
			"7x #forge:plates/steel",
			"gtceu:mv_electric_motor",
			"2x gtceu:manganese_phosphide_single_wire",
			"8x #forge:rounds/iron",
			"minecraft:grindstone"
		)
		.itemOutputs(
			"productivebees:powered_centrifuge"
		)
		.duration(100)
		.EUt(32)
	event.remove({"output":"productivebees:heated_centrifuge"})
	event.recipes.gtceu.assembler("make_heated_centrifuge")
		.itemInputs(
			"productivebees:powered_centrifuge",
			"7x #forge:plates/stainless_steel",
			"gtceu:ev_electric_motor",
			"2x gtceu:mercury_barium_calcium_cuprate_single_wire",
			"greate:titanium_encased_fan",
		)
		.inputFluids(
			Fluid.of("minecraft:lava", 1000)
		)
		.itemOutputs(
			"productivebees:heated_centrifuge"
		)
		.duration(100)
		.EUt(1920)
	
	event.remove({"id": "productivebees:bee_breeding/gems/lapis_bee"})
})


ServerEvents.tags("item", event => {
	event.remove("forge:storage_blocks/wax", "minecraft:honeycomb_block")
	event.remove("forge:ingots/wax", "minecraft:honeycomb")
	event.remove("forge:ingots", "minecraft:honeycomb")
	event.add("forge:ingots/wax", "#forge:wax")
})
ServerEvents.tags("block", event => {
	event.remove("forge:storage_blocks/wax", "minecraft:honeycomb_block")
})

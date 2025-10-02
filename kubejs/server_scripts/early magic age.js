ServerEvents.recipes(event => {
	event.remove({"output":"create_enchantment_industry:disenchanter"})
	event.recipes.gtceu.assembler("make_disenchanter")
		.itemInputs(
			"2x #forge:dusts/echo_shard",
			"2x #forge:double_plates/activated_prismarine",
			"gtceu:uhv_electric_pump"
		)
		.itemOutputs(
			"create_enchantment_industry:disenchanter"
		)
		.addMaterialInfo(true)
		.duration(800)
		.EUt(16000)
	
	event.remove({"id":"create_enchantment_industry:crafting/experience_rotor"})
	event.recipes.gtceu.mixer("convert_xp_sophisticated")
		.notConsumable(
			"create_enchantment_industry:experience_rotor"
		)
		.inputFluids(
			Fluid.of("sophisticatedcore:xp_still", 250)
		)
		.outputFluids(
			Fluid.of("create_enchantment_industry:experience", 10)
		)
		.duration(20)
		.EUt(60)
	event.recipes.gtceu.mixer("convert_xp_cofh")
		.notConsumable(
			"create_enchantment_industry:experience_rotor"
		)
		.inputFluids(
			Fluid.of("cofh_core:experience", 250)
		)
		.outputFluids(
			Fluid.of("create_enchantment_industry:experience", 10)
		)
		.duration(20)
		.EUt(60)
	event.recipes.gtceu.mixer("convert_xp_gregtech")
		.notConsumable(
			"create_enchantment_industry:experience_rotor"
		)
		.inputFluids(
			Fluid.of("gtceu:experience", 144)
		)
		.outputFluids(
			Fluid.of("create_enchantment_industry:experience", 27)
		)
		.duration(20)
		.EUt(60)
	event.recipes.gtceu.mixer("convert_sophisticated_xp")
		.notConsumable(
			"create_enchantment_industry:experience_rotor"
		)
		.outputFluids(
			Fluid.of("sophisticatedcore:xp_still", 250)
		)
		.inputFluids(
			Fluid.of("create_enchantment_industry:experience", 10)
		)
		.duration(20)
		.EUt(60)
		.circuit(3)
	event.recipes.gtceu.mixer("convert_cofh_xp")
		.notConsumable(
			"create_enchantment_industry:experience_rotor"
		)
		.outputFluids(
			Fluid.of("cofh_core:experience", 250)
		)
		.inputFluids(
			Fluid.of("create_enchantment_industry:experience", 10)
		)
		.duration(20)
		.EUt(60)
		.circuit(2)
	event.recipes.gtceu.mixer("convert_gregtech_xp")
		.notConsumable(
			"create_enchantment_industry:experience_rotor"
		)
		.outputFluids(
			Fluid.of("gtceu:experience", 250)
		)
		.inputFluids(
			Fluid.of("create_enchantment_industry:experience", 10)
		)
		.duration(20)
		.EUt(60)
		.circuit(1)
})
ServerEvents.tags("item", event => {
	event.remove("forge:enchanting_fuels", "#forge:gems/lapis")
	event.add("forge:enchanting_fuels", "#forge:dusts/awakened_lapis")
})

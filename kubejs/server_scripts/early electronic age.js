ServerEvents.recipes(event => {
	event.remove({"id":"gtceu:shaped/electronic_circuit_mv"})
	event.recipes.create.sequenced_assembly([
		Item.of("gtceu:good_electronic_circuit").withChance(97.0),
		Item.of("3x gtceu:basic_electronic_circuit").withChance(1.0),
		Item.of("2x gtceu:diode").withChance(1.0),
		Item.of("gtceu:phenolic_printed_circuit_board").withChance(1.0)
	], "gtceu:phenolic_printed_circuit_board", [
		event.recipes.create.filling("gtceu:incomplete_good_electronic_circuit", [Fluid.of("gtceu:tin", 144), "gtceu:incomplete_good_electronic_circuit"]),
		event.recipes.createDeploying("gtceu:incomplete_good_electronic_circuit", ["gtceu:incomplete_good_electronic_circuit", "gtceu:basic_electronic_circuit"]),
		event.recipes.createDeploying("gtceu:incomplete_good_electronic_circuit", ["gtceu:incomplete_good_electronic_circuit", "gtceu:basic_electronic_circuit"]),
		event.recipes.createDeploying("gtceu:incomplete_good_electronic_circuit", ["gtceu:incomplete_good_electronic_circuit", "gtceu:basic_electronic_circuit"]),
		event.recipes.createDeploying("gtceu:incomplete_good_electronic_circuit", ["gtceu:incomplete_good_electronic_circuit", "gtceu:copper_single_wire"]),
		event.recipes.createDeploying("gtceu:incomplete_good_electronic_circuit", ["gtceu:incomplete_good_electronic_circuit", "gtceu:copper_single_wire"]),
		event.recipes.createDeploying("gtceu:incomplete_good_electronic_circuit", ["gtceu:incomplete_good_electronic_circuit", "gtceu:diode"]),
		event.recipes.createDeploying("gtceu:incomplete_good_electronic_circuit", ["gtceu:incomplete_good_electronic_circuit", "gtceu:diode"]),
		event.recipes.create.filling("gtceu:incomplete_good_electronic_circuit", [Fluid.of("gtceu:glue", 100), "gtceu:incomplete_good_electronic_circuit"]),
		event.recipes.createDeploying("gtceu:incomplete_good_electronic_circuit", ["gtceu:incomplete_good_electronic_circuit", "#forge:plates/steel"]),
		event.recipes.greate.pressing("gtceu:incomplete_good_electronic_circuit", "gtceu:incomplete_good_electronic_circuit").recipeTier(1)
	]).transitionalItem("gtceu:incomplete_good_electronic_circuit").loops(1)
	
	event.remove({"output":"minecraft:flint_and_steel"})
	event.replaceInput({"id":"gtceu:shaped/charcoal_pile_igniter"}, "minecraft:flint_and_steel", "#forge:tools/igniter")
	event.remove({"id":"gtceu:shaped_fluid_container/paper"})
	event.remove({"id":"farmersdelight:paper_from_tree_bark"})
	event.shaped("2x gtceu:paper_dust",[
		"   ",
		"CCC",
		" M "
	], {
		M: "#forge:tools/mortars",
		C: "farmersdelight:tree_bark"
	})
	event.shaped("2x create:pulp",[
		"   ",
		"CCC",
		" B "
	], {
		B: "minecraft:water_bucket",
		C: "#forge:dusts/paper"
	})
	event.shaped("2x minecraft:paper",[
		" M ",
		"PPP",
		"   "
	], {
		P: "create:pulp",
		M: "#forge:tools/mallets"
	})
	event.remove({"id":"greate:pressing/integration/create/pressing/sugar_cane"})
	event.remove({"id":"greate:pressing/integration/create/pressing/cardboard"})
	event.replaceInput({"id":"gtceu:packer/matchbox"}, "minecraft:paper", "create:cardboard")
	event.replaceOutput({"id":"gtceu:chemical_bath/paper_from_sugar_cane"}, "minecraft:paper", "create:pulp")
	event.replaceOutput({"id":"gtceu:chemical_bath/paper_from_sugar_cane_distilled"}, "minecraft:paper", "create:pulp")
	event.replaceInput({"id":"gtceu:chemical_bath/paper_from_sugar_cane"}, "minecraft:sugar_cane", "#create:pulpifiable")
	event.replaceInput({"id":"gtceu:chemical_bath/paper_from_sugar_cane_distilled"}, "minecraft:sugar_cane", "#create:pulpifiable")
	event.recipes.gtceu.bender("make_paper_from_pulp")
		.itemInputs(
			"create:pulp"
		)
		.itemOutputs(
			"minecraft:paper"
		)
		.duration(20)
		.EUt(16)
		.circuit(1)
	event.recipes.gtceu.bender("make_cardboard_from_pulp")
		.itemInputs(
			"create:pulp"
		)
		.itemOutputs(
			"create:cardboard"
		)
		.duration(20)
		.EUt(16)
		.circuit(2)
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
		.circuit(1)
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
		.circuit(1)
	event.recipes.greate.haunting("exdeorum:witch_water_bucket", "minecraft:water_bucket").recipeTier(0)
	event.recipes.greate.haunting("exdeorum:porcelain_witch_water_bucket", "exdeorum:porcelain_water_bucket").recipeTier(0)
	event.recipes.greate.haunting("framedblocks:framed_soul_torch", "framedblocks:framed_torch").recipeTier(0)
	event.recipes.greate.haunting("minecraft:netherrack", "minecraft:magma_block").recipeTier(1)
	
	event.recipes.greate.haunting("gtceu:purple_drink", "create:builders_tea").recipeTier(0)
	
	event.remove({"id":"greate:haunting/integration/create/haunting/lapis_recycling"})
})
ServerEvents.tags("item", event => {
	event.add("create:pulpifiable", "farmersdelight:tree_bark")
	event.add("create:pulpifiable", "kubejs:grass_fibre")
})

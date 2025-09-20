ServerEvents.recipes(event => {
	event.recipes.gtceu.chemical_reactor("make_phosgene")
		.notConsumable(
			"minecraft:charcoal"
		)
		.inputFluids(
			Fluid.of("gtceu:carbon_monoxide", 1000),
			Fluid.of("gtceu:chlorine", 2000)
		)
		.outputFluids(
			Fluid.of("gtceu:phosgene", 1000)
		)
		.duration(1000)
		.EUt(16)
	event.recipes.gtceu.chemical_reactor("make_anilene")
		.inputFluids(
			Fluid.of("gtceu:nitrobenzene", 1000),
			Fluid.of("gtceu:hydrogen", 3000)
		)
		.outputFluids(
			Fluid.of("gtceu:anilene", 1000),
			Fluid.of("minecraft:water", 2000)
		)
		.duration(200)
		.EUt(16)
	
	event.recipes.gtceu.chemical_reactor("phosgenate_anilene")
		.inputFluids(
			Fluid.of("gtceu:anilene", 1000),
			Fluid.of("gtceu:phosgene", 1000)
		)
		.outputFluids(
			Fluid.of("gtceu:phenyl_isocyanate", 1000),
			Fluid.of("gtceu:hydrochloric_acid", 2000)
		)
		.duration(200)
		.EUt(30)
	
	event.recipes.gtceu.chemical_reactor("make_diethyl_carbonate")
		.inputFluids(
			Fluid.of("gtceu:phosgene", 1000),
			Fluid.of("gtceu:ethanol", 2000)
		)
		.outputFluids(
			Fluid.of("gtceu:diethyl_carbonate", 1000),
			Fluid.of("gtceu:hydrochloric_acid", 2000)
		)
		.duration(1000)
		.EUt(500000)
	event.recipes.gtceu.chemical_reactor("make_hydrazine_peroxide")
		.inputFluids(
			Fluid.of("gtceu:ammonia", 2000),
			Fluid.of("gtceu:hydrogen_peroxide", 2000)
		)
		.outputFluids(
			Fluid.of("gtceu:hydrazine", 1000),
			Fluid.of("minecraft:water", 2000)
		)
		.duration(1000)
		.EUt(480)
	event.recipes.gtceu.chemical_reactor("make_hydrazine_olin")
		.inputFluids(
			Fluid.of("gtceu:ammonia", 1000),
			Fluid.of("gtceu:monochloramine", 1000)
		)
		.outputFluids(
			Fluid.of("gtceu:hydrazine", 1000),
			Fluid.of("gtceu:hydrochloric_acid", 1000)
		)
		.duration(1000)
		.EUt(480)
	event.recipes.gtceu.chemical_reactor("make_rocket_fuel_hydrazine")
		.inputFluids(
			Fluid.of("gtceu:hydrazine", 3000),
			Fluid.of("gtceu:methanol", 6000),
			Fluid.of("minecraft:water", 1000)
		)
		.outputFluids(
			Fluid.of("gtceu:rocket_fuel", 10000)
		)
		.duration(60)
		.EUt(16)
	event.recipes.gtceu.chemical_reactor("adduct_ptad_benzvalene")
		.itemInputs(
			"#forge:dusts/ptad"
		)
		.inputFluids(
			Fluid.of("gtceu:benzvalene", 1000)
		)
		.itemOutputs(
			"2x gtceu:ptad_benzvalene_dust"
		)
		.duration(100)
		.EUt(500000)
	event.recipes.gtceu.chemical_reactor("ptad_prismate")
		.itemInputs(
			"2x #forge:dusts/ptad_benzvalene"
		)
		.notConsumable(
			"gtceu:blacklight"
		)
		.itemOutputs(
			"gtceu:prismane_dust"
		)
		.outputFluids(
			Fluid.of("gtceu:schembl5306506", 1000),
			Fluid.of("gtceu:nitrogen", 1000)
		)
		.duration(100)
		.EUt(500000)
	event.recipes.gtceu.chemical_reactor("recycle_ptad")
		.inputFluids(
			Fluid.of("gtceu:schembl5306506", 1000),
			Fluid.of("gtceu:nitrogen", 1000)
		)
		.itemOutputs(
			"gtceu:ptad_dust"
		)
		.duration(100)
		.EUt(500000)
	event.recipes.gtceu.chemical_reactor("make_benzoihib")
		.inputFluids(
			Fluid.of("gtceu:benzene", 1000)
		)
		.notConsumable(
			"gtceu:blacklight"
		)
		.outputFluids(
			Fluid.of("gtceu:benzvalene", 1000)
		)
		.duration(500)
		.EUt(480)
	event.recipes.gtceu.chemical_reactor("make_ptad")
		.inputFluids(
			Fluid.of("gtceu:hydrazine", 1000),
			Fluid.of("gtceu:diethyl_carbonate", 1000),
			Fluid.of("gtceu:phenyl_isocyanate", 1000)
		)
		.outputFluids(
			Fluid.of("gtceu:ethanol", 1000)
		)
		.itemOutputs(
			"gtceu:ptad_dust"
		)
		.duration(200)
		.EUt(500000)
	event.remove({"input":"#forge:gems/prismarine", "output":"#forge:gems/nether_quartz"})
	event.remove({"id":"productivebees:bee_fishing/prismarine_bee"})
})

StartupEvents.registry("item", register => {
	const Universal = [
		["ulv","#bdb2a2"],
		["lv","#ffa663"],
		["mv","#54fcfc"],
		["hv","#fcfcfc"],
		["ev","#a800a8"],
		["iv","#5454fc"],
		["luv","#a854a8"],
		["zpm","#fcabfc"],
		["uv","#a80000"],
		["uhv","#a800a8"],
		["uev","#0000fc"],
		["uiv","#fcab54"],
		["uxv","#54fc54"],
		["opv","#ff2fff"]
	]
	register.create("kubejs:grass_fibre")
		.texture("kubejs:item/grass_fibre")
		.displayName("Grass Fibre")
	register.create("kubejs:woven_grass_fibre")
		.texture("kubejs:item/woven_grass_fibre")
		.displayName("Woven Grass Fibre")
	register.create("kubejs:raw_grass_textile")
		.texture("kubejs:item/raw_grass_textile")
		.displayName("Raw Grass Textile")
	register.create("kubejs:textile")
		.texture("kubejs:item/textile")
		.displayName("Textile Scrap")
		.tag("forge:leather")
		
	/*register.create("kubejs:steel_can")
		.texture("kubejs:item/steel_can")
		.displayName("Steel Can")
	register.create("kubejs:canned_beetroot")
		.texture("kubejs:item/canned_beetroot")
		.displayName("Canned Beetroot")
		.food(food => {
			food
			.hunger(4)
				.saturation(2)
				.fastToEat()
			})
		register.create("kubejs:canned_flesh")
		.texture("kubejs:item/canned_flesh")
		.displayName("Canned Flesh")
		.food(food => {
			food
			.hunger(10)
				.saturation(0.5)
				.fastToEat()
			})*/
		register.create("kubejs:onion_ring")
		.texture("kubejs:item/onion_ring")
		.displayName("Raw Onion Ring")
		.food(food => {
			food
			.hunger(2)
				.saturation(0.5)
				.fastToEat()
			})
		register.create("kubejs:cooked_onion_ring")
		.texture("kubejs:item/cooked_onion_ring")
		.displayName("Cooked Onion Ring")
		.food(food => {
			food
			.hunger(5)
				.saturation(0.7)
				.fastToEat()
			})
		register.create("cooked_beetroot:cooked_beetroot")
		.texture("kubejs:item/cooked_beetroot")
		.displayName("Cooked Beetroot")
		.food(food => {
			food
			.hunger(5)
				.saturation(0.7)
				.fastToEat()
			})
		register.create("kubejs:coffee_bean")
		.texture("kubejs:item/coffee_bean")
		.displayName("Raw Coffee Bean")
		register.create("kubejs:cooked_coffee_bean")
		.texture("kubejs:item/cooked_coffee_bean")
		.displayName("Roasted Coffee Bean")
		register.create("kubejs:coffee_grounds")
		.texture("kubejs:item/coffee_grounds")
		.displayName("Coffee Grounds")
	
	register.create("gtceu:incomplete_basic_electronic_circuit", "create:sequenced_assembly")
		.texture("gtceu:item/circuits/incomplete_basic_electronic")
		.displayName("Incomplete Basic Electronic Circuit")
	register.create("gtceu:incomplete_good_electronic_circuit", "create:sequenced_assembly")
		.texture("gtceu:item/circuits/incomplete_good_electronic")
		.displayName("Incomplete Good Electronic Circuit")
	
	register.create("gtceu:heated_iron_ingot")
		.texture("kubejs:item/heated_iron_ingot")
		.displayName("Heated Iron Ingot")
		.tag("forge:ingots")
		.tag("forge:ingots/heated_iron")
	
	register.create("constructionwand:construction_core")
		.texture("kubejs:item/construction_core")
		.displayName("Construction Core")
	
	register.create("gtceu:experience_circuit_board")
		.texture("gtceu:item/xp_circuit_board")
		.displayName("Experience Circuit Board")
		.tooltip("§7Shiny, conducive to experience.")
	register.create("gtceu:sculk_processor")
		.texture("gtceu:item/circuits/sculk/processor")
		.displayName("Sculk Processor")
		.tooltip("§7Integrating enchanting with technology.\n\r§rZPM Tier Circuit")
		.tag("gtceu:circuits")
		.tag(`gtceu:circuits/zpm`);
	register.create("gtceu:sculk_processor_assembly")
		.texture("gtceu:item/circuits/sculk/assembly")
		.displayName("Sculk Processor Assembly")
		.tooltip("§7Integrating enchanting with technology.\n\r§rUV Tier Circuit")
		.tag("gtceu:circuits")
		.tag(`gtceu:circuits/uv`);
	register.create("gtceu:sculk_processor_computer")
		.texture("gtceu:item/circuits/sculk/computer")
		.displayName("Sculk Processor Supercomputer")
		.tooltip("§7Integrating enchanting with technology.\n\r§rUHV Tier Circuit")
		.tag("gtceu:circuits")
		.tag(`gtceu:circuits/uhv`);
	register.create("gtceu:sculk_processor_mainframe")
		.texture("gtceu:item/circuits/sculk/mainframe")
		.displayName("Sculk Processor Mainframe")
		.tooltip("§7Integrating enchanting with technology.\n\r§rUEV Tier Circuit")
		.tag("gtceu:circuits")
		.tag(`gtceu:circuits/uev`);
	
	for (const [name, tint] of Universal){
		register.create(`universal_${name}_circuit`).textureJson({layer0:`gtceu:item/circuits/universal/base`,layer1:`gtceu:item/circuits/universal/overlay`}).color(1, tint)
		.displayName(`Universal ${name.toUpperCase()} Circuit`)
		.tooltip(`§e§lYou feel the power of ${name.toUpperCase()}!`)
		.tag("gtceu:circuits")
		.tag(`gtceu:circuits/${name}`);
	}
})
ItemEvents.modification(event => {
	event.modify('minecraft:phantom_membrane', item => {
		item.burnTime = 16000
	})
})

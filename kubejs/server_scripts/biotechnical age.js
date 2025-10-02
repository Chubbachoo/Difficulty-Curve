ServerEvents.recipes(event => {
	event.remove({"output":"biomancy:primordial_core"})
	event.recipes.gtceu.mixer("tiny_nutrient_paste_dust_liquify")
		.itemInputs(
			"#forge:tiny_dusts/nutrient_paste"
		)
		.outputFluids(
			Fluid.of("biofactory:nutrients_fluid", 16)
		)
		.duration(80)
		.EUt(30720)
	event.recipes.gtceu.mixer("small_nutrient_paste_dust_liquify")
		.itemInputs(
			"#forge:small_dusts/nutrient_paste"
		)
		.outputFluids(
			Fluid.of("biofactory:nutrients_fluid", 36)
		)
		.duration(320)
		.EUt(30720)
	event.recipes.gtceu.mixer("nutrient_paste_dust_liquify")
		.itemInputs(
			"#forge:dusts/nutrient_paste"
		)
		.outputFluids(
			Fluid.of("biofactory:nutrients_fluid", 144)
		)
		.duration(720)
		.EUt(30720)
	event.recipes.gtceu.mixer("nutrient_paste_ingot_liquify")
		.itemInputs(
			"#forge:ingots/nutrient_paste"
		)
		.outputFluids(
			Fluid.of("biofactory:nutrients_fluid", 144)
		)
		.duration(720)
		.EUt(30720)
	
	
	event.remove({"id":"biomancy:crafting/nutrient_bar"})
	
	
	event.remove({"id":"biomancy:blasting/glass_pane"})
	event.remove({"id":"biomancy:crafting/clay_ball_from_stone_powder"})
	event.remove({"id":"biomancy:crafting/diorite_from_stone_powder"})
	event.remove({"id":"biomancy:crafting/dirt_from_stone_powder"})
	event.remove({"id":"biomancy:crafting/sand_from_stone_powder"})
	
	event.remove({"id":"biomancy:decomposing/gravel"})
	event.custom({
		"type": "biomancy:decomposing",
		"ingredient": {
			"item": "minecraft:gravel"
		},
		"nutrientsCost": 1,
		"processingTime": 30,
		"results": [
			{
				"countRange": {
					"type": "uniform",
					"max": 1,
					"min": 1
				},
				"item": "gtceu:stone_dust"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 6,
					"min": 1
				},
				"item": "minecraft:flint"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 2,
					"min": 0
				},
				"item": "exdeorum:diorite_pebble"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 2,
					"min": 0
				},
				"item": "exdeorum:granite_pebble"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 2,
					"min": 0
				},
				"item": "exdeorum:andesite_pebble"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 2,
					"min": 0
				},
				"item": "exdeorum:deepslate_pebble"
			}
		]
	})
	event.remove({"id":"biomancy:decomposing/sand"})
	event.custom({
		"type": "biomancy:decomposing",
		"ingredient": {
			"item": "minecraft:sand"
		},
		"nutrientsCost": 1,
		"processingTime": 30,
		"results": [
			{
				"countRange": {
					"type": "uniform",
					"max": 1,
					"min": 1
				},
				"item": "gtceu:quartz_sand_dust"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 1,
					"min": 0
				},
				"item": "gtceu:small_salt_dust"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 1,
					"min": 0
				},
				"item": "gtceu:tiny_rock_salt_dust"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 1,
					"min": 0
				},
				"item": "gtceu:small_brick_dust"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 2,
					"min": 0
				},
				"item": "biomancy:organic_matter"
			}
		]
	})
	event.remove({"id":"biomancy:decomposing/clay"})
	event.custom({
		"type": "biomancy:decomposing",
		"ingredient": {
			"item": "minecraft:clay"
		},
		"nutrientsCost": 1,
		"processingTime": 30,
		"results": [
			{
				"countRange": {
					"type": "uniform",
					"max": 4,
					"min": 3
				},
				"item": "gtceu:clay_dust"
			}
		]
	})
	event.remove({"id":"biomancy:decomposing/rooted_dirt"})
	event.custom({
		"type": "biomancy:decomposing",
		"ingredient": {
			"item": "minecraft:rooted_dirt"
		},
		"nutrientsCost": 1,
		"processingTime": 30,
		"results": [
			{
				"countRange": {
					"type": "uniform",
					"max": 2,
					"min": 2
				},
				"item": "biomancy:organic_matter"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 1,
					"min": 0
				},
				"item": "gtceu:quartz_sand_dust"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 1,
					"min": 0
				},
				"item": "gtceu:small_clay_dust"
			}
		]
	})
	event.remove({"id":"biomancy:decomposing/shulker_shell"})
	event.custom({
		"type": "biomancy:decomposing",
		"ingredient": {
			"item": "minecraft:shulker_shell"
		},
		"nutrientsCost": 2,
		"processingTime": 100,
		"results": [
			{
				"countRange": {
					"type": "uniform",
					"max": 2,
					"min": 1
				},
				"item": "biomancy:stone_powder"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 7,
					"min": 4
				},
				"item": "biomancy:tough_fibers"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 1,
					"min": 0
				},
				"item": "gtceu:tiny_endstone_dust"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 1,
					"min": 0
				},
				"item": "gtceu:rutile_dust"
			}
		]
	})
	event.remove({"id":"biomancy:decomposing/glowstone"})
	event.custom({
		"type": "biomancy:decomposing",
		"ingredient": {
			"item": "minecraft:glowstone"
		},
		"nutrientsCost": 2,
		"processingTime": 50,
		"results": [
			{
				"countRange": {
					"type": "uniform",
					"max": 4,
					"min": 1
				},
				"item": "biomancy:exotic_dust"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 4,
					"min": 3
				},
				"item": "minecraft:redstone"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 4,
					"min": 3
				},
				"item": "gtceu:gold_dust"
			}
		]
	})
	event.remove({"id":"biomancy:decomposing/clay_ball"})
	event.custom({
		"type": "biomancy:decomposing",
		"ingredient": {
			"item": "minecraft:clay_ball"
		},
		"nutrientsCost": 1,
		"processingTime": 30,
		"results": [
			{
				"countRange": {
					"type": "uniform",
					"max": 1,
					"min": 1
				},
				"item": "gtceu:clay_dust"
			}
		]
	})
	event.remove({"id":"biomancy:decomposing/raw_copper"})
	event.remove({"id":"biomancy:decomposing/nutrient_paste"})
	event.custom({
		"type": "biomancy:decomposing",
		"ingredient": {
			"tag": "forge:dusts/nutrient_paste"
		},
		"nutrientsCost": 1,
		"processingTime": 30,
		"results": [
			{
				"countRange": {
					"type": "uniform",
					"max": 5,
					"min": 5
				},
				"item": "biomancy:nutrients"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 4,
					"min": 4
				},
				"item": "biomancy:organic_matter"
			}
		]
	})
	event.remove({"id":"biomancy:decomposing/amethyst_shard"})
	event.remove({"id":"biomancy:decomposing/golden_apple"})
	event.custom({
		"type": "biomancy:decomposing",
		"ingredient": {
			"item": "minecraft:golden_apple"
		},
		"nutrientsCost": 2,
		"processingTime": 100,
		"results": [
			{
				"countRange": {
					"type": "uniform",
					"max": 8,
					"min": 5
				},
				"item": "gtceu:gold_dust"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 6,
					"min": 4
				},
				"item": "biomancy:organic_matter"
			}
		]
	})
	event.remove({"id":"biomancy:decomposing/skeleton_skull"})
	event.custom({
		"type": "biomancy:decomposing",
		"ingredient": {
			"item": "minecraft:skeleton_skull"
		},
		"nutrientsCost": 1,
		"processingTime": 100,
		"results": [
			{
				"countRange": {
					"type": "uniform",
					"max": 46,
					"min": 22
				},
				"item": "biomancy:bone_fragments"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 23,
					"min": 8
				},
				"item": "minecraft:bone_meal"
			}
		]
	})
	event.remove({"id":"biomancy:decomposing/bone_meal"})
	event.remove({"id":"biomancy:decomposing/gold_nugget"})
	event.remove({"id":"biomancy:decomposing/magma_cream"})
	event.remove({"id":"biomancy:decomposing/dragon_head"})
	event.custom({
		"type": "biomancy:decomposing",
		"ingredient": {
			"item": "minecraft:dragon_head"
		},
		"nutrientsCost": 2,
		"processingTime": 1600,
		"results": [
			{
				"countRange": {
					"type": "uniform",
					"max": 58,
					"min": 42
				},
				"item": "biomancy:flesh_bits"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 30,
					"min": 20
				},
				"item": "biomancy:exotic_dust"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 30,
					"min": 20
				},
				"item": "biomancy:tough_fibers"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 3,
					"min": 0
				},
				"item": "gtceu:endstone_dust"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 48,
					"min": 32
				},
				"item": "biomancy:bone_fragments"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 32,
					"min": 0
				},
				"item": "gtceu:tiny_naquadah_dust"
			}
		]
	})
	event.remove({"id":"biomancy:decomposing/heart_of_the_sea"})
	event.custom({
		"type": "biomancy:decomposing",
		"ingredient": {
			"item": "minecraft:heart_of_the_sea"
		},
		"nutrientsCost": 1,
		"processingTime": 100,
		"results": [
			{
				"countRange": {
					"type": "uniform",
					"max": 12,
					"min": 8
				},
				"item": "gtceu:lapis_dust"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 12,
					"min": 8
				},
				"item": "minecraft:prismarine_shard"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 20,
					"min": 8
				},
				"item": "biomancy:exotic_dust"
			}
		]
	})
	event.remove({"id":"biomancy:decomposing/prismarine_crystals"})
	event.remove({"id":"biomancy:decomposing/iron_ingot"})
	event.remove({"id":"biomancy:decomposing/forge_leather"})
	event.custom({
		"type": "biomancy:decomposing",
		"ingredient": {
			"item": "minecraft:leather"
		},
		"nutrientsCost": 1,
		"processingTime": 120,
		"results": [
			{
				"countRange": {
					"type": "uniform",
					"max": 4,
					"min": 1
				},
				"item": "biomancy:tough_fibers"
			}
		]
	})
	event.remove({"id":"biomancy:decomposing/wither_skeleton_skull"})
	event.custom({
		"type": "biomancy:decomposing",
		"ingredient": {
			"item": "minecraft:wither_skeleton_skull"
		},
		"nutrientsCost": 1,
		"processingTime": 120,
		"results": [
			{
				"countRange": {
					"type": "uniform",
					"max": 46,
					"min": 22
				},
				"item": "biomancy:bone_fragments"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 23,
					"min": 8
				},
				"item": "minecraft:bone_meal"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 4,
					"min": 1
				},
				"item": "gtceu:dark_ash_dust"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 1,
					"min": 8
				},
				"item": "biomancy:withering_ooze"
			}
		]
	})
	event.remove({"id":"biomancy:decomposing/blaze_rod"})
	event.remove({"id":"biomancy:decomposing/melon_slice"})
	event.custom({
		"type": "biomancy:decomposing",
		"ingredient": {
			"item": "minecraft:melon_slice"
		},
		"nutrientsCost": 1,
		"processingTime": 60,
		"results": [
			{
				"countRange": {
					"type": "uniform",
					"max": 4,
					"min": 2
				},
				"item": "biomancy:organic_matter"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 1,
					"min": 0
				},
				"item": "biomancy:regenerative_fluid"
			}
		]
	})
	event.remove({"id":"biomancy:decomposing/netherite_ingot"})
	event.remove({"id":"biomancy:decomposing/netherite_scrap"})
	event.remove({"id":"biomancy:decomposing/scute"})
	event.custom({
		"type": "biomancy:decomposing",
		"ingredient": {
			"item": "minecraft:scute"
		},
		"nutrientsCost": 1,
		"processingTime": 60,
		"results": [
			{
				"countRange": {
					"type": "uniform",
					"max": 6,
					"min": 1
				},
				"item": "biomancy:bone_fragments"
			}
		]
	})
	event.remove({"id":"biomancy:decomposing/sea_pickle"})
	event.custom({
		"type": "biomancy:decomposing",
		"ingredient": {
			"item": "minecraft:sea_pickle"
		},
		"nutrientsCost": 1,
		"processingTime": 60,
		"results": [
			{
				"countRange": {
					"type": "uniform",
					"max": 2,
					"min": 1
				},
				"item": "biomancy:bio_lumens"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 2,
					"min": 1
				},
				"item": "biomancy:organic_matter"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 6,
					"min": 3
				},
				"item": "gtceu:tiny_prismarine_dust"
			}
		]
	})
	event.remove({"id":"biomancy:decomposing/iron_nugget"})
	event.remove({"id":"biomancy:decomposing/creeper_head"})
	event.custom({
		"type": "biomancy:decomposing",
		"ingredient": {
			"item": "minecraft:creeper_head"
		},
		"nutrientsCost": 1,
		"processingTime": 60,
		"results": [
			{
				"countRange": {
					"type": "uniform",
					"max": 22,
					"min": 16
				},
				"item": "biomancy:flesh_bits"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 6,
					"min": 5
				},
				"item": "biomancy:elastic_fibers"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 1,
					"min": 1
				},
				"item": "minecraft:skeleton_skull"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 4,
					"min": 1
				},
				"item": "gtceu:gelled_toluene"
			}
		]
	})
	event.remove({"id":"biomancy:decomposing/prismarine_shard"})
	event.remove({"id":"biomancy:decomposing/ghast_tear"})
	event.custom({
		"type": "biomancy:decomposing",
		"ingredient": {
			"item": "minecraft:ghast_tear"
		},
		"nutrientsCost": 1,
		"processingTime": 60,
		"results": [
			{
				"countRange": {
					"type": "uniform",
					"max": 2,
					"min": 1
				},
				"item": "biomancy:exotic_dust"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 2,
					"min": 1
				},
				"item": "gtceu:salt_dust"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 6,
					"min": 4
				},
				"item": "biomancy:hormone_secretion"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 10,
					"min": 5
				},
				"item": "biomancy:regenerative_fluid"
			}
		]
	})
	event.remove({"id":"biomancy:decomposing/redstone"})
	event.remove({"id":"biomancy:decomposing/blaze_powder"})
	event.remove({"id":"biomancy:decomposing/mob_marrow"})
	event.custom({
		"type": "biomancy:decomposing",
		"ingredient": {
			"item": "biomancy:mob_marrow"
		},
		"nutrientsCost": 1,
		"processingTime": 60,
		"results": [
			{
				"countRange": {
					"type": "uniform",
					"max": 4,
					"min": 2
				},
				"item": "biomancy:bone_fragments"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 4,
					"min": 1
				},
				"item": "biomancy:hormone_secretion"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 2,
					"min": 0
				},
				"item": "gtceu:small_tricalcium_phosphate_dust"
			}
		]
	})
	event.remove({"id":"biomancy:decomposing/emerald"})
	event.remove({"id":"biomancy:decomposing/tube_coral"})
	event.remove({"id":"biomancy:decomposing/brain_coral"})
	event.remove({"id":"biomancy:decomposing/bubble_coral"})
	event.remove({"id":"biomancy:decomposing/fire_coral"})
	event.remove({"id":"biomancy:decomposing/horn_coral"})
	event.remove({"id":"biomancy:decomposing/tube_coral_fan"})
	event.remove({"id":"biomancy:decomposing/brain_coral_fan"})
	event.remove({"id":"biomancy:decomposing/bubble_coral_fan"})
	event.remove({"id":"biomancy:decomposing/fire_coral_fan"})
	event.remove({"id":"biomancy:decomposing/horn_coral_fan"})
	event.remove({"id":"biomancy:decomposing/mob_fang"})
	event.custom({
		"type": "biomancy:decomposing",
		"ingredient": {
			"item": "biomancy:mob_fang"
		},
		"nutrientsCost": 1,
		"processingTime": 60,
		"results": [
			{
				"countRange": {
					"type": "uniform",
					"max": 6,
					"min": 4
				},
				"item": "biomancy:bone_fragments"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 4,
					"min": 1
				},
				"item": "gtceu:small_bone_dust"
			}
		]
	})
	event.remove({"id":"biomancy:decomposing/nautilus_shell"})
	event.custom({
		"type": "biomancy:decomposing",
		"ingredient": {
			"item": "minecraft:nautilus_shell"
		},
		"nutrientsCost": 1,
		"processingTime": 60,
		"results": [
			{
				"countRange": {
					"type": "uniform",
					"max": 6,
					"min": 4
				},
				"item": "biomancy:stone_powder"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 4,
					"min": 1
				},
				"item": "gtceu:small_prismarine_dust"
			}
		]
	})
	event.remove({"id":"biomancy:decomposing/oxeye_daisy"})
	event.remove({"id":"biomancy:decomposing/pointed_dripstone"})
	event.custom({
		"type": "biomancy:decomposing",
		"ingredient": {
			"item": "minecraft:pointed_dripstone"
		},
		"nutrientsCost": 1,
		"processingTime": 60,
		"results": [
			{
				"countRange": {
					"type": "uniform",
					"max": 4,
					"min": 0
				},
				"item": "gtceu:small_clay_dust"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 2,
					"min": 0
				},
				"item": "gtceu:tiny_copper_dust"
			}
		]
	})
	event.remove({"id":"biomancy:decomposing/totem_of_undying"})
	event.remove({"id":"biomancy:decomposing/podzol"})
	event.custom({
		"type": "biomancy:decomposing",
		"ingredient": {
			"item": "minecraft:podzol"
		},
		"nutrientsCost": 1,
		"processingTime": 30,
		"results": [
			{
				"countRange": {
					"type": "uniform",
					"max": 2,
					"min": 2
				},
				"item": "biomancy:organic_matter"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 1,
					"min": 0
				},
				"item": "gtceu:quartz_sand_dust"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 1,
					"min": 0
				},
				"item": "gtceu:small_clay_dust"
			}
		]
	})
	event.remove({"id":"biomancy:decomposing/grass_block"})
	event.custom({
		"type": "biomancy:decomposing",
		"ingredient": {
			"item": "minecraft:grass_block"
		},
		"nutrientsCost": 1,
		"processingTime": 30,
		"results": [
			{
				"countRange": {
					"type": "uniform",
					"max": 2,
					"min": 2
				},
				"item": "biomancy:organic_matter"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 1,
					"min": 0
				},
				"item": "gtceu:quartz_sand_dust"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 1,
					"min": 0
				},
				"item": "gtceu:small_clay_dust"
			}
		]
	})
	event.remove({"id":"biomancy:decomposing/enchanted_golden_apple"})
	event.custom({
		"type": "biomancy:decomposing",
		"ingredient": {
			"item": "minecraft:enchanted_golden_apple"
		},
		"nutrientsCost": 12,
		"processingTime": 3000,
		"results": [
			{
				"countRange": {
					"type": "uniform",
					"max": 20,
					"min": 12
				},
				"item": "biomancy:regenerative_fluid"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 12,
					"min": 6
				},
				"item": "biomancy:exotic_dust"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 72,
					"min": 26
				},
				"item": "gtceu:gold_dust"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 6,
					"min": 0
				},
				"item": "biomancy:organic_matter"
			}
		]
	})
	event.remove({"id":"biomancy:decomposing/ender_eye"})
	event.remove({"id":"biomancy:decomposing/ender_pearl"})
	event.remove({"id":"biomancy:decomposing/chorus_fruit"})
	event.custom({
		"type": "biomancy:decomposing",
		"ingredient": {
			"item": "minecraft:chorus_fruit"
		},
		"nutrientsCost": 1,
		"processingTime": 60,
		"results": [
			{
				"countRange": {
					"type": "uniform",
					"max": 1,
					"min": 0
				},
				"item": "biomancy:bile"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 2,
					"min": 1
				},
				"item": "biomancy:exotic_dust"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 2,
					"min": 1
				},
				"item": "gtceu:rutile_dust"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 1,
					"min": 1
				},
				"item": "biomancy:organic_matter"
			}
		]
	})
	event.remove({"id":"biomancy:decomposing/forge_feathers"})
	event.custom({
		"type": "biomancy:decomposing",
		"ingredient": {
			"item": "minecraft:feather"
		},
		"nutrientsCost": 1,
		"processingTime": 60,
		"results": [
			{
				"countRange": {
					"type": "uniform",
					"max": 1,
					"min": 0
				},
				"item": "biomancy:tough_fibers"
			}
		]
	})
	event.remove({"id":"biomancy:decomposing/mob_claw"})
	event.custom({
		"type": "biomancy:decomposing",
		"ingredient": {
			"item": "biomancy:mob_claw"
		},
		"nutrientsCost": 1,
		"processingTime": 60,
		"results": [
			{
				"countRange": {
					"type": "uniform",
					"max": 6,
					"min": 4
				},
				"item": "biomancy:tough_fibers"
			}
		]
	})
	event.remove({"id":"biomancy:decomposing/red_sand"})
	event.custom({
		"type": "biomancy:decomposing",
		"ingredient": {
			"item": "minecraft:red_sand"
		},
		"nutrientsCost": 1,
		"processingTime": 60,
		"results": [
			{
				"countRange": {
					"type": "uniform",
					"max": 1,
					"min": 0
				},
				"item": "gtceu:iron_dust"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 1,
					"min": 0
				},
				"item": "gtceu:tiny_diamond_dust"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 1,
					"min": 0
				},
				"item": "gtceu:quartz_sand_dust"
			}
		]
	})
	event.remove({"id":"biomancy:decomposing/dirt"})
	event.custom({
		"type": "biomancy:decomposing",
		"ingredient": {
			"item": "minecraft:dirt"
		},
		"nutrientsCost": 1,
		"processingTime": 30,
		"results": [
			{
				"countRange": {
					"type": "uniform",
					"max": 1,
					"min": 1
				},
				"item": "biomancy:organic_matter"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 1,
					"min": 0
				},
				"item": "gtceu:quartz_sand_dust"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 1,
					"min": 0
				},
				"item": "gtceu:small_clay_dust"
			}
		]
	})
	event.remove({"id":"biomancy:decomposing/nether_star"})
	event.custom({
		"type": "biomancy:decomposing",
		"ingredient": {
			"tag": "forge:dusts/nether_star"
		},
		"nutrientsCost": 4,
		"processingTime": 10000,
		"results": [
			{
				"countRange": {
					"type": "uniform",
					"max": 58,
					"min": 42
				},
				"item": "biomancy:exotic_dust"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 16,
					"min": 8
				},
				"item": "biomancy:regenerative_fluid"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 4,
					"min": 1
				},
				"item": "gtceu:netherite_dust"
			}
		]
	})
	event.remove({"id":"biomancy:decomposing/echo_shard"})
	event.remove({"id":"biomancy:decomposing/raw_iron"})
	event.remove({"id":"biomancy:decomposing/forge_string"})
	event.remove({"id":"biomancy:decomposing/goat_horn"})
	event.remove({"id":"biomancy:decomposing/diamond"})
	event.remove({"id":"biomancy:decomposing/golden_carrot"})
	event.custom({
		"type": "biomancy:decomposing",
		"ingredient": {
			"item": "minecraft:golden_carrot"
		},
		"nutrientsCost": 0,
		"processingTime": 10,
		"results": [
			{
				"countRange": {
					"type": "uniform",
					"max": 8,
					"min": 7
				},
				"item": "gtceu:tiny_gold_dust"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 2,
					"min": 0
				},
				"item": "biomancy:organic_matter"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 2,
					"min": 1
				},
				"item": "biomancy:nutrients"
			}
		]
	})
	event.remove({"id":"biomancy:decomposing/glow_berries"})
	event.custom({
		"type": "biomancy:decomposing",
		"ingredient": {
			"item": "minecraft:glow_berries"
		},
		"nutrientsCost": 1,
		"processingTime": 60,
		"results": [
			{
				"countRange": {
					"type": "uniform",
					"max": 1,
					"min": -1
				},
				"item": "biomancy:organic_matter"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 1,
					"min": 0
				},
				"item": "biomancy:bio_lumens"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 1,
					"min": 0
				},
				"item": "biomancy:volatile_fluid"
			}
		]
	})
	event.remove({"id":"biomancy:decomposing/gold_ingot"})
	event.remove({"id":"biomancy:decomposing/popped_chorus_fruit"})
	event.custom({
		"type": "biomancy:decomposing",
		"ingredient": {
			"item": "minecraft:popped_chorus_fruit"
		},
		"nutrientsCost": 1,
		"processingTime": 60,
		"results": [
			{
				"countRange": {
					"type": "uniform",
					"max": 1,
					"min": 1
				},
				"item": "biomancy:organic_matter"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 2,
					"min": 1
				},
				"item": "biomancy:exotic_dust"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 1,
					"min": 0
				},
				"item": "gtceu:tiny_rutile_dust"
			}
		]
	})
	event.remove({"id":"biomancy:decomposing/coarse_dirt"})
	event.custom({
		"type": "biomancy:decomposing",
		"ingredient": {
			"item": "minecraft:coarse_dirt"
		},
		"nutrientsCost": 1,
		"processingTime": 30,
		"results": [
			{
				"countRange": {
					"type": "uniform",
					"max": 1,
					"min": 0
				},
				"item": "biomancy:organic_matter"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 1,
					"min": 0
				},
				"item": "gtceu:quartz_sand_dust"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 1,
					"min": 0
				},
				"item": "gtceu:small_clay_dust"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 2,
					"min": 1
				},
				"item": "gtceu:small_stone_dust"
			}
		]
	})
	event.remove({"id":"biomancy:decomposing/glowstone_dust"})
	event.custom({
		"type": "biomancy:decomposing",
		"ingredient": {
			"item": "minecraft:glowstone_dust"
		},
		"nutrientsCost": 2,
		"processingTime": 50,
		"results": [
			{
				"countRange": {
					"type": "uniform",
					"max": 1,
					"min": 0
				},
				"item": "biomancy:exotic_dust"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 4,
					"min": 3
				},
				"item": "gtceu:small_redstone_dust"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 4,
					"min": 3
				},
				"item": "gtceu:small_gold_dust"
			}
		]
	})
	event.remove({"id":"biomancy:decomposing/raw_gold"})
	event.remove({"id":"biomancy:decomposing/glistering_melon_slice"})
	event.custom({
		"type": "biomancy:decomposing",
		"ingredient": {
			"item": "minecraft:glistering_melon_slice"
		},
		"nutrientsCost": 1,
		"processingTime": 60,
		"results": [
			{
				"countRange": {
					"type": "uniform",
					"max": 4,
					"min": 2
				},
				"item": "biomancy:organic_matter"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 7,
					"min": 5
				},
				"item": "biomancy:regenerative_fluid"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 6,
					"min": 5
				},
				"item": "gtceu:tiny_gold_dust"
			}
		]
	})
	event.remove({"id":"biomancy:decomposing/copper_ingot"})
	event.remove({"id":"biomancy:decomposing/flint"})
	event.remove({"id":"biomancy:decomposing/quartz"})
	event.remove({"id":"biomancy:decomposing/bone"})
	event.custom({
		"type": "biomancy:decomposing",
		"ingredient": {
			"item": "minecraft:bone"
		},
		"nutrientsCost": 1,
		"processingTime": 60,
		"results": [
			{
				"countRange": {
					"type": "uniform",
					"max": 5,
					"min": 2
				},
				"item": "biomancy:bone_fragments"
			}
		]
	})
	event.remove({"id":"biomancy:decomposing/poisonous_potato"})
	event.remove({"id":"biomancy:decomposing/chorus_flower"})
	event.custom({
		"type": "biomancy:decomposing",
		"ingredient": {
			"item": "minecraft:chorus_flower"
		},
		"nutrientsCost": 1,
		"processingTime": 60,
		"results": [
			{
				"countRange": {
					"type": "uniform",
					"max": 4,
					"min": 2
				},
				"item": "biomancy:exotic_dust"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 4,
					"min": 2
				},
				"item": "gtceu:rutile_dust"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 5,
					"min": 2
				},
				"item": "biomancy:organic_matter"
			}
		]
	})
	event.remove({"id":"biomancy:decomposing/lapis_lazuli"})
	event.remove({"id":"biomancy:decomposing/turtle_helmet"})
	event.custom({
		"type": "biomancy:decomposing",
		"ingredient": {
			"item": "minecraft:turtle_helmet"
		},
		"nutrientsCost": 1,
		"processingTime": 60,
		"results": [
			{
				"countRange": {
					"type": "uniform",
					"max": 30,
					"min": 5
				},
				"item": "biomancy:bone_fragments"
			}
		]
	})
	event.remove({"id":"biomancy:decomposing/phantom_membrane"})
	event.custom({
		"type": "biomancy:decomposing",
		"ingredient": {
			"item": "minecraft:phantom_membrane"
		},
		"nutrientsCost": 1,
		"processingTime": 60,
		"results": [
			{
				"countRange": {
					"type": "uniform",
					"max": 2,
					"min": 1
				},
				"item": "biomancy:exotic_dust"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 7,
					"min": 4
				},
				"item": "biomancy:tough_fibers"
			}
		]
	})
	event.remove({"input":"#biomancy:raw_meats", "type":"biomancy:decomposing"})
	event.remove({"input":"#biomancy:cooked_meats", "type":"biomancy:decomposing"})
	event.remove({"input":"#forge:foods", "type":"biomancy:decomposing"})
	event.remove({"input":"minecraft:cake", "type":"biomancy:decomposing"})
	event.remove({"input":"minecraft:cookie", "type":"biomancy:decomposing"})
	event.remove({"input":"minecraft:cookie", "type":"biomancy:decomposing"})
	
	event.custom({
		"type": "biomancy:decomposing",
		"ingredient": {
			"item": "minecraft:pufferfish"
		},
		"nutrientsCost": 1,
		"processingTime": 60,
		"results": [
			{
				"countRange": {
					"type": "uniform",
					"max": 4,
					"min": 2
				},
				"item": "biomancy:flesh_bits"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 2,
					"min": 1
				},
				"item": "biomancy:elastic_fibers"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 2,
					"min": 1
				},
				"item": "biomancy:bone_fragments"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 2,
					"min": 1
				},
				"item": "biomancy:toxin_extract"
			}
		]
	})
	
	event.custom({
		"type": "biomancy:decomposing",
		"ingredient": {
			"tag": "forge:raw_beef"
		},
		"nutrientsCost": 2,
		"processingTime": 90,
		"results": [
			{
				"countRange": {
					"type": "uniform",
					"max": 4,
					"min": 2
				},
				"item": "biomancy:flesh_bits"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 2,
					"min": 1
				},
				"item": "biomancy:tough_fibers"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 2,
					"min": 1
				},
				"item": "gtceu:tiny_iron_dust"
			}
		]
	})
	event.custom({
		"type": "biomancy:decomposing",
		"ingredient": {
			"tag": "forge:cooked_beef"
		},
		"nutrientsCost": 1,
		"processingTime": 45,
		"results": [
			{
				"countRange": {
					"type": "uniform",
					"max": 4,
					"min": 2
				},
				"item": "biomancy:flesh_bits"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 2,
					"min": 1
				},
				"item": "biomancy:tough_fibers"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 2,
					"min": 1
				},
				"item": "gtceu:tiny_iron_dust"
			}
		]
	})
	
	event.custom({
		"type": "biomancy:decomposing",
		"ingredient": {
			"tag": "forge:raw_pork"
		},
		"nutrientsCost": 2,
		"processingTime": 90,
		"results": [
			{
				"countRange": {
					"type": "uniform",
					"max": 5,
					"min": 2
				},
				"item": "biomancy:flesh_bits"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 1,
					"min": 0
				},
				"item": "biomancy:tough_fibers"
			}
		]
	})
	event.custom({
		"type": "biomancy:decomposing",
		"ingredient": {
			"tag": "forge:cooked_pork"
		},
		"nutrientsCost": 1,
		"processingTime": 45,
		"results": [
			{
				"countRange": {
					"type": "uniform",
					"max": 4,
					"min": 2
				},
				"item": "biomancy:flesh_bits"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 1,
					"min": 0
				},
				"item": "biomancy:tough_fibers"
			}
		]
	})
	
	
	event.custom({
		"type": "biomancy:decomposing",
		"ingredient": {
			"tag": "forge:raw_mutton"
		},
		"nutrientsCost": 2,
		"processingTime": 90,
		"results": [
			{
				"countRange": {
					"type": "uniform",
					"max": 4,
					"min": 2
				},
				"item": "biomancy:flesh_bits"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 3,
					"min": 2
				},
				"item": "biomancy:tough_fibers"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 3,
					"min": 1
				},
				"item": "biomancy:bone_fragments"
			}
		]
	})
	event.custom({
		"type": "biomancy:decomposing",
		"ingredient": {
			"tag": "forge:cooked_mutton"
		},
		"nutrientsCost": 1,
		"processingTime": 45,
		"results": [
			{
				"countRange": {
					"type": "uniform",
					"max": 4,
					"min": 2
				},
				"item": "biomancy:flesh_bits"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 3,
					"min": 2
				},
				"item": "biomancy:tough_fibers"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 3,
					"min": 1
				},
				"item": "biomancy:bone_fragments"
			}
		]
	})
	
	event.custom({
		"type": "biomancy:decomposing",
		"ingredient": {
			"tag": "forge:raw_chicken"
		},
		"nutrientsCost": 2,
		"processingTime": 90,
		"results": [
			{
				"countRange": {
					"type": "uniform",
					"max": 4,
					"min": 2
				},
				"item": "biomancy:flesh_bits"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 1,
					"min": 0
				},
				"item": "biomancy:tough_fibers"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 2,
					"min": 1
				},
				"item": "biomancy:elastic_fibers"
			}
		]
	})
	event.custom({
		"type": "biomancy:decomposing",
		"ingredient": {
			"tag": "forge:cooked_chicken"
		},
		"nutrientsCost": 1,
		"processingTime": 45,
		"results": [
			{
				"countRange": {
					"type": "uniform",
					"max": 4,
					"min": 2
				},
				"item": "biomancy:flesh_bits"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 1,
					"min": 0
				},
				"item": "biomancy:tough_fibers"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 2,
					"min": 1
				},
				"item": "biomancy:elastic_fibers"
			}
		]
	})
	
	event.custom({
		"type": "biomancy:decomposing",
		"ingredient": {
			"item": "minecraft:raw_rabbit"
		},
		"nutrientsCost": 2,
		"processingTime": 90,
		"results": [
			{
				"countRange": {
					"type": "uniform",
					"max": 3,
					"min": 1
				},
				"item": "biomancy:flesh_bits"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 1,
					"min": 0
				},
				"item": "biomancy:tough_fibers"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 2,
					"min": 1
				},
				"item": "biomancy:elastic_fibers"
			}
		]
	})
	event.custom({
		"type": "biomancy:decomposing",
		"ingredient": {
			"item": "minecraft:cooked_rabbit"
		},
		"nutrientsCost": 1,
		"processingTime": 45,
		"results": [
			{
				"countRange": {
					"type": "uniform",
					"max": 3,
					"min": 1
				},
				"item": "biomancy:flesh_bits"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 1,
					"min": 0
				},
				"item": "biomancy:tough_fibers"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 2,
					"min": 1
				},
				"item": "biomancy:elastic_fibers"
			}
		]
	})
	
	event.custom({
		"type": "biomancy:decomposing",
		"ingredient": {
			"tag": "forge:raw_fishes/cod"
		},
		"nutrientsCost": 2,
		"processingTime": 90,
		"results": [
			{
				"countRange": {
					"type": "uniform",
					"max": 3,
					"min": 2
				},
				"item": "biomancy:flesh_bits"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 2,
					"min": 1
				},
				"item": "biomancy:bone_fragments"
			}
		]
	})
	event.custom({
		"type": "biomancy:decomposing",
		"ingredient": {
			"tag": "forge:cooked_fishes/cod"
		},
		"nutrientsCost": 1,
		"processingTime": 45,
		"results": [
			{
				"countRange": {
					"type": "uniform",
					"max": 3,
					"min": 2
				},
				"item": "biomancy:flesh_bits"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 2,
					"min": 1
				},
				"item": "biomancy:bone_fragments"
			}
		]
	})
	
	event.custom({
		"type": "biomancy:decomposing",
		"ingredient": {
			"tag": "forge:raw_fishes/salmon"
		},
		"nutrientsCost": 2,
		"processingTime": 90,
		"results": [
			{
				"countRange": {
					"type": "uniform",
					"max": 3,
					"min": 2
				},
				"item": "biomancy:flesh_bits"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 2,
					"min": 1
				},
				"item": "biomancy:bone_fragments"
			}
		]
	})
	event.custom({
		"type": "biomancy:decomposing",
		"ingredient": {
			"tag": "forge:cooked_fishes/salmon"
		},
		"nutrientsCost": 1,
		"processingTime": 45,
		"results": [
			{
				"countRange": {
					"type": "uniform",
					"max": 3,
					"min": 2
				},
				"item": "biomancy:flesh_bits"
			},
			{
				"countRange": {
					"type": "uniform",
					"max": 2,
					"min": 1
				},
				"item": "biomancy:bone_fragments"
			}
		]
	})
	
	event.replaceInput({"input":"gtceu:stem_cells"}, "gtceu:stem_cells", "#forge:cells/neuron")
	event.recipes.gtceu.chemical_reactor("make_neurons")
		.notConsumable(
			"#gtceu:hormones/neuron"
		)
		.itemInputs(
			"32x gtceu:stem_cells"
		)
		.inputFluids(
			Fluid.of("biofactory:nutrients_fluid", 288)
		)
		.itemOutputs(
			"minecraft:barrier"
		)
		.cleanroom(CleanroomType.STERILE_CLEANROOM)
		.duration(80)
		.EUt(30720)
	event.remove({"output":"gtceu:stem_cells"})
	event.recipes.gtceu.chemical_reactor("make_stem_cells")
		.itemInputs(
			"#forge:dusts/osmiridium",
			"biomancy:hormone_secretion"
		)
		.inputFluids(
			Fluid.of("biofactory:nutrients_fluid", 1000)
		)
		.itemOutputs(
			"32x gtceu:stem_cells"
		)
		.outputFluids(
			Fluid.of("biofactory:nutrients_fluid", 1000)
		)
		.cleanroom(CleanroomType.STERILE_CLEANROOM)
		.duration(80)
		.EUt(30720)
})

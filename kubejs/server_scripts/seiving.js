ServerEvents.recipes(event => {
	let sieving = (mesh, output, input, compressedInput, chance) => {
		event.custom(
			{"type":"exdeorum:sieve","ingredient":{
				"item":input
			},
			"mesh":mesh,
			"result":output,
			"result_amount":{
				"type":"minecraft:binomial","n":1.0,"p":chance
			}}
		)
		event.custom(
			{"type":"exdeorum:compressed_sieve","ingredient":{
				"tag":compressedInput
			},
			"mesh":mesh,
			"result":output,
			"result_amount":{
				"type":"minecraft:binomial","n":9.0,"p":chance
			}}
		)
	}
	
	event.remove({"output":"#exdeorum:ore_chunks"})
	event.remove({"output":"#forge:gems", "type":"exdeorum:sieve"})
	event.remove({"output":"#forge:gems", "type":"exdeorum:compressed_sieve"})
	event.remove({"output":"#forge:dusts/redstone", "type":"exdeorum:sieve"})
	event.remove({"output":"#forge:dusts/redstone", "type":"exdeorum:compressed_sieve"})
	event.remove({"output":"#forge:dusts/glowstone", "type":"exdeorum:sieve"})
	event.remove({"output":"#forge:dusts/glowstone", "type":"exdeorum:compressed_sieve"})
	event.remove({"output":"#forge:dusts/blaze", "type":"exdeorum:sieve"})
	event.remove({"output":"#forge:dusts/blaze", "type":"exdeorum:compressed_sieve"})
	event.remove({"output":"#forge:raw_materials/gold", "type":"exdeorum:sieve"})
	event.remove({"output":"#forge:raw_materials/gold", "type":"exdeorum:compressed_sieve"})
	event.remove({"output":"#forge:dusts/prismarine", "type":"exdeorum:sieve"})
	event.remove({"output":"#forge:dusts/prismarine", "type":"exdeorum:compressed_sieve"})
	event.remove({"output":"#forge:dusts/gunpowder", "type":"exdeorum:sieve"})
	event.remove({"output":"#forge:dusts/gunpowder", "type":"exdeorum:compressed_sieve"})
	
	event.remove({"output":"#forge:crops", "type":"exdeorum:sieve"})
	event.remove({"output":"#forge:crops", "type":"exdeorum:compressed_sieve"})
	event.remove({"output":"#forge:seeds", "type":"exdeorum:sieve"})
	event.remove({"output":"#forge:seeds", "type":"exdeorum:compressed_sieve"})
	event.remove({"output":"minecraft:ancient_debris", "type":"exdeorum:sieve"})
	event.remove({"output":"minecraft:ancient_debris", "type":"exdeorum:compressed_sieve"})
	event.remove({"output":"minecraft:black_dye", "type":"exdeorum:sieve"})
	event.remove({"output":"minecraft:black_dye", "type":"exdeorum:compressed_sieve"})
	event.remove({"output":"minecraft:ghast_tear", "type":"exdeorum:sieve"})
	event.remove({"output":"minecraft:ghast_tear", "type":"exdeorum:compressed_sieve"})
	event.remove({"output":"minecraft:magma_cream", "type":"exdeorum:sieve"})
	event.remove({"output":"minecraft:magma_cream", "type":"exdeorum:compressed_sieve"})
	
	
	sieving("exdeorum:string_mesh", "minecraft:flint", "minecraft:gravel", "exdeorum:compressed/gravel", 0.25)
	sieving("exdeorum:string_mesh", "gtceu:crushed_coal_ore", "minecraft:gravel", "exdeorum:compressed/gravel", 0.01)
	
	sieving("exdeorum:flint_mesh", "minecraft:flint", "minecraft:gravel", "exdeorum:compressed/gravel", 0.30)
	sieving("exdeorum:flint_mesh", "gtceu:crushed_coal_ore", "minecraft:gravel", "exdeorum:compressed/gravel", 0.05)
	sieving("exdeorum:flint_mesh", "gtceu:crushed_iron_ore", "minecraft:gravel", "exdeorum:compressed/gravel", 0.01)
	sieving("exdeorum:flint_mesh", "gtceu:crushed_pyrite_ore", "minecraft:gravel", "exdeorum:compressed/gravel", 0.01)
	sieving("exdeorum:flint_mesh", "gtceu:crushed_hematite_ore", "minecraft:gravel", "exdeorum:compressed/gravel", 0.01)
	sieving("exdeorum:flint_mesh", "gtceu:crushed_goethite_ore", "minecraft:gravel", "exdeorum:compressed/gravel", 0.01)
	sieving("exdeorum:flint_mesh", "gtceu:crushed_magnetite_ore", "minecraft:gravel", "exdeorum:compressed/gravel", 0.01)
	sieving("exdeorum:flint_mesh", "gtceu:crushed_yellow_limonite_ore", "minecraft:gravel", "exdeorum:compressed/gravel", 0.01)
	sieving("exdeorum:flint_mesh", "gtceu:crushed_basaltic_mineral_sand_ore", "minecraft:gravel", "exdeorum:compressed/gravel", 0.01)
	sieving("exdeorum:flint_mesh", "gtceu:crushed_granitic_mineral_sand_ore", "minecraft:gravel", "exdeorum:compressed/gravel", 0.01)
	
	sieving("exdeorum:iron_mesh", "gtceu:crushed_coal_ore", "minecraft:gravel", "exdeorum:compressed/gravel", 0.15)
	sieving("exdeorum:iron_mesh", "exdeorum:diorite_pebble", "minecraft:gravel", "exdeorum:compressed/gravel", 0.25)
	sieving("exdeorum:iron_mesh", "exdeorum:granite_pebble", "minecraft:gravel", "exdeorum:compressed/gravel", 0.25)
	sieving("exdeorum:iron_mesh", "exdeorum:andesite_pebble", "minecraft:gravel", "exdeorum:compressed/gravel", 0.25)
	sieving("exdeorum:iron_mesh", "gtceu:crushed_iron_ore", "minecraft:gravel", "exdeorum:compressed/gravel", 0.02)
	sieving("exdeorum:iron_mesh", "gtceu:crushed_pyrite_ore", "minecraft:gravel", "exdeorum:compressed/gravel", 0.02)
	sieving("exdeorum:iron_mesh", "gtceu:crushed_hematite_ore", "minecraft:gravel", "exdeorum:compressed/gravel", 0.02)
	sieving("exdeorum:iron_mesh", "gtceu:crushed_goethite_ore", "minecraft:gravel", "exdeorum:compressed/gravel", 0.02)
	sieving("exdeorum:iron_mesh", "gtceu:crushed_magnetite_ore", "minecraft:gravel", "exdeorum:compressed/gravel", 0.02)
	sieving("exdeorum:iron_mesh", "gtceu:crushed_yellow_limonite_ore", "minecraft:gravel", "exdeorum:compressed/gravel", 0.02)
	sieving("exdeorum:iron_mesh", "gtceu:crushed_basaltic_mineral_sand_ore", "minecraft:gravel", "exdeorum:compressed/gravel", 0.02)
	sieving("exdeorum:iron_mesh", "gtceu:crushed_granitic_mineral_sand_ore", "minecraft:gravel", "exdeorum:compressed/gravel", 0.02)
	sieving("exdeorum:iron_mesh", "gtceu:crushed_copper_ore", "minecraft:gravel", "exdeorum:compressed/gravel", 0.03)
	sieving("exdeorum:iron_mesh", "gtceu:crushed_chalcopyrite_ore", "minecraft:gravel", "exdeorum:compressed/gravel", 0.03)
	sieving("exdeorum:iron_mesh", "gtceu:crushed_malachite_ore", "minecraft:gravel", "exdeorum:compressed/gravel", 0.03)
	sieving("exdeorum:iron_mesh", "gtceu:crushed_tin_ore", "minecraft:gravel", "exdeorum:compressed/gravel", 0.02)
	sieving("exdeorum:iron_mesh", "gtceu:crushed_cassiterite_sand_ore", "minecraft:gravel", "exdeorum:compressed/gravel", 0.02)
	sieving("exdeorum:iron_mesh", "gtceu:crushed_cassiterite_ore", "minecraft:gravel", "exdeorum:compressed/gravel", 0.02)
	sieving("exdeorum:iron_mesh", "gtceu:crushed_zinc_ore", "minecraft:gravel", "exdeorum:compressed/gravel", 0.02)
	
	sieving("exdeorum:golden_mesh", "exdeorum:diorite_pebble", "minecraft:gravel", "exdeorum:compressed/gravel", 0.15)
	sieving("exdeorum:golden_mesh", "exdeorum:granite_pebble", "minecraft:gravel", "exdeorum:compressed/gravel", 0.15)
	sieving("exdeorum:golden_mesh", "exdeorum:andesite_pebble", "minecraft:gravel", "exdeorum:compressed/gravel", 0.15)
	sieving("exdeorum:golden_mesh", "gtceu:crushed_coal_ore", "minecraft:gravel", "exdeorum:compressed/gravel", 0.10)
	sieving("exdeorum:golden_mesh", "gtceu:crushed_iron_ore", "minecraft:gravel", "exdeorum:compressed/gravel", 0.05)
	sieving("exdeorum:golden_mesh", "gtceu:crushed_pyrite_ore", "minecraft:gravel", "exdeorum:compressed/gravel", 0.05)
	sieving("exdeorum:golden_mesh", "gtceu:crushed_hematite_ore", "minecraft:gravel", "exdeorum:compressed/gravel", 0.05)
	sieving("exdeorum:golden_mesh", "gtceu:crushed_goethite_ore", "minecraft:gravel", "exdeorum:compressed/gravel", 0.05)
	sieving("exdeorum:golden_mesh", "gtceu:crushed_magnetite_ore", "minecraft:gravel", "exdeorum:compressed/gravel", 0.05)
	sieving("exdeorum:golden_mesh", "gtceu:crushed_yellow_limonite_ore", "minecraft:gravel", "exdeorum:compressed/gravel", 0.05)
	sieving("exdeorum:golden_mesh", "gtceu:crushed_basaltic_mineral_sand_ore", "minecraft:gravel", "exdeorum:compressed/gravel", 0.05)
	sieving("exdeorum:golden_mesh", "gtceu:crushed_granitic_mineral_sand_ore", "minecraft:gravel", "exdeorum:compressed/gravel", 0.05)
	sieving("exdeorum:golden_mesh", "gtceu:crushed_copper_ore", "minecraft:gravel", "exdeorum:compressed/gravel", 0.06)
	sieving("exdeorum:golden_mesh", "gtceu:crushed_chalcopyrite_ore", "minecraft:gravel", "exdeorum:compressed/gravel", 0.06)
	sieving("exdeorum:golden_mesh", "gtceu:crushed_malachite_ore", "minecraft:gravel", "exdeorum:compressed/gravel", 0.06)
	sieving("exdeorum:golden_mesh", "gtceu:crushed_tin_ore", "minecraft:gravel", "exdeorum:compressed/gravel", 0.02)
	sieving("exdeorum:golden_mesh", "gtceu:crushed_cassiterite_sand_ore", "minecraft:gravel", "exdeorum:compressed/gravel", 0.02)
	sieving("exdeorum:golden_mesh", "gtceu:crushed_cassiterite_ore", "minecraft:gravel", "exdeorum:compressed/gravel", 0.02)
	sieving("exdeorum:golden_mesh", "gtceu:crushed_zinc_ore", "minecraft:gravel", "exdeorum:compressed/gravel", 0.03)
	sieving("exdeorum:golden_mesh", "gtceu:crushed_realgar_ore", "minecraft:gravel", "exdeorum:compressed/gravel", 0.03)
	
	
	
	sieving("exdeorum:string_mesh", "gtceu:small_clay_dust", "exdeorum:dust", "exdeorum:compressed/dust", 0.05)
	
	sieving("exdeorum:flint_mesh", "gtceu:small_clay_dust", "exdeorum:dust", "exdeorum:compressed/dust", 0.1)
	
	sieving("exdeorum:iron_mesh", "gtceu:small_clay_dust", "exdeorum:dust", "exdeorum:compressed/dust", 0.25)
	
	sieving("exdeorum:golden_mesh", "gtceu:small_clay_dust", "exdeorum:dust", "exdeorum:compressed/dust", 1.0)
	
	
	
	sieving("exdeorum:iron_mesh", "gtceu:crushed_sulfur_ore", "exdeorum:crushed_netherrack", "exdeorum:compressed/netherrack", 0.05)
	sieving("exdeorum:iron_mesh", "gtceu:crushed_saltpeter_ore", "exdeorum:crushed_netherrack", "exdeorum:compressed/netherrack", 0.03)
	sieving("exdeorum:iron_mesh", "gtceu:crushed_emerald_ore", "exdeorum:crushed_netherrack", "exdeorum:compressed/netherrack", 0.02)
	sieving("exdeorum:iron_mesh", "gtceu:crushed_nether_quartz_ore", "exdeorum:crushed_netherrack", "exdeorum:compressed/netherrack", 0.02)
	sieving("exdeorum:iron_mesh", "gtceu:crushed_certus_quartz_ore", "exdeorum:crushed_netherrack", "exdeorum:compressed/netherrack", 0.02)
	sieving("exdeorum:iron_mesh", "gtceu:crushed_quartzite_ore", "exdeorum:crushed_netherrack", "exdeorum:compressed/netherrack", 0.02)
	sieving("exdeorum:iron_mesh", "gtceu:crushed_sphalerite_ore", "exdeorum:crushed_netherrack", "exdeorum:compressed/netherrack", 0.03)
	
	sieving("exdeorum:golden_mesh", "gtceu:crushed_sulfur_ore", "exdeorum:crushed_netherrack", "exdeorum:compressed/crushed_netherrack", 0.12)
	sieving("exdeorum:golden_mesh", "gtceu:crushed_saltpeter_ore", "exdeorum:crushed_netherrack", "exdeorum:compressed/crushed_netherrack", 0.06)
	sieving("exdeorum:golden_mesh", "gtceu:crushed_emerald_ore", "exdeorum:crushed_netherrack", "exdeorum:compressed/crushed_netherrack", 0.04)
	sieving("exdeorum:golden_mesh", "gtceu:crushed_nether_quartz_ore", "exdeorum:crushed_netherrack", "exdeorum:compressed/crushed_netherrack", 0.08)
	sieving("exdeorum:golden_mesh", "gtceu:crushed_certus_quartz_ore", "exdeorum:crushed_netherrack", "exdeorum:compressed/crushed_netherrack", 0.05)
	sieving("exdeorum:golden_mesh", "gtceu:crushed_quartzite_ore", "exdeorum:crushed_netherrack", "exdeorum:compressed/crushed_netherrack", 0.08)
	sieving("exdeorum:golden_mesh", "gtceu:crushed_sphalerite_ore", "exdeorum:crushed_netherrack", "exdeorum:compressed/crushed_netherrack", 0.06)
	
	
	
	sieving("exdeorum:iron_mesh", "gtceu:crushed_goethite_ore", "exdeorum:crushed_blackstone", "exdeorum:compressed/crushed_blackstone", 0.02)
	sieving("exdeorum:iron_mesh", "gtceu:crushed_yellow_limonite_ore", "exdeorum:crushed_blackstone", "exdeorum:compressed/crushed_blackstone", 0.02)
	sieving("exdeorum:iron_mesh", "gtceu:crushed_hematite_ore", "exdeorum:crushed_blackstone", "exdeorum:compressed/crushed_blackstone", 0.02)
	sieving("exdeorum:iron_mesh", "gtceu:crushed_gold_ore", "exdeorum:crushed_blackstone", "exdeorum:compressed/crushed_blackstone", 0.02)
	sieving("exdeorum:iron_mesh", "gtceu:crushed_stibnite_ore", "exdeorum:crushed_blackstone", "exdeorum:compressed/crushed_blackstone", 0.02)
	sieving("exdeorum:iron_mesh", "gtceu:crushed_tetrahedrite_ore", "exdeorum:crushed_blackstone", "exdeorum:compressed/crushed_blackstone", 0.02)
	sieving("exdeorum:iron_mesh", "gtceu:crushed_chalcocite_ore", "exdeorum:crushed_blackstone", "exdeorum:compressed/crushed_blackstone", 0.02)
	
	sieving("exdeorum:golden_mesh", "gtceu:crushed_gold_ore", "exdeorum:crushed_blackstone", "exdeorum:compressed/crushed_blackstone", 0.08)
	sieving("exdeorum:golden_mesh", "gtceu:crushed_stibnite_ore", "exdeorum:crushed_blackstone", "exdeorum:compressed/crushed_blackstone", 0.03)
	sieving("exdeorum:golden_mesh", "gtceu:crushed_tetrahedrite_ore", "exdeorum:crushed_blackstone", "exdeorum:compressed/crushed_blackstone", 0.06)
	sieving("exdeorum:golden_mesh", "gtceu:crushed_chalcocite_ore", "exdeorum:crushed_blackstone", "exdeorum:compressed/crushed_blackstone", 0.06)
	
	
	
	sieving("exdeorum:iron_mesh", "gtceu:crushed_diamond_ore", "exdeorum:crushed_deepslate", "exdeorum:compressed/crushed_deepslate", 0.02)
	sieving("exdeorum:iron_mesh", "gtceu:crushed_redstone_ore", "exdeorum:crushed_deepslate", "exdeorum:compressed/crushed_deepslate", 0.04)
	sieving("exdeorum:iron_mesh", "gtceu:crushed_lead_ore", "exdeorum:crushed_deepslate", "exdeorum:compressed/crushed_deepslate", 0.03)
	sieving("exdeorum:iron_mesh", "gtceu:crushed_galena_ore", "exdeorum:crushed_deepslate", "exdeorum:compressed/crushed_deepslate", 0.03)
	sieving("exdeorum:iron_mesh", "gtceu:crushed_silver_ore", "exdeorum:crushed_deepslate", "exdeorum:compressed/crushed_deepslate", 0.02)
	sieving("exdeorum:iron_mesh", "gtceu:crushed_gold_ore", "exdeorum:crushed_deepslate", "exdeorum:compressed/crushed_deepslate", 0.04)
	sieving("exdeorum:iron_mesh", "gtceu:crushed_amethyst_ore", "exdeorum:crushed_deepslate", "exdeorum:compressed/crushed_deepslate", 0.03)
	
	sieving("exdeorum:golden_mesh", "gtceu:crushed_diamond_ore", "exdeorum:crushed_deepslate", "exdeorum:compressed/crushed_deepslate", 0.04)
	sieving("exdeorum:golden_mesh", "gtceu:crushed_redstone_ore", "exdeorum:crushed_deepslate", "exdeorum:compressed/crushed_deepslate", 0.10)
	sieving("exdeorum:golden_mesh", "gtceu:crushed_cinnabar_ore", "exdeorum:crushed_deepslate", "exdeorum:compressed/crushed_deepslate", 0.02)
	sieving("exdeorum:golden_mesh", "gtceu:crushed_lead_ore", "exdeorum:crushed_deepslate", "exdeorum:compressed/crushed_deepslate", 0.06)
	sieving("exdeorum:golden_mesh", "gtceu:crushed_galena_ore", "exdeorum:crushed_deepslate", "exdeorum:compressed/crushed_deepslate", 0.06)
	sieving("exdeorum:golden_mesh", "gtceu:crushed_silver_ore", "exdeorum:crushed_deepslate", "exdeorum:compressed/crushed_deepslate", 0.04)
	sieving("exdeorum:golden_mesh", "gtceu:crushed_gold_ore", "exdeorum:crushed_deepslate", "exdeorum:compressed/crushed_deepslate", 0.12)
	sieving("exdeorum:golden_mesh", "gtceu:crushed_amethyst_ore", "exdeorum:crushed_deepslate", "exdeorum:compressed/crushed_deepslate", 0.08)
	sieving("exdeorum:golden_mesh", "gtceu:crushed_graphite_ore", "exdeorum:crushed_deepslate", "exdeorum:compressed/crushed_deepslate", 0.08)
	sieving("exdeorum:golden_mesh", "gtceu:crushed_garnierite_ore", "exdeorum:crushed_deepslate", "exdeorum:compressed/crushed_deepslate", 0.04)
	sieving("exdeorum:golden_mesh", "gtceu:crushed_nickel_ore", "exdeorum:crushed_deepslate", "exdeorum:compressed/crushed_deepslate", 0.04)
	sieving("exdeorum:golden_mesh", "gtceu:crushed_pentlandite_ore", "exdeorum:crushed_deepslate", "exdeorum:compressed/crushed_deepslate", 0.04)
	sieving("exdeorum:golden_mesh", "gtceu:crushed_sapphire_ore", "exdeorum:crushed_deepslate", "exdeorum:compressed/crushed_deepslate", 0.04)
	sieving("exdeorum:golden_mesh", "gtceu:crushed_green_sapphire_ore", "exdeorum:crushed_deepslate", "exdeorum:compressed/crushed_deepslate", 0.04)
	
	
	
	sieving("exdeorum:flint_mesh", "gtceu:crushed_salt_ore", "minecraft:sand", "exdeorum:compressed/sand", 0.03)
	sieving("exdeorum:flint_mesh", "gtceu:crushed_rock_salt_ore", "minecraft:sand", "exdeorum:compressed/sand", 0.03)
	
	sieving("exdeorum:iron_mesh", "gtceu:crushed_salt_ore", "minecraft:sand", "exdeorum:compressed/sand", 0.05)
	sieving("exdeorum:iron_mesh", "gtceu:crushed_rock_salt_ore", "minecraft:sand", "exdeorum:compressed/sand", 0.05)
	
	sieving("exdeorum:golden_mesh", "gtceu:crushed_salt_ore", "minecraft:sand", "exdeorum:compressed/sand", 0.12)
	sieving("exdeorum:golden_mesh", "gtceu:crushed_rock_salt_ore", "minecraft:sand", "exdeorum:compressed/sand", 0.12)
	sieving("exdeorum:golden_mesh", "gtceu:crushed_spodumene_ore", "minecraft:sand", "exdeorum:compressed/sand", 0.06)
	sieving("exdeorum:golden_mesh", "gtceu:crushed_lepidolite_ore", "minecraft:sand", "exdeorum:compressed/sand", 0.06)
	sieving("exdeorum:golden_mesh", "gtceu:crushed_tricalcium_phosphate_ore", "minecraft:sand", "exdeorum:compressed/sand", 0.06)
	
	sieving("exdeorum:diamond_mesh", "gtceu:crushed_salt_ore", "minecraft:sand", "exdeorum:compressed/sand", 0.20)
	sieving("exdeorum:diamond_mesh", "gtceu:crushed_rock_salt_ore", "minecraft:sand", "exdeorum:compressed/sand", 0.20)
	sieving("exdeorum:diamond_mesh", "gtceu:crushed_spodumene_ore", "minecraft:sand", "exdeorum:compressed/sand", 0.10)
	sieving("exdeorum:diamond_mesh", "gtceu:crushed_lepidolite_ore", "minecraft:sand", "exdeorum:compressed/sand", 0.10)
	sieving("exdeorum:diamond_mesh", "gtceu:crushed_tricalcium_phosphate_ore", "minecraft:sand", "exdeorum:compressed/sand", 0.12)
	
	sieving("exdeorum:netherite_mesh", "gtceu:crushed_salt_ore", "minecraft:sand", "exdeorum:compressed/sand", 0.30)
	sieving("exdeorum:netherite_mesh", "gtceu:crushed_rock_salt_ore", "minecraft:sand", "exdeorum:compressed/sand", 0.30)
	sieving("exdeorum:netherite_mesh", "gtceu:crushed_spodumene_ore", "minecraft:sand", "exdeorum:compressed/sand", 0.15)
	sieving("exdeorum:netherite_mesh", "gtceu:crushed_lepidolite_ore", "minecraft:sand", "exdeorum:compressed/sand", 0.10)
	sieving("exdeorum:netherite_mesh", "gtceu:crushed_tricalcium_phosphate_ore", "minecraft:sand", "exdeorum:compressed/sand", 0.25)
	
	
	
	sieving("exdeorum:iron_mesh", "gtceu:crushed_oilsands_ore", "minecraft:soul_sand", "exdeorum:compressed/soul_sand", 0.06)
	sieving("exdeorum:golden_mesh", "gtceu:crushed_oilsands_ore", "minecraft:soul_sand", "exdeorum:compressed/soul_sand", 0.08)
	sieving("exdeorum:diamond_mesh", "gtceu:crushed_oilsands_ore", "minecraft:soul_sand", "exdeorum:compressed/soul_sand", 0.16)
	sieving("exdeorum:netherite_mesh", "gtceu:crushed_oilsands_ore", "minecraft:soul_sand", "exdeorum:compressed/soul_sand", 0.32)
	
	
	
	sieving("exdeorum:string_mesh", "gtceu:rubber_sapling", "minecraft:moss_block", "exdeorum:compressed/moss_block", 0.11)
	sieving("exdeorum:flint_mesh", "gtceu:rubber_sapling", "minecraft:moss_block", "exdeorum:compressed/moss_block", 0.11)
	sieving("exdeorum:iron_mesh", "gtceu:rubber_sapling", "minecraft:moss_block", "exdeorum:compressed/moss_block", 0.11)
	sieving("exdeorum:golden_mesh", "gtceu:rubber_sapling", "minecraft:moss_block", "exdeorum:compressed/moss_block", 0.11)
	sieving("exdeorum:diamond_mesh", "gtceu:rubber_sapling", "minecraft:moss_block", "exdeorum:compressed/moss_block", 0.11)
	sieving("exdeorum:netherite_mesh", "gtceu:rubber_sapling", "minecraft:moss_block", "exdeorum:compressed/moss_block", 0.11)
	event.custom(
		{"type":"exdeorum:sieve","ingredient":{
			"item":"minecraft:coarse_dirt"
		},
		"mesh":"exdeorum:string_mesh",
		"result":"minecraft:dirt",
		"result_amount":{
			"type":"minecraft:binomial","n":1.0,"p":0.75
		}}
	)
	event.custom(
		{"type":"exdeorum:sieve","ingredient":{
			"item":"minecraft:coarse_dirt"
		},
		"mesh":"exdeorum:flint_mesh",
		"result":"minecraft:dirt",
		"result_amount":{
			"type":"minecraft:binomial","n":1.0,"p":1
		}}
	)
	event.custom(
		{"type":"exdeorum:sieve","ingredient":{
			"item":"minecraft:coarse_dirt"
		},
		"mesh":"exdeorum:iron_mesh",
		"result":"minecraft:dirt",
		"result_amount":{
			"type":"minecraft:binomial","n":1.5,"p":1
		}}
	)
	event.custom(
		{"type":"exdeorum:sieve","ingredient":{
			"item":"minecraft:coarse_dirt"
		},
		"mesh":"exdeorum:golden_mesh",
		"result":"minecraft:dirt",
		"result_amount":{
			"type":"minecraft:binomial","n":2,"p":1
		}}
	)
	event.custom(
		{"type":"exdeorum:sieve","ingredient":{
			"item":"minecraft:coarse_dirt"
		},
		"mesh":"exdeorum:diamond_mesh",
		"result":"minecraft:dirt",
		"result_amount":{
			"type":"minecraft:binomial","n":2.5,"p":1
		}}
	)
	event.custom(
		{"type":"exdeorum:sieve","ingredient":{
			"item":"minecraft:coarse_dirt"
		},
		"mesh":"exdeorum:netherite_mesh",
		"result":"minecraft:dirt",
		"result_amount":{
			"type":"minecraft:binomial","n":3,"p":1
		}}
	)
	event.custom(
		{"type":"exdeorum:sieve","ingredient":{
			"item":"minecraft:coarse_dirt"
		},
		"mesh":"exdeorum:string_mesh",
		"result":"minecraft:gravel",
		"result_amount":{
			"type":"minecraft:binomial","n":1.0,"p":0.125
		}}
	)
	event.custom(
		{"type":"exdeorum:sieve","ingredient":{
			"item":"minecraft:coarse_dirt"
		},
		"mesh":"exdeorum:flint_mesh",
		"result":"minecraft:gravel",
		"result_amount":{
			"type":"minecraft:binomial","n":1.0,"p":0.25
		}}
	)
	event.custom(
		{"type":"exdeorum:sieve","ingredient":{
			"item":"minecraft:coarse_dirt"
		},
		"mesh":"exdeorum:iron_mesh",
		"result":"minecraft:gravel",
		"result_amount":{
			"type":"minecraft:binomial","n":1.5,"p":0.5
		}}
	)
	event.custom(
		{"type":"exdeorum:sieve","ingredient":{
			"item":"minecraft:coarse_dirt"
		},
		"mesh":"exdeorum:golden_mesh",
		"result":"minecraft:gravel",
		"result_amount":{
			"type":"minecraft:binomial","n":2,"p":0.75
		}}
	)
	event.custom(
		{"type":"exdeorum:sieve","ingredient":{
			"item":"minecraft:coarse_dirt"
		},
		"mesh":"exdeorum:diamond_mesh",
		"result":"minecraft:gravel",
		"result_amount":{
			"type":"minecraft:binomial","n":2.5,"p":1
		}}
	)
	event.custom(
		{"type":"exdeorum:sieve","ingredient":{
			"item":"minecraft:coarse_dirt"
		},
		"mesh":"exdeorum:netherite_mesh",
		"result":"minecraft:gravel",
		"result_amount":{
			"type":"minecraft:binomial","n":3,"p":1
		}}
	)
	event.custom(
		{"type":"exdeorum:sieve","ingredient":{
			"item":"gtceu:purified_diamond_ore"
		},
		"mesh":"exdeorum:iron_mesh",
		"result":"minecraft:diamond",
		"result_amount":{
			"type":"minecraft:binomial","n":1,"p":0.5
		}}
	)
	event.custom(
		{"type":"exdeorum:sieve","ingredient":{
			"item":"gtceu:purified_diamond_ore"
		},
		"mesh":"exdeorum:golden_mesh",
		"result":"minecraft:diamond",
		"result_amount":{
			"type":"minecraft:binomial","n":1,"p":0.5
		}}
	)
	event.custom(
		{"type":"exdeorum:sieve","ingredient":{
			"item":"gtceu:purified_diamond_ore"
		},
		"mesh":"exdeorum:diamond_mesh",
		"result":"minecraft:diamond",
		"result_amount":{
			"type":"minecraft:binomial","n":1,"p":0.5
		}}
	)
	event.custom(
		{"type":"exdeorum:sieve","ingredient":{
			"item":"gtceu:purified_amethyst_ore"
		},
		"mesh":"exdeorum:iron_mesh",
		"result":"minecraft:amethyst_shard",
		"result_amount":{
			"type":"minecraft:binomial","n":1,"p":0.5
		}}
	)
	event.custom(
		{"type":"exdeorum:sieve","ingredient":{
			"item":"gtceu:purified_amethyst_ore"
		},
		"mesh":"exdeorum:golden_mesh",
		"result":"minecraft:amethyst_shard",
		"result_amount":{
			"type":"minecraft:binomial","n":1,"p":0.5
		}}
	)
	event.custom(
		{"type":"exdeorum:sieve","ingredient":{
			"item":"gtceu:purified_amethyst_ore"
		},
		"mesh":"exdeorum:diamond_mesh",
		"result":"minecraft:amethyst_shard",
		"result_amount":{
			"type":"minecraft:binomial","n":1,"p":0.5
		}}
	)
	
	event.custom(
		{"type":"exdeorum:sieve","ingredient":{
			"tag":"minecraft:leaves"
		},
		"mesh":"exdeorum:flint_mesh",
		"result":"kubejs:coffee_bean",
		"result_amount":{
			"type":"minecraft:binomial","n":1,"p":0.05
		}}
	)
	event.custom(
		{"type":"exdeorum:sieve","ingredient":{
			"tag":"minecraft:leaves"
		},
		"mesh":"exdeorum:iron_mesh",
		"result":"kubejs:coffee_bean",
		"result_amount":{
			"type":"minecraft:binomial","n":1,"p":0.05
		}}
	)
	event.custom(
		{"type":"exdeorum:sieve","ingredient":{
			"tag":"minecraft:leaves"
		},
		"mesh":"exdeorum:golden_mesh",
		"result":"kubejs:coffee_bean",
		"result_amount":{
			"type":"minecraft:binomial","n":1,"p":0.05
		}}
	)
	event.custom(
		{"type":"exdeorum:sieve","ingredient":{
			"tag":"minecraft:leaves"
		},
		"mesh":"exdeorum:diamond_mesh",
		"result":"kubejs:coffee_bean",
		"result_amount":{
			"type":"minecraft:binomial","n":1,"p":0.05
		}}
	)
	
	
})

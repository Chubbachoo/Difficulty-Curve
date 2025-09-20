ServerEvents.recipes(event => {
	
	event.remove({"output":"farmersdelight:flint_knife"})
	event.remove({"output":"farmersdelight:iron_knife"})
	event.remove({"output":"farmersdelight:golden_knife"})
	event.remove({"output":"farmersdelight:diamond_knife"})
	event.remove({"output":"farmersdelight:netherite_knife"})
	
	
	event.remove({"id":"farmersdelight:cutting/beef"})
	event.custom({
		"type": "farmersdelight:cutting",
		"ingredients": [
			{
				"item": "minecraft:beef"
			}
		],
		"result": [
			{
				"count": 2,
				"item": "farmersdelight:minced_beef"
			}
		],
		"tool": {
			"tag": "forge:tools/butchery_knives"
		}
	})
	event.remove({"id":"farmersdelight:cutting/ham"})
	event.custom({
		"type": "farmersdelight:cutting",
		"ingredients": [
			{
				"item": "farmersdelight:ham"
			}
		],
		"result": [
			{
				"count": 2,
				"item": "minecraft:porkchop"
			},
			{
				"count": 1,
				"item": "minecraft:bone"
			}
		],
		"tool": {
			"tag": "forge:tools/butchery_knives"
		}
	})
	event.remove({"id":"farmersdelight:cutting/cooked_mutton"})
	event.custom({
		"type": "farmersdelight:cutting",
		"ingredients": [
			{
				"item": "minecraft:cooked_mutton"
			}
		],
		"result": [
			{
				"count": 2,
				"item": "farmersdelight:cooked_mutton_chops"
			}
		],
		"tool": {
			"tag": "forge:tools/butchery_knives"
		}
	})
	event.remove({"id":"farmersdelight:cutting/salmon"})
	event.custom({
		"type": "farmersdelight:cutting",
		"ingredients": [
			{
				"item": "minecraft:salmon"
			}
		],
		"result": [
			{
				"count": 2,
				"item": "farmersdelight:salmon_slice"
			},
			{
				"count": 1,
				"item": "minecraft:bone_meal"
			}
		],
		"tool": {
			"tag": "forge:tools/butchery_knives"
		}
	})
	event.remove({"id":"farmersdelight:cutting/smoked_ham"})
	event.custom({
		"type": "farmersdelight:cutting",
		"ingredients": [
			{
				"item": "farmersdelight:smoked_ham"
			}
		],
		"result": [
			{
				"count": 2,
				"item": "minecraft:cooked_porkchop"
			},
			{
				"count": 1,
				"item": "minecraft:bone"
			}
		],
		"tool": {
			"tag": "forge:tools/butchery_knives"
		}
	})
	event.remove({"id":"farmersdelight:cutting/chicken"})
	event.custom({
		"type": "farmersdelight:cutting",
		"ingredients": [
			{
				"item": "minecraft:chicken"
			}
		],
		"result": [
			{
				"count": 2,
				"item": "farmersdelight:chicken_cuts"
			},
			{
				"count": 1,
				"item": "minecraft:bone_meal"
			}
		],
		"tool": {
			"tag": "forge:tools/butchery_knives"
		}
	})
	event.remove({"id":"farmersdelight:cutting/cooked_cod"})
	event.custom({
		"type": "farmersdelight:cutting",
		"ingredients": [
			{
				"item": "minecraft:cooked_cod"
			}
		],
		"result": [
			{
				"count": 2,
				"item": "farmersdelight:cooked_cod_slice"
			},
			{
				"count": 1,
				"item": "minecraft:bone_meal"
			}
		],
		"tool": {
			"tag": "forge:tools/butchery_knives"
		}
	})
	event.remove({"id":"farmersdelight:cutting/mutton"})
	event.custom({
		"type": "farmersdelight:cutting",
		"ingredients": [
			{
				"item": "minecraft:mutton"
			}
		],
		"result": [
			{
				"count": 2,
				"item": "farmersdelight:mutton_chops"
			}
		],
		"tool": {
			"tag": "forge:tools/butchery_knives"
		}
	})
	event.remove({"id":"farmersdelight:cutting/cooked_salmon"})
	event.custom({
		"type": "farmersdelight:cutting",
		"ingredients": [
			{
				"item": "minecraft:cooked_salmon"
			}
		],
		"result": [
			{
				"count": 2,
				"item": "farmersdelight:cooked_salmon_slice"
			},
			{
				"count": 1,
				"item": "minecraft:bone_meal"
			}
		],
		"tool": {
			"tag": "forge:tools/butchery_knives"
		}
	})
	event.remove({"id":"farmersdelight:cutting/porkchop"})
	event.custom({
		"type": "farmersdelight:cutting",
		"ingredients": [
			{
				"item": "minecraft:porkchop"
			}
		],
		"result": [
			{
				"count": 2,
				"item": "farmersdelight:bacon"
			}
		],
		"tool": {
			"tag": "forge:tools/butchery_knives"
		}
	})
	event.remove({"id":"farmersdelight:cutting/cod"})
	event.custom({
		"type": "farmersdelight:cutting",
		"ingredients": [
			{
				"item": "minecraft:cod"
			}
		],
		"result": [
			{
				"count": 2,
				"item": "farmersdelight:cod_slice"
			},
			{
				"count": 1,
				"item": "minecraft:bone_meal"
			}
		],
		"tool": {
			"tag": "forge:tools/butchery_knives"
		}
	})
	event.remove({"id":"farmersdelight:cutting/cooked_chicken"})
	event.custom({
		"type": "farmersdelight:cutting",
		"ingredients": [
			{
				"item": "minecraft:cooked_chicken"
			}
		],
		"result": [
			{
				"count": 2,
				"item": "farmersdelight:cooked_chicken_cuts"
			},
			{
				"count": 1,
				"item": "minecraft:bone_meal"
			}
		],
		"tool": {
			"tag": "forge:tools/butchery_knives"
		}
	})
	
	event.custom({
		"type": "farmersdelight:cutting",
		"ingredients": [
			{
				"item": "minecraft:grass"
			}
		],
		"result": [
			{
				"count": 1,
				"item": "kubejs:grass_fibre"
			},
			{
				"count": 1,
				"item": "exdeorum:grass_seeds"
			}
		],
		"tool": {
			"tag": "farmersdelight:straw_harvesters"
		}
	})
	event.custom({
		"type": "farmersdelight:cutting",
		"ingredients": [
			{
				"item": "farmersdelight:onion"
			}
		],
		"result": [
			{
				"count": 2,
				"item": "kubejs:onion_ring"
			},
			{
				"count": 1,
				"item": "minecraft:allium"
			}
		],
		"tool": {
			"tag": "forge:tools/knives"
		}
	})
	event.smelting("kubejs:cooked_onion_ring","kubejs:onion_ring")
	event.campfireCooking("kubejs:cooked_onion_ring","kubejs:onion_ring")
	event.smoking("kubejs:cooked_onion_ring","kubejs:onion_ring")
	
	event.smelting("minecraft:sugar", "cooked_beetroot:cooked_beetroot")
	event.smelting("cooked_beetroot:cooked_beetroot","#forge:crops/beetroot")
	event.campfireCooking("cooked_beetroot:cooked_beetroot","#forge:crops/beetroot")
	event.smoking("cooked_beetroot:cooked_beetroot","#forge:crops/beetroot")
	event.remove({"output":"minecraft:beetroot_soup"})
	event.custom({
		"type": "farmersdelight:cooking",
		"container":{
			"item":"minecraft:bowl"
		},
		"cookingtime": 200,
		"experience": 1.0,
		"ingredients": [
			{
				"count": 2,
				"item": "cooked_beetroot:cooked_beetroot"
			},
			{
				"tag": "forge:salt"
			}
		],
		"recipe_book_tab": "drinks",
		"result": {
			"item": "minecraft:beetroot_soup"
		}
	})
	
	event.remove({"id":"phantomsandnightmares:sanity_pill"})
	event.custom({
		"type": "farmersdelight:cooking",
		"container":{
			"item":"minecraft:paper"
		},
		"cookingtime": 200,
		"experience": 1.0,
		"ingredients": [
			{
				"item": "kubejs:coffee_grounds"
			},
			{
				"tag": "forge:milk/milk_bottle"
			},
			{
				"item": "minecraft:sugar"
			}
		],
		"recipe_book_tab": "drinks",
		"result": {
			"item": "phantomsandnightmares:sanity_pill"
		}
	})
	
	event.smelting("kubejs:cooked_coffee_bean","kubejs:coffee_bean")
	event.campfireCooking("kubejs:cooked_coffee_bean","kubejs:coffee_bean")
	event.smoking("kubejs:cooked_coffee_bean","kubejs:coffee_bean")
	event.custom({
		"type": "farmersdelight:cutting",
		"ingredients": [
			{
				"item": "kubejs:cooked_coffee_bean"
			}
		],
		"result": [
			{
				"count": 1,
				"item": "kubejs:coffee_grounds"
			}
		],
		"tool": {
			"tag": "forge:tools/hammers"
		}
	})
	
	event.remove({"output":"farmersdelight:tomato_sauce"})
	event.custom({
		"type": "farmersdelight:cooking",
		"container":{
			"item":"minecraft:bowl"
		},
		"cookingtime": 200,
		"experience": 1.0,
		"ingredients": [
			{
				"count": 2,
				"item": "farmersdelight:tomato"
			},
			{
				"tag": "forge:salt"
			}
		],
		"recipe_book_tab": "drinks",
		"result": {
			"item": "farmersdelight:tomato_sauce"
		}
	})
})
ServerEvents.tags("item", event => {
	event.add("forge:salt", "#forge:dusts/salt")
	event.add("forge:salt", "#forge:dusts/rock_salt")
	event.add("farmersdelight:tools/knives", "#forge:tools/knives")
	event.add("farmersdelight:tools/knives", "#forge:tools/butchery_knives")
	event.add("farmersdelight:straw_harvesters", "#forge:tools/knives")
	event.add("farmersdelight:straw_harvesters", "#forge:tools/scythes")
	event.remove("farmersdelight:straw_harvesters", "#forge:tools/butchery_knives")
})
ServerEvents.tags("block", event => {
	event.add("exdeorum:watering_can_tickable", "farmersdelight:tomatoes")
	event.add("exdeorum:watering_can_tickable", "farmersdelight:cabbages")
	event.add("exdeorum:watering_can_tickable", "farmersdelight:onions")
	event.add("exdeorum:watering_can_tickable", "farmersdelight:red_mushroom_colony")
	event.add("exdeorum:watering_can_tickable", "farmersdelight:brown_mushroom_colony")
})

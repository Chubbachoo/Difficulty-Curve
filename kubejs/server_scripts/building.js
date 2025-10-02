ServerEvents.recipes(event => {
	event.shaped("constructionwand:construction_core",[
		"FAA",
		"AAA",
		"AAS"
	], {
		A: "#forge:gems/amethyst",
		S: "#forge:tools/saws",
		F: "#forge:tools/files"
	})
	event.recipes.gtceu.lathe("spin_construction_core")
		.itemInputs(
			"2x #forge:flawless_gems/amethyst"
		)
		.itemOutputs(
			"constructionwand:construction_core"
		)
		.addMaterialInfo(true)
		.duration(30)
		.EUt(30)
	event.remove({"output" : "constructionwand:stone_wand"})
	event.shaped("constructionwand:stone_wand",[
		" SC",
		" HS",
		"H  "
	], {
		C: "constructionwand:construction_core",
		H: "#forge:rods/wooden",
		S: "#minecraft:stone_tool_materials"
	})
	
	event.remove({"output" : "constructionwand:iron_wand"})
	event.shaped("constructionwand:iron_wand",[
		" SC",
		" HS",
		"H  "
	], {
		C: "constructionwand:construction_core",
		H: "#forge:rods/iron",
		S: "#forge:plates/iron"
	})
	
	event.remove({"output" : "constructionwand:diamond_wand"})
	event.shaped("constructionwand:diamond_wand",[
		" SC",
		" HS",
		"H  "
	], {
		C: "constructionwand:construction_core",
		H: "#forge:rods/aluminium",
		S: "#forge:plates/diamond"
	})
	event.remove({"output" : "constructionwand:infinity_wand"})
	
	event.remove({"output" : "create:crafting/pallettes/scorchia"})
	event.remove({"output" : "create:smelting/scoria"})
})
ServerEvents.tags("item", event => {
	event.add("forge:storage_blocks/asurine", "create:asurine")
	event.add("forge:storage_blocks/crimsite", "create:crimsite")
	event.add("forge:storage_blocks/ochrum", "create:ochrum")
	event.add("forge:storage_blocks/veridium", "create:veridium")
	event.add("forge:storage_blocks/limestone", "create:limestone")
	event.add("forge:storage_blocks/scoria", "create:scoria")
	event.add("forge:storage_blocks/scorchia", "create:scorchia")
})

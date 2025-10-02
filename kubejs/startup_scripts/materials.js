
const $AEItems = Java.loadClass("appeng.core.definitions.AEItems");
const $AEBlocks = Java.loadClass("appeng.core.definitions.AEBlocks");
const $OreProperty = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.OreProperty");
const $IngotProperty = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.IngotProperty");
const $GemProperty = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.GemProperty");
const $DustProperty = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.DustProperty");
const $BlastProperty = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.BlastProperty");

GTCEuStartupEvents.registry("gtceu:material_icon_type", event => {
	event.create("ore_chunk")
})
GTCEuStartupEvents.registry("gtceu:material_icon_set", event => {
	event.create("aquatic").parent(GTMaterialIconSet.SHINY)
	event.create("starry").parent(GTMaterialIconSet.RADIOACTIVE)
})

GTCEuStartupEvents.registry("gtceu:tag_prefix", event => {
	event.create("ore_chunk")
		.unificationEnabled(true)
		.defaultTagPath("ore_chunks/%s")
		.unformattedTagPath("ore_chunks")
		.generateItem(true)
		.materialIconType(GTMaterialIconType.getByName("ore_chunk"))
		.generationCondition(ItemGenerationCondition.hasOreProperty)
})

GTCEuStartupEvents.registry("gtceu:material", event => {
	GTMaterials.get("andesite_alloy").addFlags(GTMaterialFlags.GENERATE_GEAR);
	GTMaterials.Iron.addFlags(GTMaterialFlags.GENERATE_FINE_WIRE);
	GTMaterials.Zinc.setProperty(PropertyKey.ORE, new $OreProperty());
	GTMaterials.Ytterbium.setProperty(PropertyKey.INGOT, new $IngotProperty());
	GTMaterials.Ytterbium.setProperty(PropertyKey.BLAST, new $BlastProperty(7200, "higher", GTValues.VA[GTValues.IV], 900, -1, -1))
	GTMaterials.Biomass.setProperty(PropertyKey.DUST, new $DustProperty());
	
	
	//why are þey elements but not materials?
	event.create("magic")
		.ingot()
		.element("Magic")
		.color(0xc000c0).iconSet(GTMaterialIconSet.RADIOACTIVE)
		.blastTemp(12643, "highest", GTValues.VA[GTValues.UEV])
	event.create("space")
		.ingot()
		.element("Space")
		.color(0x004040).secondaryColor(0xFFFFFF).iconSet("starry")
		.blastTemp(99999999, "highest", GTValues.VA[GTValues.UIV])
	//UHV materials
	
	//primarine line chemicals
	event.create("phosgene")
		.liquid()
		.components( "carbon", "2x chlorine", "oxygen")
		.color(0x0a7647)
	event.create("anilene")
		.liquid()
		.components( "6x carbon", "7x hydrogen", "nitrogen")
		.color(0x346811)
	event.create("hydrazine")
		.liquid()
		.components( "4x hydrogen", "2x nitrogen")
		.color(0x5360c0)
	event.create("diethyl_carbonate")
		.liquid()
		.components( "5x carbon", "10x hydrogen", "3x oxygen")
		.color(0xc2ffe4)
	event.create("phenyl_isocyanate")
		.liquid()
		.components( "7x carbon", "5x hydrogen", "nitrogen", "oxygen")
		.color(0x011208)
	event.create("benzvalene")
		.liquid()
		.components("benzene")
		.color(0x000a0a)
	event.create("schembl5306506")
		.liquid()
		.components("8x carbon", "5x hydrogen", "nitrogen", "2x oxygen")
		.color(0xEC4232)
	event.create("ptad")
		.dust()
		.components("schembl5306506", "2x nitrogen")
		.color(0xEC4232)
	event.create("ptad_benzvalene")
		.dust()
		.components("benzvalene", "ptad")
		.color(0xEC4232)
	event.create("prismane")
		.dust()
		.components("benzene")
		.color(0x004030)
	//UEV materials
	event.create("experience")
		.liquid(400)
		.color(0x52b64c).iconSet(GTMaterialIconSet.SHINY)
		.components("1x magic", "2x hydrogen")
	event.create("hyper_experience")
		.liquid(10000)
		.gem()
		.color(0x00ffff).iconSet(GTMaterialIconSet.SHINY)
		.components("1x experience", "1x sculk")
	event.create("prismarine")
		.gem()
		.components("4x prismane", "2x lapis", "8x ytterbium")
		.color(0xA4D1C2).secondaryColor(0x539882).iconSet("aquatic")
	event.create("activated_prismarine")
		.ingot()
		.components("1x prismarine", "1x trinium_sulfide", "1x experience")
		.color(0x008070).iconSet("aquatic")
		.flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_ROTOR)
		.blastTemp(9635, "highest", GTValues.VA[GTValues.UHV])
		.fluidPipeProperties(45000, 45000, false)
		.liquid(9635)
	event.create("tritanium_fluoride")
		.ingot()
		.components("1x tritanium", "fluorine")
		.color(0x601000).iconSet(GTMaterialIconSet.SHINY)
	event.create("tritanium_hexafluoride")
		.ingot()
		.components("1x tritanium", "6x fluorine")
		.color(0x606000).iconSet(GTMaterialIconSet.SHINY)
	event.create("awakened_lapis")
		.ingot()
		.components("1x lapis", "1x tritanium_hexafluoride", "1x experience")
		.color(0x0000FF).iconSet(GTMaterialIconSet.LAPIS)
		.flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_BOLT_SCREW)
		.blastTemp(10531, "highest", GTValues.VA[GTValues.UHV])
	//charcoals, cokes
	event.create("cactus_charcoal")
		.gem(0, 800)
		.components("carbon")
		.color(0x00AA00).iconSet(GTMaterialIconSet.LIGNITE)
	event.create("cactus_coke")
		.gem(0, 1600)
		.components("carbon")
		.color(0x00FF00).iconSet(GTMaterialIconSet.LIGNITE)
	event.create("sugar_charcoal")
		.gem(0, 800)
		.components("carbon")
		.color(0xAAAAAA).iconSet(GTMaterialIconSet.LIGNITE)
	event.create("sugar_coke")
		.gem(0, 1600)
		.components("carbon")
		.color(0xFFFFFF).iconSet(GTMaterialIconSet.LIGNITE)
	event.create("kelp_coke")
		.dust(0, 8000)
		.components("carbon")
		.color(0x444444).iconSet(GTMaterialIconSet.LIGNITE)
	//mod integration materials
	//ae2
	event.create("charged_certus_quartz")
		.gem()
		.color(0x9fd5e8)
		.iconSet(GTMaterialIconSet.CERTUS)
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.FLAMMABLE)
		.components("certus_quartz")
	event.create("fluix")
		.gem()
		.color(0x7f5bb3)
		.iconSet(GTMaterialIconSet.CERTUS)
		.flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.CRYSTALLIZABLE)
		.components("charged_certus_quartz", "redstone", "nether_quartz")
	//create
	event.create("asurine")
		.dust()
		.components("9x zinc", "1x saltpeter")
		.color(0x6b98b4)
		.secondaryColor(0x323b55).iconSet(GTMaterialIconSet.DIAMOND)
		.flags(GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.FORCE_GENERATE_BLOCK)
	event.create("crimsite")
		.dust()
		.components("9x hematite", "1x redstone")
		.color(0xb26555)
		.secondaryColor(0x40272f).iconSet(GTMaterialIconSet.FLINT)
		.flags(GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.FORCE_GENERATE_BLOCK)
	event.create("ochrum")
		.dust()
		.components("9x gold", "1x quartzite")
		.color(0xb89b5f)
		.secondaryColor(0x743c34).iconSet(GTMaterialIconSet.LIGNITE)
		.flags(GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.FORCE_GENERATE_BLOCK)
	event.create("veridium")
		.dust()
		.components("9x malachite", "1x clay")
		.color(0x50977d)
		.secondaryColor(0x133b3d).iconSet(GTMaterialIconSet.LIGNITE)
		.flags(GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.FORCE_GENERATE_BLOCK)
	event.create("limestone")
		.dust()
		.components("1x calcite")
		.color(0xc4c2b5)
		.secondaryColor(0xaea79a).iconSet(GTMaterialIconSet.DULL)
		.flags(GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.FORCE_GENERATE_BLOCK)
	event.create("scoria")
		.dust()
		.color(0x604a41)
		.secondaryColor(0x2d1e25).iconSet(GTMaterialIconSet.LIGNITE)
		.flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.FORCE_GENERATE_BLOCK)
	event.create("scorchia")
		.dust()
		.components("8x scoria", "1x dark_ash")
		.color(0x444e4a)
		.secondaryColor(0x1b1b1e).iconSet(GTMaterialIconSet.LIGNITE)
		.flags(GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.FORCE_GENERATE_BLOCK)
	//biomancy
	event.create("exotic_compound")
		.dust()
		.color(0xc70a94).iconSet(GTMaterialIconSet.BRIGHT)
	event.create("nutrients")
		.dust()
		.color(0x7bca3b)
		.secondaryColor(0x1c5a42).iconSet(GTMaterialIconSet.DULL)
	event.create("nutrient_paste")
		.ingot()
		.components("5x nutrients", "4x biomass")
		.color(0x929958)
		.secondaryColor(0x415336).iconSet(GTMaterialIconSet.DULL)
		.flags(GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING, GTMaterialFlags.FLAMMABLE)
})
GTCEuStartupEvents.materialModification(event => {
	
	//GTMaterials.Naquadria.cableProperties(GTValues.VA[GTValues.UEV], 1, 16)
	
	//vanilla
	TagPrefix.gem.setIgnored(GTMaterialRegistry.getMaterial("prismarine"), Ingredient.of("minecraft:prismarine_crystals"))
	TagPrefix.dust.setIgnored(GTMaterialRegistry.getMaterial("prismarine"), Ingredient.of("minecraft:prismarine_shard"))
	
	//exdeorum
	TagPrefix.dust.setIgnored(GTMaterialRegistry.getMaterial("wood"))
	
	/*TagPrefix.ore_chunk.setIgnored(GTMaterialRegistry.getMaterial("iron"))
	TagPrefix.ore_chunk.setIgnored(GTMaterialRegistry.getMaterial("copper"))
	TagPrefix.ore_chunk.setIgnored(GTMaterialRegistry.getMaterial("gold"))
	TagPrefix.ore_chunk.setIgnored(GTMaterialRegistry.getMaterial("zinc"))*/
	
	//create
	GTMaterials.Zinc.setMaterialARGB(0xd6ffdc)
	GTMaterials.Zinc.setMaterialSecondaryARGB(0x31544e)
	
	TagPrefix.block.setIgnored(GTMaterialRegistry.getMaterial("asurine"))
	TagPrefix.block.setIgnored(GTMaterialRegistry.getMaterial("crimsite"))
	TagPrefix.block.setIgnored(GTMaterialRegistry.getMaterial("ochrum"))
	TagPrefix.block.setIgnored(GTMaterialRegistry.getMaterial("veridium"))
	TagPrefix.block.setIgnored(GTMaterialRegistry.getMaterial("limestone"))
	TagPrefix.block.setIgnored(GTMaterialRegistry.getMaterial("scoria"))
	TagPrefix.block.setIgnored(GTMaterialRegistry.getMaterial("scorchia"))
	
	TagPrefix.plate.setIgnored(GTMaterialRegistry.getMaterial("iron"))
	
	TagPrefix.plate.setIgnored(GTMaterialRegistry.getMaterial("copper"))
	TagPrefix.nugget.setIgnored(GTMaterialRegistry.getMaterial("copper"))
	
	TagPrefix.plate.setIgnored(GTMaterialRegistry.getMaterial("gold"))
	
	TagPrefix.plate.setIgnored(GTMaterialRegistry.getMaterial("obsidian"))
	TagPrefix.dust.setIgnored(GTMaterialRegistry.getMaterial("obsidian"))
	
	TagPrefix.dust.setIgnored(GTMaterialRegistry.getMaterial("wheat"))
	
	TagPrefix.dust.setIgnored(GTMaterialRegistry.getMaterial("netherrack"))
	
	TagPrefix.ingot.setIgnored(GTMaterialRegistry.getMaterial("zinc"))
	TagPrefix.block.setIgnored(GTMaterialRegistry.getMaterial("zinc"))
	TagPrefix.nugget.setIgnored(GTMaterialRegistry.getMaterial("zinc"))
	//TagPrefix.ore.setIgnored(GTMaterialRegistry.getMaterial("zinc"))				Þis is holding þe fabric of reality togeþer
	TagPrefix.oreDeepslate.setIgnored(GTMaterialRegistry.getMaterial("zinc"))
	TagPrefix.rawOre.setIgnored(GTMaterialRegistry.getMaterial("zinc"))
	TagPrefix.rawOreBlock.setIgnored(GTMaterialRegistry.getMaterial("zinc"))
	
	TagPrefix.ingot.setIgnored(GTMaterialRegistry.getMaterial("brass"))
	TagPrefix.plate.setIgnored(GTMaterialRegistry.getMaterial("brass"))
	TagPrefix.block.setIgnored(GTMaterialRegistry.getMaterial("brass"))
	TagPrefix.nugget.setIgnored(GTMaterialRegistry.getMaterial("brass"))
	
	//ae2
	TagPrefix.gem.setIgnored(GTMaterialRegistry.getMaterial("certus_quartz"), $AEItems.CERTUS_QUARTZ_CRYSTAL)
	TagPrefix.dust.setIgnored(GTMaterialRegistry.getMaterial("certus_quartz"), $AEItems.CERTUS_QUARTZ_DUST)
	TagPrefix.block.setIgnored(GTMaterialRegistry.getMaterial("certus_quartz"), $AEBlocks.QUARTZ_BLOCK)
	
	TagPrefix.dust.setIgnored(GTMaterialRegistry.getMaterial("charged_certus_quartz"), $AEItems.CERTUS_QUARTZ_DUST)
	TagPrefix.dustSmall.setIgnored(GTMaterialRegistry.getMaterial("charged_certus_quartz"))
	TagPrefix.dustTiny.setIgnored(GTMaterialRegistry.getMaterial("charged_certus_quartz"))
	TagPrefix.gem.setIgnored(GTMaterialRegistry.getMaterial("charged_certus_quartz"), $AEItems.CERTUS_QUARTZ_CRYSTAL_CHARGED)
	TagPrefix.block.modifyMaterialAmount(GTMaterialRegistry.getMaterial("charged_certus_quartz"), 4)
	
	TagPrefix.dust.setIgnored(GTMaterialRegistry.getMaterial("fluix"), $AEItems.FLUIX_DUST)
	TagPrefix.gem.setIgnored(GTMaterialRegistry.getMaterial("fluix"), $AEItems.FLUIX_CRYSTAL)
	TagPrefix.block.setIgnored(GTMaterialRegistry.getMaterial("fluix"), $AEBlocks.FLUIX_BLOCK)
	TagPrefix.block.modifyMaterialAmount(GTMaterialRegistry.getMaterial("fluix"), 4)
	
	TagPrefix.dust.setIgnored(GTMaterialRegistry.getMaterial("ender_pearl"), $AEItems.ENDER_DUST)
	//productive bees
	/*TagPrefix.ingot.setIgnored(GTMaterialRegistry.getMaterial("wax"))			þis is already done by gregtech
	TagPrefix.block.setIgnored(GTMaterialRegistry.getMaterial("wax"))*/
	
	//biomancy
	TagPrefix.dust.setIgnored(GTMaterialRegistry.getMaterial("exotic_compound"))
	TagPrefix.dust.setIgnored(GTMaterialRegistry.getMaterial("biomass"))
	TagPrefix.dust.setIgnored(GTMaterialRegistry.getMaterial("nutrients"))
	TagPrefix.dustTiny.setIgnored(GTMaterialRegistry.getMaterial("nutrient_paste"))
	TagPrefix.ingot.setIgnored(GTMaterialRegistry.getMaterial("nutrient_paste"))
	TagPrefix.dust.setIgnored(GTMaterialRegistry.getMaterial("calcium_carbonate"))
	
	GTMaterials.Biomass.setMaterialARGB(0x794026)
	GTMaterials.Biomass.setMaterialSecondaryARGB(0x2a1e13)
})
StartupEvents.postInit(event => {
	//exdeorum compat
	TagPrefix.dust.setIgnored(GTMaterialRegistry.getMaterial("wood"), "exdeorum:wood_chippings")
	
	/*TagPrefix.ore_chunk.setIgnored(GTMaterialRegistry.getMaterial("iron"), "exdeorum:iron_ore_chunk")
	TagPrefix.ore_chunk.setIgnored(GTMaterialRegistry.getMaterial("copper"), "exdeorum:copper_ore_chunk")
	TagPrefix.ore_chunk.setIgnored(GTMaterialRegistry.getMaterial("gold"), "exdeorum:gold_ore_chunk")
	TagPrefix.ore_chunk.setIgnored(GTMaterialRegistry.getMaterial("zinc"), "exdeorum:zinc_ore_chunk")*/
	
	//create compat
	TagPrefix.block.modifyMaterialAmount(GTMaterialRegistry.getMaterial("rose_quartz"), 4)
	
	TagPrefix.block.setIgnored(GTMaterialRegistry.getMaterial("asurine"), "create:asurine")
	TagPrefix.block.setIgnored(GTMaterialRegistry.getMaterial("crimsite"), "create:crimsite")
	TagPrefix.block.setIgnored(GTMaterialRegistry.getMaterial("ochrum"), "create:ochrum")
	TagPrefix.block.setIgnored(GTMaterialRegistry.getMaterial("veridium"), "create:veridium")
	TagPrefix.block.setIgnored(GTMaterialRegistry.getMaterial("limestone"), "create:limestone")
	TagPrefix.block.setIgnored(GTMaterialRegistry.getMaterial("scoria"), "create:scoria")
	TagPrefix.block.setIgnored(GTMaterialRegistry.getMaterial("scorchia"), "create:scorchia")
	
	TagPrefix.plate.setIgnored(GTMaterialRegistry.getMaterial("iron"), "create:iron_sheet")
	
	TagPrefix.plate.setIgnored(GTMaterialRegistry.getMaterial("copper"), "create:copper_sheet")
	TagPrefix.nugget.setIgnored(GTMaterialRegistry.getMaterial("copper"), "create:copper_nugget")
	
	TagPrefix.plate.setIgnored(GTMaterialRegistry.getMaterial("gold"), "create:gold_sheet")
	
	TagPrefix.plate.setIgnored(GTMaterialRegistry.getMaterial("obsidian"), "create:sturdy_sheet")
	TagPrefix.dust.setIgnored(GTMaterialRegistry.getMaterial("obsidian"), "create:powdered_obsidian")
	
	TagPrefix.dust.setIgnored(GTMaterialRegistry.getMaterial("wheat"), "create:wheat_flour")
	
	TagPrefix.dust.setIgnored(GTMaterialRegistry.getMaterial("netherrack"), "create:cinder_flour")
	
	TagPrefix.ingot.setIgnored(GTMaterialRegistry.getMaterial("zinc"), "create:zinc_ingot")
	TagPrefix.block.setIgnored(GTMaterialRegistry.getMaterial("zinc"), "create:zinc_block")
	TagPrefix.nugget.setIgnored(GTMaterialRegistry.getMaterial("zinc"), "create:zinc_nugget")
	TagPrefix.ore.setIgnored(GTMaterialRegistry.getMaterial("zinc"), "create:zinc_ore")
	TagPrefix.oreDeepslate.setIgnored(GTMaterialRegistry.getMaterial("zinc"), "create:deepslate_zinc_ore")
	TagPrefix.rawOre.setIgnored(GTMaterialRegistry.getMaterial("zinc"), "create:raw_zinc")
	TagPrefix.rawOreBlock.setIgnored(GTMaterialRegistry.getMaterial("zinc"), "create:raw_zinc_block")
	
	TagPrefix.ingot.setIgnored(GTMaterialRegistry.getMaterial("brass"), "create:brass_ingot")
	TagPrefix.plate.setIgnored(GTMaterialRegistry.getMaterial("brass"), "create:brass_sheet")
	TagPrefix.block.setIgnored(GTMaterialRegistry.getMaterial("brass"), "create:brass_block")
	TagPrefix.nugget.setIgnored(GTMaterialRegistry.getMaterial("brass"), "create:brass_nugget")
	
	//productive bees compat
	TagPrefix.ingot.setIgnored(GTMaterialRegistry.getMaterial("wax"), "productivebees:wax")
	TagPrefix.block.setIgnored(GTMaterialRegistry.getMaterial("wax"), "productivebees:wax_block")
	
	//Biomancy compat
	TagPrefix.dust.setIgnored(GTMaterialRegistry.getMaterial("exotic_compound"), "biomancy:exotic_dust")
	TagPrefix.dust.setIgnored(GTMaterialRegistry.getMaterial("biomass"), "biomancy:organic_matter")
	TagPrefix.dust.setIgnored(GTMaterialRegistry.getMaterial("nutrients"), "biomancy:nutrients")
	TagPrefix.dustTiny.setIgnored(GTMaterialRegistry.getMaterial("nutrient_paste"), "biomancy:nutrient_paste")
	TagPrefix.ingot.setIgnored(GTMaterialRegistry.getMaterial("nutrient_paste"), "biomancy:nutrient_bar")
	TagPrefix.dust.setIgnored(GTMaterialRegistry.getMaterial("calcium_carbonate"), "biomancy:stone_powder")
})
GTCEuStartupEvents.craftingComponents(event => {
	event.setMaterialEntry(GTCraftingComponents.PLATE, GTValues.UEV, new MaterialEntry("plate", "gtceu:activated_prismarine"))
	event.setMaterialEntry(GTCraftingComponents.ROTOR, GTValues.UEV, new MaterialEntry("rotor", "gtceu:activated_prismarine"))
	event.setMaterialEntry(GTCraftingComponents.FRAME, GTValues.UEV, new MaterialEntry("frame", "gtceu:activated_prismarine"))
	event.setMaterialEntry(GTCraftingComponents.PIPE_REACTOR, GTValues.UEV, new MaterialEntry("pipeHugeFluid", "gtceu:polybenzimidazole"))
	event.setMaterialEntry(GTCraftingComponents.SENSOR_EMITTER_GEM, GTValues.UEV, new MaterialEntry("gemFlawless", "gtceu:prismarine"))
	
})
StartupEvents.registry("block", event => {
	event.create("hyper_experience_coil_block", "gtceu:coil")
		.temperature(13200)
		.level(16)
		.energyDiscount(16)
		.tier(10)
		.coilMaterial(() => GTMaterials.get("hyper_experience"))
		.texture("gtceu:block/casings/coils/machine_coil_hyper_experience")
		.hardness(5)
		.requiresTool(true)
		.material("metal")
})

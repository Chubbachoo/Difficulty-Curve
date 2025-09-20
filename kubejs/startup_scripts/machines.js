/*GTCEuStartupEvents.registry("gtceu:recipe_type", event => {
	event.create("heated_mixer")
		.category("simple")
		.setEUIO("in")
		.setMaxIOSize(3, 1, 3, 1)
		.setSlotOverlay(false, false, true, GuiTextures.BREWER_OVERLAY)
		.setSlotOverlay(true, false, false, GuiTextures.DUST_OVERLAY)
		.setSlotOverlay(true, false, true, GuiTextures.DUST_OVERLAY)
		.setProgressBar(GuiTextures.PROGRESS_BAR_MIXER, FillDirection.LEFT_TO_RIGHT)
		.setSound(GTSoundEntries.MIXER)
})

GTCEuStartupEvents.registry("gtceu:machine", event => {
	event.create("heated_mixer", "custom")
		.tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV, GTValues.UIV, GTValues.UEV, GTValues.UXV, GTValues.OpV)
		.tankScalingFunction(tier => tier * 3200)
		.definition((tier, builder) =>{
			let name = "LV";
				switch (tier) {
					case GTValues.MV:
						name = "MV";
						break;
					case GTValues.HV:
						name = "HV";
						break;
					case GTValues.EV:
						name = "EV";
						break;
					case GTValues.IV:
						name = "IV";
						break;
					case GTValues.LuV:
						name = "LuV";
						break;
					case GTValues.ZPM:
						name = "ZPM";
						break;
					case GTValues.UV:
						name = "UV";
						break;
					case GTValues.UHV:
						name = "UHV";
						break;
					case GTValues.UIV:
						name = "UIV";
						break;
					case GTValues.UEV:
						name = "UEV";
						break;
					case GTValues.UXV:
						name = "UXV";
						break;
					case GTValues.OpV:
						name = "OpV";
						break;
				}
			builder
				.generateLang(name + " Heated Mixer")
				.recipeType("heated_mixer", "superheated_mixer")
				.workableTieredHullModel("gtceu:block/machines/mixer")
		)}
})*/

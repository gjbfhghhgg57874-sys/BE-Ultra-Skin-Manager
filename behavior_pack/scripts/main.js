import { world, system } from "@minecraft/server";

world.afterEvents.worldLoad.subscribe(() => {
world.sendMessage("§c[BE Ultra Skin Manager] §aScript loaded!");
});

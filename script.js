// === UI helpers ===
function getSelectedValues() {
  const deckType = document.getElementById("deck-type-select").value;
  const arena = document.getElementById("arena-select").value;
  return { deckType, arena };
}

function showDeckUI() {
  const deckMain = document.querySelector(".deck-main");
  const deck = document.querySelector(".all-cards-div");
  if (deckMain) deckMain.style.display = "none";
  if (deck) deck.style.display = "flex";
}

// === Data (kept compatible with your original) ===
const buildings = [
  { name: "Cannon", cost: 3, src: "building_icons/CannonCard.png", deckType: ["all", "cycle", "control", "bait", "siege"], arena: "under&5" },
  { name: "Inferno Tower", cost: 5, src: "building_icons/InfernoTowerCard.png", deckType: ["all", "control", "beatdown", "bridgeSpam", "bait"], arena: "under&5" },
  { name: "Tesla", cost: 4, src: "building_icons/TeslaCard.png", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "10" },
  { name: "Bomb Tower", cost: 4, src: "building_icons/BombTowerCard.png", deckType: ["all", "control", "beatdown", "bridgeSpam"], arena: "under&5" },
  { name: "Goblin Hut", cost: 4, src: "building_icons/GoblinHutCard.png", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam"], arena: "under&5" },
  { name: "Elixir Collector", cost: 6, src: "building_icons/ElixirCollectorCard.png", deckType: ["all", "beatdown"], arena: "15" },
  { name: "Barbarian Hut", cost: 6, src: "building_icons/BarbarianHutCard.png", deckType: ["all"], arena: "9" },
  { name: "Tombstone", cost: 3, src: "building_icons/TombstoneCard.png", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam"], arena: "under&5" },
  { name: "Goblin Cage", cost: 4, src: "building_icons/GoblinCageCard.png", deckType: ["all", "cycle", "control", "beatdown"], arena: "under&5" },
];
const airTroops = [
  { name: "Baby Dragon", cost: 4, src: "air_troop_icons/BabyDragonCard.png", deckType: ["all", "control", "beatdown", "bridgeSpam"], arena: "6" },
  { name: "Minions", cost: 3, src: "air_troop_icons/MinionsCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "under&5" },
  { name: "Mega Minion", cost: 3, src: "air_troop_icons/MegaMinionCard.webp", deckType: ["all", "beatdown", "control"], arena: "under&5" },
  { name: "Minion Horde", cost: 5, src: "air_troop_icons/MinionHordeCard.webp", deckType: ["all", "bait"], arena: "10" },
  { name: "Inferno Dragon", cost: 4, src: "air_troop_icons/InfernoDragonCard.webp", deckType: ["all", "control", "beatdown", "bridgeSpam"], arena: "11" },
  { name: "Bats", cost: 2, src: "air_troop_icons/BatsCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "under&5" },
  { name: "Spirit Emperess", cost: 6, src: "air_troop_icons/SpiritEmpressCard.webp", deckType: ["all", "beatdown", "control", "bait"], arena: "15" },
  { name: "Flying Machine", cost: 4, src: "air_troop_icons/FlyingMachineCard.webp", deckType: ["all", "beatdown", "control", "bridgeSpam"], arena: "under&5" },
  { name: "Skeleton Dragons", cost: 4, src: "air_troop_icons/SkeletonDragonsCard.webp", deckType: ["all", "control", "beatdown", "bridgeSpam"], arena: "under&5" },
  { name: "Electro Dragon", cost: 5, src: "air_troop_icons/ElectroDragonCard.webp", deckType: ["all", "beatdown", "bridgeSpam"], arena: "12" },
  { name: "Phoenix", cost: 4, src: "air_troop_icons/PhoenixCard.webp", deckType: ["all", "beatdown", "bridgeSpam"], arena: "12" },
];
const troopsThatGoToTower = [
  { name: "Mortar", cost: 4, src: "building_icons/MortarCard.png", deckType: ["all", "siege"], arena: "under&5" },
  { name: "X-Bow", cost: 6, src: "building_icons/X-BowCard.png", deckType: ["all", "siege"], arena: "10" },
  { name: "Giant", cost: 5, src: "troops_that_go_to_tower_icons/GiantCard.webp", deckType: ["all", "beatdown"], arena: "under&5" },
  { name: "Golem", cost: 8, src: "troops_that_go_to_tower_icons/GolemCard.webp", deckType: ["all", "beatdown"], arena: "10" },
  { name: "Ballon", cost: 5, src: "troops_that_go_to_tower_icons/BalloonCard.webp", deckType: ["all", "beatdown", "bridgeSpam"], arena: "7" },
  { name: "Lava Hound", cost: 7, src: "troops_that_go_to_tower_icons/LavaHoundCard.webp", deckType: ["all", "beatdown"], arena: "13" },
  { name: "Royal Giant", cost: 6, src: "troops_that_go_to_tower_icons/RoyalGiantCard.webp", deckType: ["all", "beatdown", "bridgeSpam"], arena: "7" },
  { name: "Hog Rider", cost: 4, src: "troops_that_go_to_tower_icons/HogRiderCard.webp", deckType: ["all", "cycle", "bridgeSpam"], arena: "under&5" },
  { name: "Ram Rider", cost: 5, src: "troops_that_go_to_tower_icons/RamRiderCard.webp", deckType: ["all", "bridgeSpam", "beatdown"], arena: "11" },
  { name: "Wall Breakers", cost: 2, src: "troops_that_go_to_tower_icons/WallBreakersCard.webp", deckType: ["all", "cycle", "bridgeSpam", "bait"], arena: "12" },
  { name: "Miner", cost: 3, src: "troops_that_go_to_tower_icons/MinerCard.webp", deckType: ["all", "control", "bait", "cycle"], arena: "11" },
  { name: "Battle Ram", cost: 4, src: "troops_that_go_to_tower_icons/BattleRamCard.webp", deckType: ["all", "bridgeSpam", "beatdown"], arena: "under&5" },
  { name: "Skeleton Barrel", cost: 3, src: "troops_that_go_to_tower_icons/SkeletonBarrelCard.webp", deckType: ["all", "bait", "bridgeSpam"], arena: "9" },
  { name: "Suspusious Bush", cost: 2, src: "troops_that_go_to_tower_icons/SuspiciousBushCard.webp", deckType: ["all", "cycle", "bait", "control"], arena: "13" },
  { name: "Electro Giant", cost: 7, src: "troops_that_go_to_tower_icons/ElectroGiantCard.webp", deckType: ["all", "beatdown"], arena: "13" },
  { name: "Elixir Golem", cost: 3, src: "troops_that_go_to_tower_icons/ElixirGolemCard.webp", deckType: ["all", "beatdown", "bridgeSpam"], arena: "14" },
  { name: "Rune Giant", cost: 4, src: "troops_that_go_to_tower_icons/RuneGiantCard.webp", deckType: ["all"], arena: "9" },
  { name: "Royal Hogs", cost: 5, src: "troops_that_go_to_tower_icons/RoyalHogsCard.webp", deckType: ["all", "bridgeSpam", "bait", "cycle"], arena: "7" },
  { name: "Graveyard", cost: 5, src: "troops_that_go_to_tower_icons/GraveyardCard.webp", deckType: ["all", "control", "beatdown"], arena: "12" },
  { name: "Goblin Barrel", cost: 3, src: "troops_that_go_to_tower_icons/GoblinBarrelCard.webp", deckType: ["all", "bait", "cycle", "control"], arena: "6" },
  { name: "Goblin Drill", cost: 4, src: "troops_that_go_to_tower_icons/GoblinDrillCard.webp", deckType: ["all", "bridgeSpam", "bait", "cycle", "control"], arena: "14" },
  { name: "Goblin Giant", cost: 6, src: "troops_that_go_to_tower_icons/GoblinGiantCard.webp", deckType: ["all", "beatdown"], arena: "9" },
];
const smallSpells = [
  // Note: original had a typo "brigeSpam". We accept both "bridgeSpam" and "brigeSpam" in filtering.
  { name: "Zap", cost: 2, src: "small_spell_icons/ZapCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "brigeSpam", "siege"], arena: "under&5" },
  { name: "Log", cost: 2, src: "small_spell_icons/TheLogCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "11" },
  { name: "Arrows", cost: 3, src: "small_spell_icons/ArrowsCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "under&5" },
  { name: "Giant Snowball", cost: 2, src: "small_spell_icons/GiantSnowballCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "8" },
  { name: "Barbarian Barrel", cost: 2, src: "small_spell_icons/BarbarianBarrelCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "9" },
  { name: "Tornado", cost: 3, src: "small_spell_icons/TornadoCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "15" },
  { name: "Earthquake", cost: 3, src: "small_spell_icons/EarthquakeCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "12" },
  { name: "Vines", cost: 3, src: "small_spell_icons/VinesCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "8" },
  { name: "Rage", cost: 2, src: "small_spell_icons/RageCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "14" },
  { name: "Clone", cost: 3, src: "small_spell_icons/CloneCard.webp", deckType: ["all", "bait", "beatdown", "bridgeSpam"], arena: "15" },
  { name: "Royal Delivery", cost: 3, src: "small_spell_icons/RoyalDeliveryCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "14" },
  { name: "Goblin Curse", cost: 2, src: "small_spell_icons/GoblinCurseCard.webp", deckType: ["all", "cycle", "control", "bait"], arena: "14" },
];
const bigSpells = [
  { name: "Fireball", cost: 4, src: "big_spell_icons/FireballCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "under&5" },
  { name: "Poison", cost: 4, src: "big_spell_icons/PoisonCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "9" },
  { name: "Rocket", cost: 6, src: "big_spell_icons/RocketCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "under&5" },
  { name: "Lightning", cost: 6, src: "big_spell_icons/LightningCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "8" },
  { name: "Freeze", cost: 4, src: "big_spell_icons/FreezeCard.webp", deckType: ["all", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "8" },
  { name: "Void", cost: 3, src: "big_spell_icons/VoidCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "15" },
  { name: "Mirror", cost: "+1", src: "big_spell_icons/MirrorCard.webp", deckType: ["all", "beatdown", "bridgeSpam"], arena: "15" },
];
const miniTanks = [
  { name: "Goblinstein", cost: 5, src: "troops_that_go_to_tower_icons/GoblinsteinCard.webp", deckType: ["all", "beatdown", "bridgeSpam"], arena: "16&above" },
  { name: "Knight", cost: 3, src: "mini_tank_icons/KnightCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "under&5" },
  { name: "Valkyrie", cost: 4, src: "mini_tank_icons/ValkyrieCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "under&5" },
  { name: "Mini P.E.K.K.A", cost: 4, src: "mini_tank_icons/MiniPEKKACard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "under&5" },
  { name: "Dark Prince", cost: 4, src: "mini_tank_icons/DarkPrinceCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "7" },
  { name: "Prince", cost: 5, src: "mini_tank_icons/PrinceCard.webp", deckType: ["all", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "7" },
  { name: "Ice Golem", cost: 2, src: "mini_tank_icons/IceGolemCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "8" },
  { name: "Battle Healer", cost: 4, src: "mini_tank_icons/BattleHealerCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "8" },
  { name: "Mighty Miner", cost: 4, src: "mini_tank_icons/MightyMinerCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "16&above" },
  { name: "Lumberjack", cost: 4, src: "mini_tank_icons/LumberjackCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "14" },
  { name: "Fisherman", cost: 3, src: "mini_tank_icons/FishermanCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "15" },
  { name: "Royal Ghost", cost: 3, src: "mini_tank_icons/RoyalGhostCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "12" },
  { name: "Rascals", cost: 5, src: "mini_tank_icons/RascalsCard.webp", deckType: ["all", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "13" },
  { name: "Bandit", cost: 3, src: "mini_tank_icons/BanditCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "13" },
  { name: "Furnace", cost: 4, src: "mini_tank_icons/FurnaceCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "10" },
  { name: "Skeleton King", cost: 4, src: "mini_tank_icons/SkeletonKingCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "16&above" },
  { name: "Monk", cost: 5, src: "mini_tank_icons/MonkCard.webp", deckType: ["all", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "16&above" },
  { name: "Golden Knight", cost: 4, src: "mini_tank_icons/GoldenKnightCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "16&above" },
  { name: "Bowler", cost: 5, src: "mini_tank_icons/BowlerCard.webp", deckType: ["all", "control", "beatdown", "bridgeSpam", "siege"], arena: "13" },
  { name: "Goblin Machine", cost: 5, src: "mini_tank_icons/GoblinMachineCard.webp", deckType: ["all", "control", "beatdown", "bridgeSpam", "siege"], arena: "15" },
  { name: "Giant Skeleton", cost: 6, src: "mini_tank_icons/GiantSkeletonCard.webp", deckType: ["all", "beatdown", "bridgeSpam", "siege"], arena: "8" },
];
const damageDealers = [
  { name: "Musketeer", cost: 4, src: "damage_dealer_icons/MusketeerCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "under&5" },
  { name: "Archers", cost: 3, src: "damage_dealer_icons/ArchersCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "under&5" },
  { name: "Dart Goblin", cost: 3, src: "damage_dealer_icons/DartGoblinCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "9" },
  { name: "Hunter", cost: 4, src: "damage_dealer_icons/HunterCard.webp", deckType: ["all", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "10" },
  { name: "Cannon Cart", cost: 5, src: "damage_dealer_icons/CannonCartCard.webp", deckType: ["all", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "15" },
  { name: "Firecracker", cost: 3, src: "damage_dealer_icons/FirecrackerCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "12" },
  { name: "Little Prince", cost: 3, src: "damage_dealer_icons/LittlePrinceCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "16&above" },
  { name: "Executioner", cost: 5, src: "damage_dealer_icons/ExecutionerCard.webp", deckType: ["all", "control", "beatdown", "bridgeSpam", "siege"], arena: "14" },
  { name: "Elite Barbarians", cost: 6, src: "damage_dealer_icons/EliteBarbariansCard.webp", deckType: ["all", "control", "beatdown", "bridgeSpam", "siege"], arena: "10" },
  { name: "P.E.K.K.A", cost: 7, src: "damage_dealer_icons/PEKKACard.webp", deckType: ["all", "beatdown", "bridgeSpam"], arena: "6" },
  { name: "Boss Bandit", cost: 6, src: "damage_dealer_icons/BossBanditCard.webp", deckType: ["all", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "16&above" },
  { name: "Mega Knight", cost: 7, src: "damage_dealer_icons/MegaKnightCard.webp", deckType: ["all", "beatdown", "bridgeSpam"], arena: "11" },
  { name: "Archer Queen", cost: 5, src: "damage_dealer_icons/ArcherQueenCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "16&above" },
  { name: "Three Musketeers", cost: 9, src: "damage_dealer_icons/ThreeMusketeersCard.webp", deckType: ["all", "beatdown", "bridgeSpam"], arena: "7" },
  { name: "Sparky", cost: 6, src: "damage_dealer_icons/SparkyCard.webp", deckType: ["all", "beatdown"], arena: "11" },
];
const support = [
  { name: "Wizard", cost: 5, src: "support_icons/WizardCard.webp", deckType: ["all", "control", "beatdown", "bridgeSpam"], arena: "under&5" },
  { name: "Witch", cost: 5, src: "support_icons/WitchCard.webp", deckType: ["all", "control", "beatdown", "bridgeSpam"], arena: "6" },
  { name: "Skeleton Army", cost: 3, src: "support_icons/SkeletonArmyCard.webp", deckType: ["all", "bait", "cycle", "control"], arena: "6" },
  { name: "Goblin Gang", cost: 3, src: "support_icons/GoblinGangCard.webp", deckType: ["all", "bait", "cycle", "control"], arena: "9" },
  { name: "Goblin", cost: 2, src: "support_icons/GoblinsCard.webp", deckType: ["all", "bait", "cycle", "control"], arena: "under&5" },
  { name: "Spear Goblins", cost: 2, src: "support_icons/SpearGoblinsCard.webp", deckType: ["all", "bait", "cycle", "control"], arena: "under&5" },
  { name: "Zappies", cost: 4, src: "support_icons/ZappiesCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "10" },
  { name: "Guards", cost: 3, src: "support_icons/GuardsCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "6" },
  { name: "Barbarians", cost: 5, src: "support_icons/BarbariansCard.webp", deckType: ["all", "control", "beatdown", "bridgeSpam", "siege"], arena: "under&5" },
  { name: "Royal Recruits", cost: 7, src: "support_icons/RoyalRecruitsCard.webp", deckType: ["all", "control", "beatdown", "bridgeSpam"], arena: "7" },
  { name: "Skeletons", cost: 1, src: "support_icons/SkeletonsCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "under&5" },
  { name: "Fire Spirit", cost: 1, src: "support_icons/FireSpiritCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "under&5" },
  { name: "Ice Spirit", cost: 1, src: "support_icons/IceSpiritCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "8" },
  { name: "Heal Spirit", cost: 1, src: "support_icons/HealSpiritCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "13" },
  { name: "Electro Spirit", cost: 1, src: "support_icons/ElectroSpiritCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "under&5" },
  { name: "Bomber", cost: 2, src: "support_icons/BomberCard.webp", deckType: ["all", "cycle", "control", "bait", "beatdown", "bridgeSpam", "siege"], arena: "under&5" },
  { name: "Berserker", cost: 2, src: "support_icons/BerserkerCard.webp", deckType: ["all", "cycle", "bait", "beatdown", "bridgeSpam", "siege"], arena: "9" },
  { name: "Ice Wizard", cost: 3, src: "support_icons/IceWizardCard.webp", deckType: ["all", "control", "beatdown", "bridgeSpam"], arena: "12" },
  { name: "Electro Wizard", cost: 4, src: "support_icons/ElectroWizardCard.webp", deckType: ["all", "control", "beatdown", "bridgeSpam"], arena: "11" },
  { name: "Magic Archer", cost: 4, src: "support_icons/MagicArcherCard.webp", deckType: ["all", "control", "beatdown", "bridgeSpam", "siege"], arena: "13" },
  { name: "Goblin Demolisher", cost: 4, src: "support_icons/GoblinDemolisherCard.webp", deckType: ["all", "control", "beatdown", "bridgeSpam"], arena: "12" },
  { name: "Night Witch", cost: 4, src: "support_icons/NightWitchCard.webp", deckType: ["all", "control", "beatdown", "bridgeSpam"], arena: "14" },
  { name: "Mother Witch", cost: 4, src: "support_icons/MotherWitchCard.webp", deckType: ["all", "control", "beatdown", "bridgeSpam"], arena: "15" },
  { name: "Princess", cost: 3, src: "support_icons/PrincessCard.webp", deckType: ["all", "cycle", "control", "bait", "bridgeSpam"], arena: "11" },
];

// === Filtering helpers ===
function normalizeDeckType(deckType) {
  // Accept both "bridgeSpam" and legacy typo "brigeSpam"
  if (deckType === "bridgeSpam") return ["bridgeSpam", "brigeSpam"];
  return [deckType];
}

function isAvailable(card, arena) {
  if (arena === "under&5") return card.arena === "under&5";
  if (arena === "16&above") return true;
  const a = parseInt(arena, 10);
  const ca = parseInt(card.arena, 10);
  if (card.arena === "under&5") return true;
  if (Number.isNaN(ca)) return false;
  return ca <= a;
}

function pickRandom(pool, arena, deckType) {
  const types = deckType === "all" ? null : normalizeDeckType(deckType);
  const filtered = pool.filter((c) => {
    const dtOk = !types || (Array.isArray(c.deckType) && types.some((t) => c.deckType.includes(t)));
    return dtOk && isAvailable(c, arena);
  });
  if (!filtered.length) return null;
  return filtered[Math.floor(Math.random() * filtered.length)];
}

// === DOM update ===
function updateCard(slot, card) {
  document.querySelector(`.${slot}`).innerHTML = card.name;
  document.querySelector(`.${slot}-cost`).innerHTML = card.cost;
  document.querySelector(`.${slot}-image`).src = card.src;
}

function renderAverageElixir(cards) {
  const sum = cards.reduce((acc, c) => {
    const cost = typeof c.cost === "string" ? (c.cost.includes("+") ? 1 : parseFloat(c.cost) || 0) : c.cost;
    return acc + (Number(cost) || 0);
  }, 0);
  const avg = sum / cards.length;
  const el = document.querySelector(".avarage-elixir");
  el.innerHTML = "Середня вартість еліксиру: " + avg.toFixed(1);
  el.style.color = avg <= 3.0 ? "green" : avg <= 4.0 ? "yellow" : "red";
}

// === Core deck build (general for all arenas) ===
function buildDeck(deckType, arena) {
  const slots = {
    "building": buildings,
    "air-troop": airTroops,
    "win-condition": troopsThatGoToTower,
    "small-spell": smallSpells,
    "big-spell": bigSpells,
    "mini-tank": miniTanks,
    "damage-dealer": damageDealers,
    "support": support,
  };

  const chosen = [];

  if (deckType === "bait") {
    // Bait special case: pick two different supports,
    // put first into damage-dealer slot, second into support slot
    const supportPool = support.filter((c) => isAvailable(c, arena) && Array.isArray(c.deckType) && c.deckType.includes("bait"));
    if (supportPool.length < 2) {
      alert("Not enough support cards available for bait in this arena. Please change settings.");
      return;
    }

    // Pick the regular 6 slots first
    for (const [slot, pool] of Object.entries(slots)) {
      if (slot === "damage-dealer" || slot === "support") continue;
      const card = pickRandom(pool, arena, deckType);
      if (!card) {
        alert(`No available card for slot "${slot}" in arena "${arena}" for "${deckType}"`);
        return;
      }
      updateCard(slot, card);
      chosen.push(card);
    }

    // Pick two distinct supports
    const first = supportPool[Math.floor(Math.random() * supportPool.length)];
    let second;
    do {
      second = supportPool[Math.floor(Math.random() * supportPool.length)];
    } while (second.name === first.name);

    updateCard("damage-dealer", first);
    updateCard("support", second);
    chosen.push(first, second);

    renderAverageElixir(chosen);
    return;
  }

  // Regular flow for all other deck types
  for (const [slot, pool] of Object.entries(slots)) {
    const card = pickRandom(pool, arena, deckType);
    if (!card) {
      alert(`No available card for slot "${slot}" in arena "${arena}" for "${deckType}"`);
      return;
    }
    updateCard(slot, card);
    chosen.push(card);
  }

  renderAverageElixir(chosen);
}

// === Button wiring ===
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".container-button");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const { deckType, arena } = getSelectedValues();
    if (deckType === "noChoose") {
      alert("Please choose deck type!");
      return;
    }
    if (arena === "noChoose") {
      alert("Choose your arena!");
      return;
    }

    showDeckUI();
    buildDeck(deckType, arena);
  });
});
let generateButton = document.querySelector(".container-button");
generateButton.addEventListener("click", function() {
    // Тут буде логіка генерації колоди

    let deckMain = document.querySelector(".deck-main");
    deckMain.style.display = "none";
    let deck = document.querySelector(".all-cards-div");
    deck.style.display = "flex";

    const buildings = [
        { name: "Cannon", cost: 3,  src:"building_icons/CannonCard.png" },
        { name: "Inferno Tower", cost: 5, src:"building_icons/InfernoTowerCard.png" },
        { name: "Tesla", cost: 4, src:"building_icons/TeslaCard.png" },
        { name: "Bomb Tower", cost: 4, src:"building_icons/BombTowerCard.png" },
        { name: "Goblin Hut", cost: 4, src:"building_icons/GoblinHutCard.png" },
        { name: "Mortar", cost: 4, src:"building_icons/MortarCard.png" },
        { name: "X-Bow", cost: 6, src:"building_icons/X-BowCard.png" },
        { name: "Elixir Collector", cost: 6, src:"building_icons/ElixirCollectorCard.png" },
        { name: "Barbarian Hut", cost: 6, src:"building_icons/BarbarianHutCard.png" },
        { name: "Tombstone", cost: 3, src:"building_icons/TombstoneCard.png" },
        { name: "Goblin Cage", cost: 4, src:"building_icons/GoblinCageCard.png" },
    ];
    const airTroops = [
        { name: "Baby Dragon", cost: 4, src:"air_troop_icons/BabyDragonCard.png" },
        { name: "Minions", cost: 3, src:"air_troop_icons/MinionsCard.webp" },
        { name: "Mega Minion", cost: 3, src:"air_troop_icons/MegaMinionCard.webp" },
        { name: "Minion Horde", cost: 5, src:"air_troop_icons/MinionHordeCard.webp" },
        { name: "Inferno Dragon", cost: 4, src:"air_troop_icons/InfernoDragonCard.webp" },
        { name: "Bats", cost: 2, src:"air_troop_icons/BatsCard.webp" },
        { name: "Spirit Emperess", cost: "3/6", src:"air_troop_icons/SpiritEmpressCard.webp" },
        { name: "Flying Machine", cost: 4, src:"air_troop_icons/FlyingMachineCard.webp" },
        { name: "Skeleton Dragons", cost: 4, src:"air_troop_icons/SkeletonDragonsCard.webp" },
        { name: "Electro Dragon", cost: 5, src:"air_troop_icons/ElectroDragonCard.webp" },
        { name: "Phoenix", cost: 4, src:"air_troop_icons/PhoenixCard.webp" },
    ];
    const troopsThatGoToTower = [
        { name: "Giant", cost: 5, src:"troops_that_go_to_tower_icons/GiantCard.webp" },
        { name: "Golem", cost: 8, src:"troops_that_go_to_tower_icons/GolemCard.webp" },
        { name: "Ballon", cost: 5, src:"troops_that_go_to_tower_icons/BalloonCard.webp" },
        { name: "Lava Hound", cost: 7, src:"troops_that_go_to_tower_icons/LavaHoundCard.webp" },
        { name: "Royal Giant", cost: 6, src:"troops_that_go_to_tower_icons/RoyalGiantCard.webp" },
        { name: "Hog Rider", cost: 4, src:"troops_that_go_to_tower_icons/HogRiderCard.webp" },
        { name: "Ram Rider", cost: 5, src:"troops_that_go_to_tower_icons/RamRiderCard.webp" },
        { name: "Wall Breakers", cost: 2, src:"troops_that_go_to_tower_icons/WallBreakersCard.webp" },
        { name: "Miner", cost: 3, src:"troops_that_go_to_tower_icons/MinerCard.webp" },
        { name: "Battle Ram", cost: 4, src:"troops_that_go_to_tower_icons/BattleRamCard.webp" },
        { name: "Skeleton Barrel", cost: 3, src:"troops_that_go_to_tower_icons/SkeletonBarrelCard.webp" },
        { name: "Suspusious Bush", cost: 2, src:"troops_that_go_to_tower_icons/SuspiciousBushCard.webp" },
        { name: "Electro Giant", cost: 7, src:"troops_that_go_to_tower_icons/ElectroGiantCard.webp" },
        { name: "Elixir Golem", cost: 3, src:"troops_that_go_to_tower_icons/ElixirGolemCard.webp" },
        { name: "Rune Giant", cost: 4, src:"troops_that_go_to_tower_icons/RuneGiantCard.webp" },
        { name: "Royal Hogs", cost: 5, src:"troops_that_go_to_tower_icons/RoyalHogsCard.webp" },
        { name: "Graveyard", cost: 5, src:"troops_that_go_to_tower_icons/GraveyardCard.webp" },
        { name: "Goblin Barrel", cost: 3, src:"troops_that_go_to_tower_icons/GoblinBarrelCard.webp" },
        { name: "Goblinstein", cost: 5, src:"troops_that_go_to_tower_icons/GoblinsteinCard.webp" },
        { name: "Goblin Drill", cost: 4, src:"troops_that_go_to_tower_icons/GoblinDrillCard.webp" },
        { name: "Goblin Giant", cost: 6, src:"troops_that_go_to_tower_icons/GoblinGiantCard.webp" },
    ];
   const smallSpells = [
        { name: "Zap", cost: 2, src:"small_spell_icons/ZapCard.webp" },
        { name: "Log", cost: 2, src:"small_spell_icons/TheLogCard.webp" },
        { name: "Arrows", cost: 3, src:"small_spell_icons/ArrowsCard.webp" },
        { name: "Giant Snowball", cost: 2, src:"small_spell_icons/GiantSnowballCard.webp" },
        { name: "Barbarian Barrel", cost: 2, src:"small_spell_icons/BarbarianBarrelCard.webp" },
        { name: "Tornado", cost: 3, src:"small_spell_icons/TornadoCard.webp" },
        { name: "Earthquake", cost: 3, src:"small_spell_icons/EarthquakeCard.webp" },
        { name: "Vines", cost: 3, src:"small_spell_icons/VinesCard.webp" },
        { name: "Rage", cost: 2, src:"small_spell_icons/RageCard.webp" },
        { name: "Clone", cost: 3, src:"small_spell_icons/CloneCard.webp" },
        { name: "Royal Delivery", cost: 3, src:"small_spell_icons/RoyalDeliveryCard.webp" },
        { name: "Goblin Curse", cost: 2, src:"small_spell_icons/GoblinCurseCard.webp" },
    ];
   const bigSpells = [
        { name: "Fireball", cost: 4, src:"big_spell_icons/FireballCard.webp" },
        { name: "Poison", cost: 4, src:"big_spell_icons/PoisonCard.webp" },
        { name: "Rocket", cost: 6, src:"big_spell_icons/RocketCard.webp" },
        { name: "Lightning", cost: 6, src:"big_spell_icons/LightningCard.webp" },
        { name: "Freeze", cost: 4, src:"big_spell_icons/FreezeCard.webp" },
        { name: "Void", cost: 3, src:"big_spell_icons/VoidCard.webp" },
        { name: "Mirror", cost: "?", src:"big_spell_icons/MirrorCard.webp" },
    ];
    const miniTanks = [
        { name: "Knight", cost: 3, src:"mini_tank_icons/KnightCard.webp" },
        { name: "Valkyrie", cost: 4, src:"mini_tank_icons/ValkyrieCard.webp" },
        { name: "Mini P.E.K.K.A", cost: 4, src:"mini_tank_icons/MiniPEKKACard.webp" },
        { name: "Dark Prince", cost: 4, src:"mini_tank_icons/DarkPrinceCard.webp" },
        { name: "Prince", cost: 5, src:"mini_tank_icons/PrinceCard.webp" },
        { name: "Ice Golem", cost: 2, src:"mini_tank_icons/IceGolemCard.webp" },
        { name: "Battle Healer", cost: 4, src:"mini_tank_icons/BattleHealerCard.webp" },
        { name: "Mighty Miner", cost: 4, src:"mini_tank_icons/MightyMinerCard.webp" },
        { name: "Lumberjack", cost: 4, src:"mini_tank_icons/LumberjackCard.webp" },
        { name: "Fisherman", cost: 3, src:"mini_tank_icons/FishermanCard.webp" },
        { name: "Royal Ghost", cost: 3, src:"mini_tank_icons/RoyalGhostCard.webp" },
        { name: "Rascals", cost: 5, src:"mini_tank_icons/RascalsCard.webp" },
        { name: "Bandit", cost: 3, src:"mini_tank_icons/BanditCard.webp" },
        { name: "Furnace", cost: 4, src:"mini_tank_icons/FurnaceCard.webp" },
        { name: "Skeleton King", cost: 4, src:"mini_tank_icons/SkeletonKingCard.webp" },
        { name: "Monk", cost: 5, src:"mini_tank_icons/MonkCard.webp" },
        { name: "Golden Knight", cost: 4, src:"mini_tank_icons/GoldenKnightCard.webp" },
        { name: "Bowler", cost: 5, src:"mini_tank_icons/BowlerCard.webp" },
        { name: "Goblin Machine", cost: 5, src:"mini_tank_icons/GoblinMachineCard.webp" },
        { name: "Giant Skeleton", cost: 6, src:"mini_tank_icons/GiantSkeletonCard.webp" },
    ];
    const damageDealers = [
        { name: "Musketeer", cost: 4, src:"damage_dealer_icons/MusketeerCard.webp" },
        { name: "Archers", cost: 3, src:"damage_dealer_icons/ArchersCard.webp" },
        { name: "Dart Goblin", cost: 3, src:"damage_dealer_icons/DartGoblinCard.webp" },
        { name: "Hunter", cost: 4, src:"damage_dealer_icons/HunterCard.webp" },
        { name: "Cannon Cart", cost: 5, src:"damage_dealer_icons/CannonCartCard.webp" },
        { name: "Firecracker", cost: 3, src:"damage_dealer_icons/FirecrackerCard.webp" },
        { name: "Little Prince", cost: 3, src:"damage_dealer_icons/LittlePrinceCard.webp" },
        { name: "Executioner", cost: 5, src:"damage_dealer_icons/ExecutionerCard.webp" },
        { name: "Elite Barbarians", cost: 6, src:"damage_dealer_icons/EliteBarbariansCard.webp" },
        { name: "P.E.K.K.A", cost: 7, src:"damage_dealer_icons/PEKKACard.webp" },
        { name: "Boss Bandit", cost: 6, src:"damage_dealer_icons/BossBanditCard.webp" },
        { name: "Mega Knight", cost: 7, src:"damage_dealer_icons/MegaKnightCard.webp" },
        { name: "Archer Queen", cost: 5, src:"damage_dealer_icons/ArcherQueenCard.webp" },
        { name: "Three Musketeers", cost: 9, src:"damage_dealer_icons/ThreeMusketeersCard.webp" },
        { name: "Sparky", cost: 6, src:"damage_dealer_icons/SparkyCard.webp" },
    ];
    const support = [
        { name: "Wizard", cost: 5, src:"support_icons/WizardCard.webp" },
        { name: "Witch", cost: 5, src:"support_icons/WitchCard.webp" },
        { name: "Skeleton Army", cost: 3, src:"support_icons/SkeletonArmyCard.webp" },
        { name: "Goblin Gang", cost: 3, src:"support_icons/GoblinGangCard.webp" },
        { name: "Goblin", cost: 2, src:"support_icons/GoblinsCard.webp" },
        { name: "Spear Goblins", cost: 2, src:"support_icons/SpearGoblinsCard.webp" },
        { name: "Zappies", cost: 4, src:"support_icons/ZappiesCard.webp" },
        { name: "Guards", cost: 3, src:"support_icons/GuardsCard.webp" },
        { name: "Barbarians", cost: 5, src:"support_icons/BarbariansCard.webp" },
        { name: "Royal Recruits", cost: 7, src:"support_icons/RoyalRecruitsCard.webp" },
        { name: "Skeletons", cost: 1, src:"support_icons/SkeletonsCard.webp" },
        { name: "Fire Spirit", cost: 1, src:"support_icons/FireSpiritCard.webp" },
        { name: "Ice Spirit", cost: 1, src:"support_icons/IceSpiritCard.webp" },
        { name: "Heal Spirit", cost: 1, src:"support_icons/HealSpiritCard.webp" },
        { name: "Electro Spirit", cost: 1, src:"support_icons/ElectroSpiritCard.webp" },
        { name: "Bomber", cost: 2, src:"support_icons/BomberCard.webp" },
        { name: "Berserker", cost: 2, src:"support_icons/BerserkerCard.webp" },
        { name: "Ice Wizard", cost: 3, src:"support_icons/IceWizardCard.webp" },
        { name: "Electro Wizard", cost: 4, src:"support_icons/ElectroWizardCard.webp" },
        { name: "Magic Archer", cost: 4, src:"support_icons/MagicArcherCard.webp" },
        { name: "Goblin Demolisher", cost: 4, src:"support_icons/GoblinDemolisherCard.webp" },
        { name: "Night Witch", cost: 4, src:"support_icons/NightWitchCard.webp" },
        { name: "Mother Witch", cost: 4, src:"support_icons/MotherWitchCard.webp" },
        { name: "Princess", cost: 3, src:"support_icons/PrincessCard.webp" },
    ];
    console.log("Thank you for using the deck generator! Here is your deck that was generated by best deck formula:");
    
    const randomBuilding = buildings[Math.floor(Math.random() * buildings.length)];
    console.log("1. Building:", randomBuilding);
    let buildingCard = document.querySelector(".building")
    let buildingCostCard = document.querySelector(".building-cost") 
    buildingCard.innerHTML = randomBuilding.name;
    buildingCostCard.innerHTML = randomBuilding.cost;
    let buildingImage = document.querySelector(".building-image")
    buildingImage.src = randomBuilding.src;
    
    const randomAirTroop = airTroops[Math.floor(Math.random() * airTroops.length)];
    console.log("2. Air troop:", randomAirTroop);
    let airTroopCard = document.querySelector(".air-troop") 
    let airTroopCostCard = document.querySelector(".air-troop-cost")
    airTroopCostCard.innerHTML = randomAirTroop.cost;
    airTroopCard.innerHTML = randomAirTroop.name;
    let airTroopImage = document.querySelector(".air-troop-image")
    airTroopImage.src = randomAirTroop.src;
    
    const randomTroopThatGoesToTower = troopsThatGoToTower[Math.floor(Math.random() * troopsThatGoToTower.length)];
    console.log("3. Win conditioun:", randomTroopThatGoesToTower);
    let winConditionCard = document.querySelector(".win-condition") 
    let winConditionCostCard = document.querySelector(".win-condition-cost")
    winConditionCostCard.innerHTML = randomTroopThatGoesToTower.cost;
    winConditionCard.innerHTML = randomTroopThatGoesToTower.name;
    let winConditionImage = document.querySelector(".win-condition-image")
    winConditionImage.src = randomTroopThatGoesToTower.src;

    
    const randomSmallSpell = smallSpells[Math.floor(Math.random() * smallSpells.length)];
    console.log("4. Small spell:", randomSmallSpell);
    let smallSpellCard = document.querySelector(".small-spell") 
    let smallSpellCostCard = document.querySelector(".small-spell-cost")
    smallSpellCostCard.innerHTML = randomSmallSpell.cost;
    smallSpellCard.innerHTML = randomSmallSpell.name;
    let smallSpellImage = document.querySelector(".small-spell-image")
    smallSpellImage.src = randomSmallSpell.src;
    
    const randomBigSpell = bigSpells[Math.floor(Math.random() * bigSpells.length)];
    console.log("5. Big spell:", randomBigSpell);
    let bigSpellCard = document.querySelector(".big-spell")
    let bigSpellCostCard = document.querySelector(".big-spell-cost")
    bigSpellCostCard.innerHTML = randomBigSpell.cost; 
    bigSpellCard.innerHTML = randomBigSpell.name;
    let bigSpellImage = document.querySelector(".big-spell-image")
    bigSpellImage.src = randomBigSpell.src;
    
    const randomMiniTank = miniTanks[Math.floor(Math.random() * miniTanks.length)];
    console.log("6. Mini tank:", randomMiniTank);
    let miniTankCard = document.querySelector(".mini-tank")
    let miniTankCostCard = document.querySelector(".mini-tank-cost")
    miniTankCostCard.innerHTML = randomMiniTank.cost;
    miniTankCard.innerHTML = randomMiniTank.name;
    let miniTankImage = document.querySelector(".mini-tank-image")
    miniTankImage.src = randomMiniTank.src;
    
    const randomDamageDealer = damageDealers[Math.floor(Math.random() * damageDealers.length)];
    console.log("7. Damage dealer:", randomDamageDealer);
    let damageDealerCard = document.querySelector(".damage-dealer")
    let damageDealerCostCard = document.querySelector(".damage-dealer-cost")
    damageDealerCostCard.innerHTML = randomDamageDealer.cost;
    damageDealerCard.innerHTML = randomDamageDealer.name;
    let damageDealerImage = document.querySelector(".damage-dealer-image")
    damageDealerImage.src = randomDamageDealer.src;
    
    const randomSupport = support[Math.floor(Math.random() * support.length)];
    console.log("8. Support:", randomSupport);
    let supportCard = document.querySelector(".support")
    let supportCostCard = document.querySelector(".support-cost")
    supportCostCard.innerHTML = randomSupport.cost;
    supportCard.innerHTML = randomSupport.name;
    let supportImage = document.querySelector(".support-image")
    supportImage.src = randomSupport.src;

    
});
let averageElixir = (randomBuilding.cost + randomAirTroop.cost + randomTroopThatGoesToTower.cost + randomSmallSpell.cost + randomBigSpell.cost + randomMiniTank.cost + randomDamageDealer.cost + randomSupport.cost) / 8;
averageElixir = averageElixir.toFixed(2);    
console.log("Average elixir cost of this deck is:", averageElixir);
let averageElixirCard = document.querySelector(".average-elixir");
averageElixirCard.innerHTML = "Середня вартість еліксиру: " + averageElixir;
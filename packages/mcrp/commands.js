mp.events.addCommand('kill', (player) => {
    player.health = 20;
});

mp.events.addCommand('hp', (player) => {
    player.health = 100;
});

mp.events.addCommand('armor', (player) => {
    player.armour = 100;
});

mp.events.addCommand('veh', (player, params) => {
    mp.vehicles.new(mp.joaat(params[0]), player.position, {
        numberPlate: '213123',
        heading: player.heading,
        dimension: player.dimension,
        engine: true,
        color: 42
    });
});


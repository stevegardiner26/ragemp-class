
mp.keys.bind(0x69, true, () => {
    mp.game.graphics.notify('~g~Hello ~w~World');
    let player = mp.players.local;
    mp.events.callRemote('carSpawn', player);
});


/*mp.events.add('turousl', (player) => {

});*/

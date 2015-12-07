module.exports = {

    viewBox: {
        width: 640,
        height: 640
    },

    player: {
        size: 16,
        speed: 0.12,
        aimSpeed: 0.08,
        shootInterval: 500
    },

    rocket: {
        size: 4,
        speed: 0.25,
        lifetime: 1500
    },

    spawner: {
        minDistance: 50,
        interval: 500
    },

    follower: {
        color: {
            r: 0,
            g: 180,
            b: 0
        },
        size: 16,
        speed: 0.1,
        spawnSleep: 500
    },

    dasher: {
        color: {
            r: 180,
            g: 0,
            b: 0
        },
        size: 16,
        vMax: 12,
        spawnSleep: 500,
        chargeTime: 1000,
        dashTime: 750,
        slowdown: 0.9
    },

    whirrer: {
        color: {
            r: 0,
            g: 0,
            b: 180
        },
        size: 16,
        speed: 0.1,
        spawnSleep: 500,
        radius: 16,
        rotationSpeed: 1e-2
    },
};

class Dragon {
    constructor(game, state) {
        Object.assign(this, { game, state });
        this.animations = []
        this.animations[0] = new Animator(ASSET_MANAGER.getAsset("./dragon-attack.png"), 4, 0, 224, 92, 5, 0.1);
        this.animations[1] = new Animator(ASSET_MANAGER.getAsset("./dragon-fly.png"), 20, 0, 224, 92, 5, 0.1);
        this.animations[2] = new Animator(ASSET_MANAGER.getAsset("./dragon-hurt.png"), 20, 0, 224, 92, 5, 0.1);
        this.animations[3] = new Animator(ASSET_MANAGER.getAsset("./dragon-idle.png"), 20, 0, 224, 92, 5, 0.1);
        this.animations[4] = new Animator(ASSET_MANAGER.getAsset("./dragon-jump.png"), 20, 0, 224, 105, 5, 0.1);
        this.animations[5] = new Animator(ASSET_MANAGER.getAsset("./dragon-run.png"), 20, 0, 224, 92, 5, 0.1);
    };

    update() {

    };

    draw(ctx) {
        this.animations[this.state].drawFrame(this.game.clockTick, ctx, 450, 25 + 122*this.state, 1);
    };
};

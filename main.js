const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./dragon-attack.png");
ASSET_MANAGER.queueDownload("./dragon-fly.png");
ASSET_MANAGER.queueDownload("./dragon-hurt.png");
ASSET_MANAGER.queueDownload("./dragon-idle.png");
ASSET_MANAGER.queueDownload("./dragon-jump.png");
ASSET_MANAGER.queueDownload("./dragon-run.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	gameEngine.addEntity(new Dragon(gameEngine, 0));
	gameEngine.addEntity(new Dragon(gameEngine, 1));
	gameEngine.addEntity(new Dragon(gameEngine, 2));
	gameEngine.addEntity(new Dragon(gameEngine, 3));
	gameEngine.addEntity(new Dragon(gameEngine, 4));
	gameEngine.addEntity(new Dragon(gameEngine, 5));


	gameEngine.init(ctx);

	gameEngine.start();
});

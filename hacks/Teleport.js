// Press any key after using this script for your player to teleport to your mouse pointer.
window.addEventListener('keydown', (event) => {
    PIXI.game.prodigy.user.x=PIXI.game.input.mousePointer.position.x
PIXI.game.prodigy.user.y=PIXI.game.input.mousePointer.position.y;
});

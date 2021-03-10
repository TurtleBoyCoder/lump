let mySprite = sprites.create(img`
    . d d d d d d d d d d d d d . . 
    . d f f d d d d d d d f f d . . 
    . d f f d d d d d d d f f d . . 
    . d f f d 3 3 3 3 3 d f f d . . 
    . d f f d 3 3 3 3 3 d f f d . . 
    . d f f d 3 3 3 3 3 d f f d . . 
    . d d d 3 3 3 3 3 3 3 d d d . . 
    . d d d 3 3 3 3 3 3 3 d d d . . 
    . d d d 3 3 3 3 3 3 3 d d d . . 
    . d d d d 3 3 3 3 3 d d d d . . 
    . d d d d d d d d d d d d d . . 
    . d d d d d d d d d d d d d . . 
    . d d d d d d d d d d d d d . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.setTilemap(tilemap`level1`)
controller.moveSprite(mySprite)

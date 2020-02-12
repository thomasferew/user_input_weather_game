let weather = game.askForString("what is your weather prediction?")
game.splash("it is going to:" + weather)
let weather_dude = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . f f f f . . . . . . . 
. . . . f 5 5 5 f f . . . . . . 
. . . f 5 d d 5 5 5 f . . . . . 
. . f f 5 d d d d 5 f . . . . . 
. . f 5 5 f d f d 5 f . . . . . 
. . f 5 d d d d d 5 f . f f f . 
. f 5 5 d f d f d 5 f . f 5 f . 
. f 5 5 5 5 f d d 5 5 f 5 f . . 
f f 5 5 5 5 5 5 5 5 5 5 5 f . . 
f f 5 5 5 5 5 5 5 5 5 f f f . . 
. f f f 5 5 5 5 5 5 5 f . . . . 
. . f f 5 5 f f 5 5 5 f . . . . 
. . f f 5 5 f f f f f f . . . . 
. . . f f f . . f f f . . . . . 
`, SpriteKind.Player)
let weather_effects = Math.randomRange(0, 6)
if (weather_effects == 0) {
    weather_dude.say("CONFETTI!")
    effects.confetti.startScreenEffect()
} else if (weather_effects == 1) {
    weather_dude.say("SMILES!")
    effects.smiles.startScreenEffect()
} else if (weather_effects == 2) {
    weather_dude.say("BLIZZARD!")
    effects.blizzard.startScreenEffect()
} else if (weather_effects == 3) {
    weather_dude.say("BUBBLES")
    effects.bubbles.startScreenEffect()
} else if (weather_effects == 4) {
    weather_dude.say("STAR FIELD!")
    effects.starField.startScreenEffect()
} else if (weather_effects == 5) {
    weather_dude.say("HEARTS!")
    effects.hearts.startScreenEffect()
} else if (weather_effects == 6) {
    weather_dude.say("CLOUDS!")
    effects.clouds.startScreenEffect()
} else {
	
}

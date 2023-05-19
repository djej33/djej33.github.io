const textAnimation = document.querySelector('h1');

new Typewriter(textAnimation, {
  deleteSpeed:15

})
.typeString('Je m\'appelle Jérôme')
.pauseFor(300)
.typeString('<strong>, très impatient de commencer la formation Low Code!</strong>')
.pauseFor(1000)
.deleteChars(50)
.pauseFor(1000)
.typeString('et aussi très motivé!')
.deleteChars(21)
.pauseFor(1000)
.typeString('super motivé!')
.deleteChars(7)
.pauseFor(1000)
.typeString('hyper motivé!')
.start()

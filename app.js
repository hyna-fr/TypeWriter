const txtAnim = document.querySelector('h1');

new Typewriter(txtAnim, {
    loop: true,
    deleteSpeed: 40
})
.changeDelay(40)
.typeString('Hello !')
.pauseFor(300)
.typeString(' Voici mon code <span style="color: #8B008B;">Github</span> ;)')
.pauseFor(1000)
.deleteChars(24)
.pauseFor(500)
.typeString("Cliquez sur l'<span style='color: #008B8B;'>image</span> !")
.pauseFor(1000)
.start()
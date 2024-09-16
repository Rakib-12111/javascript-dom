function makeRed(){
    document.body.style.backgroundColor = 'red'
}

//option 3
const makeBlueButton = document.getElementById('make-blue');
   makeBlueButton.onclick = makeBlue ;

   function makeBlue (){
    document.body.style.backgroundColor = ' blue'
   }

   const purpleButton = document.getElementById('make-purple');
    purpleButton.onclick = function makePurple (){
        document.body.style.backgroundColor = 'purple'
    }
    const pinkButton = document.getElementById('make-pink');
    pinkButton.addEventListener('click',makePink);
    function makePink(){
        document.body.style.backgroundColor = 'pink'
    }

    const makeGreenButton = document.getElementById('make-green');
    makeGreenButton.addEventListener('click', function makeGreen(){
        document.body.style.backgroundColor = 'green'
    })
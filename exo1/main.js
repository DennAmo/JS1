document.addEventListener("DOMContentLoaded", function () {
	// Votre code JavaScript à exécuter lorsque le document est prêt
    var squares = document.getElementsByClassName('square')

    for(var i = squares.length - 1;  i >= 0; i--) {
      
        let square = squares[i]; 
        
        square.addEventListener('click', ()=>{
            console.log('click');
            square.classList.toggle('selected');
        })
    }

    //5 -> 0
    
    // document.getElementById("foo") --> 1 element
    // document.getElementsByClassName('square') --> 0 | *
    
    // for(var i = 0; i<squares.length;i++){
        
        // }
        
        // var tab = [0,2,3]
        // console.log(tab)
        // console.log(squares.length)
        //console.log(tab[2])
        
        // squares[0]
        // squares[1]
        
    });
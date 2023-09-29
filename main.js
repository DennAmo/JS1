document.addEventListener("DOMContentLoaded", function () {
	// Votre code JavaScript à exécuter lorsque le document est prêt
	console.log("Le document est prêt !");

	console.log(document.getElementById("jambon"));
	console.warn("warning");
	console.error("error");

	let couleur2 = "black";
	const COLOR = "black";

	let jambon = document.getElementById("jambon");
	console.log(jambon.outerText);

	let paprika = document.getElementById("paprika");
	console.warn("warning", paprika.outerText);

	let buttonAdd = document.getElementById("btn-add");
	let compteur = document.getElementById("compteur");
	let count = 0;
	buttonAdd.addEventListener("click", () => {
		console.log("click");
		console.log(count);
		count++;
		compteur.innerText = count;
	});

	let buttonLess = document.getElementById("btn-less");
	buttonLess.addEventListener("click", () => {
		console.log("click");
		console.log(count);
		count--;
		compteur.innerText = count;
	});


	console.log(typeof count);

    if(1 === true){
        console.log("vrai")
    }else{
        console.log("faux")
    }

    for(var i=0; i<10; i++){
        console.log(i);
    }
                    
    const notes = [12, 18, 13, 14, 19 , 3,7, 11, 9 ] // 6

    const sentence = "la pluie est jolie"

    for(var i =0; i < notes.length; i++){
        if(note[i] < 10)
            note[i] +=3
        console.log(notes[i])
    }

    for(var i = notes.length-1; i >=0 ; i--){
        console.log(notes[i])
    }

    for(var i=0; i < sentence.length; i++){
        console.log(sentence[i]);
    }
    
    notes.forEach((note)=>{
        if(note < 10)
            note+=3
        console.log(note)
    } )

    var note=18
    switch(note){
        case 5:
            console.log("t'es une merde")
        case 10:
            console.log("t'es moyen")
            break;
        case 18:
            console.log("t'es un bon")
            break;
        default:
            console.log("mdr t'es ou")
            break;
    }
});




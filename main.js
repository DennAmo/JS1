document.addEventListener("DOMContentLoaded", function() {
    // Votre code JavaScript à exécuter lorsque le document est prêt
    console.log("Le document est prêt !");

    console.log(document.getElementById("jambon"));
    console.warn('warning');
    console.error("error");

    let couleur2 = "black";
    const COLOR = "black";

    let jambon = document.getElementById("jambon");
    console.log(jambon.outerText);
    
    let paprika = document.getElementById("paprika");
    console.warn('warning', paprika.outerText);

    let buttonAdd = document.getElementById("btn-add");
    let compteur = document.getElementById("compteur");
    let count= 0;
    buttonAdd.addEventListener("click", ()=>{
        console.log("click");
        console.log(count);
        count ++;
        compteur.innerText = count
    })

    let buttonLess = document.getElementById("btn-less");
    buttonLess.addEventListener("click", ()=>{
        console.log("click");
        console.log(count);
        count --;
        compteur.innerText = count
    })
    


});


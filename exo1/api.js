
async function direBonjour(){
    console.log("bonjour");

    const response = await fetch("https://api.bujinkan-neko.fr/videos")    
    const videos = await response.json();

    var linksContainer = document.getElementById("links-container")

    for(var i = 0; i < videos.length; i++){
        let video = videos[i]

        console.log(video.url)

        // Créez un élément de lien <a>
        var link = document.createElement("a");
        
        // Définissez l'URL du lien en utilisant video.url
        link.href = video.url;
        
        // Définissez le texte du lien (peut être le titre de la vidéo ou tout autre texte)
        link.textContent = "Vidéo " + video.title;
        
        // Ajoutez le lien au conteneur
        linksContainer.appendChild(link);
    }
}

console.log("jambon")
direBonjour(); 
console.log("paprika")



// // FETCH=OSEF
// const myPromise = new Promise((resolve, reject) => {
//     if(age>30)
//       resolve("foo");
//     else
//         reject("ouste")
//   });
// Exécute un appel AJAX GET (API)
// Prend en paramètres l'URL cible et la fonction callback appelée en cas de succès
function ajaxGet(url, callback) {
    var req = new XMLHttpRequest();
    req.open("GET", url);
    req.addEventListener("load", function () {
        if (req.status >= 200 && req.status < 400) {
            // Appelle la fonction callback en lui passant la réponse de la requête
            callback(req.responseText);
        } else {
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });
    req.addEventListener("error", function () {
        console.error("Erreur réseau avec l'URL " + url);
    });
    req.send(null);
}


// Genération des Animes API lié  à MyAnimList
var animesElt = document.getElementById("animelist");
ajaxGet(MALAnime, function (reponse)
	{
		// Definition
		var animes = JSON.parse(reponse);
		var bestanime = animes.anime.sort((a,b) => (a.score< b.score) ? 1 : ((b.score< a.score) ? -1 : 0));
		var i=0
		bestanime.forEach(function (anime)
		{
			// Ajout du titre et du contenu de chaque article
			var breakElt = document.createElement("div");breakElt.className = "w-100 d-none d-md-block";
			var colElt = document.createElement("div");colElt.className = "col my-3";
			var cardElt = document.createElement("div");cardElt.className = "card";
			var cardtitleElt = document.createElement("div");cardtitleElt.className = "card-body p-2";
			var cardtextElt = document.createElement("div");cardtextElt.className = "card-body p-0";
			var lienElt = document.createElement("a");lienElt.href = anime.url;lienElt.target = "_blank";lienElt.rel = "noopener";
			var imageElt = document.createElement("img");imageElt.className = "card-img-top";imageElt.src = anime.image_url;imageElt.alt ="Aucun Aperçu";
			var titleElt = document.createElement("h6");titleElt.className = "card-title";titleElt.textContent = anime.title;
			var infoElt = document.createElement("div");infoElt.className = "row";
			var infotypeElt = document.createElement("div");infotypeElt.className = "col";
			var typeElt = document.createElement("p");typeElt.className = "card-text";typeElt.innerHTML = anime.type;
			var infonoteElt = document.createElement("div");infonoteElt.className = "col";
			var noteElt = document.createElement("p");noteElt.className = "card-text";noteElt.innerHTML = anime.score+"/10";
			//Présentation
			if (i==5) {
				animesElt.appendChild(breakElt);
				i=1;
			}	else{i=i+1;}
			animesElt.appendChild(colElt);
			colElt.appendChild(cardElt);
			cardElt.appendChild(lienElt);
			lienElt.appendChild(imageElt);
			lienElt.appendChild(cardtitleElt);
			cardtitleElt.appendChild(titleElt);
			cardElt.appendChild(cardtextElt);
			cardtextElt.appendChild(infoElt);
			infoElt.appendChild(infotypeElt);
			infoElt.appendChild(infonoteElt);
			infotypeElt.appendChild(typeElt);
			infonoteElt.appendChild(noteElt);
		});
	});
// Genération des Mangas API lié  à MyAnimList
var mangasElt = document.getElementById("mangalist");
ajaxGet(MALManga, function (reponse)
	{
		// Transforme la réponse en un tableau d'articles
		var mangas = JSON.parse(reponse);
		var i=0
		mangas.manga.forEach(function (manga) 
		{
			// Ajout du titre et du contenu de chaque article
			var breakElt = document.createElement("div");breakElt.className = "w-100 d-none d-md-block";
			var colElt = document.createElement("div");colElt.className = "col my-3";
			var cardElt = document.createElement("div");cardElt.className = "card";
			var cardtitleElt = document.createElement("div");cardtitleElt.className = "card-body p-2";
			var lienElt = document.createElement("a");lienElt.href = manga.url;lienElt.target = "_blank";lienElt.rel = "noopener";
			var imageElt = document.createElement("img");imageElt.className = "card-img-top";imageElt.src = manga.image_url;imageElt.alt ="Aucun Aperçu";
			var titleElt = document.createElement("h6");titleElt.className = "card-title";titleElt.textContent = manga.title;
			//Présentation
			if (i==4) {
				mangasElt.appendChild(breakElt);
				i=1;
			}	else{i=i+1;}
			mangasElt.appendChild(colElt);
			colElt.appendChild(cardElt);
			cardElt.appendChild(lienElt);
			lienElt.appendChild(imageElt);
			lienElt.appendChild(cardtitleElt);
			cardtitleElt.appendChild(titleElt);
		});
	});


// Genération des Films API lié  à TheMovieDB
var moviesElt = document.getElementById("filmlist");
var number = 1;
//Nombre de pages
for (number;number <= 10; number++)
{
var i=0
ajaxGet(TMDBMovie+number, function (reponse) 
	{
		// Definition
		var movies = JSON.parse(reponse);
		var bestmovies = movies.results.sort((a,b) => (a.rating< b.rating) ? 1 : ((b.rating< a.rating) ? -1 : 0));
		bestmovies.forEach(function (results) 
		{
			// Ajout du titre et du contenu de chaque article
			var breakElt = document.createElement("div");breakElt.className = "w-100 d-none d-md-block";
			var colElt = document.createElement("div");colElt.className = "col my-3";
			var cardElt = document.createElement("div");cardElt.className = "card";
			var cardtitleElt = document.createElement("div");cardtitleElt.className = "card-body p-2";
			var cardtextElt = document.createElement("div");cardtextElt.className = "card-body p-0";
			var lienElt = document.createElement("a");lienElt.href = "//www.themoviedb.org/movie/"+results.id;lienElt.target = "_blank";lienElt.rel = "noopener";
			var imageElt = document.createElement("img");imageElt.className = "card-img-top";imageElt.src = "https://image.tmdb.org/t/p/w150_and_h225_bestv2/" +results.poster_path;
			var titleElt = document.createElement("h6");titleElt.className = "card-title";titleElt.textContent = results.original_title;
			var infoElt = document.createElement("div");infoElt.className = "row";
			var infodateElt = document.createElement("div");infodateElt.className = "col";
			var dateElt = document.createElement("p");dateElt.className = "card-text";dateElt.innerHTML = results.release_date.slice(0,4);
			var infonoteElt = document.createElement("div");infonoteElt.className = "col";
			var noteElt = document.createElement("p");noteElt.className = "card-text";noteElt.innerHTML = results.rating+"/10";
			//Présentation
			if (i==5) {
				moviesElt.appendChild(breakElt);
				i=1;
			}	else{i=i+1;}
			moviesElt.appendChild(colElt);
			colElt.appendChild(cardElt);
			cardElt.appendChild(lienElt);
			lienElt.appendChild(imageElt);
			lienElt.appendChild(cardtitleElt);	
			cardtitleElt.appendChild(titleElt);
			cardElt.appendChild(cardtextElt);
			cardtextElt.appendChild(infoElt);
			infoElt.appendChild(infodateElt);
			infodateElt.appendChild(dateElt);
			infoElt.appendChild(infonoteElt);
			infonoteElt.appendChild(noteElt);
		});
	});
}
// Genération des Series API lié  à TheMovieDB
var seriesElt = document.getElementById("serielist");
ajaxGet(TMDBSerie, function (reponse)
	{
		// Definition
		var series = JSON.parse(reponse);
		var i=0
		var bestseries = series.results.sort((a,b) => (a.rating< b.rating) ? 1 : ((b.rating< a.rating) ? -1 : 0));
		bestseries.forEach(function (results) 
		{
			// Ajout du titre et du contenu de chaque article
			var breakElt = document.createElement("div");breakElt.className = "w-100 d-none d-md-block";
			var colElt = document.createElement("div");colElt.className = "col my-3";
			var cardElt = document.createElement("div");cardElt.className = "card";
			var cardtitleElt = document.createElement("div");cardtitleElt.className = "card-body p-2";
			var cardtextElt = document.createElement("div");cardtextElt.className = "card-body p-0";
			var lienElt = document.createElement("a");lienElt.href = "//www.themoviedb.org/tv/"+results.id;lienElt.target = "_blank";lienElt.rel = "noopener";
			var imageElt = document.createElement("img");imageElt.className = "card-img-top";imageElt.src = "https://image.tmdb.org/t/p/w150_and_h225_bestv2/" +results.poster_path;
			var titleElt = document.createElement("h6");titleElt.className = "card-title";titleElt.textContent = results.original_name;
			var infoElt = document.createElement("div");infoElt.className = "row";
			var infonoteElt = document.createElement("div");infonoteElt.className = "col";
			var noteElt = document.createElement("p");noteElt.className = "card-text";noteElt.innerHTML = results.rating+"/10";
			//Présentation
			if (i==5) {	
				seriesElt.appendChild(breakElt);
				i=1;
			}	else {i=i+1;}
			seriesElt.appendChild(colElt);
			colElt.appendChild(cardElt);
			cardElt.appendChild(lienElt);
			lienElt.appendChild(imageElt);
			lienElt.appendChild(cardtitleElt);
			cardtitleElt.appendChild(titleElt);
			cardElt.appendChild(cardtextElt);
			cardtextElt.appendChild(infoElt);
			infoElt.appendChild(infonoteElt);
			infonoteElt.appendChild(noteElt);
		});
	});
	
	
// Genération des Playlists API lié  à YouTube
var playlistsElt = document.getElementById("playlistlist");
ajaxGet(YTPlaylist, function (reponse) 
	{
		// Transforme la réponse en un tableau d'articles
		var playlists = JSON.parse(reponse);
		var i=0
		playlists.items.forEach(function (playlist)
		{
			// Ajout du titre et du contenu de chaque article
			var breakElt = document.createElement("div");breakElt.className = "w-100 d-none d-md-block";
			var colElt = document.createElement("div");colElt.className = "col my-3";
			var cardElt = document.createElement("div");cardElt.className = "card m-4";
			var cardtitleElt = document.createElement("div");cardtitleElt.className = "card-body p-2";
			var lienElt = document.createElement("a");lienElt.href = "https://www.youtube.com/playlist?list="+playlist.id;lienElt.target = "_blank";lienElt.rel = "noopener";
			var imageElt = document.createElement("img");imageElt.className = "card-img-top";imageElt.src = playlist.snippet.thumbnails.default.url;
			var titleElt = document.createElement("h6");titleElt.className = "card-title";titleElt.textContent = playlist.snippet.title;
			//Présentation
			if (i==3) {
				playlistsElt.appendChild(breakElt);
				i=1;
			}	else{i=i+1;}
			playlistsElt.appendChild(colElt);
			colElt.appendChild(cardElt);
			cardElt.appendChild(lienElt);
			lienElt.appendChild(imageElt);
			lienElt.appendChild(cardtitleElt);
			cardtitleElt.appendChild(titleElt);
		});
	});
// Genération des artistes API lié  à YouTube
var artistesElt = document.getElementById("artistelist");
ajaxGet(YTArtist, function (reponse) 
	{
		// Transforme la réponse en un tableau d'articles
		var artistes = JSON.parse(reponse);
		var i=0
		artistes.items.forEach(function (artist) 
		{
			// Ajout du titre et du contenu de chaque article
			var breakElt = document.createElement("div");breakElt.className = "w-100 d-none d-md-block";
			var colElt = document.createElement("div");colElt.className = "col my-3";
			var cardElt = document.createElement("div");cardElt.className = "card p-3";
			var cardtitleElt = document.createElement("div");cardtitleElt.className = "card-body p-2";
			var lienElt = document.createElement("a");lienElt.href = "https://www.youtube.com/channel/"+artist.id;lienElt.target = "_blank";lienElt.rel = "noopener";
			var imageElt = document.createElement("img");imageElt.className = "rounded-circle border border-secondary";imageElt.src = artist.snippet.thumbnails.default.url;
			var titleElt = document.createElement("h6");titleElt.className = "card-title";titleElt.textContent = artist.snippet.title;
			//Présentation
			if (i==3) {
				artistesElt.appendChild(breakElt);
				i=1;
			}	else{i=i+1;}
			artistesElt.appendChild(colElt);
			colElt.appendChild(cardElt);
			cardElt.appendChild(lienElt);
			lienElt.appendChild(imageElt);
			lienElt.appendChild(cardtitleElt);
			cardtitleElt.appendChild(titleElt);
		});
	});
// Genération des games API lié  à IGDB
var gamesElt = document.getElementById("gamelist");
ajaxGet(IGDBGame, function (reponse)
	{
		// Transforme la réponse en un tableau d'articles
		const games = JSON.parse(reponse);
		var i=0
		games.forEach((game) =>
		{
			// Ajout du titre et du contenu de chaque article
			var breakElt = document.createElement("div");breakElt.className = "w-100 d-none d-md-block";
			var colElt = document.createElement("div");colElt.className = "col my-3";
			var cardElt = document.createElement("div");cardElt.className = "card";
			var cardtitleElt = document.createElement("div");cardtitleElt.className = "card-body p-2";
			var lienElt = document.createElement("a");lienElt.href = game.url;lienElt.target = "_blank";lienElt.rel = "noopener";
			var imageElt = document.createElement("img");imageElt.className = "card-img-top";imageElt.src = game.cover.url;imageElt.alt ="Aucun Aperçu";
			var titleElt = document.createElement("h6");titleElt.className = "card-title";titleElt.textContent = game.name;
			//Présentation
			if (i==4) {
				gamesElt.appendChild(breakElt);
				i=1;
			}	else{i=i+1;}
			gamesElt.appendChild(colElt);
			colElt.appendChild(cardElt);
			cardElt.appendChild(lienElt);
			lienElt.appendChild(imageElt);
			lienElt.appendChild(cardtitleElt);
			cardtitleElt.appendChild(titleElt);
		});
	});

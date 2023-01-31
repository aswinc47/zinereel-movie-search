function displayData() {
    movie =  moviesearch.value
    fetch(`https://www.omdbapi.com/?apikey=16940115&t=${movie}`)
    .then((response) => response.json())
    .then((json) => {if(json.Response == "True"){
      getData(json)
    }else{
      errorData()
    }})
}

function getData(json) {

  title = json.Title;
  year = json.Year;
  rated = json.Rated;
  genre = json.Genre;
  released = json.Released;
  director = json.Director;
  actors = json.Actors;
  plot = json.Plot;
  language = json.Language;
  awards = json.Awards;
  imdb = json.imdbRating;
  imgurl = json.Poster;

  titleid.innerText = title;
  yearid.innerText = year;
  ratedid.innerText = rated;
  genreid.innerText = genre;
  releasedid.innerText = released;
  directorid.innerText = director;
  actorsid.innerText = actors;
  plotid.innerText = plot;
  languageid.innerText = language;
  awardsid.innerText = awards;
  imdbid.innerText = imdb;

  changebg(imgurl)
}

function errorData(){ 
  titleid.innerText = "Not found";
  yearid.innerText = "--";
  ratedid.innerText = "--";
  genreid.innerText = "--";
  releasedid.innerText = "--";
  directorid.innerText = "--";
  actorsid.innerText = "--";
  plotid.innerText = "--";
  languageid.innerText = "--";
  awardsid.innerText = "--";
  imdbid.innerText = "--";
  document.getElementById("movieimg").style.backgroundImage = `url(./images/404.jpeg)`
  console.log("error");
}

function changebg(imgurl){
    document.getElementById("movieimg").style.backgroundImage = `url(${imgurl})`
}
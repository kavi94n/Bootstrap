const FavMovies = [
  {id: 1, title: 'kaka kaka ', dietary: 'surja'},
  {id: 1, title: 'gilli ', dietary: 'vijay'},
  {id: 1, title: 'shivaji ', dietary: 'rajiny'},
  {id: 1, title: 'saami ', dietary: 'vikram'},
]


for(let i=0; i<FavMovies.length; i++ ){
  console.log(FavMovies[i].title)
}


for(let movies in FavMovies){
  console.log(FavMovies[movies].title)
}


for(let movies of FavMovies){
  console.log(movies);
}

  
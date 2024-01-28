const resultArtistS = document.getElementById("result-artist");
const playlistContainer = document.getElementById("result-playlists");
const searchInputS = document.getElementById("search-input");

function requestApi(searchTerm) {
  fetch(`https://api-artists-git-main-divilella96.vercel.app/artists/artists?name_like=${searchTerm}`)
    .then((response) => response.json())
    .then((results) => displayResults(results));
}

function displayResults(results) {
  hidePlaylists();
  const artistImage = document.getElementById("artist-img");
  const artistName = document.getElementById("artist-name");

  results.forEach((element) => {
    artistImage.src = element.urlImg;
    artistName.innerText = element.name;
  });
  resultArtistS.classList.remove("hidden");
}

function hidePlaylists() {
  playlistContainer.classList.add("hidden");
}

searchInputS.addEventListener("input", function () {
  const searchTerm = searchInputS.value.toLowerCase();
  if (searchTerm === "") {
    resultArtistS.classList.add("hidden");
    playlistContainer.classList.remove("hidden");
    return;
  }
  requestApi(searchTerm);
});

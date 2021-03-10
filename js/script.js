let songArtists=["Harry Styles"];
let songLength=["3:29"];
let songImage=["https://upload.wikimedia.org/wikipedia/en/c/ce/Harry_Styles_-_Golden.png"];
let songLinks=["https://www.youtube.com/watch?v=P3cffdsEXXw"];
let songName=["Golden"];



for (let songInformation of songArtists){
  $("#artists").append(songInformation);
  
}
for (let songInformation of songLength){
  $("#lengths").append(songInformation);
}
for (let songInformation of songImage){
  
  $("#images").append(`<img src=${songInformation}>`);
}
for (let songInformation of songLinks){
  
  $("#links").append(`<a href=${songInformation}>Song Link</a>`);
}
for (let songInformation of songName){
  $("#names").append(songInformation);
}

$("#Add").click(function(){
  songArtists.push();
  songLength.push();
  songImage.push();
  songLinks.push();
  songName.push();
  
});

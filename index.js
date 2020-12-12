
fetch("http://localhost:3000/lists")
.then(function(response) {
  console.log(response.json());
})
.then(function(json){
  // Use this data inside of `json` to do DOM manipulation
})
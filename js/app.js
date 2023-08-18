let domainTo = document.querySelector("#select1");
let domainFrom = document.querySelector("#domainForm");
let paramS = document.querySelector("#param");
let button = document.querySelector("button");

button.addEventListener("click", function () {
  if (domainTo.value == 1) {
    let url = `https://ulvis.net/api.php?url=${domainFrom.value}&custom=${paramS.value}&private=1`;
    location.href = url;
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Parse the response body as JSON
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }
});

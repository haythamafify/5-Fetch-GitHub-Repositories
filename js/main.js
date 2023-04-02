// Main Variable
let button, input, showdData;
button = document.querySelector(".get-repos .get-button");
input = document.querySelector(".get-repos input");
showdData = document.querySelector(".show-data");
button.onclick = function () {
  getRepos();
};

// get repos Function
function getRepos() {
  if (input.value == "") {
    showdData.innerHTML = `<span> Please Enter  GitHub User </span>`;
  } else {
    fetch(`https://api.github.com/users/${input.value}/repos`)
      .then((response) => response.json())
      .then((repos) => {
        showdData.innerHTML = "";
        repos.forEach((repo) => {
          let maindiv = document.createElement("div");
          maindiv.className = "repo-box";
          let reposname = document.createTextNode(repo.name);
          maindiv.appendChild(reposname);
          let url = document.createElement("a");
          let urltext = document.createTextNode("visit");
          url.href = `https://www.github.com/${input.value}/${repo.name}`;
          url.setAttribute("target", "_blank");
          url.appendChild(urltext);
          maindiv.appendChild(url);

          let starspan = document.createElement("span");
          let starspantext = document.createTextNode(
            `Number of Starts ${repo.stargazers_count}`
          );
          starspan.appendChild(starspantext);
          maindiv.appendChild(starspan);

          showdData.appendChild(maindiv);
        });
      });
  }
}
//stargazers_count

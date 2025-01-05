/**
 * API request by using Axios
 */

let apiUrl = "https://catfact.ninja/fact";
let apiUrl2 = "https://dog.ceo/api/breeds/image/random";
let apiUrl3 = "https://icanhasdadjoke.com";
let apiUrl4 = "http:universities.hipolabs.com/search?name=";
let getFacts = async (url) => {
  try {
    let res = await axios.get(url);
    console.log(`API Response: ${res.data}`);
    return res.data.fact;
  } catch (error) {
    console.log(`Error: ${error}`);
    return "No Fact Found";
  }
};

let getRandomImage = async (url) => {
  try {
    let res = await axios.get(url);
    console.log(`API Response: ${res.data}`);
    return res.data.message;
  } catch (error) {
    console.log(`Error: ${error}`);
    return "/";
  }
};

let pfact = document.querySelector("#displayFact");
let btnFact = document.querySelector("#facts");
btnFact.addEventListener("click", async () => {
  let fact = await getFacts(apiUrl);
  pfact.innerHTML = fact;
});

let img = document.querySelector("#randImg");
let btnImage = document.querySelector("#image");
btnImage.addEventListener("click", async () => {
  let imgSrc = await getRandomImage(apiUrl2);
  img.setAttribute("src", imgSrc);
});

/**
 * Passing headers using Axios
 */

let getJokes = async (url) => {
  try {
    const config = { Headers: { Accept: "application/json" } };
    let res = await axios.get(url, config);
    console.log(`API Response: ${res}`);
    return res;
  } catch (error) {
    console.log(`Error: ${error}`);
    return "No Joke Found";
  }
};

let pJoke = document.querySelector("#displayJoke");
let btnjoke = document.querySelector("#joke");

btnjoke.addEventListener("click", async () => {
  let joke = await getJokes(apiUrl3);
  pJoke.innerHTML = joke;
});

/** Updating query string using Axios*/

let getColleges = async (url, country) => {
  try {
    let res = await axios.get(url + country);
    console.log(`API Response: ${res.data}`);
    return res.data;
  } catch (error) {
    console.log(`Error: ${error}`);
    return "No College Found";
  }
};

let btnColleges = document.querySelector("#collegesBtn");
let collegesList = document.querySelector("#collegesList");
let showCollege = (colArr, stateName) => {
  for (college of colArr) {
    if (stateName == college["state-province"]) {
      console.log(
        `CollegeName: ${college.name}, State: ${college["state-province"]}`
      );
      let listItem = document.createElement("li");
      listItem.innerText = college.name;
      collegesList.appendChild(listItem);
    }
  }
};
btnColleges.addEventListener("click", async () => {
  let countryName = document.querySelector("#countryName").value;
  let stateName = document.querySelector("#stateName").value;
  let h2 = document.querySelector("h2");
  h2.innerHTML = `Colleges Name List for ${countryName} : ${stateName}`;
  let collegeList = await getColleges(apiUrl4, countryName);
  showCollege(collegeList, stateName);
});

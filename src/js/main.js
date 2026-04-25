import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

//SEE COMMENTS BELOW TO EVALUATE STUDENT'S UNDERSTANDING
function parkInfoTemplate(info) { //So we can target the children of hte hero-banner class
  return `<a href="/" class="hero-banner__title">${info.name}</a>
  <p class="hero-banner__subtitle">
    <span>${info.designation}</span>
    <span>${info.states}</span>
  </p>`;
}

// insert data into disclaimer section
const disclaimer = document.querySelector(".disclaimer > a");
disclaimer.href = parkData.url; //Surgically replacing the "parkUrl" placeholder for th actual URL from the Yelowstone object
disclaimer.innerHTML = parkData.fullName; //Same as above buyt for this one
// update the title of the site. Notice that we can select things in the head just like in the body with querySelector
document.querySelector("head > title").textContent = parkData.fullName; //It all makes sense now, right?
// set the banner image
document.querySelector(".hero-banner > img").src = parkData.images[0].url; //first of the images from the object
// use the template function above to set the rest of the park specific info in the header
document.querySelector(".hero-banner__content").innerHTML =
  parkInfoTemplate(parkData);

//I could have updated them individually as consts which would have been more verbose and less flexible
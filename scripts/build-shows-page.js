import BandSiteApi from'./band-site-api.js';
const apiKey='81a8e33d-254a-4f46-9014-3eddb4e05dd5';

function createShowElement(show) {
  const showItem = document.createElement("article");
  showItem.classList.add("show");

  const dateLabel = document.createElement("p");
  dateLabel.classList.add("show__label");
  dateLabel.textContent = "DATE";
  showItem.appendChild(dateLabel);

  const dateValue = document.createElement("p");
  dateValue.classList.add("show__date");
  dateValue.textContent = new Date(show.date).toLocaleDateString(); 
  showItem.appendChild(dateValue);


  const venueLabel = document.createElement("p");
  venueLabel.classList.add("show__label");
  venueLabel.textContent = "VENUE";
  showItem.appendChild(venueLabel);

  const venueValue = document.createElement("p");
  venueValue.classList.add("show__venue");
  venueValue.textContent = show.place; 
  showItem.appendChild(venueValue);

  const locationLabel = document.createElement("p");
  locationLabel.classList.add("show__label");
  locationLabel.textContent = "LOCATION";
  showItem.appendChild(locationLabel);

  const locationValue = document.createElement("p");
  locationValue.classList.add("show__location");
  locationValue.textContent = show.location;
  showItem.appendChild(locationValue);

  const button = document.createElement("button");
  button.classList.add("show__button");
  button.textContent = "BUY TICKETS";
  showItem.appendChild(button);

  showItem.addEventListener("click", () => {
    document.querySelectorAll(".show").forEach((item) => {
      item.classList.remove("show--selected");
    });
    showItem.classList.add("show--selected");
  });

  return showItem;
}

  const renderShows = async () => {
    const api = new BandSiteApi(apiKey);
    try {
      const shows = await api.getShows();
      const showsList = document.getElementById('showsList');
      showsList.innerHTML = '';
      shows.forEach(show => {
        const showElement = createShowElement(show);
        showsList.appendChild(showElement);
      });
    } catch (error) {
      console.error('Failed to fetch shows:', error);
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    renderShows();
  });
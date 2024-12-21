const showsData = [
    {
      date: 'Mon Sept 09 2024',
      venue: 'Ronald Lane',
      location: 'San Francisco, CA',
    },
    {
      date: 'Tue Sept 17 2024',
      venue: 'Pier 3 East',
      location: 'San Francisco, CA',
    },
    {
      date: 'Sat Oct 12 2024 ',
      venue: 'View Lounge',
      location: 'San Francisco, CA',
    },
    {
      date: 'Sat Nov 16 2024 ',
      venue: 'Hyatt Agency ',
      location: 'San Francisco, CA ',
    },
    {
      date: 'Fri Nov 29 2024',
      venue: 'Moscow Center ',
      location: 'San Francisco, CA ',
    },
    {
      date: 'Wed Dec 18 2024',
      venue: 'Press Club',
      location: 'San Francisco, CA',
    }
  ];

  function createShowElement(show) {
    const showItem = document.createElement('article');
    showItem.classList.add('show');
    
    // Create the date element with label
    const dateLabel = document.createElement('p');
    dateLabel.classList.add('show__label');
    dateLabel.textContent = 'DATE';
    showItem.appendChild(dateLabel);

    const dateValue = document.createElement('p');
    dateValue.classList.add('show__date');
    dateValue.textContent = show.date;
    showItem.appendChild(dateValue);
    
    // Create the venue element with label
    const venueLabel = document.createElement('p');
    venueLabel.classList.add('show__label');
    venueLabel.textContent = 'VENUE';
    showItem.appendChild(venueLabel);

    const venueValue = document.createElement('p');
    venueValue.classList.add('show__venue');
    venueValue.textContent = show.venue;
    showItem.appendChild(venueValue);
    
    // Create the location element with label
    const locationLabel = document.createElement('p');
    locationLabel.classList.add('show__label');
    locationLabel.textContent = 'LOCATION';
    showItem.appendChild(locationLabel);

    const locationValue = document.createElement('p');
    locationValue.classList.add('show__location');
    locationValue.textContent = show.location;
    showItem.appendChild(locationValue);
  
    // Create and append the button
    const button = document.createElement('button');
    button.classList.add('show__button');
    button.textContent = 'BUY TICKETS';
    showItem.appendChild(button);
    
    // Event listener for click to handle the selected state
    showItem.addEventListener('click', () => {
      // Remove the selected class from all other show items
      document.querySelectorAll('.show').forEach(item => {
        item.classList.remove('show--selected');
      });
      // Add the selected class to the clicked show item
      showItem.classList.add('show--selected');
    });
    
    return showItem;
  }

  function renderShows() {
    const showsList = document.querySelector(".shows__list");
    /*const showsList = document.getElementById('showsList');*/
  
    // Clear out any existing content
    showsList.innerHTML = '';
  
    // Loop through the showsData array
    showsData.forEach(show => {
      const showElement = createShowElement(show);
      showsList.appendChild(showElement);
    });
  }
  
  // Call renderShows to populate the list when the page loads
  document.addEventListener('DOMContentLoaded', renderShows);
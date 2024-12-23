document.addEventListener('DOMContentLoaded', () => {
  const comments = [
      { 
          image:"",
          name: "Victor Pinto", 
          date: "11/02/2023", 
          text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
      },
      { 
          image:"",
          name: "Christina Cabrera", 
          date: "10/28/2023", 
          text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
      },
      { 
          image:"",
          name: "Isaac Tadesse", 
          date: "10/20/2023", 
          text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
      }
  ];

  const commentForm = document.querySelector(".comments__form");
  const commentsList = document.querySelector(".comments__list");

  commentForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameField = e.target.name;
    const commentField = e.target.comment;
    
    // Clear previous errors
    removeError(nameField);
    removeError(commentField);

    // Validate fields
    let isValid = true;

    if (!nameField.value.trim()) {
    showError(nameField, "Name cannot be empty");
    isValid = false;
    }

    if (!commentField.value.trim()) {
    showError(commentField, "Comment cannot be empty");
    isValid = false;
    }

    if (!isValid) return; // Stop execution if validation fails

    
    const newComment = {
    image: e.target.image,
    name: nameField.value,
    date: new Date().toLocaleDateString(),
    text: commentField.value
    };

    comments.unshift(newComment);

    renderComments();

    commentForm.reset();
});

  function renderComments() {
      commentsList.innerHTML = '';
      comments.forEach(comment => {
          createCommentElement(comment);
      });
  }

  function createCommentElement(comment) {
      const commentDiv = document.createElement('div');
      commentDiv.classList.add('comment');
      
      const avatarColumn = document.createElement('div');
      avatarColumn.classList.add('comment__avatar-column');

      const avatarElement = document.createElement('div');
      avatarElement.classList.add('comment__avatar');
      if (comment.image) {
          const avatarImg = document.createElement('img');
          avatarImg.src = comment.image;
          avatarImg.alt = 'Avatar';
          avatarElement.appendChild(avatarImg);
      } else {
          avatarElement.classList.add('comment__avatar--placeholder');
      }
      avatarColumn.appendChild(avatarElement);
      commentDiv.appendChild(avatarColumn);

      const contentColumn = document.createElement('div');
      contentColumn.classList.add('comment__content-column');

      const nameDateContainer = document.createElement('div');
      nameDateContainer.classList.add('comment__name-date');
      
      const namePara = document.createElement('p');
      namePara.classList.add("comment__name");
      namePara.textContent = comment.name;

      const datePara = document.createElement('p');
      datePara.classList.add("comment__date");
      datePara.textContent = comment.date;

      nameDateContainer.appendChild(namePara);
      nameDateContainer.appendChild(datePara);

      const textPara = document.createElement('p');
      textPara.classList.add("comment__text");
      textPara.textContent = comment.text;

      contentColumn.appendChild(nameDateContainer);
      contentColumn.appendChild(textPara);

      commentDiv.appendChild(contentColumn);

      commentsList.appendChild(commentDiv);
  }

  function removeError(field) {
    field.classList.remove('error');
    const errorMessage = field.parentElement.querySelector('.error-message');
    if (errorMessage) {
      errorMessage.remove();
    }
  }

  renderComments();
});

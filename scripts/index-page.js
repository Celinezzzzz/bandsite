document.addEventListener('DOMContentLoaded', () => {
    // store a list of comment items in an array of objects  
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
          text: "I feel blessed   to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
        },
        { 
          image:"",
          name: "Isaac Tadesse", 
          date: "10/20/2023", 
          text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
        }
      ];
    
      // select the parent element
      const commentForm = document.querySelector(".comments__form");
      const commentsList = document.querySelector(".comments__list");
      /*
      const commentForm = document.getElementById('commentForm');
      const commentsList = document.getElementById('commentsList');
      */
    
      commentForm.addEventListener("submit", (e) => {
        //to prevent the default refresh behaviour of the form
        e.preventDefault();
    
        // Construct a new comment object
        const newComment = {
          image:e.target.image,
          name: e.target.name.value,
          date: new Date().toLocaleDateString(), 
          text: e.target.comment.value
        };
    
        // Push the new comment to the start of the comments array
        comments.unshift(newComment);
        /*comments.push(newComment);*/
    
        // Re-render comments
        renderComments();
    
        // Clear input fields
        commentForm.reset();
      });
    
      function renderComments() {
        // Clear all comments from the page
        commentsList.innerHTML = '';
        // Render all comments from the comments array
        comments.forEach(comment => {
          createCommentElement(comment);
        });
      }
    
      function createCommentElement(comment) {
        // Create a new div for the comment and add the relevant classes and inner text
        // for each comment item:
        // 1. create an element
        const commentDiv = document.createElement('div');
        // 2a. use classList for adding classes
        commentDiv.classList.add('comment');
        
        // Create the avatar column
        const avatarColumn = document.createElement('div');
        avatarColumn.classList.add('comment__avatar-column');
    
        // 2b.Populate the comment with its content
        // Add avatar image
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
  
        // Create the content column
        const contentColumn = document.createElement('div');
        contentColumn.classList.add('comment__content-column');
      
        // Create the name and date container
        const nameDateContainer = document.createElement('div');
        nameDateContainer.classList.add('comment__name-date');
        
        // create an element
        const namePara = document.createElement('p');
        // use classList for adding classes
        namePara.classList.add("comment__name");
        // add content to element
        namePara.textContent = comment.name;
        // Append the individual paragraphs to the comment div
        commentDiv.appendChild(namePara);
    
        const datePara = document.createElement('p');
        datePara.classList.add("comment__date");
        datePara.textContent = comment.date;
        commentDiv.appendChild(datePara);
  
        // Append the name and date container to the content column
        contentColumn.appendChild(nameDateContainer);
    
        const textPara = document.createElement('p');
        textPara.classList.add("comment__text");
        textPara.textContent = comment.text;
        commentDiv.appendChild(textPara);
  
        // 3. append to the parent
        // Append the content column to the main comment div
        commentDiv.appendChild(contentColumn);
  
        // Append the entire comment div to the comments list
        commentsList.appendChild(commentDiv);
      }
    
      // Initial render of comments
      renderComments();
    });
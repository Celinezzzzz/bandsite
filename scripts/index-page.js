import BandSiteApi from './band-site-api.js';
const apiKey='81a8e33d-254a-4f46-9014-3eddb4e05dd5';
const api = new BandSiteApi(apiKey); 

document.addEventListener('DOMContentLoaded', async () => {
    const api = new BandSiteApi(apiKey); 
  
    const commentForm = document.getElementById('commentForm');
    const commentsList = document.getElementById('commentsList');
  
    commentForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const newComment = {
        name: e.target.name.value,
        comment: e.target.comment.value
      };
      try {
        await api.postComment(newComment); 
        await renderComments(); 
      } catch (error) {
        console.error('Failed to post comment:', error);
      };
   
      commentForm.reset();
    });

  const renderComments = async () => {
    try {
      const comments = await api.getComments();
      commentsList.innerHTML = '';
      comments.forEach(comment => {
        const commentElement = createCommentElement(comment);
        commentsList.appendChild(commentElement);
      });
    } catch (error) {
      console.error('Failed to fetch comments:', error);
    }
  }

function createCommentElement(comment) {
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');
  
    const avatarColumn = document.createElement('div');
    avatarColumn.classList.add('comment__avatar-column');
    const avatarElement = document.createElement('div');
    avatarElement.classList.add('comment__avatar', 'comment__avatar--placeholder');
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
    datePara.textContent = new Date(comment.timestamp).toLocaleDateString();
    nameDateContainer.appendChild(namePara);
    nameDateContainer.appendChild(datePara);
  
    const textPara = document.createElement('p');
    textPara.classList.add("comment__text");
    textPara.textContent = comment.comment;
  
    contentColumn.appendChild(nameDateContainer);
    contentColumn.appendChild(textPara);
    commentDiv.appendChild(contentColumn);
    commentsList.appendChild(commentDiv);

    return commentDiv;
  }
  
  renderComments();
});
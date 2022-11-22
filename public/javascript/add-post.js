
async function newFormHandler(event) {
  event.preventDefault();
  
  const title = document.querySelector('input[name="post-title"]').value;
  const image_input = document.querySelector('input[name="image-input"]').value;
  


  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      image_input,
    }),
    
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

// document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);

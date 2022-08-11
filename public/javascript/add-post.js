async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const content = document.querySelector('input[name="post-content"]').value;

  const response = await fetch(`/api/post`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      content,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

async function postformHandler(event) {
  debugger;
  event.preventDefault();
  event.target.hidden = true;
  document.querySelector('.new-post-form').style.display = 'block';
}

document
  .querySelector('.new-post-form')
  .addEventListener('submit', newFormHandler);

document.querySelector('.btn-post').addEventListener('click', postformHandler);

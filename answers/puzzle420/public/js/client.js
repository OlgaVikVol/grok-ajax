const countElement = document.getElementById('count');
document.querySelector('button').addEventListener('click', async () => {
  let jsonResponse;
  try {
    const response = await fetch('/next');
    jsonResponse = await response.json();
    countElement.innerText = jsonResponse.count;
  } catch (e) {
    console.error(e);
  }
});

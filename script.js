async function fetchDeficit() {
    const response = await fetch('API_URL_HERE'); // Replace with actual API URL
    const data = await response.json();
    const deficit = data.deficit; // Adjust based on API response structure
    document.getElementById('deficit-amount').innerText = `$${deficit.toLocaleString()}`;
}

// Fetch data every X seconds
setInterval(fetchDeficit, 10000); // Fetch every minute
fetchDeficit(); // Initial fetch

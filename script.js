async function fetchDeficit() {
    const response = await fetch('https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v1/accounting/od/rates_of_exchange?fields=country_currency_desc,exchange_rate, record_date&filter=record_date:gte:2015-01-01'); // Replace with actual API URL
    const data = await response.json();
    const deficit = data.deficit; // Adjust based on API response structure
    document.getElementById('deficit-amount').innerText = `$${deficit.toLocaleString()}`;
}

// Fetch data every X seconds
setInterval(fetchDeficit, 10000); // Fetch every minute
fetchDeficit(); // Initial fetch

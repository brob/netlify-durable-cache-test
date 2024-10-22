const url = 'https://candid-sherbet-49d76c.netlify.app/api/demo/slughere';

async function fetchData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data, new Date());

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function start () {
    fetchData();
    setInterval(fetchData, 9000); // 60000 milliseconds = 60 seconds

}


// Initial fetch to start the process immediately
start();
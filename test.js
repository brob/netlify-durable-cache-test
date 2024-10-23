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
    setInterval(fetchData, 4000); 

}
start();
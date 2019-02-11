const code = location.hash.match(/(?<=\bcode=\b)[^&]*/);

const url = `https://productwatch.azurewebsites.net/api/api?code=${code}?name=234`;
fetch(url);

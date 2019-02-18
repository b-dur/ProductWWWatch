import { getCode } from "./utils";

async function loadContent() {
  const url = `https://productwatch.azurewebsites.net/api/api?code=${getCode()}`;
  const resp = await fetch(url);
  const data = await resp.json();
  document.getElementById("watcherlist").innerHTML = data.map(
    x =>
      `<li>Created at: ${new Date(x.createdAt)} <br/> Trigger price: ${
        x.triggerPrice
      } <br/> Url: ${x.url}</li>`
  );
}
loadContent();

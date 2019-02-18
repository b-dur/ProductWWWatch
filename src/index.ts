import { getCode, getFormValue } from "./utils";

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

document.forms
  .namedItem("addWatcher")
  .addEventListener("submit", (e: Event) => {
    e.preventDefault();
    const formValues = getFormValue(e.target as HTMLFormElement);
    formValues.createdAt = Date.now();

    AddWatcher(formValues);
    console.log("TCL: formValues", formValues);
  });

export const AddWatcher = async (data: any) => {
  const url = `https://productwatch.azurewebsites.net/api/api?code=${getCode()}`;
  const resp = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  });

  const watchers = await resp.json();
};

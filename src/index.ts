import "@webcomponents/custom-elements/src/native-shim";

import { getCode, getFormValue } from "./utils";

interface IWatcher {
  createdAt: number;
  triggerPrice: number;
  url: string;
}

async function loadContent() {
  const url = `https://productwatch.azurewebsites.net/api/api?code=${getCode()}`;
  const resp = await fetch(url);
  const data: IWatcher[] = await resp.json();
  if (data.length) {
    document.getElementById("watcherlist").innerHTML = data
      .map(
        x =>
          `<li>Created at: ${new Date(x.createdAt)} <br/> Trigger price: ${
            x.triggerPrice
          } <br/> Url: ${x.url}</li>`
      )
      .join();
  } else {
    document.getElementById("watcherlist").innerHTML = `<li>No data found</li>`;
  }
}
loadContent();

document.forms
  .namedItem("addWatcher")
  .addEventListener("submit", (e: Event) => {
    e.preventDefault();
    const formValues = getFormValue(e.target as HTMLFormElement) as IWatcher;
    formValues.createdAt = Date.now();

    AddWatcher(formValues);
    console.log("TCL: formValues", formValues);
  });

export const AddWatcher = async (watcher: IWatcher) => {
  const url = `https://productwatch.azurewebsites.net/api/api?code=${getCode()}`;
  const resp = await fetch(url, {
    method: "POST",
    body: JSON.stringify(watcher),
    headers: {
      "Content-Type": "application/json"
    }
  });

  const watchers = await resp.json();
};

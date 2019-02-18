import "@webcomponents/custom-elements/src/native-shim";

import { getCode, getFormValue } from "./utils";

interface IWatcher {
  _id: string;
  createdAt: number;
  triggerPrice: number;
  url: string;
}

async function loadContent() {
  const url = `https://productwatch.azurewebsites.net/api/api?code=${getCode()}`;
  const resp = await fetch(url);
  const data: IWatcher[] = await resp.json();
    const watcherList = document.getElementById("watcherlist");
  if (data.length) {
    watcherList.innerHTML = data
      .map(
        x =>
          `<li-deletable id="${x._id}">Created at: ${new Date(
            x.createdAt
          )}<br/>Trigger price: ${x.triggerPrice} <br/> Url: ${x.url}
</li-deletable>`
      )
      .join();
  } else {
    watcherList.innerHTML = `<li>No data found</li>`;
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

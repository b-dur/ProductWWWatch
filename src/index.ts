import "@webcomponents/custom-elements/src/native-shim";
import "./webComponents/li-deletable";
import { getCode, getFormValue } from "./utils";

const baseUrl = `https://productwatch.azurewebsites.net/api/watchers`;

interface IWatcher {
  _id: string;
  createdAt: number;
  triggerPrice: number;
  url: string;
}

function updateWatcherList(watchers: IWatcher[]) {
  const watcherList = document.getElementById("watcherlist");
  if (watchers.length) {
    watcherList.innerHTML = watchers
      .map(
        x =>
          `<li-deletable id="${x._id}">Created at: ${new Date(
            x.createdAt
          )}<br/>Trigger price: ${x.triggerPrice}<br/> Url: ${x.url}
</li-deletable>`
      )
      .join("");
  } else {
    watcherList.innerHTML = `<li>No data found</li>`;
  }
}

async function loadContent() {
  const url = `${baseUrl}?code=${getCode()}`;
  const resp = await fetch(url);
  const data: IWatcher[] = await resp.json();

  updateWatcherList(data);
}
loadContent();

document.forms
  .namedItem("addWatcher")
  .addEventListener("submit", (e: Event) => {
    e.preventDefault();
    const formValues = getFormValue(e.target as HTMLFormElement) as IWatcher;
    formValues.createdAt = Date.now();

    AddWatcher(formValues);
  });

document
  .getElementById("watcherlist")
  .addEventListener("delete", (e: Event) => {
    const elm = e.srcElement as HTMLElement;
    removeWatcher(elm.id);
  });

const AddWatcher = async (watcher: IWatcher) => {
  const url = `${baseUrl}?code=${getCode()}`;
  await fetch(url, {
    method: "POST",
    body: JSON.stringify(watcher),
    headers: {
      "Content-Type": "application/json"
    }
  });

  loadContent();
};

const removeWatcher = async (watcherId: string) => {
  const url = `${baseUrl}/${watcherId}?code=${getCode()}`;
  await fetch(url, { method: "DELETE" });

  loadContent();
};

import { getCode } from "./utils";

const url = `https://productwatch.azurewebsites.net/api/api?code=${getCode()}&name=234`;
fetch(url);

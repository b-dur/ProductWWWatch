export const getCode = (): string => {
  const matchedResults = location.hash.match(/(?<=\bcode=\b)[^&]*/);
  const [code] = matchedResults;
  if (code) {
    sessionStorage.setItem("code", code);
  } else {
    return sessionStorage.getItem("code");
  }
  return code;
};

export const getFormValue = (form: HTMLFormElement): any => {
  const formValues = {};
  for (const e of form.elements) {
    const input = <HTMLInputElement>e;
    if (input.name) {
      formValues[input.name] = input.value;
    }
  }
  return formValues;
};

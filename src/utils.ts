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

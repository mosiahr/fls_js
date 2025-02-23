export const getURLSearchParams = (param) =>
    new URLSearchParams(window.location.search).get(param)
import $ from "jquery";

$(function f()
{
    let routes: Map<string, () => void> = new Map<string, () => void>();

    routes.set("/FBES_1213_JS/AJAX/pages/index.html", () => {

    });

    let result = routes.get(window.location.pathname);

    if (result !== undefined)
    {
        result();
    }
});
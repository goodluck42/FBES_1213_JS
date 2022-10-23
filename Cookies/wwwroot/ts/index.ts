import $ from "jquery";
import Cookies from "js-cookie";

$(function f()
{
    let routes: Map<string, () => void> = new Map<string, () => void>();
    let $main = $("main");

    routes.set("/FBES_1213_JS/Cookies/pages/index.html", () => {

        $
    });

    let result = routes.get(window.location.pathname);

    if (result !== undefined)
    {
        result();
    }
});
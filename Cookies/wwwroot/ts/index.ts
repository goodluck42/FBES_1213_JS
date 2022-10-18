"use strict";
import $ from "jquery";
import Cookies from "js-cookie";

$(function f()
{
    let routes: Map<string, () => void> = new Map<string, () => void>();
    let $main = $("main");
    const cookieName: string = "currentTime";

    routes.set("/FBES_1213_JS/Cookies/pages/index.html", () => {

        let $setCookie = $("#set-cookie");
        let $removeCookie = $("#remove-cookie");
        let $timeCookie = $("#time-cookie");

        $setCookie.on("click", (e) => {

            let minutes: number = Number($timeCookie.val());

            if (isNaN(minutes))
            {
                return;
            }

            let now: Date = new Date();

            now.setMinutes(now.getMinutes() + minutes);

            Cookies.set(cookieName, true.toString(), {
                expires: now
            });
        });

        $removeCookie.on("click", (e) => {
            Cookies.remove(cookieName);
        });


        function TimeTemplate(): string {
            let value: string = Cookies.get(cookieName);

            if (value !== undefined)
            {
                return `CookieValue: ${value}; CurrentTime: ${new Date().toString()}`;
            }
            else {
                return "No such cookie";
            }


        }

        $main.append(TimeTemplate());
    });

    let result = routes.get(window.location.pathname);

    if (result !== undefined)
    {
        result();
    }
});
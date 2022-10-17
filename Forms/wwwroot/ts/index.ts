"use strict";
import $ from "jquery";

$(function f()
{
    let routes: Map<string, () => void> = new Map<string, () => void>();

    routes.set("/FBES_1213_JS/Forms/pages/index.html" , () => {
        let $button = $("#local-storage-add-value");
        let $localStorageKey = $("#local-storage-key");
        let $localStorageValue = $("#local-storage-value");
        
        $button.on("click", (e) => {

            let key: string = $localStorageKey.val() as string;
            let value: string = $localStorageValue.val() as string;

            if (typeof key === "string" && typeof value === "string")
            {
                window.localStorage.setItem(key, value);
            }
        });
    });

    routes.set("/FBES_1213_JS/Forms/pages/shopping_cart.html", () => {
        let $localStorageData = $("#local-storage-data");
        let $localStorageUpdate = $("#local-storage-update");

        $localStorageUpdate.on("click", (e) => {
            let result: string = "";
            let keys: string[] = Object.getOwnPropertyNames(window.localStorage);

            for (let i = 0; i < keys.length; ++i)
            {
                //result += `${keys[i]} : ${window.localStorage[keys[i]]}\n`;
                result += `${keys[i]} : ${window.localStorage.getItem(keys[i])}\n`;
            }

            $localStorageData.text(result);
        });

    });

    let result = routes.get(window.location.pathname);

    if (result !== undefined)
    {
        result();
    }
});
import $ from "jquery";

import {MyjQuery} from "./MyjQuery"

$(function f()
{
    let routes: Map<string, () => void> = new Map<string, () => void>();

    routes.set("/FBES_1213_JS/Animation/pages/index.html", () => {
        //new MyjQuery("body").addClass("main-page").addClass("second-class");
        let counter: number = 0;

        // let id: number = setInterval(function () {
        //    console.log(counter++);
        //
        //    if (counter === 10)
        //    {
        //        clearInterval(id);
        //    }
        // }, 1000);
        //
        // let timeoutId: number = setTimeout(function f() {
        //     console.log("delayed");
        //     setTimeout(f, 1000);
        // }, 1000);

        //clearTimeout(timeoutId);

        //console.log(`id: ${id}`);
        // Animations

        let $animationTarget = $("#animation-target");

        // $animationTarget.slideUp();
        //
        // setTimeout(function ()
        // {
        //     $animationTarget.slideDown();
        // }, 1000);
        $.easing
        $animationTarget.animate({
            width: "200px",
            height: "25px",
        },  {
            duration: 3000,
            complete()
            {
                console.log("First animation complete");
            }
        }).animate({
            marginLeft: "20px",
            paddingTop: "20px"
        }, () => {
            console.log("Second animation complete");
        });

        $("#animation-stop").on("click", (e) => {
            $animationTarget.stop(true);
        });
    });

    let result = routes.get(window.location.pathname);

    if (result !== undefined)
    {
        result();
    }
});
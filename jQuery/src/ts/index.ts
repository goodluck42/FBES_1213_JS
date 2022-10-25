import $ from "jquery";

// jQuery.fn.jGet = function (index: number)
// {
//     return $(this.get(0));
// };


$(function f()
{
    let routes: Map<string, () => void> = new Map<string, () => void>();

    routes.set("/FBES_1213_JS/jQuery/pages/index.html", () => {
        let $container = $(".container");
        //
        let $next = $container.next();
        let $prev = $container.prev();
        console.log($next);
        console.log($prev);
        //
        let $children = $container.children();
        console.log($children);
        //
        //let $firstContainer = $($container.get(0));
        let $firstContainer = $container.first();
        let $lastContainer = $container.last();
        let $firstContainerChildren = $firstContainer.children();

        console.log($firstContainerChildren);

        //

        let $child = $container.first().find("div").first();

        console.log($child);

        //
        console.log("-------------------");
        let $closest = $child.closest("body");
        let $parent = $child.parent();

        console.log($closest);
        console.log($parent);
        //
        // div ~ div
        let $nextAll = $child.nextAll();
        let $prevAll = $child.prevAll(); // empty

        console.log($nextAll);

        $nextAll.on("click", function (e) {
           let $current = $(this);

           $current.addClass("red");
        });
    });

    let result = routes.get(window.location.pathname);

    if (result !== undefined)
    {
        result();
    }
});
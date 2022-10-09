$(function ()
{
    // setTimeout(() => {
    //     $("div").addClass("half-opacity");
    // }, 1500);

    let $nodes = $("div");

    //$nodes.addClass("half-opacity");
    //$nodes.removeClass("half-opacity");

    //$("#first").slideUp(2000);
    //$("#first").slideDown(2000);

    let $first = $("#first");

    $(document.body).css({
       "font-family": "TAHOMA"
    });
    //$first.append(`<a href="https://google.com/">Link to Google</a>`);
    //$first.prepend(`<a href="https://google.com/">Link to Google</a>`);

    let $container = $("#container");

    $container.on("click",(e) => {
        let $target = $(e.target);

        let attr = $target.attr("id");

        if (attr.startsWith("node"))
        {
            //$target.remove();
            //$target.hide();
        }

        //$container.remove();
    });

    let $showButton = $("#show-nodes");
    let $hideButton = $("#hide-nodes");

    $showButton.on("click", (e) => {
        $container.slideDown();
        let $nodes = $container.find("> div");

        $nodes.show();
    });


    $hideButton.on("click", (e) => {
        $container.slideUp();

    });

    let $applyColor = $("#square-apply");

    $applyColor.on("click", () => {
        let $number = $("#square-number").val();
        let $color = $("#square-color").val();

        let $square = $container.find(`div:nth-child(${$number})`);

        $square.css("background-color", $color);

    });
});




/// Events
// document.addEventListener("DOMContentLoaded", function ()
// {
//    let nodes = document.body.querySelectorAll("#first, #second, #third");
//
//    nodes[0].addEventListener("click", (e) =>
//    {
//       alert("Red");
//    });
//
//    nodes[1].addEventListener("click",(e) =>
//    {
//       alert("Green");
//    });
//
//    nodes[2].addEventListener("click", (e) =>
//    {
//       alert("Yellow");
//       e.preventDefault();
//    });
// });


// Targets

// document.addEventListener("DOMContentLoaded", () =>
// {
//     document.body.addEventListener("click", (e) => {
//         let node = e.target;
//
//         node.classList.add("half-opacity");
//     });
// });

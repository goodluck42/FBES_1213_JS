;(function ($, callback)
{
    if (!$)
    {
        throw new Error("jQuery is not defined!");
    }
    $(callback.bind(null, $));
})(window.jQuery || window.$, function main($)
{
    let $myInput = $("#my-input");
    let $myOutput = $("#my-output");
    let $myTestInput = $("#my-test-input");
    let $document = $(document);
    let $myMovingBlock = $("#my-moving-block");
    let $myScrollTop = $("#my-scroll-top");

    $myInput.on("keydown", (e) => {
       console.log(e, "keydown");
    });

    $myInput.on("keypress", (e) => {
        console.log(e, "keypress");
    });

    $myInput.on("keyup", (e) => {
       console.log(e, "keyup");
        $myOutput.text($myInput.val());

    });

    $myInput.on("input", (e) => {
        console.log(e, "input");
    });

    $myTestInput.on("keypress", (e) => {
       console.log("div keypress");
    });

    $document.on("scroll", (e) => {
        console.log(e);
    });

    $document.on("click", (e) => {
        return; // uncomment in future
        console.log(e);

        let pageX = e.originalEvent.pageX;
        let pageY = e.originalEvent.pageY;

        $myMovingBlock.css({
            top: pageY - $myMovingBlock.height() / 2,
            left: pageX - $myMovingBlock.width() / 2
        });
    });

    let dragData = {
        canMove: false,
        $target: $myMovingBlock
    };

    function onMouseDown(e, data)
    {
        data.canMove = true;
    }

    function onMouseMove(e, data)
    {
        if (!data.canMove)
        {
            return;
        }

        let pageX = e.originalEvent.pageX;
        let pageY = e.originalEvent.pageY;

        $myMovingBlock.css({
            top: pageY - $myMovingBlock.height() / 2,
            left: pageX - $myMovingBlock.width() / 2
        });
    }

    function onMouseUp(e, data)
    {
        data.canMove = false;
    }



    // mouseenter
    // mouseleave
    $myMovingBlock.on("mousedown", (e) => onMouseDown(e, dragData));
    $document.on("mousemove", (e) => onMouseMove(e, dragData));
    $myMovingBlock.on("mouseup", (e) => onMouseUp(e, dragData));

    $myScrollTop.on("click", (e) => {
        $document.scrollTop(0);
    });
});
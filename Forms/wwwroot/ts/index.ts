import $, {getJSON} from "jquery"
import {App, UrlParams} from "./ParseArguments"

type Product = {
    count: number,
    price: number,
    name: string
};

$(function ()
{
    let myUrlParams: UrlParams = App.ParseUrlParams(window.location.toString());

    console.log(decodeURIComponent(myUrlParams.data));

    let $items = $(".item");

    if ($items.length == 0)
    {
        return;
    }

    let obj: Product = ($items.data() as Product);
    let $form = $("#my-form");
    let $inputData = $("#data");
    let jsonData: string = JSON.stringify(obj);

    console.log(jsonData);

    $form.on("submit", (e) =>
    {
        //e.preventDefault();

        $inputData.val(jsonData);
        alert("Submit");
    });
})
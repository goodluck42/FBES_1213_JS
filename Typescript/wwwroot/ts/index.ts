import $ from "jquery";
import {Person} from "./person";

$(function ()
{
   console.log("Hello world");
});

let arr: string[] = ["hello", "world"];
let myVar: string = "2123";

let a: number = 123;
let b: boolean = true;
let c: object = {};
let d: null = null;
let e: undefined = undefined;

let s: string | null = "hello";

s = null;

type VadimObject = {
    "name": string,
    "age": number
};

type NullableString = string | null;
let person: VadimObject = {
    "name": "Vadim",
    "age": 20
};

function setName(obj: VadimObject, name: string): void {
    obj.name = name;
}

function getName(obj: VadimObject): string {
    return obj.name;
}

function check(data: number): never {
    let x: number = 10;
    throw new Error(`${data} blabla`);
}

interface ISubscriber {
    subscribe(callback: PrintCallback): void;
    notify(callbackObject: PrintCallbackObject): void;
}

type PrintCallbackObject = {
    timestamp: Date
};

type PrintCallback = ((e: PrintCallbackObject) => void);

class Student extends Person implements ISubscriber {
    private _coins: number;
    private readonly _callbacks: PrintCallback[];

    constructor(name: string, age: number, coins: number) {
        super(name, age);
        this._coins = coins;
        this._callbacks = [];
    }

    subscribe(callback: PrintCallback): void {
        this._callbacks.push(callback);
    }

    notify(callbackObject: PrintCallbackObject): void {
        for (let callback of this._callbacks)
        {
            callback(callbackObject);
        }
    }

    public get coins() {
        return this._coins;
    }

    public set coins(value: number) {
        this._coins = value;
    }

    public print() {
        super.print();

        this.notify({
            timestamp: new Date()
        });
    }
}

let p1: Student = new Student("Vadim", 20, 100);

p1.subscribe((e) => {
    console.log("first subscriber");
});
p1.subscribe((e) => {
    console.log("second subscriber");
});

p1.print();
import {IPrintable} from "./IPrintable";

export class Person implements IPrintable {
    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }

    private _name: string;
    private _age: number;

    public get name() {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }

    public get age() {
        return this._age;
    }

    public set age(value: number) {
        this._age = value;
    }

    public print(): void {
        console.log(`Name: ${this._name}\nAge: ${this._age}`);
    }
}
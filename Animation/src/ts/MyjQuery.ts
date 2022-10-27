interface IMyjQuery
{
    addClass(...value: string[]): IMyjQuery;
    removeClass(value: string): IMyjQuery;
}

export class MyjQuery implements IMyjQuery
{
    readonly _elements: NodeListOf<Element>;
    constructor(selector: string) {
        this._elements = document.querySelectorAll(selector);
    }

    public addClass(...value: string[]): IMyjQuery
    {
        for (let element of this._elements)
        {
            element.classList.add(...value);
        }

        return this;
    }
    public removeClass(value: string): IMyjQuery
    {
        for (let element of this._elements)
        {
            element.classList.remove(value);
        }

        return this;
    }
}
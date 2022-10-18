import {cssNumber} from "jquery";

let href: string = "http://localhost:63342/FBES_1213_JS/Forms/index_data.html?login=Vadim&password=qwerty";

export type UrlParams = {
    login: string | null,
    password: string | null,
    data: string | null
};

export namespace App {
    export function ParseUrlParams(urlString: string): UrlParams {
        let re: RegExp = new RegExp(/\?.+/g);
        let result: RegExpExecArray = re.exec(urlString);

        if (result == null || result.length == 0)
        {
            return ;
        }

        let firstMatch: string = result[0].replace('?', '');

        let data = firstMatch.split(/\&|\=/g);// login, Vadim, password, qwerty123

        let keys: string[] = [];
        let values: string[] = [];
        let output: any = {};

        for (let i = 0; i < data.length; ++i)
        {
            i % 2 == 0 ? keys.push(data[i]) : values.push(data[i]);
        }


        for (let i = 0; i < keys.length && i < values.length; ++i)
        {
            output[keys[i]] = values[i];
        }

        return output as UrlParams;
    }
}
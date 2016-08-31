// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/b06f2daadabe0b32dac620f241f01b337f7ca221/qs/qs.d.ts
declare namespace QueryString {
    interface IStringifyOptions {
        delimiter?: string;
        strictNullHandling?: boolean;
        skipNulls?: boolean;
        encode?: boolean;
        encoder?: (str: string) => any;
        filter?: Array<string | number> | ((prefix: string, value: any) => any);
        arrayFormat?: 'indices' | 'brackets' | 'repeat';
        indices?: boolean;
    }

    interface IParseOptions {
        delimiter?: string | RegExp;
        depth?: number;
        decoder?: (str: string) => any;
        arrayLimit?: number;
        parseArrays?: boolean;
        allowDots?: boolean;
        plainObjects?: boolean;
        allowPrototypes?: boolean;
        parameterLimit?: number;
        strictNullHandling?: boolean;
    }

    function stringify(obj: any, options?: IStringifyOptions): string;
    function parse(str: string, options?: IParseOptions): any;
}

declare module "qs" {
	export = QueryString;
}
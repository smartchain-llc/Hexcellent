export type HTMLFormatOpts = {[K: string]: string}
export class HTMLFormatter {
    private _keys: HTMLFormatOpts = {'__nonce__': getNonce()}
    constructor(
        cspSource: string,
        keys?: HTMLFormatOpts
    ){
        this._keys['__cspSource__'] = cspSource
        if(keys) this._keys = {...this._keys, ...keys}
    }

    format(htmlStr: string): string {
        for(const key in this._keys)
            htmlStr = htmlStr.replaceAll(key, this._keys[key])
        return htmlStr
    }
} 
function getNonce() {
	let text = '';
	const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	for (let i = 0; i < 32; i++) {
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}
	return text;
}
import * as vscode from 'vscode'
import { HTMLFormatOpts, HTMLFormatter } from './htmlFormatter';
const fs = require('fs');

export class HexcellentWebviewProvider implements vscode.WebviewViewProvider {
    private _view?: vscode.WebviewView

    constructor(
        private readonly _extUri: vscode.Uri,
        private formatOpts?: HTMLFormatOpts
    ){
    }
    resolveWebviewView(
        webviewView: vscode.WebviewView, 
        context: vscode.WebviewViewResolveContext, 
        token: vscode.CancellationToken
    ): Thenable<void> | void {
        this._view = webviewView
        
        webviewView.webview.options = {
            enableScripts: true,
            localResourceRoots: [ this._extUri ]
        }

        webviewView.webview.html = this._getHtmlForWebview(webviewView.webview)
    }
    private _getHtmlForWebview(webview: vscode.Webview) {
		// Get the local path to main script run in the webview, then convert it to a uri we can use in the webview.
		const scriptUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extUri,'dist', 'html', 'index.js'));
        const htmlUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extUri,'dist', 'html', 'index.html'))
        const indexKey: HTMLFormatOpts = {'__indexjs__': scriptUri.toString()}
        const formatOpts = this.formatOpts 
            ? {...this.formatOpts, ...indexKey}
            : {...indexKey}
        const formatter = new HTMLFormatter(webview.cspSource, formatOpts)
		// Do the same for the stylesheet.
		// const styleResetUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extUri, 'media', 'reset.css'));
		// const styleVSCodeUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extUri, 'media', 'vscode.css'));
		// const styleMainUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extUri, 'media', 'main.css'));

		// Use a nonce to only allow a specific script to be run.
        const htmlStr = fs.readFileSync(htmlUri.fsPath).toString()
        let ret = formatter.format(htmlStr)
		return ret
	}
}
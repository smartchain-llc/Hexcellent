import * as vscode from 'vscode'

import { HexcellentWebviewProvider } from "./calcWebview";

let ViewProvider: HexcellentWebviewProvider | undefined = undefined

export function getViewProvider(ctx: vscode.ExtensionContext): HexcellentWebviewProvider {
	if(!ViewProvider)
		ViewProvider = new HexcellentWebviewProvider(ctx.extensionUri)
	return ViewProvider
}
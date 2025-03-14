// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { createAppMetadata } from 'app';
import { getViewProvider } from 'view';
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed


export function activate(context: vscode.ExtensionContext) {
    const appInfo = createAppMetadata()
    console.log(appInfo)

  context.subscriptions.push(vscode.window.registerWebviewViewProvider('hexcellent', getViewProvider(context)));
}

// this method is called when your extension is deactivated
export function deactivate() {}

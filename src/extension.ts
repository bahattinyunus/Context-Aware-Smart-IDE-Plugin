import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('Congratulations, your extension "context-aware-smart-ide-plugin" is now active!');

    let disposable = vscode.commands.registerCommand('contextAware.helloWorld', () => {
        vscode.window.showInformationMessage('Hello World from Context-Aware Smart IDE!');
    });

    context.subscriptions.push(disposable);
}

export function deactivate() { }

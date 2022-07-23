// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  console.log(
    'Congratulations, your extension "pixel-to-rem-converter" is now active!'
  );

  context.subscriptions.push(
    vscode.commands.registerCommand(
      "pixel-to-rem-converter.AskFeedback",
      async () => {
        const answer = await vscode.window.showInformationMessage(
          "How's Pixel To Rem?",
          "Nice!",
          "Trash!"
        );
        if (answer === "Trash!") {
          vscode.window.showInformationMessage("We're sorry to hear that.");
        }
        if (answer === "Nice!") {
          vscode.window.showInformationMessage("We're glad you liked it.");
        }
      }
    )
  );

  context.subscriptions.push(
    vscode.commands.registerCommand(
      "pixel-to-rem-converter.activeEditor",
      () => {
        const activeEditor = vscode.window.activeTextEditor;
        if (!activeEditor) {
          return;
        }
      }
    )
  );
}

// this method is called when your extension is deactivated
export function deactivate() {}

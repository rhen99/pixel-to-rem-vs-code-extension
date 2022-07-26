// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  console.log(
    'Congratulations, your extension "pixel-to-rem-converter" is now active!'
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("pixel-to-rem-converter.setToRem", () => {
      const activeEditor = vscode.window.activeTextEditor;
      if (!activeEditor) {
        return;
      }
      const selection = activeEditor.selection;

      if (selection.active.character === 0) {
        vscode.window.showErrorMessage(
          "Please select the value you want to change"
        );
      }

      const value = activeEditor.document.getText(selection);

      const pixelRegex = /\d+px/g;

      if (!pixelRegex.test(value)) {
        vscode.window.showErrorMessage(
          "Make sure you're selecting a value with a unit"
        );
        return;
      }
      const selectedNumber = value.replace(/px$/g, "");
      const pixelValue = vscode.workspace
        .getConfiguration("pixelToRem")
        .get("pixelValue");

      if (typeof pixelValue === "number") {
        const convertedValue = parseInt(selectedNumber) / pixelValue + "rem";
        activeEditor.edit((editBuilder) => {
          editBuilder.replace(selection, convertedValue);
        });
      }
    })
  );
}

// this method is called when your extension is deactivated
export function deactivate() {}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'snippet'
})
export class SnippetPipe implements PipeTransform {

  transform(snippet: string, editor: string): string {

    if (editor === 'vscode') {
      const separatedSnippet = snippet
        .replace(/\\/g, "\\\\")
        .replace(/"/g, '\\"')
        .split("\n");
      const separatedSnippetLength = separatedSnippet.length;

      // add double quotes around each line apart from the last one
      const newSnippet = separatedSnippet.map((line, index) => {
        return index === separatedSnippetLength - 1 ? `"${line}"` : `"${line}",`;
      });

      return newSnippet.join("\n");
    }

    if (editor === 'sublime') {
      const regexpMagic = /(\$)([a-z(]+)([^$])/gi;
      const escapedSnippet = snippet.replace(regexpMagic, "\\$1$2$3");
      return escapedSnippet;
    }

    return snippet;
  }

}

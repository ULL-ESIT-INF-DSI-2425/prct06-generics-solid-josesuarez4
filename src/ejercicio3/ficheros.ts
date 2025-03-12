// import * as fs from "fs";

// class Error {
//   static exito(message: string): string {
//     return `${message}`;
//   }
//   static fallo(message: string): string {
//     return `Error: ${message}`;
//   }
// }

// class FileManager {
//   constructor(private filePath: string) {}

//   // Reads file
//   public readFile(): string {
//     try {
//       const content: string = fs.readFileSync(this.filePath, "utf-8");
//       return content;
//     } catch (error) {
//       Error.fallo("Error al leer el archivo");
//       return "";
//     }
//   }

//   // Writes file
//   public writeFile(data: string): void {
//     try {
//       fs.writeFileSync(this.filePath, data, "utf-8");
//       Error.exito("Archivo escrito correctamente");
//     } catch (error) {
//       Error.fallo("Error al escribir el archivo");
//     }
//   }
// }

// // Client code
// const fileManager = new FileManager("example.txt");

// // Reading content
// const currentContent = fileManager.readFile();
// console.log("Current content:", currentContent);

// // Writing content
// const newData = "This is new content to be written into the file.";
// fileManager.writeFile(newData);

// // Updating content
// const updatedContent = fileManager.readFile();
// console.log("Updated content:", updatedContent);
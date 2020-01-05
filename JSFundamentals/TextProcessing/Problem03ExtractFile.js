function extractFile(path) {
    let indexOfNameStart = path.lastIndexOf('\\');
    let indexOfExtension = path.lastIndexOf('.');

    let fileName = path.substring(indexOfNameStart + 1, indexOfExtension);
    let fileExtension = path.substring(indexOfExtension + 1);
   
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);
};

extractFile('C:\\Internal\\training-internal\\Template.pptx')
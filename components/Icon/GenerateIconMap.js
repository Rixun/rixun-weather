const { writeFileSync, readdirSync } = require('fs');

// Run this file to generate import and exports in IconMap.js to export the SVGR components and allow use in Icon component
const generateIconMap = (icons) => {
  let ImportString = ``;
  icons.map((iconName) => {
    ImportString += `import ${iconName} from './Icons/${iconName}';\n`;
  });

  let ExportString = `\nexport default {\n`;
  icons.map((iconName) => {
    ExportString += `  ${iconName},\n`;
  });
  ExportString += `};\n`;

  return ImportString + ExportString;
};

const removeFileType = (filename) => {
  return filename.split('.')[0];
};

const IconNames = readdirSync(__dirname + '/Icons').map(removeFileType);
const GeneratedImportExports = generateIconMap(IconNames);
writeFileSync(__dirname + '/IconMap.js', GeneratedImportExports);

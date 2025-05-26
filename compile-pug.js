const pug = require('pug');
const fs = require('fs');
const path = require('path');

const viewsDir = path.join(__dirname, '_views');
const outputDir = path.join(__dirname, 'site');

function compilePugFile(filePath, baseDir, outDir) {
  const relativePath = path.relative(baseDir, filePath);
  const outFilePath = path.join(outDir, relativePath.replace(/\.pug$/, '.html'));
  const outDirPath = path.dirname(outFilePath);

  // Skip partials (files starting with _)
  if (path.basename(filePath).startsWith('_')) {
    return;
  }

  try {
    if (!fs.existsSync(outDirPath)) {
      fs.mkdirSync(outDirPath, { recursive: true });
    }

    const pugSource = fs.readFileSync(filePath, 'utf-8');
    
    const compiledFunction = pug.compile(pugSource, {
      filename: filePath,
      cache: false,
      basedir: __dirname
    });

    const html = compiledFunction({}); 

    fs.writeFileSync(outFilePath, html);
    console.log(`Successfully compiled ${filePath} to ${outFilePath}`);
  } catch (err) {
    console.error(`Error compiling ${filePath}:`);
    console.error(err.message);
  }
}

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

walkDir(viewsDir, (filePath) => {
  if (path.extname(filePath) === '.pug') {
    compilePugFile(filePath, viewsDir, outputDir);
  }
}); 
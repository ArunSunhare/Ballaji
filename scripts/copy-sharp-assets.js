const fs = require("fs");
const path = require("path");

const projectRoot = process.cwd();
const sourceRoot = path.join(projectRoot, "node_modules", "@img");
const standaloneRoot = path.join(projectRoot, ".next", "standalone", "node_modules", "@img");
const standaloneAppRoot = path.join(projectRoot, ".next", "standalone");

function copyDirectory(source, destination) {
  if (!fs.existsSync(source)) {
    return;
  }

  fs.mkdirSync(destination, { recursive: true });

  for (const entry of fs.readdirSync(source, { withFileTypes: true })) {
    const sourcePath = path.join(source, entry.name);
    const destinationPath = path.join(destination, entry.name);

    if (entry.isDirectory()) {
      copyDirectory(sourcePath, destinationPath);
    } else {
      try {
        fs.copyFileSync(sourcePath, destinationPath);
      } catch (error) {
        if (error.code !== "EBUSY" || !fs.existsSync(destinationPath)) {
          throw error;
        }
      }
    }
  }
}

if (!fs.existsSync(sourceRoot) || !fs.existsSync(standaloneRoot)) {
  // The standalone output can still use copied static assets even if sharp is absent.
} else {
  for (const packageName of fs.readdirSync(sourceRoot)) {
    if (packageName.startsWith("sharp-")) {
      copyDirectory(
        path.join(sourceRoot, packageName),
        path.join(standaloneRoot, packageName)
      );
    }
  }
}

copyDirectory(
  path.join(projectRoot, ".next", "static"),
  path.join(standaloneAppRoot, ".next", "static")
);

copyDirectory(
  path.join(projectRoot, "public"),
  path.join(standaloneAppRoot, "public")
);

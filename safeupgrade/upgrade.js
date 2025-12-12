const fs = require("fs");
const { execSync } = require("child_process");

// Paths
const scanReportPath = "/output/scan_report.json";
const packageJsonPath = "/app/package.json";

// Read scan report
const scanReport = JSON.parse(fs.readFileSync(scanReportPath, "utf-8"));
const pkg = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));

let upgraded = false;

// Update dependencies
scanReport.dependencies.forEach(dep => {
  if (dep.outdated && pkg.dependencies[dep.name]) {
    console.log(`Upgrading ${dep.name}: ${dep.current} → ${dep.latest}`);
    pkg.dependencies[dep.name] = dep.latest;
    upgraded = true;
  }
});

if (!upgraded) {
  console.log("No dependencies to upgrade.");
  process.exit(0);
}

// Write updated package.json
fs.writeFileSync(packageJsonPath, JSON.stringify(pkg, null, 2));

// Reinstall dependencies
console.log("Running npm install...");
execSync("npm install", { stdio: "inherit" });

// Save upgrade report
const upgradeReport = {
  upgraded_at: new Date().toISOString(),
  dependencies: scanReport.dependencies.filter(d => d.outdated)
};

fs.writeFileSync(
  "/output/upgrade_report.json",
  JSON.stringify(upgradeReport, null, 2)
);

console.log("Upgrade completed successfully.");
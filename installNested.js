const fs = require("fs")
const { resolve, join } = require("path")
const cp = require("child_process")

const src = resolve(__dirname, "src")

fs.readdirSync(src).forEach(modulo => {
  const moduloPath = join(src, modulo)
  const pkgJson = join(moduloPath, "package.json")
  if (!fs.existsSync(pkgJson)) {
    return
  }

  cp.spawn("yarn.cmd", ["install"], { env: process.env, cwd: moduloPath, stdio: "inherit" })
})

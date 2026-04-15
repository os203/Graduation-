import { defineConfig } from '@prisma/config'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const envPath = resolve(process.cwd(), '.env')
try {
  const envFile = readFileSync(envPath, 'utf8')
  for (const line of envFile.split(/\r?\n/)) {
    const match = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)$/)
    if (!match) continue
    const [, key, value] = match
    if (process.env[key] === undefined) {
      process.env[key] = value.replace(/^"(.*)"$/s, '$1')
    }
  }
} catch {
}

export default defineConfig({
  earlyAccess: true,
  datasource: {
    url: process.env.DATABASE_URL ?? '',
  },
  migrations: {
    url: process.env.DATABASE_URL ?? '',
  },
})

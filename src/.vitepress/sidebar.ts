import fs from 'node:fs'
import path from 'node:path'
import type { DefaultTheme } from 'vitepress'

interface SummaryEntry {
  readonly text: string
  readonly link: string
  readonly indent: number
  readonly items: SummaryEntry[]
}

const ENTRY_PATTERN = /^(\s*)-\s+\[(.+?)\]\((.+?)\)\s*$/

/**
 * Convert a SUMMARY.md path such as `./03/04Jaringan/02.md` into the route
 * VitePress generates for it, e.g. `/03/04Jaringan/02`.
 */
export function toRoute(target: string): string {
  const cleaned = target.trim().replace(/^\.\//, '')

  if (cleaned === 'index.md' || cleaned === 'README.md') {
    return '/'
  }

  if (cleaned.endsWith('/index.md')) {
    return `/${cleaned.slice(0, -'index.md'.length)}`
  }

  return `/${cleaned.replace(/\.md$/, '')}`
}

function parseSummary(sourceDir: string): SummaryEntry[] {
  const summaryFile = path.join(sourceDir, 'SUMMARY.md')
  const lines = fs.readFileSync(summaryFile, 'utf8').split(/\r?\n/)
  const roots: SummaryEntry[] = []
  const stack: SummaryEntry[] = []

  for (const line of lines) {
    const match = ENTRY_PATTERN.exec(line)
    if (!match) {
      continue
    }

    const [, whitespace, text, target] = match
    const entry: SummaryEntry = {
      text: text.trim(),
      link: toRoute(target),
      indent: whitespace.replace(/\t/g, '  ').length,
      items: []
    }

    while (stack.length > 0 && stack[stack.length - 1]!.indent >= entry.indent) {
      stack.pop()
    }

    const parent = stack[stack.length - 1]
    if (parent) {
      parent.items.push(entry)
    } else {
      roots.push(entry)
    }

    stack.push(entry)
  }

  return roots
}

function toSidebarItem(entry: SummaryEntry): DefaultTheme.SidebarItem {
  const item: DefaultTheme.SidebarItem = {
    text: entry.text,
    link: entry.link
  }

  if (entry.items.length > 0) {
    item.items = entry.items.map(toSidebarItem)
    item.collapsed = false
  }

  return item
}

/** Sidebar for every page, derived from the mdBook table of contents. */
export function buildSidebar(sourceDir: string): DefaultTheme.Sidebar {
  return parseSummary(sourceDir).map(toSidebarItem)
}

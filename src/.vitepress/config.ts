import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitepress'
import { buildSidebar } from './sidebar'

const sourceDir = fileURLToPath(new URL('..', import.meta.url))

const repository = 'https://github.com/T4n-Labs/t4n-os_docs'

export default defineConfig({
  lang: 'id-ID',
  title: 'T4n OS Documentation',
  description:
    'Dokumentasi resmi T4n OS — sistem operasi berbasis Void Linux yang ringan, bersih, dan modular.',
  srcExclude: ['SUMMARY.md', '404.md'],
  outDir: '../dist',
  appearance: 'dark',
  lastUpdated: true,
  head: [['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }]],
  sitemap: {
    hostname: 'https://t4nos-docs.t4nlabs.web.id'
  },
  markdown: {
    theme: {
      dark: 'github-dark',
      light: 'github-light'
    }
  },
  themeConfig: {
    siteTitle: 'T4n OS Docs',
    sidebar: buildSidebar(sourceDir),
    nav: [
      { text: 'Beranda', link: 'https://t4n-labs.github.io/t4n-os' },
      { text: 'News', link: 'https://t4n-labs.github.io/t4n-os/news/EN/news.html' },
      { text: 'Download', link: 'https://t4n-labs.github.io/t4n-os/#download' },
      { text: 'Packages', link: 'https://www.voidlinux.org/packages/' },
      { text: 'Manual Pages', link: 'https://man.voidlinux.org/' },
      { text: 'GitHub', link: 'https://github.com/T4n-Labs' }
    ],
    socialLinks: [{ icon: 'github', link: repository }],
    editLink: {
      pattern: `${repository}/edit/main/src/:path`,
      text: 'Sunting halaman ini'
    },
    lastUpdated: {
      text: 'Terakhir diperbarui',
      formatOptions: { dateStyle: 'long', timeStyle: 'short' }
    },
    outline: {
      level: [2, 3],
      label: 'Di halaman ini'
    },
    docFooter: {
      prev: 'Halaman sebelumnya',
      next: 'Halaman berikutnya'
    },
    sidebarMenuLabel: 'Menu',
    returnToTopLabel: 'Kembali ke atas',
    darkModeSwitchLabel: 'Tema',
    lightModeSwitchTitle: 'Ganti ke mode terang',
    darkModeSwitchTitle: 'Ganti ke mode gelap',
    langMenuLabel: 'Ganti bahasa',
    externalLinkIcon: true,
    notFound: {
      title: 'Maaf. Halaman tidak ditemukan.',
      quote: 'Halaman yang Anda cari mungkin telah dipindahkan atau belum ditulis.',
      linkLabel: 'Kembali ke beranda',
      linkText: 'Beranda'
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Cari',
            buttonAriaLabel: 'Cari di dokumentasi'
          },
          modal: {
            displayDetails: 'Tampilkan daftar isi',
            resetButtonTitle: 'Hapus pencarian',
            backButtonTitle: 'Tutup pencarian',
            noResultsText: 'Tidak ada hasil untuk',
            footer: {
              selectText: 'untuk memilih',
              selectKeyAriaLabel: 'enter',
              navigateText: 'untuk berpindah',
              navigateUpKeyAriaLabel: 'panah atas',
              navigateDownKeyAriaLabel: 'panah bawah',
              closeText: 'untuk menutup',
              closeKeyAriaLabel: 'escape'
            }
          }
        }
      }
    }
  }
})

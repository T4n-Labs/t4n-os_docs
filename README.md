# T4n Labs Documentation

Repositori dokumentasi resmi untuk T4n OS, dibangun dengan [VitePress](https://vitepress.dev/) dan TypeScript.

# Website

Documentation Website:

- https://t4nos-docs.t4nlabs.web.id/

# Pengembangan

Prasyarat: Node.js 20 atau lebih baru.

```bash
npm install     # pasang dependensi
npm run dev     # server lokal dengan hot reload
npm run build   # build statis ke folder dist/
npm run preview # pratinjau hasil build
npm run typecheck
```

## Struktur

```
src/                    # sumber halaman
  .vitepress/
    config.ts           # konfigurasi situs (TypeScript)
    sidebar.ts          # membangun sidebar dari SUMMARY.md
    theme/              # tema, palet warna T4n
  SUMMARY.md            # daftar isi, sumber navigasi sidebar
  public/               # aset statis (CNAME, robots.txt)
  */                    # halaman dokumentasi dalam Markdown
```

Menambah halaman baru cukup dengan membuat file `.md` di `src/` lalu menambahkannya ke `SUMMARY.md` — sidebar ikut menyesuaikan otomatis.

## Deployment

Setiap push ke `main` menjalankan `.github/workflows/deploy.yml`, yang melakukan type check, build, lalu deploy ke GitHub Pages. Pull request hanya menjalankan build tanpa deploy.

---

<div align="center">

[@T4n-Labs](https://t4n-labs.github.io/site) · [@Gh0sT4n](https://gh0st4n.github.io/site)

</div>

# STYLE.md — Gaya Penulisan Dokumentasi T4n OS

Salinan aturan dari `WORK.md` (bagian GAYA PENULISAN) + temuan dari audit file lama.
Acuan mutlak: `src/02/Beginner/02.md`. Sidebar/nav mengikuti `src/SUMMARY.md`.

## Nada & bahasa
- Sapaan "kamu", informal-teknis, kalimat pendek, imperatif.
- Campur ID–EN natural. Istilah ini TETAP Inggris, jangan diterjemahkan:
  device, storage, boot, live boot, bootloader, burning, corrupt, progress, real-time,
  software, port, hub, package, repository, service, kernel, mount, unmount, symlink,
  chroot, display manager, session, seat.
- Tanpa basa-basi, tanpa kalimat pembuka berbunga, tanpa emoji kecuali `⚠️`.

## Anatomi halaman (urutan wajib)
1. `# Judul Halaman` — Title Case, sama persis dengan judul di SUMMARY.md.
2. Satu kalimat pengantar yang menautkan ke halaman sebelumnya bila relevan.
3. `## 1. Nama Bagian Utama` — H2 diberi nomor manual (1., 2., 3., ...).
4. `### Langkah 1: Nama Aksi` — H3 pola tetap `Langkah N: <Aksi Title Case>`.
5. `#### Sub Bagian` — H4 untuk rincian di dalam satu Langkah.
6. `## Tips Tambahan` — H2 tanpa nomor, bullet list pendek, di akhir halaman.
7. Footer signature (persis, dengan baris kosong agar markdown ter-render):
   ```
   <div align="center">

   [@T4n-Labs](https://t4nlabs.web.id) · [@Gh0sT4n](https://gh0st4n.my.id)

   </div>
   ```

## Code block
- Perintah ditulis POLOS, tanpa prompt `#` atau `$`.
- Gold standard (`src/02/Beginner/02.md`) memakai ` ```bash ` untuk perintah
  dan fence polos ` ``` ` untuk output terminal. Spec WORK.md menyebut ` ```sh ` dan ` ```text `.
  **Temuan audit:** file lama memakai ` ```bash ` (714) dan fence polos (951); tidak ada ` ```sh ` / ` ```text `.
  Keputusan: ikuti gold standard (` ```bash ` + fence polos) agar konsisten dengan acuan mutlak;
  output bisa diberi tag ` ```text ` bila QA "semua ada language tag" ditegakkan (catatan).
- Output selalu diawali kalimat "Contoh output:".
- Placeholder pakai huruf besar `X`: `/dev/sdX`, `/dev/mmcblkX`. Path contoh: `/path/to/T4nOS-x86_64.iso`.

## Tabel
- Setelah perintah → tabel penjelas bagian perintah: `| Parameter | Keterangan |` atau `| Field | Keterangan |`.
- Daftar aplikasi → `| Aplikasi | Platform | Link |` atau `| Aplikasi | Deskripsi | Link |`.
- Header tabel baku: Keterangan, Field, Parameter, Aplikasi, Platform, Deskripsi, Link.

## Peringatan & catatan
- pakai emoji inline, BUKAN VitePress container:
  `**⚠️ PERINGATAN:** ...` / `**⚠️ Catatan:** ...`
- JANGAN pakai `::: tip` / `::: warning` / `::: danger` kecuali ditemukan di file lama.
  **Temuan audit:** 0 file memakai `:::` (container tidak ada). Gold standard memakai `> ⚠️ **PERINGATAN:**` (blockquote) dan `> ⚠️ **Catatan:**`. Catatan: gold standard memakai blockquote `>`, bukan inline murni. Ikuti gold standard (blockquote).

## Pemetaan & list
- Pakai panah `→` untuk pemetaan: `- USB → \`/dev/sdX\``.
- Prosedur GUI pendek pakai list bernomor dengan label "Cara umum:".

## Link
- Internal: relatif + ekstensi `.md` + anchor slug Indonesia.
  Contoh: `[T4n OS](../01.md#unduh-file-iso)`, `[Persiapan Media](./02.md)`.
- JANGAN bikin bagian "Referensi" formal di akhir.

## Frontmatter
- **Temuan audit:** 0 file memakai frontmatter. JANGAN tambahkan.

## Struktur & sidebar
- Urutan baca ≠ urutan nomor file. Sidebar mengikuti `SUMMARY.md`.
- Nama folder & file dipertahankan.
- Hanya `03/05GraphicalSession/` yang pakai `index.md`. Sisanya `NN.md`.
- Setiap halaman punya footer signature. Setiap file .md masuk sidebar.

## Temuan audit (B0)
- Total file .md di src: 120 (termasuk index.md & SUMMARY.md).
- Frontmatter: 0 file.
- VitePress container (`:::`): 0 file.
- Code fence tanpa language tag: 951 (umumnya blok output terminal).
- Rebranding "Void Linux" → "T4n OS": sebagian file masih menyebut "Void Linux" (sumber upstream). Nama tool/paket/path/code block JANGAN diubah.
- Peringatan di gold standard memakai blockquote `> ⚠️ **PERINGATAN:**` / `> ⚠️ **Catatan:**`.
- Banyak halaman masih berupa kerangka/placeholder atau belum ditulis ulang (cek MAPPING.md).

## Atribusi upstream
- Baca `void-docs/LICENSE` + `CONTRIBUTING.md`, pertahankan atribusi upstream di halaman kredit (B8).

# MAPPING.md — Peta Konten T4n OS Docs (B0)

Status: `stub` = <40 baris, `draft` = >=40 baris (perlu penyesuaian gaya), `ok` = sudah gold-standard.
Sumber = path di void-docs/src (read-only) atau keterangan khas T4n OS.

| Target | Judul | Sumber | Status |
|---|---|---|---|
| index.md | Beranda | — (khas T4n OS) | stub (26 baris) |
| 01/01.md | Pengenalan | about/index.md + about-this-handbook.md | stub (39 baris) |
| 01/02.md | Sejarah | about/history.md + about/infradocs.md | draft (55 baris) |
| 02/01.md | Instalasi | installation/index.md + live-images/index.md | draft (89 baris) |
| 02/Beginner/01.md | Panduan Beginner | live-images/index.md | draft (100 baris) |
| 02/Beginner/02.md | Persiapan Media | live-images/prep.md (gold standard, jangan ubah) | draft (113 baris) |
| 02/Beginner/03.md | Partisi | live-images/partitions.md | draft (129 baris) |
| 02/Beginner/04.md | Panduan Instalasi | live-images/guide.md | draft (251 baris) |
| 02/Advanced/01.md | Panduan Advanced | guides/index.md | stub (17 baris) |
| 02/Advanced/02.md | Via chroot | guides/chroot.md | draft (280 baris) |
| 02/Advanced/03.md | Full Disk Encryption | guides/fde.md | draft (245 baris) |
| 02/Advanced/04.md | Root on ZFS | guides/zfs.md | draft (170 baris) |
| 02/Advanced/ARM/01.md | ARM | arm-devices/index.md | draft (173 baris) |
| 02/Advanced/ARM/02.md | Apple Silicon (ASAHI) | arm-devices/apple-silicon.md | draft (93 baris) |
| 02/Advanced/ARM/03.md | Lenovo Thinkpad X13s | arm-devices/thinkpad-x13s.md | draft (67 baris) |
| 02/Advanced/ARM/04.md | Pinebook Pro | arm-devices/pinebook-pro.md | draft (50 baris) |
| 02/Advanced/ARM/05.md | Raspberry Pi | arm-devices/raspberry-pi.md | draft (141 baris) |
| 03/01.md | Konfigurasi | config/index.md | stub (11 baris) |
| 03/01Package/01.md | Dokumentasi Package | package-documentation/index.md | stub (21 baris) |
| 03/01Package/02.md | Halaman Manual | package-documentation/man.md | draft (90 baris) |
| 03/02.md | Firmware | firmware.md | draft (62 baris) |
| 03/03.md | Locale | locales.md | draft (69 baris) |
| 03/04.md | User & Group | users-and-groups.md | draft (107 baris) |
| 03/02Service/01.md | Service - Runit | services/index.md | draft (155 baris) |
| 03/02Service/02.md | Per-User Service | services/user-services.md | draft (126 baris) |
| 03/02Service/03.md | Logging | services/logging.md | draft (47 baris) |
| 03/05.md | rc.conf, rc.local, rc.shutdown | rc-files.md | draft (92 baris) |
| 03/06.md | Cron | cron.md | draft (71 baris) |
| 03/07.md | Solid State Drive - SSD | ssd.md | draft (158 baris) |
| 03/03Security/01.md | Security | security/index.md | stub (15 baris) |
| 03/03Security/02.md | AppArmor | security/apparmor.md | draft (66 baris) |
| 03/08.md | Tanggal & Waktu | date-time.md | draft (90 baris) |
| 03/09.md | Kernel | kernel.md | draft (233 baris) |
| 03/10.md | Manajemen Daya | power-management.md | draft (71 baris) |
| 03/04Jaringan/01.md | Jaringan | network/index.md | draft (101 baris) |
| 03/04Jaringan/02.md | Firewall | network/firewalls.md | draft (133 baris) |
| 03/04Jaringan/03.md | IWD | network/iwd.md | draft (105 baris) |
| 03/04Jaringan/04.md | ConnMan | network/connman.md | draft (80 baris) |
| 03/04Jaringan/05.md | NetworkManager | network/networkmanager.md | draft (106 baris) |
| 03/04Jaringan/06.md | wpa_supplicant | network/wpa_supplicant.md | draft (113 baris) |
| 03/04Jaringan/07.md | dhcpcd | — (khas T4n OS, dhcpcd) | draft (174 baris) |
| 03/11.md | Jaringan Filesystem | network-filesystems.md | draft (113 baris) |
| 03/12.md | Manajemen Session & Seat | session-management.md | draft (157 baris) |
| 03/05GraphicalSession/index.md | Graphical Session | graphical-session/index.md | draft (41 baris) |
| 03/05GraphicalSession/DRIVER/01.md | Graphics Drivers | graphics-drivers/index.md | stub (20 baris) |
| 03/05GraphicalSession/DRIVER/02.md | AMD atau ATI | graphics-drivers/amd.md | draft (90 baris) |
| 03/05GraphicalSession/DRIVER/03.md | Intel | graphics-drivers/intel.md | draft (83 baris) |
| 03/05GraphicalSession/DRIVER/04.md | NVIDIA | graphics-drivers/nvidia.md | draft (118 baris) |
| 03/05GraphicalSession/DRIVER/05.md | NVIDIA OPTIMUS | graphics-drivers/optimus.md | draft (87 baris) |
| 03/05GraphicalSession/SESSIONS/01.md | Session | — (pengantar khas T4n OS) | stub (15 baris) |
| 03/05GraphicalSession/SESSIONS/02.md | X11-Xorg | graphical-session/xorg.md | draft (100 baris) |
| 03/05GraphicalSession/SESSIONS/03.md | Wayland | graphical-session/wayland.md | draft (85 baris) |
| 03/05GraphicalSession/SESSIONS/04.md | XDG-Desktop-Portal | graphical-session/portals.md | draft (55 baris) |
| 03/05GraphicalSession/GUI-CORE/01.md | GUI-Core | — (pengantar) | stub (12 baris) |
| 03/05GraphicalSession/GUI-CORE/02.md | XFCE | — (khas T4n OS, XFCE) | draft (99 baris) |
| 03/05GraphicalSession/GUI-CORE/03.md | XFCE-Wayland | — (khas T4n OS, XFCE-Wayland) | draft (112 baris) |
| 03/05GraphicalSession/GUI-EXTRA/01.md | GUI-Extra | — (pengantar) | stub (15 baris) |
| 03/05GraphicalSession/GUI-EXTRA/02.md | Fonts | graphical-session/fonts.md | draft (62 baris) |
| 03/05GraphicalSession/GUI-EXTRA/03.md | Icons | graphical-session/icons.md | draft (57 baris) |
| 03/05GraphicalSession/GUI-EXTRA/04.md | Themes | — (khas T4n OS, Themes) | draft (95 baris) |
| 03/06CLI/01.md | CLI | — (pengantar khas T4n OS) | stub (12 baris) |
| 03/06CLI/02.md | Base | — (khas T4n OS) | draft (84 baris) |
| 03/06CLI/03.md | Server | — (BELUM ADA FILENYA, WAJIB DIBUAT) | stub (0 baris) |
| 03/07Multimedia/01.md | Multimedia | media/index.md | stub (25 baris) |
| 03/07Multimedia/02.md | ALSA | media/alsa.md | draft (94 baris) |
| 03/07Multimedia/03.md | Pipewire | media/pipewire.md | draft (128 baris) |
| 03/07Multimedia/04.md | Pulseaudio | media/pulseaudio.md | draft (65 baris) |
| 03/13.md | Bluetooth | bluetooth.md | draft (106 baris) |
| 03/14.md | TeX Live | texlive.md | draft (128 baris) |
| 03/15.md | External Applications | external-applications.md | draft (150 baris) |
| 03/16.md | Printing | print/index.md | draft (126 baris) |
| 03/08Container-VM/01.md | Container & Virtual Machine | containers-and-vms/index.md | stub (22 baris) |
| 03/08Container-VM/02.md | Chroot & Container | containers-and-vms/chroot.md | draft (107 baris) |
| 03/08Container-VM/03.md | Libvirt | containers-and-vms/libvirt.md | draft (67 baris) |
| 03/08Container-VM/04.md | LXC | containers-and-vms/lxc.md | draft (170 baris) |
| 03/08Container-VM/05.md | KVM | — (khas T4n OS, KVM) | draft (233 baris) |
| 03/08Container-VM/06.md | Qemu | — (khas T4n OS, Qemu) | draft (363 baris) |
| 03/08Container-VM/07.md | VMWare | — (khas T4n OS, VMWare) | draft (212 baris) |
| 03/08Container-VM/08.md | VirtualBox Oracle | — (khas T4n OS, VirtualBox Oracle) | draft (255 baris) |
| 03/08Container-VM/android/01.md | Android | — (pengantar khas T4n OS) | stub (16 baris) |
| 03/08Container-VM/android/02.md | Waydroid - X11 | — (khas T4n OS, Waydroid X11) | draft (240 baris) |
| 03/08Container-VM/android/03.md | Waydroid - Wayland | — (khas T4n OS, Waydroid Wayland) | draft (320 baris) |
| 03/17.md | OpenPGP | openpgp.md | draft (75 baris) |
| 04/01.md | Package Manager | xbps/index.md | draft (59 baris) |
| 04/02.md | Advanced Usage | xbps/advanced-usage.md + troubleshooting/* | draft (145 baris) |
| 04/xbps/01.md | XBPS | man xbps | stub (34 baris) |
| 04/xbps/02.md | XBPS-ALTERNATIVES | man xbps-alternatives | draft (111 baris) |
| 04/xbps/03.md | XBPS-CHECKVERS | man xbps-checkvers | draft (96 baris) |
| 04/xbps/04.md | XBPS-CREATE | man xbps-create | draft (132 baris) |
| 04/xbps/05.md | XBPS-DGRAPH | man xbps-dgraph | draft (85 baris) |
| 04/xbps/06.md | XBPS-DIGEST | man xbps-digest | draft (64 baris) |
| 04/xbps/07.md | XBPS-FBULK | man xbps-fbulk | draft (100 baris) |
| 04/xbps/08.md | XBPS-FETCH | man xbps-fetch | draft (114 baris) |
| 04/xbps/09.md | XBPS-INSTALL | man xbps-install | draft (171 baris) |
| 04/xbps/10.md | XBPS-PKGDB | man xbps-pkgdb | draft (146 baris) |
| 04/xbps/11.md | XBPS-QUERY | man xbps-query | draft (165 baris) |
| 04/xbps/12.md | XBPS-RECONFIGURE | man xbps-reconfigure | draft (119 baris) |
| 04/xbps/13.md | XBPS-REMOVE | man xbps-remove | draft (150 baris) |
| 04/xbps/14.md | XBPS-RINDEX | man xbps-rindex | draft (149 baris) |
| 04/xbps/15.md | XBPS-UCHROOT | man xbps-uchroot | draft (129 baris) |
| 04/xbps/16.md | XBPS-UHELPER | man xbps-uhelper | draft (184 baris) |
| 04/xbps/17.md | XBPS-UUNSHARE | man xbps-uunshare | draft (109 baris) |
| 04/repository/01.md | Repository | repositories/index.md | draft (153 baris) |
| 04/repository/02.md | Repository Custom | repositories/custom.md | draft (141 baris) |
| 04/repository/03.md | Signing Repositories | repositories/signing.md | draft (120 baris) |
| 04/repository/04.md | Restricted Package | repositories/restricted.md | draft (101 baris) |
| 04/repository/mirror/01.md | Mirror | mirrors/index.md | stub (24 baris) |
| 04/repository/mirror/02.md | Changing Mirror | mirrors/changing.md | draft (96 baris) |
| 04/repository/mirror/03.md | Tor Mirror | mirrors/tor.md | draft (121 baris) |
| 04/xbps-src/01.md | XBPS-SRC | contributing/index.md + sumber upstream | draft (132 baris) |
| 04/let-x/01.md | Let-X | — (khas T4n OS, pertahankan) | draft (100 baris) |
| vur/00.md | VUR | — (khas T4n OS) | stub (22 baris) |
| vur/01.md | Pengenalan | — (khas T4n OS) | draft (45 baris) |
| vur/02.md | Sejarah | — (khas T4n OS) | stub (29 baris) |
| vur/03.md | Struktur VUR | — (khas T4n OS) | draft (70 baris) |
| vur/04.md | Tutorial VUR | — (khas T4n OS) | draft (91 baris) |
| vur/05.md | Keamanan & etika | — (khas T4n OS) | draft (79 baris) |
| vur/dev/00.md | Maintainer VUR | — (khas T4n OS) | stub (15 baris) |
| vur/dev/01.md | Cara Berkontribusi | — (khas T4n OS) | draft (215 baris) |
| vur/dev/02.md | Panduan Tempalte | — (khas T4n OS, perbaiki typo Tempalte) | draft (200 baris) |

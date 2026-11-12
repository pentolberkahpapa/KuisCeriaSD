const ebookMathPages = [
            { // Hal 1: Cover
                html: `
                <div class="text-center space-y-4 mt-8">
                    <div class="text-7xl bouncing-toy">📙</div>
                    <h1 class="text-2xl font-playful text-indigo-700 leading-tight">E-Book Ringkasan<br>Matematika Dasar</h1>
                    <div class="bg-indigo-100 text-indigo-800 text-xs font-bold px-3 py-1 rounded-full inline-block">Kelas 6 SD - Kurikulum Merdeka (Fase C)</div>
                    <p class="text-xs text-slate-400 font-bold mt-6 border-t-2 border-slate-100 pt-4">Penulis: Amelia Azizah</p>
                </div>`
            },
            { // Hal 2: Daftar Isi
                html: `
                <h3 class="font-playful text-xl text-indigo-600 border-b-2 border-indigo-100 pb-2 mb-3">Daftar Isi</h3>
                <ul class="text-[11px] space-y-2.5 font-bold text-slate-600 leading-relaxed">
                    <li>1. Bilangan Bulat Negatif & Operasi</li>
                    <li>2. Pecahan, Desimal & Persen</li>
                    <li>3. FPB & KPK (Soal Cerita)</li>
                    <li>4. Perbandingan & Skala Peta</li>
                    <li>5. Kecepatan, Jarak, Waktu</li>
                    <li>6. Debit, Volume & Waktu Alir</li>
                    <li>7. Luas & Keliling Lingkaran</li>
                    <li>8. Luas & Volume Bangun Ruang</li>
                    <li>9. Statistika (Mean, Median, Modus)</li>
                    <li>10. Koordinat Cartesius</li>
                </ul>`
            },
            { // Hal 3: Bab 1
                html: `
                <h3 class="font-playful text-base text-indigo-600 mb-1">Bab 1: Bilangan Bulat Negatif</h3>
                <div class="text-[11px] space-y-2 bg-white p-3 border border-slate-100 rounded-lg">
                    <p>Maju berarti Positif (+), Mundur/Utang berarti Negatif (-).</p>
                    <div class="bg-emerald-50 p-2 rounded border border-emerald-100">
                        <span class="text-emerald-700 font-bold">📝 Contoh Soal:</span><br>
                        Suhu udara awalnya -5°C, lalu naik 3°C. Berapa suhunya sekarang?<br><br>
                        <span class="font-bold text-indigo-600">💡 Penyelesaian:</span><br>
                        -5 + 3 = -2. <br>(Ibarat punya utang 5, dibayar 3, sisa utang tinggal 2). Jadi jawabannya -2°C!
                    </div>
                </div>`
            },
            { // Hal 4: Bab 2
                html: `
                <h3 class="font-playful text-base text-indigo-600 mb-1">Bab 2: Pecahan & Persen</h3>
                <div class="text-[11px] space-y-2 bg-white p-3 border border-slate-100 rounded-lg">
                    <p>Ubah semua angka ke bentuk yang sama (misalnya ke desimal) agar mudah dihitung.</p>
                    <div class="bg-emerald-50 p-2 rounded border border-emerald-100">
                        <span class="text-emerald-700 font-bold">📝 Contoh Soal:</span><br>
                        Berapa hasil dari 50% + 0,2 ?<br><br>
                        <span class="font-bold text-indigo-600">💡 Penyelesaian:</span><br>
                        Ubah 50% menjadi desimal = 0,5.<br>
                        Lalu jumlahkan: 0,5 + 0,2 = 0,7. Mudah kan!
                    </div>
                </div>`
            },
            { // Hal 5: Bab 3
                html: `
                <h3 class="font-playful text-base text-indigo-600 mb-1">Bab 3: FPB & KPK</h3>
                <div class="text-[11px] space-y-2 bg-white p-3 border border-slate-100 rounded-lg">
                    <p><b>KPK:</b> Kapan kejadian terjadi bersama-sama lagi.<br><b>FPB:</b> Membagi benda sama rata.</p>
                    <div class="bg-emerald-50 p-2 rounded border border-emerald-100">
                        <span class="text-emerald-700 font-bold">📝 Contoh Soal KPK:</span><br>
                        Budi renang tiap 2 hari, Andi tiap 3 hari. Kapan mereka renang bersama?<br><br>
                        <span class="font-bold text-indigo-600">💡 Penyelesaian:</span><br>
                        KPK dari 2 dan 3 adalah 6. Jadi, mereka akan renang bareng 6 hari lagi!
                    </div>
                </div>`
            },
            { // Hal 6: Bab 4
                html: `
                <h3 class="font-playful text-base text-indigo-600 mb-1">Bab 4: Skala Peta</h3>
                <div class="text-[11px] space-y-2 bg-white p-3 border border-slate-100 rounded-lg">
                    <p><b>Skala</b> = Jarak di Peta : Jarak Sebenarnya.</p>
                    <div class="bg-emerald-50 p-2 rounded border border-emerald-100">
                        <span class="text-emerald-700 font-bold">📝 Contoh Soal:</span><br>
                        Jarak di peta 2 cm. Skalanya 1 : 100.000. Jarak aslinya berapa?<br><br>
                        <span class="font-bold text-indigo-600">💡 Penyelesaian:</span><br>
                        2 cm x 100.000 = 200.000 cm.<br>
                        Ubah ke kilometer (coret nol lima) = 2 km.
                    </div>
                </div>`
            },
            { // Hal 7: Bab 5
                html: `
                <h3 class="font-playful text-base text-indigo-600 mb-1">Bab 5: J-K-W</h3>
                <div class="text-[11px] space-y-2 bg-white p-3 border border-slate-100 rounded-lg">
                    <p>Ingat Segitiga Jokowi! <br><b>J</b>arak = <b>K</b>ecepatan x <b>W</b>aktu.</p>
                    <div class="bg-emerald-50 p-2 rounded border border-emerald-100">
                        <span class="text-emerald-700 font-bold">📝 Contoh Soal:</span><br>
                        Mobil melaju kecepatan 50 km/jam. Kalau melaju selama 2 jam, berapa jaraknya?<br><br>
                        <span class="font-bold text-indigo-600">💡 Penyelesaian:</span><br>
                        Jarak = 50 km/jam x 2 jam = 100 km. Ngeeng! 🚗
                    </div>
                </div>`
            },
            { // Hal 8: Bab 6
                html: `
                <h3 class="font-playful text-base text-indigo-600 mb-1">Bab 6: V-D-W</h3>
                <div class="text-[11px] space-y-2 bg-white p-3 border border-slate-100 rounded-lg">
                    <p>Ingat Segitiga VDW! <br><b>V</b>olume = <b>D</b>ebit x <b>W</b>aktu.</p>
                    <div class="bg-emerald-50 p-2 rounded border border-emerald-100">
                        <span class="text-emerald-700 font-bold">📝 Contoh Soal:</span><br>
                        Keran air mengalirkan 2 liter/menit. Jika dinyalakan 5 menit, berapa air yang keluar?<br><br>
                        <span class="font-bold text-indigo-600">💡 Penyelesaian:</span><br>
                        Volume = 2 liter x 5 menit = 10 Liter air. 💧
                    </div>
                </div>`
            },
            { // Hal 9: Bab 7 & 8
                html: `
                <h3 class="font-playful text-base text-indigo-600 mb-1">Bab 7-8: Bangun Ruang</h3>
                <div class="text-[11px] space-y-2 bg-white p-3 border border-slate-100 rounded-lg">
                    <p><b>Luas Lingkaran:</b> π x r x r. <br>(π = 22/7 atau 3,14)</p>
                    <div class="bg-emerald-50 p-2 rounded border border-emerald-100">
                        <span class="text-emerald-700 font-bold">📝 Contoh Soal:</span><br>
                        Jari-jari lingkaran (r) = 7 cm. Berapa luasnya?<br><br>
                        <span class="font-bold text-indigo-600">💡 Penyelesaian:</span><br>
                        Luas = 22/7 x 7 x 7 = 154 cm².
                    </div>
                </div>`
            },
            { // Hal 10: Bab 9 & 10
                html: `
                <h3 class="font-playful text-base text-indigo-600 mb-1">Bab 9: Statistika</h3>
                <div class="text-[11px] space-y-2 bg-white p-3 border border-slate-100 rounded-lg">
                    <p><b>Mean:</b> Nilai Rata-rata. <br><b>Modus:</b> Paling sering muncul.</p>
                    <div class="bg-emerald-50 p-2 rounded border border-emerald-100">
                        <span class="text-emerald-700 font-bold">📝 Contoh Soal:</span><br>
                        Nilai ulangan Andi: 7, 8, 9. Berapa rata-ratanya?<br><br>
                        <span class="font-bold text-indigo-600">💡 Penyelesaian:</span><br>
                        (7 + 8 + 9) dibagi 3 = 24 ÷ 3 = 8.
                    </div>
                </div>`
            },
            { // Hal 11: Motivasi Penutup
                html: `
                <div class="text-center space-y-3 mt-4">
                    <div class="text-5xl bouncing-toy">🏆</div>
                    <h3 class="text-xl font-playful text-pink-600 drop-shadow-sm">Kamu Hebat!</h3>
                    <div class="bg-pink-50 p-4 border-2 border-pink-200 rounded-2xl shadow-sm text-left">
                        <p class="text-xs text-slate-700 font-bold leading-relaxed">
                            Matematika itu seru lho, seperti permainan rubik! 🧩 Semakin kamu berlatih, maka akan semakin mudah kamu menyelesaikannya.
                            <br><br>
                            Semangat dan rajin belajarnya, Amelia Azizah pasti bisa meraih cita-citanya! ✨
                        </p>
                    </div>
                    <p class="text-sm font-playful text-purple-700 pt-3">
                        Penuh Cinta, <br>❤️ Dari Papa & Mama ❤️
                    </p>
                </div>`
            }
        ];

        // --- E-BOOK IPAS KURIKULUM MERDEKA ---
        const ebookIpasPages = [
            { // Hal 1: Cover
                html: `
                <div class="text-center space-y-4 mt-8">
                    <div class="text-7xl bouncing-toy">🌍</div>
                    <h1 class="text-2xl font-playful text-teal-700 leading-tight">E-Book Ringkasan<br>IPAS</h1>
                    <div class="bg-teal-100 text-teal-800 text-xs font-bold px-3 py-1 rounded-full inline-block">Sains & Sosial - Fase C 2026</div>
                    <p class="text-xs text-slate-400 font-bold mt-6 border-t-2 border-slate-100 pt-4">Penulis: Amelia Azizah</p>
                </div>`
            },
            { // Hal 2: Daftar Isi
                html: `
                <h3 class="font-playful text-xl text-teal-600 border-b-2 border-teal-100 pb-2 mb-3">Daftar Isi</h3>
                <ul class="text-[11px] space-y-2.5 font-bold text-slate-600 leading-relaxed">
                    <li>1. Bagaimana Tubuh Kita Bergerak?</li>
                    <li>2. Cerita Tentang Indonesia Kita</li>
                    <li>3. Pelesir Mengelilingi Dunia</li>
                    <li>4. Indonesia & Masyarakat Dunia</li>
                    <li>5. Bumi dan Antariksa</li>
                    <li>6. Gawat! Akibat Perubahan Iklim</li>
                    <li>7. Bumiku Sayang, Bumiku Malang</li>
                    <li>8. Proyek Masa Depan</li>
                </ul>`
            },
            { // Hal 3: Bab 1
                html: `
                <h3 class="font-playful text-base text-teal-600 mb-1">Bab 1: Tubuh Kita Bergerak</h3>
                <div class="text-[11px] space-y-2 bg-white p-3 border border-slate-100 rounded-lg">
                    <p>Tubuh kita punya "mesin" yang super keren!</p>
                    <ul class="list-disc pl-4 space-y-1">
                        <li><b>Rangka:</b> Tulang yang jadi pondasi tubuhmu.</li>
                        <li><b>Sendi:</b> Engsel pintu tubuh agar tangan/kaki bisa ditekuk.</li>
                        <li><b>Otot:</b> Karet penarik yang bikin tulang bisa bergerak.</li>
                    </ul>
                    <div class="bg-amber-50 p-2 rounded border border-amber-100 mt-2">
                        <span class="font-bold text-teal-700">💡 Tips Sehat:</span><br>
                        Rajin minum susu dan makan sayur agar tulangmu sekuat baja! 💪
                    </div>
                </div>`
            },
            { // Hal 4: Bab 2
                html: `
                <h3 class="font-playful text-base text-teal-600 mb-1">Bab 2: Sejarah Indonesia</h3>
                <div class="text-[11px] space-y-2 bg-white p-3 border border-slate-100 rounded-lg">
                    <p>Dulu, nenek moyang dan para pahlawan kita berjuang sangat keras mengusir penjajah agar kita bisa merdeka (bebas).</p>
                    <div class="bg-amber-50 p-2 rounded border border-amber-100">
                        <span class="font-bold text-teal-700">💡 Tahukah Kamu?</span><br>
                        Persatuan itu ibarat sapu lidi. Kalau cuma 1 lidi, mudah dipatahkan. Tapi kalau diikat jadi satu persatuan, akan sangat kuat dan tak terkalahkan! 🇮🇩
                    </div>
                </div>`
            },
            { // Hal 5: Bab 3
                html: `
                <h3 class="font-playful text-base text-teal-600 mb-1">Bab 3: Mengelilingi Dunia</h3>
                <div class="text-[11px] space-y-2 bg-white p-3 border border-slate-100 rounded-lg">
                    <p>Bumi kita ini sangat luas dan punya daratan raksasa yang disebut <b>Benua</b> (seperti Asia, Eropa, Afrika, Amerika).</p>
                    <p>Setiap negara punya budaya, bahasa, dan makanan yang unik-unik! Kita berteman dengan negara lain untuk saling membantu (disebut Kerjasama Internasional). 🌍</p>
                </div>`
            },
            { // Hal 6: Bab 4
                html: `
                <h3 class="font-playful text-base text-teal-600 mb-1">Bab 4: Ekonomi Global</h3>
                <div class="text-[11px] space-y-2 bg-white p-3 border border-slate-100 rounded-lg">
                    <p>Pernah dengar kata Ekspor dan Impor?</p>
                    <ul class="list-disc pl-4 space-y-1">
                        <li><b>Ekspor:</b> Kita menjual barang andalan ke luar negeri (misalnya jual Kopi atau Batik).</li>
                        <li><b>Impor:</b> Kita membeli barang dari luar negeri (karena di negara kita belum ada).</li>
                    </ul>
                    <p class="font-bold text-teal-700 mt-2">Selalu bangga pakai produk buatan Indonesia ya! 🛍️</p>
                </div>`
            },
            { // Hal 7: Bab 5
                html: `
                <h3 class="font-playful text-base text-teal-600 mb-1">Bab 5: Antariksa</h3>
                <div class="text-[11px] space-y-2 bg-white p-3 border border-slate-100 rounded-lg">
                    <p>Matahari adalah Bos besar di Tata Surya kita!</p>
                    <div class="bg-amber-50 p-2 rounded border border-amber-100">
                        <span class="font-bold text-teal-700">☀️ Gerak Bumi:</span><br>
                        <b>Rotasi:</b> Bumi berputar seperti gasing di tempatnya. Ini yang bikin ada Siang & Malam.<br><br>
                        <b>Revolusi:</b> Bumi jalan mengelilingi Matahari. Ini yang bikin kalender kita ada 1 Tahun (365 hari)!
                    </div>
                </div>`
            },
            { // Hal 8: Bab 6
                html: `
                <h3 class="font-playful text-base text-teal-600 mb-1">Bab 6: Perubahan Iklim</h3>
                <div class="text-[11px] space-y-2 bg-white p-3 border border-slate-100 rounded-lg">
                    <p><b>Gawat!</b> Bumi kita lagi demam kepanasan (Pemanasan Global) gara-gara banyak asap pabrik dan kendaraan.</p>
                    <p>Akibatnya, es di kutub mencair dan cuaca jadi tidak menentu.</p>
                    <p class="font-bold text-teal-700">Yuk jadi Pahlawan Bumi dengan hemat listrik dan perbanyak jalan kaki atau naik sepeda! 🚲</p>
                </div>`
            },
            { // Hal 9: Bab 7
                html: `
                <h3 class="font-playful text-base text-teal-600 mb-1">Bab 7: Pelestarian Lingkungan</h3>
                <div class="text-[11px] space-y-2 bg-white p-3 border border-slate-100 rounded-lg">
                    <p>Bencana alam sering terjadi karena ulah manusia yang tidak menjaga lingkungan, seperti banjir karena buang sampah di sungai.</p>
                    <div class="bg-amber-50 p-2 rounded border border-amber-100">
                        <span class="font-bold text-teal-700">🌳 Misi Penyelamat:</span><br>
                        Mulai hari ini, selalu buang sampah pada tempatnya, kurangi pemakaian plastik, dan sayangi pohon-pohon di sekitarmu!
                    </div>
                </div>`
            },
            { // Hal 10: Bab 8
                html: `
                <h3 class="font-playful text-base text-teal-600 mb-1">Bab 8: Masa Depan</h3>
                <div class="text-[11px] space-y-2 bg-white p-3 border border-slate-100 rounded-lg">
                    <p>Masa depan Indonesia yang hebat ada di tanganmu!</p>
                    <p>Suatu saat nanti, mungkin kamulah ilmuwan yang menciptakan mobil bertenaga cahaya matahari, atau robot canggih pembersih lautan.</p>
                    <p class="font-bold text-teal-700">Teruslah berimajinasi dan belajar, karena ide hebatmu bisa mengubah dunia! 🚀</p>
                </div>`
            },
            { // Hal 11: Penutup IPAS
                html: `
                <div class="text-center space-y-3 mt-4">
                    <div class="text-5xl bouncing-toy">🌿</div>
                    <h3 class="text-xl font-playful text-teal-600 drop-shadow-sm">Jadilah Bintang Kehidupan!</h3>
                    <div class="bg-teal-50 p-4 border-2 border-teal-200 rounded-2xl shadow-sm text-left">
                        <p class="text-xs text-slate-700 font-bold leading-relaxed">
                            Alam semesta ini begitu luas dan penuh dengan keajaiban, sama seperti potensi luar biasa yang ada di dalam dirimu. ✨
                            <br><br>
                            Jadilah anak yang selalu menyayangi bumi, peduli pada sesama, dan berani menjelajahi luasnya dunia. Amelia Azizah pasti bisa!
                        </p>
                    </div>
                    <p class="text-sm font-playful text-teal-800 pt-3">
                        Penuh Bangga & Cinta, <br>❤️ Dari Papa & Mama ❤️
                    </p>
                </div>`
            }
        ];

        // --- E-BOOK BAHASA INDONESIA KURIKULUM MERDEKA ---
        const ebookIndonesianPages = [
            { // Hal 1: Cover
                html: `
                <div class="text-center space-y-4 mt-8">
                    <div class="text-7xl bouncing-toy">📖</div>
                    <h1 class="text-2xl font-playful text-rose-700 leading-tight">E-Book Ringkasan<br>Bahasa Indonesia</h1>
                    <div class="bg-rose-100 text-rose-800 text-xs font-bold px-3 py-1 rounded-full inline-block">Fase C 2026 - Kelas 6 SD</div>
                    <p class="text-xs text-slate-400 font-bold mt-6 border-t-2 border-slate-100 pt-4">Penulis: Amelia Azizah</p>
                </div>`
            },
            { // Hal 2: Daftar Isi
                html: `
                <h3 class="font-playful text-xl text-rose-600 border-b-2 border-rose-100 pb-2 mb-3">Daftar Isi</h3>
                <ul class="text-[11px] space-y-2.5 font-bold text-slate-600 leading-relaxed">
                    <li>1. Bangga Menjadi Anak Indonesia</li>
                    <li>2. Musisi di Panggung Dunia</li>
                    <li>3. Warisan Dunia & Nasional</li>
                    <li>4. Jeda untuk Alam</li>
                    <li>5. Anak yang Mengubah Dunia</li>
                    <li>6. Liburan Perpisahan</li>
                    <li>7. Aku Bisa Menjadi Agen Perubahan</li>
                    <li>8. Aman di Dunia Maya</li>
                </ul>`
            },
            { // Hal 3: Bab 1
                html: `
                <h3 class="font-playful text-base text-rose-600 mb-1">Bab 1: Bangga Anak Indonesia</h3>
                <div class="text-[11px] space-y-2 bg-white p-3 border border-slate-100 rounded-lg">
                    <p><b>Wawancara:</b> Tanya jawab untuk mencari informasi. Ingat rumus <b>ADiK SiMBa</b> (Apa, Di mana, Kapan, Siapa, Mengapa, Bagaimana).</p>
                    <div class="bg-pink-50 p-2 rounded border border-pink-100">
                        <span class="font-bold text-rose-700">✍️ Kalimat Efektif:</span><br>
                        Kalimat yang pesannya langsung dimengerti (tidak bertele-tele).<br>
                        ❌ "Para murid-murid sedang belajar."<br>
                        ✅ "Murid-murid sedang belajar."
                    </div>
                </div>`
            },
            { // Hal 4: Bab 2
                html: `
                <h3 class="font-playful text-base text-rose-600 mb-1">Bab 2: Musisi & Biografi</h3>
                <div class="text-[11px] space-y-2 bg-white p-3 border border-slate-100 rounded-lg">
                    <p><b>Biografi:</b> Cerita perjalanan hidup seseorang yang hebat.</p>
                    <p><b>Kosakata Baku:</b> Kata yang benar sesuai Kamus (KBBI).</p>
                    <div class="bg-pink-50 p-2 rounded border border-pink-100">
                        <span class="font-bold text-rose-700">✉️ Surat Resmi:</span><br>
                        Surat penting untuk sekolah atau kantor. Ciri khasnya: punya <i>Kop Surat</i> (kepala surat) dan menggunakan bahasa baku yang sopan.
                    </div>
                </div>`
            },
            { // Hal 5: Bab 3
                html: `
                <h3 class="font-playful text-base text-rose-600 mb-1">Bab 3: Taman Nasional</h3>
                <div class="text-[11px] space-y-2 bg-white p-3 border border-slate-100 rounded-lg">
                    <p><b>Ide Pokok:</b> Gagasan utama atau inti dari sebuah paragraf. (Biasanya ada di kalimat pertama atau terakhir).</p>
                    <div class="bg-pink-50 p-2 rounded border border-pink-100">
                        <span class="font-bold text-rose-700">📄 Laporan Pengamatan:</span><br>
                        Setelah jalan-jalan wisata, kita menulis apa yang dilihat dan dirasakan (Fakta).<br>
                        <b>Brosur:</b> Kertas lipat berwarna-warni yang berisi informasi menarik untuk mengajak orang datang!
                    </div>
                </div>`
            },
            { // Hal 6: Bab 4
                html: `
                <h3 class="font-playful text-base text-rose-600 mb-1">Bab 4: Jeda untuk Alam</h3>
                <div class="text-[11px] space-y-2 bg-white p-3 border border-slate-100 rounded-lg">
                    <p><b>Pidato:</b> Berbicara di depan orang banyak untuk menyampaikan pesan.</p>
                    <div class="bg-pink-50 p-2 rounded border border-pink-100">
                        <span class="font-bold text-rose-700">🗣️ Kalimat Persuasi:</span><br>
                        Kalimat yang sifatnya membujuk atau mengajak.<br>
                        <i>Contoh:</i> "Ayo, teman-teman! Buang sampah pada tempatnya agar bumi kita sehat kembali!" 🌍
                    </div>
                </div>`
            },
            { // Hal 7: Bab 5
                html: `
                <h3 class="font-playful text-base text-rose-600 mb-1">Bab 5: Pengubah Dunia</h3>
                <div class="text-[11px] space-y-2 bg-white p-3 border border-slate-100 rounded-lg">
                    <p><b>Surat Elektronik (Email):</b> Ngirim surat super cepat lewat internet menggunakan komputer/HP!</p>
                    <div class="bg-pink-50 p-2 rounded border border-pink-100">
                        <span class="font-bold text-rose-700">🔄 Kata Kembar & Lawan:</span><br>
                        <b>Sinonim (Persamaan):</b><br> Pintar = Cerdas, Senang = Gembira.<br>
                        <b>Antonim (Lawan Kata):</b><br> Panas >< Dingin, Tinggi >< Pendek.
                    </div>
                </div>`
            },
            { // Hal 8: Bab 6
                html: `
                <h3 class="font-playful text-base text-rose-600 mb-1">Bab 6: Liburan & Perpisahan</h3>
                <div class="text-[11px] space-y-2 bg-white p-3 border border-slate-100 rounded-lg">
                    <p><b>Puisi:</b> Susunan kata-kata indah yang punya rima (akhiran bunyi yang sama).</p>
                    <div class="bg-pink-50 p-2 rounded border border-pink-100">
                        <span class="font-bold text-rose-700">🛠️ Teks Prosedur:</span><br>
                        Petunjuk langkah demi langkah cara membuat sesuatu.<br>
                        <i>Contoh:</i> Cara Membuat Teh Manis.<br>
                        1. Siapkan gelas dan gula.<br>2. Seduh teh dengan air panas.
                    </div>
                </div>`
            },
            { // Hal 9: Bab 7
                html: `
                <h3 class="font-playful text-base text-rose-600 mb-1">Bab 7: Agen Perubahan</h3>
                <div class="text-[11px] space-y-2 bg-white p-3 border border-slate-100 rounded-lg">
                    <p>Kamu harus tahu bedanya Fakta dan Opini!</p>
                    <div class="bg-pink-50 p-2 rounded border border-pink-100">
                        <span class="font-bold text-rose-700">✅ Fakta vs 💭 Opini:</span><br>
                        <b>Fakta:</b> Benar-benar terjadi dan ada buktinya. <i>(Matahari terbit dari timur).</i><br>
                        <b>Opini:</b> Pendapat/perasaan seseorang, belum tentu sama. <i>(Pelajaran Bahasa itu paling menyenangkan!).</i>
                    </div>
                </div>`
            },
            { // Hal 10: Bab 8
                html: `
                <h3 class="font-playful text-base text-rose-600 mb-1">Bab 8: Aman di Dunia Maya</h3>
                <div class="text-[11px] space-y-2 bg-white p-3 border border-slate-100 rounded-lg">
                    <p><b>Infografik:</b> Informasi yang dibuat dalam bentuk gambar menarik agar mudah dibaca.</p>
                    <div class="bg-pink-50 p-2 rounded border border-pink-100">
                        <span class="font-bold text-rose-700">🔒 Internet Aman:</span><br>
                        Jangan sembarangan membagikan data diri (seperti alamat atau password) kepada orang asing di internet ya! Berinternetlah dengan bijak dan sopan.
                    </div>
                </div>`
            },
            { // Hal 11: Penutup B.Indo
                html: `
                <div class="text-center space-y-3 mt-4">
                    <div class="text-5xl bouncing-toy">💌</div>
                    <h3 class="text-xl font-playful text-rose-600 drop-shadow-sm">Jadilah Bintang Bersinar!</h3>
                    <div class="bg-rose-50 p-4 border-2 border-rose-200 rounded-2xl shadow-sm text-left">
                        <p class="text-xs text-slate-700 font-bold leading-relaxed">
                            Membaca adalah sayap terbangmu untuk mengelilingi dunia, dan menulislah agar dunia mendengarkan suaramu. 🦋
                            <br><br>
                            Amelia adalah anak yang hebat, berani berekspresi, dan santun dalam berbicara. Teruslah merangkai kata-kata indah yang menginspirasi banyak orang ya, Nak!
                        </p>
                    </div>
                    <p class="text-sm font-playful text-pink-700 pt-3">
                        Doa & Pelukan Hangat, <br>❤️ Dari Papa & Mama ❤️
                    </p>
                </div>`
            }
        ];

        // --- E-BOOK PENDIDIKAN PANCASILA KURIKULUM MERDEKA ---
        const ebookPancasilaPages = [
            { // Hal 1: Cover
                html: `
                <div class="text-center space-y-4 mt-8">
                    <div class="text-7xl bouncing-toy">🛡️</div>
                    <h1 class="text-2xl font-playful text-violet-700 leading-tight">E-Book Ringkasan<br>Pend. Pancasila</h1>
                    <div class="bg-violet-100 text-violet-800 text-xs font-bold px-3 py-1 rounded-full inline-block">Fase C 2026 - Kelas 6 SD</div>
                    <p class="text-xs text-slate-400 font-bold mt-6 border-t-2 border-slate-100 pt-4">Penulis: Amelia Azizah</p>
                </div>`
            },
            { // Hal 2: Daftar Isi
                html: `
                <h3 class="font-playful text-xl text-violet-600 border-b-2 border-violet-100 pb-2 mb-3">Daftar Isi</h3>
                <ul class="text-[11px] space-y-2.5 font-bold text-slate-600 leading-relaxed">
                    <li>1. Meneladani Tokoh Bangsa</li>
                    <li>2. Norma, Hak & Kewajiban</li>
                    <li>3. Jati Diri & Keberagaman</li>
                    <li>4. Negaraku Indonesia (NKRI)</li>
                    <li>5. Lestarikan Lingkungan Sekitar</li>
                    <li>6. Ayo Jaga Persatuan!</li>
                    <li>7. Pancasila di Keseharian</li>
                    <li>8. Indonesia & Dunia</li>
                </ul>`
            },
            { // Hal 3: Bab 1
                html: `
                <h3 class="font-playful text-base text-violet-600 mb-1">Bab 1: Meneladani Tokoh</h3>
                <div class="text-[11px] space-y-2 bg-white p-3 border border-slate-100 rounded-lg">
                    <p>Dulu, Bapak Pendiri Bangsa (seperti Ir. Soekarno) merumuskan Pancasila dengan semangat kekeluargaan yang luar biasa!</p>
                    <div class="bg-purple-50 p-2 rounded border border-purple-100">
                        <span class="font-bold text-violet-700">🌟 Semangat Juang:</span><br>
                        Mereka tidak egois, selalu bermusyawarah, dan mendengarkan pendapat orang lain. Hebat sekali ya!
                    </div>
                </div>`
            },
            { // Hal 4: Bab 2
                html: `
                <h3 class="font-playful text-base text-violet-600 mb-1">Bab 2: Norma & Hidupku</h3>
                <div class="text-[11px] space-y-2 bg-white p-3 border border-slate-100 rounded-lg">
                    <p><b>Norma</b> itu aturan agar hidup kita rukun. Contohnya, pamit mencium tangan orang tua sebelum sekolah.</p>
                    <div class="bg-purple-50 p-2 rounded border border-purple-100">
                        <span class="font-bold text-violet-700">⚖️ Hak vs Kewajiban:</span><br>
                        <b>Hak:</b> Sesuatu yang kita terima (contoh: dapat kasih sayang dan uang jajan).<br>
                        <b>Kewajiban:</b> Sesuatu yang harus kita lakukan (contoh: rajin belajar dan beresin tempat tidur).
                    </div>
                </div>`
            },
            { // Hal 5: Bab 3
                html: `
                <h3 class="font-playful text-base text-violet-600 mb-1">Bab 3: Jati Diri Bangsa</h3>
                <div class="text-[11px] space-y-2 bg-white p-3 border border-slate-100 rounded-lg">
                    <p>Indonesia itu super keren karena punya ratusan suku, bahasa, dan pakaian adat yang berbeda-beda!</p>
                    <div class="bg-purple-50 p-2 rounded border border-purple-100">
                        <span class="font-bold text-violet-700">🎗️ Bhinneka Tunggal Ika:</span><br>
                        Artinya <i>"Berbeda-beda tetapi tetap satu jiwa"</i>. Kita semua adalah saudara sebangsa setanah air.
                    </div>
                </div>`
            },
            { // Hal 6: Bab 4
                html: `
                <h3 class="font-playful text-base text-violet-600 mb-1">Bab 4: Negaraku Indonesia</h3>
                <div class="text-[11px] space-y-2 bg-white p-3 border border-slate-100 rounded-lg">
                    <p>Rumah besar kita bernama <b>NKRI</b> (Negara Kesatuan Republik Indonesia).</p>
                    <div class="bg-purple-50 p-2 rounded border border-purple-100">
                        <span class="font-bold text-violet-700">🗺️ Sabang sampai Merauke:</span><br>
                        Dari ujung barat (Aceh) sampai timur (Papua), wilayah kita dipenuhi gunung, lautan biru, dan hasil bumi yang melimpah ruah!
                    </div>
                </div>`
            },
            { // Hal 7: Bab 5
                html: `
                <h3 class="font-playful text-base text-violet-600 mb-1">Bab 5: Lestarikan Lingkungan</h3>
                <div class="text-[11px] space-y-2 bg-white p-3 border border-slate-100 rounded-lg">
                    <p>Menjaga kebersihan itu bentuk cinta tanah air lho!</p>
                    <div class="bg-purple-50 p-2 rounded border border-purple-100">
                        <span class="font-bold text-violet-700">🧹 Gotong Royong:</span><br>
                        Pekerjaan yang berat (seperti membersihkan kelas atau selokan) akan terasa ringan jika dikerjakan bersama-sama.
                    </div>
                </div>`
            },
            { // Hal 8: Bab 6
                html: `
                <h3 class="font-playful text-base text-violet-600 mb-1">Bab 6: Jaga Persatuan</h3>
                <div class="text-[11px] space-y-2 bg-white p-3 border border-slate-100 rounded-lg">
                    <p>Kunci persatuan adalah <b>Toleransi</b> (Sikap saling menghargai).</p>
                    <div class="bg-purple-50 p-2 rounded border border-purple-100">
                        <span class="font-bold text-violet-700">🤝 Indahnya Toleransi:</span><br>
                        Jika ada teman yang sedang beribadah atau merayakan hari raya agamanya, kita harus menghormati dan tidak mengganggunya.
                    </div>
                </div>`
            },
            { // Hal 9: Bab 7
                html: `
                <h3 class="font-playful text-base text-violet-600 mb-1">Bab 7: Pancasila di Keseharian</h3>
                <div class="text-[11px] space-y-2 bg-white p-3 border border-slate-100 rounded-lg">
                    <p>Yuk praktikkan 5 simbol ajaib ini di rumah dan sekolah!</p>
                    <ul class="list-disc pl-4 space-y-1">
                        <li><b>⭐️ Bintang:</b> Selalu rajin berdoa.</li>
                        <li><b>⛓️ Rantai:</b> Gemar menolong teman.</li>
                        <li><b>🌳 Beringin:</b> Cinta produk lokal/Cinta rukun.</li>
                        <li><b>🐂 Banteng:</b> Suka musyawarah & diskusi.</li>
                        <li><b>🌾 Padi Kapas:</b> Adil & mau antri.</li>
                    </ul>
                </div>`
            },
            { // Hal 10: Bab 8
                html: `
                <h3 class="font-playful text-base text-violet-600 mb-1">Bab 8: Indonesia & Dunia</h3>
                <div class="text-[11px] space-y-2 bg-white p-3 border border-slate-100 rounded-lg">
                    <p>Indonesia itu negara yang bersahabat. Kita menjalin kerja sama dengan negara tetangga dan di seluruh dunia.</p>
                    <div class="bg-purple-50 p-2 rounded border border-purple-100">
                        <span class="font-bold text-violet-700">🕊️ Pahlawan Perdamaian:</span><br>
                        Jika ada negara yang sedang kesusahan atau bencana, Indonesia selalu siap sedia mengirim bantuan!
                    </div>
                </div>`
            },
            { // Hal 11: Penutup Pancasila
                html: `
                <div class="text-center space-y-3 mt-4">
                    <div class="text-5xl bouncing-toy">🦅</div>
                    <h3 class="text-xl font-playful text-violet-600 drop-shadow-sm">Jadilah Garuda Kebanggaanku!</h3>
                    <div class="bg-violet-50 p-4 border-2 border-violet-200 rounded-2xl shadow-sm text-left">
                        <p class="text-xs text-slate-700 font-bold leading-relaxed">
                            Burung Garuda terbang tinggi membawa perisai kebaikan. Jadilah seperti itu ya, Nak! ✨
                            <br><br>
                            Tetaplah menjadi anak yang santun, selalu bersikap adil, dan menyayangi semua teman tanpa membeda-bedakan. Amelia Azizah adalah pelita kebanggaan keluarga yang kelak akan ikut menerangi masa depan Indonesia. 🇮🇩
                        </p>
                    </div>
                    <p class="text-sm font-playful text-purple-700 pt-3">
                        Penuh Bangga & Sayang, <br>❤️ Dari Papa & Mama ❤️
                    </p>
                </div>`
            }
        ];

        // --- E-BOOK AGAMA ISLAM (PAI) KURIKULUM MERDEKA ---
        const ebookPaiPages = [
            { // Hal 1: Cover
                html: `
                <div class="text-center space-y-4 mt-8">
                    <div class="text-7xl bouncing-toy">🕌</div>
                    <h1 class="text-2xl font-playful text-orange-600 leading-tight">E-Book Ringkasan<br>Agama Islam (PAI)</h1>
                    <div class="bg-orange-100 text-orange-800 text-xs font-bold px-3 py-1 rounded-full inline-block">Fase C 2026 - Kelas 6 SD</div>
                    <p class="text-xs text-slate-400 font-bold mt-6 border-t-2 border-slate-100 pt-4">Penulis: Amelia Azizah</p>
                </div>`
            },
            { // Hal 2: Daftar Isi
                html: `
                <h3 class="font-playful text-xl text-orange-600 border-b-2 border-orange-100 pb-2 mb-3">Daftar Isi</h3>
                <ul class="text-[11px] space-y-2.5 font-bold text-slate-600 leading-relaxed">
                    <li>1. Indahnya Nama-Nama Allah</li>
                    <li>2. Ketika Bumi Berhenti Berputar</li>
                    <li>3. Indahnya Saling Menghormati</li>
                    <li>4. Tokoh-Tokoh Teladan Islam</li>
                    <li>5. Indahnya Belajar Al-Qur'an</li>
                    <li>6. Semangat Mencari Ilmu</li>
                    <li>7. Berinfak & Bersedekah</li>
                    <li>8. Mengenal Ketentuan Zakat</li>
                    <li>9. Ibadah Haji dan Kurban</li>
                    <li>10. Luqman & Ashabul Kahfi</li>
                </ul>`
            },
            { // Hal 3: Bab 1
                html: `
                <h3 class="font-playful text-base text-orange-600 mb-1">Bab 1: Asmaul Husna</h3>
                <div class="text-[11px] space-y-2 bg-white p-3 border border-slate-100 rounded-lg">
                    <p>Allah punya nama-nama yang indah lho!</p>
                    <ul class="list-disc pl-4 space-y-1">
                        <li><b>Ash-Shamad:</b> Allah tempat kita meminta. (Hanya berdoa pada Allah).</li>
                        <li><b>Al-Muqtadir:</b> Allah Maha Berkuasa atas segalanya.</li>
                        <li><b>Al-Muqaddim:</b> Allah Maha Mendahulukan.</li>
                        <li><b>Al-Baqi:</b> Allah Maha Kekal, tidak akan pernah mati.</li>
                    </ul>
                </div>`
            },
            { // Hal 4: Bab 2
                html: `
                <h3 class="font-playful text-base text-orange-600 mb-1">Bab 2: Hari Akhir</h3>
                <div class="text-[11px] space-y-2 bg-white p-3 border border-slate-100 rounded-lg">
                    <p>Dunia ini hanya tempat mampir sementara, seperti orang berteduh.</p>
                    <div class="bg-amber-50 p-2 rounded border border-amber-100">
                        <span class="font-bold text-orange-700">⚖️ Timbangan Amal:</span><br>
                        Nanti di akhirat, semua amal kita ditimbang. Kalau rajin shalat, sedekah, dan baik pada orang tua, timbangan kebaikannya akan berat dan masuk Surga! 🌸
                    </div>
                </div>`
            },
            { // Hal 5: Bab 3
                html: `
                <h3 class="font-playful text-base text-orange-600 mb-1">Bab 3: Saling Menghormati</h3>
                <div class="text-[11px] space-y-2 bg-white p-3 border border-slate-100 rounded-lg">
                    <p>Agama Islam mengajarkan kedamaian (Rahmatan lil 'Alamin).</p>
                    <div class="bg-amber-50 p-2 rounded border border-amber-100">
                        <span class="font-bold text-orange-700">🤝 Toleransi & Simpati:</span><br>
                        Walaupun teman kita berbeda agama atau suku, kita harus tetap berteman baik, menolong saat mereka susah, dan tidak mengejeknya.
                    </div>
                </div>`
            },
            { // Hal 6: Bab 4 & 5
                html: `
                <h3 class="font-playful text-base text-orange-600 mb-1">Bab 4 & 5: Al-Qur'an & Nabi</h3>
                <div class="text-[11px] space-y-2 bg-white p-3 border border-slate-100 rounded-lg">
                    <p><b>Surah At-Tin:</b> Manusia diciptakan dalam bentuk yang paling baik (sempurna).</p>
                    <p><b>Surah Al-Ma'un:</b> Peringatan agar kita menyayangi anak yatim dan tidak melalaikan shalat.</p>
                    <div class="bg-amber-50 p-2 rounded border border-amber-100 mt-2">
                        <span class="font-bold text-orange-700">✨ Teladan Nabi:</span><br>
                        Nabi Muhammad SAW terkenal dengan sifat <i>Al-Amin</i> (Orang yang paling jujur dan bisa dipercaya). Yuk, tiru sifat Nabi!
                    </div>
                </div>`
            },
            { // Hal 7: Bab 6 & 7
                html: `
                <h3 class="font-playful text-base text-orange-600 mb-1">Bab 6-7: Ilmu & Sedekah</h3>
                <div class="text-[11px] space-y-2 bg-white p-3 border border-slate-100 rounded-lg">
                    <p><b>Ilmu:</b> Mencari ilmu (sekolah) itu wajib bagi Muslim dan Muslimah. Ilmu adalah cahaya!</p>
                    <div class="bg-amber-50 p-2 rounded border border-amber-100">
                        <span class="font-bold text-orange-700">💰 Infak & Sedekah:</span><br>
                        Sedekah itu ajaib! Memberikan harta/makanan ke orang miskin TIDAK akan membuat kita miskin, tapi justru diganti Allah dengan rezeki yang lebih banyak.
                    </div>
                </div>`
            },
            { // Hal 8: Bab 8
                html: `
                <h3 class="font-playful text-base text-orange-600 mb-1">Bab 8: Zakat</h3>
                <div class="text-[11px] space-y-2 bg-white p-3 border border-slate-100 rounded-lg">
                    <p>Zakat adalah rukun Islam yang ke-3. Tujuannya membersihkan harta kita.</p>
                    <ul class="list-disc pl-4 space-y-1">
                        <li><b>Zakat Fitrah:</b> Mengeluarkan beras/makanan pokok saat bulan Ramadhan sebelum shalat Idul Fitri.</li>
                        <li><b>Zakat Mal:</b> Zakat harta (uang, emas, atau hasil panen) jika sudah mencapai batas jumlahnya.</li>
                    </ul>
                </div>`
            },
            { // Hal 9: Bab 9
                html: `
                <h3 class="font-playful text-base text-orange-600 mb-1">Bab 9: Haji & Kurban</h3>
                <div class="text-[11px] space-y-2 bg-white p-3 border border-slate-100 rounded-lg">
                    <p><b>Haji:</b> Berkunjung ke Ka'bah di Makkah. Wajib bagi yang mampu (punya uang dan sehat).</p>
                    <div class="bg-amber-50 p-2 rounded border border-amber-100">
                        <span class="font-bold text-orange-700">🐑 Kurban:</span><br>
                        Menyembelih hewan (Kambing, Sapi, Unta) pada hari raya Idul Adha. Dagingnya dibagikan untuk orang-orang sekitar agar semua bisa makan enak!
                    </div>
                </div>`
            },
            { // Hal 10: Bab 10
                html: `
                <h3 class="font-playful text-base text-orange-600 mb-1">Bab 10: Kisah Pilihan</h3>
                <div class="text-[11px] space-y-2 bg-white p-3 border border-slate-100 rounded-lg">
                    <p><b>Luqman Al-Hakim:</b> Ayah hebat yang menasihati anaknya agar tidak menyekutukan Allah dan selalu patuh pada orang tua.</p>
                    <div class="bg-amber-50 p-2 rounded border border-amber-100">
                        <span class="font-bold text-orange-700">🛡️ Ashabul Kahfi:</span><br>
                        Kisah pemuda-pemuda hebat yang tertidur di dalam gua selama 300 tahun karena dilindungi Allah untuk menyelamatkan iman mereka dari raja yang jahat.
                    </div>
                </div>`
            },
            { // Hal 11: Penutup PAI
                html: `
                <div class="text-center space-y-3 mt-4">
                    <div class="text-5xl bouncing-toy">🤲</div>
                    <h3 class="text-xl font-playful text-orange-600 drop-shadow-sm">Jadilah Anak Shalihah!</h3>
                    <div class="bg-orange-50 p-4 border-2 border-orange-200 rounded-2xl shadow-sm text-left">
                        <p class="text-xs text-slate-700 font-bold leading-relaxed">
                            Ilmu agama adalah cahaya yang akan menuntun langkahmu ke Surga. Jadilah anak yang selalu menjaga shalat, rajin membaca Al-Qur'an, dan berakhlak mulia kepada siapa saja. 🌟
                            <br><br>
                            Amelia Azizah adalah tabungan amal jariyah Papa dan Mama yang paling berharga. Doakan kami selalu ya Nak, agar kelak kita sekeluarga bisa berkumpul kembali dan tertawa bahagia di dalam Surga-Nya Allah SWT. Aamiin ya Rabbal 'Alamiin.
                        </p>
                    </div>
                    <p class="text-sm font-playful text-orange-700 pt-3">
                        Doa & Cinta Selalu, <br>❤️ Dari Papa & Mama ❤️
                    </p>
                </div>`
            }
        ];

        let currentEbookPage = 0;
        let currentEbookData = []; // Menyimpan data buku yang sedang dibaca

        function openEbook(subject) {
            currentEbookPage = 0;
            if (subject === 'math') {
                currentEbookData = ebookMathPages;
            } else if (subject === 'ipas') {
                currentEbookData = ebookIpasPages;
            } else if (subject === 'indonesian') {
                currentEbookData = ebookIndonesianPages;
            } else if (subject === 'pancasila') {
                currentEbookData = ebookPancasilaPages;
            } else if (subject === 'pai') {
                currentEbookData = ebookPaiPages;
            }
            // Kita daur ulang container "screen-ebook-math" agar tidak menumpuk kode HTML
            switchScreen('screen-ebook-math'); 
            renderEbookPage(false);
        }

        function renderEbookPage(animate = true) {
            const container = document.getElementById('ebook-book-container');
            const content = document.getElementById('ebook-content');
            const indicator = document.getElementById('ebook-page-indicator');
            const btnPrev = document.getElementById('btn-ebook-prev');
            const btnNext = document.getElementById('btn-ebook-next');

            if (animate) {
                container.classList.remove('animate-page-flip');
                void container.offsetWidth; 
                container.classList.add('animate-page-flip');
            }

            setTimeout(() => {
                content.innerHTML = currentEbookData[currentEbookPage].html;
                indicator.innerText = `HAL ${currentEbookPage + 1} / ${currentEbookData.length}`;
                
                btnPrev.classList.toggle('hidden', currentEbookPage === 0);
                
                    if (currentEbookPage === currentEbookData.length - 1) {
                    // Cek Misi E-Book saat sampai di halaman terakhir
                    let currentBookId = '';
                    if (currentEbookData === ebookMathPages) currentBookId = 'math';
                    if (currentEbookData === ebookIpasPages) currentBookId = 'ipas';
                    if (currentEbookData === ebookIndonesianPages) currentBookId = 'indonesian';
                    if (currentEbookData === ebookPancasilaPages) currentBookId = 'pancasila';
                    if (currentEbookData === ebookPaiPages) currentBookId = 'pai';
                    triggerQuestEvent('read', currentBookId);

                    btnNext.innerHTML = 'Selesai <i class="fa-solid fa-check ml-1"></i>';
                    btnNext.classList.replace('bg-indigo-500', 'bg-emerald-500');
                    btnNext.classList.replace('border-indigo-700', 'border-emerald-700');
                    btnNext.classList.replace('hover:bg-indigo-600', 'hover:bg-emerald-600');
                    btnNext.onclick = () => switchScreen('screen-ringkasan');
                } else {
                    btnNext.innerHTML = 'Next <i class="fa-solid fa-arrow-right ml-1"></i>';
                    btnNext.classList.replace('bg-emerald-500', 'bg-indigo-500');
                    btnNext.classList.replace('border-emerald-700', 'border-indigo-700');
                    btnNext.classList.replace('hover:bg-emerald-600', 'hover:bg-indigo-600');
                    btnNext.onclick = nextEbookPage;
                }
                content.scrollTop = 0;
            }, animate ? 400 : 0);
        }

        function nextEbookPage() {
            if (currentEbookPage < currentEbookData.length - 1) {
                playSound('click');
                currentEbookPage++;
                renderEbookPage(true);
            }
        }

        function prevEbookPage() {
            if (currentEbookPage > 0) {
                playSound('click');
                currentEbookPage--;
                renderEbookPage(true);
            }
        }

exports.wait = () => {
	return`Mohon Tunggu Sebentar...`
}

exports.banned = () => {
	return`Maaf Kamu Sudah Dibanned`
}

exports.emror = () => {
	return`_Error Kak_`
}

exports.nsfw = () => {
	return`_Fitur Nsfw Belum Diaktifkan Di Group Ini!_`
}

exports.lvlnoon = () => {
	return`*LEVEL DI GRUB BELUM DI AKTIFKAN*`
}

exports.stikga = () => {
	return`*Yah gagal coba ulangi beberapa saat lagi*`
}

exports.linkga = () => {
	return`*Maaf Link Tidak Valid*`
}

exports.groupo = () => {
	return`Maaf, Perintah Ini Hanya Bisa Digunakan Dalam Group!`
}

exports.ownerB = () => {
	return`Maaf, Perintah Ini Hanya Bisa Digunakan Oleh Owner Bot!`
}

exports.admin = () => {
	return`Maaf, Perintah Ini Hanya Bisa Digunakan Oleh Admin Group!`
}

exports.badmin = () => {
	return`Bot Harus Admin Group!`
}

exports.nsfwoff = () => {
	return`*FITUR NSFW BELUM DIAKTIFKAN*`
}

exports.prem = () => { 
	return `Perintah Ini Khusus Untuk User Premium. Info Lebih Lanjut Silahkan Chat Owner Kami Kak!`
}

exports.limit = () => {
	return`Limit Anda Sudah Habis Tunggu Esok Hari!`
}

exports.satukos = (prefix, command) => {
	return`─「 *FORMAT SALAH* 」─\n• ${prefix + command} aktif\nUntuk Mengaktifkan\n• ${prefix + command} mati\nUntuk Menonaktifkan`
}

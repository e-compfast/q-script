$(function($){ 

var quiz = {

multiList: [
//1-5
		{
		ques: "Macam-macam hewan mamalia dibawah ini ?",
		ans: "gak tahu",
		ansSel: ["tahu", "kepo","biasa"]
		},

		{
		ques: "Apa yang terjadi tadi malam ?",
		ans: "gak tahu",
		ansSel: ["tahu", "kepo","biasa"]
		}

	],
},

		options = {
			help: "<justify> Jawablah 20 soal pilihan ganda dengan menekan tombol A, B, C atau D ! <br> untuk membuka gambar, gunakan koneksi internet atau data mobile</justify>",
			intro: "SOAL UJIAN NASIONAL SEKOLAH DASAR",
			allRandom: true,
			title: "<b>BAHASA INDONESIA PAKET E</b>"
		};

$("#quizArea").jQuizMe(quiz, options);

});
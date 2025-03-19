const sorular = [
  {
    id: "q1",
    soru: "Aslan Akbey’in, Ali Candan’ı Kurtlar Vadisi Operasyonu için Türkiye’ye çağırmadan önce Ali Candan nerede görevdeydi?",
    secenekler: [
      { value: "a", secenek: "Bulgaristan" },
      { value: "b", secenek: "Suriye" },
      { value: "c", secenek: "Slovakya" },
      { value: "d", secenek: "Kosova" },
    ],
  },
  {
    id: "q2",
    soru: "Sık sık ‘babayiğit’ diyen kendiside harbi babayiğit olan karakter kimdir?",
    secenekler: [
      { value: "a", secenek: "Süleyman Çakır" },
      { value: "b", secenek: "Pala" },
      { value: "c", secenek: "Doğu Bey" },
      { value: "d", secenek: "Mito" },
    ],
  },
  {
    id: "q3",
    soru: "Kurtlar Konseyi’nin tek yasası nedir?",
    secenekler: [
      { value: "a", secenek: "Sessizlik" },
      { value: "b", secenek: "Gizlilik" },
      { value: "c", secenek: "Suskunluk" },
      { value: "d", secenek: "Bağlılık" },
    ],
  },
  {
    id: "q4",
    soru: "O zamanların Türk Pablo Escobar’ı olan Abüzer Kömürcü’nün oğlu Zürriyetsiz Erdal’ı kim öldürmüştür?",
    secenekler: [
      { value: "a", secenek: "Ali Candan" },
      { value: "b", secenek: "Abidin" },
      { value: "c", secenek: "Tuncay" },
      { value: "d", secenek: "Canan" },
    ],
  },
  {
    id: "q5",
    soru: "Laz Ziya’nın sağ kolu olan her daim yanında bulunan hem dostu hem adamı olan kimdir?",
    secenekler: [
      { value: "a", secenek: "Şeyhmuz" },
      { value: "b", secenek: "Süleyman Çakır" },
      { value: "c", secenek: "Seyfo Dayı" },
      { value: "d", secenek: "Orhan" },
    ],
  },
  {
    id: "q6",
    soru: "Polat Alemdar ve Süleyman Çakır nerede tanışmışlardır?",
    secenekler: [
      { value: "a", secenek: "Emminin Mekanında" },
      { value: "b", secenek: "Cenazede" },
      { value: "c", secenek: "Çatışmada" },
      { value: "d", secenek: "Meyhanede" },
    ],
  },
  {
    id: "q7",
    soru: "Kumarhane raconunda Laz Ziya, Süleyman Çakır’a ne kadar para destek olmuştur?",
    secenekler: [
      { value: "a", secenek: "200 bin dolar" },
      { value: "b", secenek: "150 bin dolar" },
      { value: "c", secenek: "300 bin dolar" },
      { value: "d", secenek: "250 bin dolar" },
    ],
  },
  {
    id: "q8",
    soru: "Polat Alemdar’ın babaları infaz ettiği bölümde ilk kimi infaz etmiştir?",
    secenekler: [
      { value: "a", secenek: "Kürt Bedo" },
      { value: "b", secenek: "Cerrahpaşalı Halit" },
      { value: "c", secenek: "Demir Görkemli" },
      { value: "d", secenek: "Üstün Kısa" },
    ],
  },
  {
    id: "q9",
    soru: "Süleyman Çakır hangi bölümde ölmüştür?",
    secenekler: [
      { value: "a", secenek: "44'te vurulmuş 46'da ölmüştür" },
      { value: "b", secenek: "43'te vurulmuş 45'te ölmüştür" },
      { value: "c", secenek: "45'te vurulmuş 46'da ölmüştür" },
      { value: "d", secenek: "44'te vurulmuş 45'te ölmüştür" },
    ],
  },
  {
    id: "q10",
    soru: "Hangisi Seyfo Dayı’nın yeğenidir?",
    secenekler: [
      { value: "a", secenek: "Abdülhey" },
      { value: "b", secenek: "Eren" },
      { value: "c", secenek: "Erdem" },
      { value: "d", secenek: "Erhan" },
    ],
  },
];

const cevaplar = {
  q1: "d",
  q2: "b",
  q3: "c",
  q4: "d",
  q5: "d",
  q6: "a",
  q7: "c",
  q8: "a",
  q9: "b",
  q10: "d",
};




export async function GET(request: Request) {

  return Response.json({
    sorular,
  });
}



export async function POST(request: Request) {
  const formData = await request.formData();

  let score = 0;

  for (const [question, correctAnswer] of Object.entries(cevaplar)) {
    if (formData.get(question) === correctAnswer) {
      score++;
    }
  }

  return Response.json({score});
}

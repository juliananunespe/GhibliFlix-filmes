
var listaFilmes = ["https://i0.wp.com/studioghibli.com.br/wp-content/uploads/2020/04/meu-amigo-totoro-dvd-vers%C3%A1til.jpg", "https://br.web.img3.acsta.net/pictures/bzp/01/40137.jpg", "https://upload.wikimedia.org/wikipedia/pt/thumb/3/3b/A_Viagem_de_Chihiro.JPG/220px-A_Viagem_de_Chihiro.JPG", "https://m.media-amazon.com/images/I/81M0Eewr7QL._AC_UF1000,1000_QL80_.jpg", "https://upload.wikimedia.org/wikipedia/pt/e/ec/Mononoke_Hime_p%C3%B4ster.png", "https://m.media-amazon.com/images/I/71nkRHoA2qL._AC_UF1000,1000_QL80_.jpg"]

var listaNomes = ["Meu amigo Totoro", "O serviço de entregas da Kiki", "A viagem de Chiriro", "Castelo animado", "Princesa Momonocke", "Ponyo"]

// listaFilmes[0] = 'https://upload.wikimedia.org/wikipedia/pt/thumb/1/1b/Schoolrockposter.jpg/210px-Schoolrockposter.jpg'
// listaFilmes[1] = 'https://media.fstatic.com/DjhdaLmpvfJaleMFTvM2aN1-zq8=/322x478/smart/filters:format(webp)/media/movies/covers/2016/08/chegada_2-1.jpg'
// listaFilmes[2] = 'https://musicart.xboxlive.com/7/94fc5000-0000-0000-0000-000000000002/504/image.jpg'

//i = i + 1 é o mesmo que i++
var i = 0

while(i < listaFilmes.length) {
  if (listaFilmes[i].endsWith('.jpg'))
  document.write("<figure><img src=" + listaFilmes[i] + ">" + "<figcaption>" + listaNomes[i] + "</figcaption></figure>")
  //h4 é subtitulo, enquanto que figcaption é legenda de imagem
  // document.write("<h4>" + listaNomes[i] + "<h4>")
  
  i = i + 1
  // poderia usar break se atingisse uma quantidade que ja seria suficiente
  //if (i == 4) {
  // break
  // }
} 

// for (var i = 0; i < listaFilmes.length; i = i + 1) {
//   document.write("<img src=" + listaFilmes[i] + ">")
// }
  



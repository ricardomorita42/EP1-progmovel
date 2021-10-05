interface props {
  imagem: string;
}

export function Imagens({imagem}:props) {
  switch (imagem) {
    case "feijoada":
      return require('../assets/images/feijoada.png')
    case "paccheri": 
      return require('../assets/images/paccheri.png')
    case "cocacola":
      return require('../assets/images/cocacola.jpg')
    case "hamburguer_batata":
      return require('../assets/images/hamburguer_batata.jpg')
    case "maca":
      return require('../assets/images/maca.jpg')
    case "sorvete":
      return require('../assets/images/sorvete.jpg')
    case "almondegas":
      return require('../assets/images/almondegas.jpg')
    case "lasanha":
      return require('../assets/images/lasanha.jpg')
    case "spaghetti":
      return require('../assets/images/spaghetti.jpg')
    case "vinho":
      return require('../assets/images/vinho.jpg')
    default:
      return require('../assets/images/feijoada.png')
  }
};
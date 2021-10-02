const images = (props) => {
  switch (props) {
    case "feijoada":
      return require('../img/feijoada.png')
    case "paccheri": 
      return require('../img/paccheri.png')
    case "cocacola":
      return require('../img/cocacola.jpg')
    case "hamburguer_batata":
      return require('../img/hamburguer_batata.jpg')
    case "maca":
      return require('../img/maca.jpg')
    case "sorvete":
      return require('../img/sorvete.jpg')
    case "almondegas":
      return require('../img/almondegas.jpg')
    case "lasanha":
      return require('../img/lasanha.jpg')
    case "spaghetti":
      return require('../img/spaghetti.jpg')
    case "vinho":
      return require('../img/vinho.jpg')
    default:
      return require('../img/feijoada.png')
  }
};

export default images;

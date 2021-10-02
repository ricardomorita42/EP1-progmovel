const images = (props) => {
  switch (props) {
    case "feijoada":
      return require('../img/feijoada.png')
    case "macarrao": 
      return require('../img/macarrao.png')
    case "cocacola":
      return require('../img/cocacola.jpg')
    case "hamburguer_batata":
      return require('../img/hamburguer_batata.jpg')
    case "maca":
      return require('../img/maca.jpg')
    case "sorvete":
      return require('../img/sorvete.jpg')
    default:
      return require('../img/feijoada.png')
  }
};

export default images;

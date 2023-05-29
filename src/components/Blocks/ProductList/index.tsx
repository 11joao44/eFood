import dolce from '../../../assets/images/dolce_trattoria.svg'
import sushi from '../../../assets/images/sushi.svg'
import Product from '../Product'

const ProductList = () => (
  <>
    <Product
      nome="Hioki Sushi"
      image={sushi}
      description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
      tag="Japonesa"
    />
    <Product
      nome="La Dolce Vita Trattoria"
      image={dolce}
      description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
      tag="Italiana"
    />
  </>
)

export default ProductList

export type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  capa: string
  descricao: string
  cardapio: Array<{
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }>
}

export type Cardapio = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

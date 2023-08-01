import { useRef, useState } from "react";
import { v4 } from 'uuid'
import { AddButton, Container, Product, TrushButton } from './styled'

function Home() {
  const [produtos, setProdutos] = useState([])
  const inputRef = useRef()

  function cliqueBotao() {
    console.log(v4())
    setProdutos([{ id: v4(), name: inputRef.current.value, }, ...produtos])
    inputRef.current.value = ''
  }


  function deletarProduto(id) {
    setProdutos(produtos.filter(produto => produto.id !== id))
  }


  return (
    
      <Container>
        <h1>Lista...</h1>
        <input placeholder="item da lista..." ref={inputRef} />
        <AddButton onClick={cliqueBotao}>Adicionar</AddButton>      

      {
        produtos.map((produto) => (
          <Product key={produto.id}>
            <p>{produto.name}</p>
            <TrushButton onClick={() => deletarProduto(produto.id)}>🗑️</TrushButton>
          </Product>
        ))
      }
      </Container>
  );
}

export default Home;


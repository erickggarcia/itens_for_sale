import React from 'react'
import styles from './Produto.module.css'
import { useParams } from 'react-router-dom'
import Head from './Head'

const Produto = () => {
  const {id} = useParams()
  const[produto, setProduto] =  React.useState(null)
  const[carregando, setCarregando] =  React.useState(false)
  const[error, setError] =  React.useState(null)



  React.useEffect(() => {
    async function fetchProduto(url) {
      try {
        setCarregando(true)
        const response = await fetch(url)
        const json = await response.json()
        setProduto(json)
      } catch(erro) {
        setError('Um erro ocorreu')
      } finally {
        setCarregando(false)
      }
    }
    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`)
  }, [id])

  if(carregando) return <div className='loading'></div>
  if(error) return <p>{error}</p>
  if(produto === null) return null
  return (
    <section className={`${styles.produto} animeLeft`}>
      <Head title={`Ranek | ${produto.nome}`} description={`Ranek | ${produto.nome}`}/>
      <div>
        {produto.fotos.map((foto) =>
          <img key={foto.src} alt={foto.titulo} src={foto.src}/>
        )}
      </div>
      <div>
          <h1>{produto.nome}</h1>
          <span className={styles.preco}>{produto.preco}</span>
          <p className={styles.descricao}>{produto.descricao}</p>
      </div>
    </section>
  )
}

export default Produto
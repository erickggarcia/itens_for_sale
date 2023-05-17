import React from 'react'
import styles from './Contato.module.css'
import foto from '../img/contato.jpg'
import Head from './Head'


const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`} >
      <Head title='Ranek | Contato' description='Entre em contato'/>
      <img alt='Máquina de escrever' src={foto}/>
      <div>
        <h1>Entre em contato.</h1>
        <ul className={styles.dados}>
          <li>erickgarcia@garcia.com</li>
          <li>(99)99999-9999</li>
          <li>Rua Logo ali, 99</li>
        </ul>
      </div>
    </section>
  )
}

export default Contato
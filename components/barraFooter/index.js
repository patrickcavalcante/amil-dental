import React, {useContext, useEffect, useState} from 'react';
import { FaWhatsapp, FaDollarSign, FaComment, FaPhone } from 'react-icons/fa';
import styles from './BarraFooter.module.css'
import {DadosContext} from '../../contexts/DadosContext';
import Link from 'next/link'



export default function barraFooter() {
  const [tel, setTel] = useState('4000-1178')

  const {dados} = useContext(DadosContext)
  
  useEffect(()=>{
    setTel(dados.tel?dados.tel:tel)
  }, [dados])

  return (
        <div className={styles.container}>
          <Link href={'tel:'+tel.replace(/[^\d]+/g,'')} prefetch={false}>
            <a> 
            <FaPhone size={25}/>          
            <small>Ligar</small> 
            </a>
          </Link>
          <Link href='https://cotacao.sejacliente.com.br/?idop=4&url=https://hapvidasaudevendas.com.br&cor=DF0101&whatzapp=1' prefetch={false}>
            <a>
            <FaWhatsapp size={25} />          
            <small>Whatsapp</small>
            </a>
          </Link>
          <Link href='https://cotacao.sejacliente.com.br/?cor=DF0101&url=hapvidasaudevendas.com.br&idop=4' prefetch={false}>
            <a>
            <FaDollarSign size={25} />          
              <small>Cotação</small> 
            </a>
          </Link>
          <Link href='https://cotacao.sejacliente.com.br/?idop=4&url=https://hapvidasaudevendas.com.br&cor=DF0101&whatzapp=1' prefetch={false}>
            <a>
            <FaComment size={25}/>          
            <small>Chat</small> 
            </a>
          </Link>

        </div>
  );
}
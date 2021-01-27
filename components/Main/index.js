import React, {useEffect, useState, useContext} from 'react';
import styles from './Main.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaWhatsapp, FaSearch, FaMicrophone, FaRegKeyboard, FaMapMarkerAlt} from 'react-icons/fa';
import { faPaperPlane, faChevronDown, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import LazyLoad from 'react-lazyload';
import Link from 'next/link'
import {DadosContext} from '../../contexts/DadosContext';
import Head from 'next/head'
import axios from "axios";
import Modal from '../Modal';


//import {template} from '../../data';

//const url ='https://hapvidasaudevendas.com.br/api/graphql'

//const url ='https://landing-page-hapvida-sa-de-vendas-pink.vercel.app/api/graphql'

const url ='http://localhost:3000/api/graphql'

function Main(props) {

    const [name, setName] = useState('')
    const [data, setData] = useState([])
    const [tel, setTel] = useState('4000-1178')
    const [termo, setTermo] = useState(true)
    const [modal, setModal] = useState(false)

    const [header, setHeader]= useState([])
    const [session1, setSession1]= useState([])
    const [session3, setSession3]= useState([])

   function handleTermo(){
     setTermo(!termo)
     setModal(!modal)
     window.location.href = `https://cotacao.sejacliente.com.br/?nome=${name}&cor=DF0101&step=3&url=hapvidasaudevendas.com.br&idop=4`;

   }
   function handleTermoN(){
     setModal(!modal)
   }
    
    function hadleCotacao(e){
        e.preventDefault()
        if(termo){
          window.location.href = `https://cotacao.sejacliente.com.br/?nome=${name}&cor=DF0101&step=3&url=hapvidasaudevendas.com.br&idop=4`;
        }
        else{
          setModal(!modal)
        }
    }

    // function buscaDados(key) {
    //   axios({
    //     url,
    //     method: 'post',
    //     data: {
    //       query: `
    //       query{
    //         getTema(keyword: "${key}"){
    //           content{
    //             header{
    //               title
    //               sub
    //             }
    //             session1{
    //               title
    //               sub
    //               imagem
    //             }
    //             session3{
    //               title
    //               sub
    //               imagem
    //             }
    //           }
    //         }
    //       }`
    //     }
    //   }).then((result) => {

    //     setHeader(result.data.data.getTema.content.header[Math.floor(Math.random() * 3)])
    //     setSession1(result.data.data.getTema.content.session1[Math.floor(Math.random() * 3)])
    //     setSession3(result.data.data.getTema.content.session3[Math.floor(Math.random() * 3)])
    //   });
    // }
    String.prototype.capitalize = function() {
      return this.charAt(0).toUpperCase() + this.slice(1);
    }
    const {storeDados} = useContext(DadosContext)
    
    useEffect(() => {
      if(!localStorage.getItem('page') || Number(localStorage.getItem('page')) === 2){
        localStorage.setItem('page', 0)
      }else{
        const local = Number(localStorage.getItem('page'))
        localStorage.setItem('page', local+1)
      }
      var query = location.search.slice(1);
      var partes = query.split('&');
      //console.log(partes);
      var data = {};
      partes.forEach(parte=> {
        var chaveValor = parte.split('=');
        //console.log(chaveValor);
          
        var chave = chaveValor[0].replace('-', '');
        var valor = chaveValor[1] ? decodeURI(chaveValor[1].replace(/\+/g, ' ')) : '' ;
        data[chave] = valor.capitalize();
      });
      storeDados(data)
      setData(data)
      setTel(data.teltopo?data.teltopo:tel)


      let str = data.key || 'generico';

      var ativo = 1

      const buscaDados = () =>{

        props.template.template.forEach( k =>{
          k.keywords.forEach(e =>{
            if(str.toLowerCase().indexOf(e.toLowerCase()) === -1 && ativo === 1){
              const api = props.template.template[0]
              setHeader({
                title:api.content.header[localStorage.getItem('page')].title.replace("*operadora*", props.operadora),
                sub:api.content.header[localStorage.getItem('page')].sub.replace("*operadora*", props.operadora)
              })
              setSession1({
                title:api.content.session1[localStorage.getItem('page')].title.replace("*operadora*", props.operadora),
                sub:api.content.session1[localStorage.getItem('page')].sub.replace("*operadora*", props.operadora),
                imagem:api.content.session1[localStorage.getItem('page')].imagem
              })
              setSession3({
                  title:api.content.session3[localStorage.getItem('page')].title.replace("*operadora*", props.operadora),
                  sub:api.content.session3[localStorage.getItem('page')].sub.replace("*operadora*", props.operadora),
                  imagem:api.content.session3[localStorage.getItem('page')].imagem
              })
            }
            else if (str.toLowerCase().indexOf(e.toLowerCase()) > -1 && ativo === 1) {
              const api = k
              setHeader({
                title:api.content.header[localStorage.getItem('page')].title.replace("*operadora*", props.operadora),
                sub:api.content.header[localStorage.getItem('page')].sub.replace("*operadora*", props.operadora)
              })
              setSession1({
                title:api.content.session1[localStorage.getItem('page')].title.replace("*operadora*", props.operadora),
                sub:api.content.session1[localStorage.getItem('page')].sub.replace("*operadora*", props.operadora),
                imagem:api.content.session1[localStorage.getItem('page')].imagem
              })
              setSession3({
                  title:api.content.session3[localStorage.getItem('page')].title.replace("*operadora*", props.operadora),
                  sub:api.content.session3[localStorage.getItem('page')].sub.replace("*operadora*", props.operadora),
                  imagem:api.content.session3[localStorage.getItem('page')].imagem
              })
              ativo = 0
            }

            //if(str.toLowerCase().indexOf(e.toLowerCase()) > -1){
              // const api = k
              // setHeader({
              //   title:api.content.header[localStorage.getItem('page')].title.replace("*operadora*", props.operadora),
              //   sub:api.content.header[localStorage.getItem('page')].sub.replace("*operadora*", props.operadora)
              // })
              // setSession1({
              //   title:api.content.session1[localStorage.getItem('page')].title.replace("*operadora*", props.operadora),
              //   sub:api.content.session1[localStorage.getItem('page')].sub.replace("*operadora*", props.operadora),
              //   imagem:api.content.session1[localStorage.getItem('page')].imagem
              // })
              // setSession3(
              //   {
              //     title:api.content.session3[localStorage.getItem('page')].title.replace("*operadora*", props.operadora),
              //     sub:api.content.session3[localStorage.getItem('page')].sub.replace("*operadora*", props.operadora),
              //     imagem:api.content.session3[localStorage.getItem('page')].imagem
              //   })
            //}
          })
        })
      }

      //requisição de api sem graphQl
      // const api = template.find((temp)=> temp.tema === 'Individual')
      // setSession1(api.content.session1[Math.floor(Math.random() * 2)])
      // setSession3(api.content.session3[Math.floor(Math.random() * 2)])
      // setImagens(api.content.imagens[Math.floor(Math.random() * 2)])

      
      // (async function buscaDadosKey() {
      //   await axios({
      //     url,
      //     method: 'post',
      //     data: {
      //       query: `
      //       query{
      //         temp{
      //           keywords
      //         }
      //       }`
      //     }
      //   }).then(result => {

      //     let str = data.key || '';
      //     const api = result.data.data.temp
      //     var ativa = 0

      //     api.forEach(e => {
      //       e.keywords.forEach(t => {
      //           if(str.toLowerCase().indexOf(t.toLowerCase()) > -1){
      //             ativa = 1
      //             return buscaDados(t.toLowerCase())
      //           }
      //         }
      //       )
      //     });
      //     if(ativa === 0){
      //       return buscaDados('generico')
      //     }
      //   });
      // })();
    buscaDados()   
    }, []);

    
  return (
    <>
    <Head>
      <title>{data.key?data.key:'Hapvida Plano de saúde'}</title>
      <meta property="og:url" content="https://hapvidasaudevendas.com.br/"/>
      <meta property="og:title" content={header.title || 'Hapvida Plano de saúde'}/>
      <meta name="description" content={header.sub || 'Rápido e Fácil, encontre as principais informações de planos de saúde aqui'}/>
      <meta property="og:site_name" content="Hapvida Saude Vendas"/>
      <meta property="og:image" content="https://hapvidasaudevendas.com.br/assets/img/og-imagem.jpg"/>
      <meta property="og:image:type" content="image/jpg"/>
      <meta property="og:image:width" content="800"/>
      <meta property="og:image:height" content="600"/>
      <meta property="og:type" content="website"></meta>
    </Head>
    <div className={styles.header}>
    <div className={styles.content}>
      <img className={styles.logo} src="/assets/img/logo.jpg" alt="Logo Hapvida"/>
      <nav>
        <ul>
          <li className={styles.googleSeach}>
            <input type="text" value={data.key}/>
            <FaRegKeyboard size={17} />
            <img src="/assets/img/googlemicrofone.png" width={14} style={{marginBottom:'-2px'}} alt=""/>
            <FaSearch size={17} style={{color:'#4285f4'}} />
          </li>
          <li className={styles.navButton}>
          <Link href={'tel:'+tel.replace(/[^\d]+/g,'')} prefetch={false}>
            <a><FontAwesomeIcon icon={faPhoneAlt} width="20"/> {tel}</a>
          </Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  <div className={styles.barraGoogle}>
      <div className={styles.groupIcon}>
        <input type="text" value={data.key}/>
        <img src="/assets/img/googlemicrofone.png" width={14} alt=""/>
      </div>
  </div>

  <div className={styles.hero} style={{backgroundImage:"url(/assets/img/bg-amil-dental.jpg)"}}>

    <div>
      <div>
      <span className={styles.breadcrumbs}>{data.key? 'Amil Dental / '+data.key:'Amil Dental / encontre o que precisa'}</span>

        <h1>{header.title || 'Mais agilidade para você encontrar o plano que precisa'}</h1>
        <h2>{header.sub || 'Descomplique! Faça rapidamente a cotação do seu plano de saúde .'}</h2>
      </div>
      <form onSubmit={hadleCotacao}>
        <h2>Preencha o campo abaixo para receber uma cotação hapvida</h2>
        <FontAwesomeIcon icon={faChevronDown} width="20"/>
        <div className={styles.formGroup}>
          <input value={name} onChange={e => setName(e.target.value)} placeholder="Informe seu nome" type="text" required/>
          <button type="submit" className={styles.button}><FontAwesomeIcon icon={faPaperPlane} width="20"/></button>
        </div>
        <span><input type="checkbox" checked={termo} onChange={e => setTermo(!termo)} className={styles.termoCheckbox}/>"Ao clicar no botão de envio, concordo com o Consentimento"</span>
      </form>
    </div>
  </div>
  {
  modal?  
  <Modal handleTermo={handleTermo} handleTermoN={handleTermoN}/>
  :''
  }
 
  <div className={styles.sessionOne}>
    <div>
      <div className={styles.group}>
        <h1>{session1.title || 'Encontre seu plano ideal'}</h1>
        <p>{session1.sub || 'Os planos de saúde são pensados para indivíduos e também para suas famílias e negócios. Por conta da demanda, uma série de dúvidas podem surgir e pensando nisso disponibilizamos um canal direto para que você possa adquirir seu plano de saúde rapidamente.'}</p>
      </div>
      <LazyLoad height = {300}>
          <img src={session1.imagem || '/assets/img/api/individual-1.png'} alt={session1.title || 'Hapvida saúde'}/>
      </LazyLoad>
    </div>
  </div>
  <div className={styles.sessionTwo}>
    <div>
        <div className={styles.group}>
        <h1>{session3.title || 'Cotação de planos , rápida e ágil'}</h1>
        <p>{session3.sub || 'Entre em contato conosco e contrate rapidamente um dos planos de saúde oferecidos por nosso atendimento.'}</p>
          <Link href='https://cotacao.sejacliente.com.br/?idop=4&url=https://hapvidasaudevendas.com.br&cor=DF0101' prefetch={false}>
            <a className={styles.button}>Fazer cotação</a>
          </Link>
        </div>
        <LazyLoad height = {300}>
          <img src={session3.imagem || '/assets/img/api/individual-4.png'} alt={session3.title || 'Hapvida saúde'}/>
        </LazyLoad>
    </div>
    
  </div>
  <div className={styles.sessionTree}>
    <h1>Atendimento como você merece.</h1>
    <p style={{textAlign:"center"}} > Os melhores planos e profissionais a um preço que cabe no seu bolso. Confira as vantagens de contar com Amil Dental</p>
    <div>
      <div className={styles.item}>
        <figure style={{backgroundColor:'#fdb813'}}>
          <LazyLoad height = {300}>
            <img src="/assets/img/rede-exclusiva.svg" alt="Rede exclusiva Hapvida"/>
          </LazyLoad>
        </figure>
          <h2>Maior rede exclusiva pediátrica</h2>
          <p>A maior rede exclusiva de atendimento infantil com infraestrutura moderna e especializada, UTI neonatal e acompanhamento pediátrico.</p>
      </div>
      <div className={styles.item}>
        <figure style={{backgroundColor:'#f15922'}}>
          <LazyLoad height = {300}>
            <img src="/assets/img/doctor.svg" alt="Rede exclusiva Hapvida"/>
          </LazyLoad>
        </figure>
          <h2>Melhores médicos credenciados</h2>
          <p>Com 25 hospitais próprios, 18 prontos atendimentos e 73 clínicas, o Hapvida conta com uma completa estrutura à sua disposição.</p>
      </div>
      <div className={styles.item}>
        <figure style={{backgroundColor:'#ed0652'}}>
          <LazyLoad height = {300}>
            <img src="/assets/img/health.svg" alt="Rede exclusiva Hapvida"/>
          </LazyLoad>
        </figure>
          <h2>Mais tecnologia e segurança</h2>
          <p>Aqui você pode ser atendido nos 11 estados do Norte / Nordeste em que a rede Hapvida está presente, sem pagar nada a mais por isso.</p>
      </div>
    </div>
    <div className={styles.butomGroup}>
    <Link href='https://cotacao.sejacliente.com.br/?idop=4&url=https://hapvidasaudevendas.com.br&cor=DF0101' prefetch={false}>
        <a className={styles.button}>Receber tabelas</a>
    </Link>
      </div>
  </div>
  <div className={styles.footer}>
    <span>Todos os direitos reservados hapvidasaudevendas.com.br </span>
    <br/>
    <span><FaMapMarkerAlt/> Av. Heraclito Graça 653 - Fortaleza - CE, 60140-061, Brasil</span><br/>
    <span>CNPJ: 10.729.761/0001-32</span>
  </div>
  </>
  );
}

export default Main
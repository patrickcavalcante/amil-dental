import React from 'react';
import styles from './Modal.module.css'


// import { Container } from './styles';

function Modal(props) {
  return (
    <div  className={styles.modal}>
    <div>
      <div>
      <h1>O que fazemos com as suas informações</h1>
      <p>O termo “informações pessoais” usado aqui é definido como qualquer informação que identifica ou pode ser usada para identificar, contatar ou localizar a pessoa, a quem tal informação pertence. As informações pessoais que coletamos estarão sujeitas a esta Política de Privacidade, a qual é alterada de tempos em tempos.
Quando você se cadastra no LeadMark pedimos o seu endereço de e-mail.
Como parte do processo de compra e venda no LeadMark, você irá obter o endereço de e-mail e/ou endereço de entrega de seus clientes. Ao aceitar nosso Acordo de Usuário, você concorda que, com respeito às Informações Pessoais de outros usuários que você obtém através do LeadMark ou através de uma comunicação relacionada do LeadMark ou transação facilitada do LeadMark, o LeadMark concede a você uma licença para utilizar tais informações apenas para comunicações relacionadas ao LeadMark que não sejam mensagens comerciais não solicitadas. O LeadMark não tolera spam. Portanto, sem limitar o precedente, você não está licenciado a adicionar o nome de alguém que tenha comprado um item seu, para sua lista de correio (e-mail ou correio físico) sem que tenha consentimento expresso deles.
Quando você se cadastra, você fornece informações pessoais que coletamos e usamos. Para o processo de finalização de compra (check-out) também coletamos informações do seu cartão de crédito. Apenas use as informações dos seus clientes do LeadMark para comunicações relacionadas ao LeadMark, a menos que eles lhe permitam fazê-lo. Não faça spam para ninguém!
      </p>
      <h2>Divulgação</h2>
      <p>LeadMark pode divulgar Informações Pessoais em circunstâncias especiais, como para cumprir ordens judiciais obrigando-nos a fazê-lo ou quando suas ações violam os Termos de Serviço.
    Nós não vendemos ou fornecemos Informações Pessoais para outras empresas, para que elas façam o marketing dos seus próprios produtos ou serviços.
    LeadMark possui o armazenamento de dados, bancos de dados e todos os direitos da aplicação LeadMark, entretanto, não fazemos nenhuma reivindicação dos direitos dos seus dados. Você retém todos os direitos sobre os seus dados e nós nunca entraremos em contato com seus clientes diretamente, ou usaremos seus dados para a nossa própria vantagem comercial ou para competir com você, ou para divulgar para os seus clientes.</p>
      <h2>O QUE SIGNIFICA?</h2>
      <p>Você possui seus dados e nós vamos respeitar isso. Não vamos tentar competir com você ou escrever para os seus clientes.</p>
      <h2>Cookies</h2>
      <p>Nós usamos um serviço fornecido pelo Google chamado Google Analytics (GA). O GA nos permite alcançar as pessoas que já visitaram o nosso site, e mostrar-lhes anúncios relevantes quando visitam outros sites na Internet da Rede de Display do Google. Isso é chamado de “remarketing”.</p>
      <p>Você pode ser capaz de optar por não ver anúncios personalizados da Rede de Display do Google, visitando o Gerenciador de Preferências de Anúncios (http://www.google.com/ads/preferences/), e o Complemento do Navegador do Google Analytics Opt-out (http://www.google.ca/ads/preferences/plugin/).</p>      <h2>O QUE SIGNIFICA?</h2>
      <p>Para identificá-lo eletronicamente, um cookie será armazenado no seu computador. Temos uma ferramenta de “remarketing” executando que nos permite tomar nota das suas visitas ao nosso site e mostrar anúncios relevantes no nosso site e em toda a Internet. Você pode sempre optar por não ver.</p>
      <h3>PCI-DSS</h3>
      <p>Reservamos o direito de modificar esta declaração de privacidade a qualquer momento, portanto, revise-a frequentemente. Se fizermos alterações materiais a esta política, iremos notificá-lo aqui ou por meio de um aviso em nossa homepage, de modo que você está ciente das informações que coletamos, como as usamos, e sob quais circunstâncias, se houver, as divulgamos.</p>
      <h2>O QUE SIGNIFICA?</h2>
      <p>Podemos alterar esta Política de Privacidade. Se for uma grande mudança, iremos informá-lo, aqui.</p>
    </div>
    <div className={styles.groupButtom}>
      <button onClick={() => props.handleTermo()} className={styles.buttonConcordo}>Eu concordo</button>
      <button onClick={() => props.handleTermoN()} className={styles.buttonNaoConcordo}>Eu não concordo</button>
    </div>

    </div>
  </div>
  );
}

export default Modal;
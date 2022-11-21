import React, { useState } from 'react'
import '../style/habilidades.css'
import react from '../imgs/react-icon.png'
import html from '../imgs/html-icon.png'
import css from '../imgs/css-icon.png'
import js from '../imgs/js-icon.png'
import git from '../imgs/git-icon.png'
import github from '../imgs/github-icon.png'
import redux from '../imgs/redux-icon.png'
import jest from '../imgs/jest-2.png'
import mysql from '../imgs/mysql.png'
import docker from '../imgs/docker.png'
import node from '../imgs/node.png'




const describeHtml = `A Linguagem de Marcação de Hipertexto (HTML) é uma linguagem de computador que compõe a maior parte das páginas da internet e dos aplicativos online.`
const describeCss = `CSS é a sigla para Cascading Style Sheets, ou seja, Folhas de Estilo em Cascatas. É uma maneira de dar estilo ao código criado por linguagens como HTML, XML ou XHTML, por exemplo. De forma prática, ela funciona como uma camada de personalização ao conteúdo visível.`
const describeJs = `JavaScript é uma linguagem de script orientada a objetos, multiplataforma. É uma linguagem pequena e leve. Dentro de um ambiente de host (por exemplo, um navegador web) o JavaScript pode ser ligado aos objetos deste ambiente para prover um controle programático sobre eles.`
const describeReact = `O React é uma biblioteca criada para construir telas de forma declarativa. Ou seja: o React cria aplicações web para serem executadas em navegadores, sejam eles para desktop, mobile ou qualquer outro dispositivo.`
const describeRedux = `Redux é uma biblioteca para armazenamento de estados de aplicações JavaScript, criado por Dan Abramov. Ele nasceu através de uma implementação do Flux, uma arquitetura criada pelo Facebook para contribuir com as aplicações de User Interface, utilizando o conceito de fluxo de dados unidirecional.`
const describeGit = `O Git é um sistema de controle de revisão distribuído, rápido, escalável e com um conjunto de comandos incomumente rico que oferece operações de alto nível e acesso completo aos seus recursos.`
const describeGitHub = `GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. Ele permite que programadores, utilitários ou qualquer usuário cadastrado na plataforma contribuam em projetos privados e/ou Open Source de qualquer lugar do mundo. `
const describeJest = `Jest é uma das ferramentas mais conhecidas da comunidade JavaScript quando o assunto é teste. Ela foi inicialmente desenvolvida pelo Facebook para testar o framework React, porém ganhou tanta proporção que também é usada com TypeScript, Node, Angular, Vue e outras.`
const describeMySql = `MySQL é um sistema de gerenciamento de banco de dados (SGBD) relacional, ou seja, que utiliza a linguagem SQL como interface.`
const describeDocker = `O Docker é uma plataforma open source que facilita a criação e administração de ambientes isolados. Ele possibilita o empacotamento de uma aplicação ou ambiente dentro de um container, se tornando portátil para qualquer outro host que contenha o Docker instalado.`
const describeNode = `O Node.js pode ser definido como um ambiente de execução Javascript server-side. Isso significa que com o Node.js é possível criar aplicações Javascript para rodar como uma aplicação standalone em uma máquina, não dependendo de um browser para a execução, como estamos acostumados.`

function Habilidades() {
  const [state, setState] = useState('Clique em alguma habilidade para ler a descrição')

  return (
    <div>
      <section id="habilidades">
          <div class="habilidades-pd">
            <h1 class="project">Tecnologias</h1>
            <div class="skills-descricao">
              <div class="conteiner-skills">
                <div class="skill-box">
                  <img
                    className='imgBox200'
                    onClick={ () => setState(describeHtml)}
                    src={ html }
                    alt="html-icon"
                  />
                </div>
                <div class="skill-box">
                  <img
                    className='imgBox200'
                    onClick={ () => setState(describeCss)}
                    src={ css }
                    alt="css-icon"
                  />
                </div>
                <div class="skill-box skill3 js-skill">
                  <img
                    className='imgBox200'
                    onClick={ () => setState(describeJs)}
                    src={ js }
                    alt="js-icon"
                  />
                </div>
                <div class="skill-box">
                  <img
                    className='imgBox200'
                    onClick={ () => setState(describeReact)}
                    src={react}
                    alt="react-icon"
                  />
                </div>
                <div class="skill-box skill10 github-skill">
                  <img
                    className='imgBox200'
                    onClick={ () => setState(describeRedux)}
                    src={ redux }
                    alt="redux-icon"
                  />
                </div>
                <div class="skill-box skill9 git-skill">
                  <img
                    className='imgBox200'
                    onClick={ () => setState(describeGit)}
                    src={ git }
                    alt="git-icon"
                  />
                </div>
                <div class="skill-box skill10 github-skill">
                  <img
                    className='imgBox200'
                    onClick={ () => setState(describeGitHub)}
                    src={ github }
                    alt="github-icon"
                  />
                </div>
                <div class="skill-box skill10 github-skill">
                  <img
                    className='imgBox220'
                    onClick={ () => setState(describeJest)}
                    src={ jest }
                    alt="github-icon"
                  />
                </div>
                <div class="skill-box skill10 github-skill">
                  <img
                    className='imgBox220'
                    onClick={ () => setState(describeMySql)}
                    src={ mysql }
                    alt="github-icon"
                  />
                </div>
                <div class="skill-box skill10 github-skill">
                  <img
                    className='imgBox160'
                    onClick={ () => setState(describeDocker)}
                    src={ docker }
                    alt="github-icon"
                  />
                </div>
                <div class="skill-box skill10 github-skill">
                  <img
                    className='imgBox220'
                    onClick={ () => setState(describeNode)}
                    src={ node }
                    alt="github-icon"
                  />
                </div>
              </div>
              <div class="conteiner-descricao">
                <p class="texto-descricao">
                  {state}
                </p>
              </div>
            </div>
          </div>
      </section>
    </div>
  )
}

export default Habilidades
import React from 'react'
import imgTrivia from '../imgs/project-trivia.png'
import imgTrybetunes from '../imgs/project-trybetunes.png'
import imgTrybeWallet from '../imgs/project-trybeWallet.png'

import '../style/projetos.css'

function Projetos() {
  return (
  <section id="projetos">
    <div class="divProjetos">
      <h1 class="project">Projetos</h1>
      <div class="projetos-itens">
        <div class="pro effect">
          <div>
            <a href="https://diegogpicoli-project-trivia.netlify.app/" target="_blank" rel="noreferrer">
              <img src={ imgTrivia } alt="" />
            </a>  
          </div>
        </div>
        <div class="pro effect"> 
        <div>
          <a href="https://diegogpicoli.github.io/trybetunes/" target="_blank" rel="noreferrer">
            <img src={ imgTrybetunes } alt="" />
          </a>
        </div>
        </div>
        <div class="pro effect">
          <div>            
            <a href="https://diegogpicoli-project-trybewallet.netlify.app/" target="_blank" rel="noreferrer">
              <img src={ imgTrybeWallet } alt="" />
            </a>
          </div>
        </div>
        <div class="pro escondido">
          <div class="breve"><p>EM BREVE</p></div>
        </div>
        <div class="pro escondido">
          <div class="breve"><p>EM BREVE</p></div>
        </div>
        <div class="pro escondido">
          <div class="breve"><p>EM BREVE</p></div>
        </div>
      </div>
      <br />
      <div class="projetos-itens">
        <div class="pro">
          <div class="breve"><p>EM BREVE</p></div>
        </div>
        <div class="pro">
          <div class="breve"><p>EM BREVE</p></div>
        </div>
        <div class="pro">
          <div class="breve"><p>EM BREVE</p></div>
        </div>
        <div class="pro escondido">
          <div class="breve"><p>EM BREVE</p></div>
        </div>
        <div class="pro escondido">
          <div class="breve"><p>EM BREVE</p></div>
        </div>
        <div class="pro escondido">
          <div class="breve"><p>EM BREVE</p></div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Projetos
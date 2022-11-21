import React from 'react'
import imgTrivia from '../imgs/project-trivia.png'
import imgTrybetunes from '../imgs/project-trybetunes.png'
import imgTrybeWallet from '../imgs/project-trybeWallet.png'
import imgTalkerManager from '../imgs/project-talkerManager.png'
import imgStoreManager from '../imgs/project-storeManager.png'
import imgProjectLol from '../imgs/project-lol.png'


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
              <h2>Trivia</h2>
              <img src={ imgTrivia } alt="" />
            </a>  
          </div>
        </div>
        <div class="pro effect"> 
        <div>
          <a href="https://diegogpicoli.github.io/trybetunes/" target="_blank" rel="noreferrer">
            <h2>Trybetunes</h2>
            <img src={ imgTrybetunes } alt="" />
          </a>
        </div>
        </div>
        <div class="pro effect">
          <div>            
            <a href="https://diegogpicoli-project-trybewallet.netlify.app/" target="_blank" rel="noreferrer">
              <h2>TrybeWallet</h2>
              <img src={ imgTrybeWallet } alt="" />
            </a>
          </div>
        </div>
      </div>
      <br />
      <div class="projetos-itens">
      <div class="pro effect">
          <div>
            <a href="https://github.com/diegogpicoli/talker-manager" target="_blank" rel="noreferrer">
              <h2>Talker Manager</h2>
              <img src={ imgTalkerManager } alt="" />
            </a>  
          </div>
        </div>
        <div class="pro effect"> 
        <div>
          <a href="https://github.com/diegogpicoli/store-manager" target="_blank" rel="noreferrer">
            <h2>Store Manager</h2>
            <img src={ imgStoreManager } alt="" />
          </a>
        </div>
        </div>
        <div class="pro effect">
          <div>
            <h2>League of Legends</h2>           
            <a href="https://diegogpicoli-project-lol.netlify.app/" target="_blank" rel="noreferrer">
              <img src={ imgProjectLol } alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Projetos
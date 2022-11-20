import { React, useEffect, useState } from 'react';
import '../style/header.css';
import imgPerfil from '../img/contact-img.svg';
import navIcon1 from '../img/nav-icon1.svg';
import navIcon2 from '../img/nav-icon2.svg';


function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  return (
    <div id='topo' className='fundo'>
      <div  className={scrolled ? "scrolled header fixed" : "header fixed"}>
        <h1>{"</>"}</h1>
        <div className='navBar'>
          <ul className='list-header'>
            <li><a href="#topo">Inicio</a></li>
            <li><a href="#habilidades">Tecnologias</a></li>
            <li><a href="#projetos">Projetos</a></li>
          </ul>
          <div className="social-icon">
            <a href="https://www.linkedin.com/in/diegogpicoli/" target="_blank" rel="noreferrer"><img src={navIcon1} alt="" /></a>
            <a href="https://github.com/diegogpicoli" target="_blank" rel="noreferrer"><img src={navIcon2} alt="" /></a>
          </div>
        </div>
      </div>
      <div className='infoPerfil'>
        <div className='nome'>
        <span className="meuPortfolio">Bem vindo ao meu Portfolio</span>
          <h1>Diego Gonçalves Picoli</h1>
          <h3>Desenvolvedor Web</h3>
          <p className='sobre'>Atualmente estou realizando o curso de Desenvolvimento Web da Trybe, desde muito novo sou apaixonado por games e tecnologia, e quase tudo que envolve o universo geek/nerd, sempre tive um sonho de criar meu próprio game, foi desse sonho que surgiu a minha vontade de aprender programação.</p>
        </div>
        <img className='imagemPerfil' src={ imgPerfil } alt="" />
      </div>
    </div>
  )
}

export default Header
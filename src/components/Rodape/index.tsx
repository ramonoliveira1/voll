/* eslint-disable jsx-a11y/anchor-is-valid */
import facebook from './assets/facebook.png';
import instagram from './assets/instagram.png';
import google from './assets/google.png';
import whatsapp from './assets/whatsapp.png';
import styled from 'styled-components';

const RodapeEstilizado = styled.footer`
  height: 100%;
  color: white;
  padding: 1em;
  background-color: var(--azul-escuro);
  text-align: center;
`

const ListaEstilizada = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 10%;
  margin: 1em auto;
`

const ItemEstilizado = styled.li`
  list-style-type: none;
`

function Rodape() {
  return (
    <RodapeEstilizado>
      <ListaEstilizada>
        <ItemEstilizado>
          <a href="#">
            <img src={facebook} alt="Facebook" />
          </a>
        </ItemEstilizado>
        <ItemEstilizado>
          <a href="#">
            <img src={whatsapp} alt="WhatsApp" />
          </a>
        </ItemEstilizado>
        <ItemEstilizado>
          <a href="#">
            <img src={google} alt="Google" />
          </a>
        </ItemEstilizado>
        <ItemEstilizado>
          <a href="#">
            <img src={instagram} alt="Instagram" />
          </a>
        </ItemEstilizado>
      </ListaEstilizada>
      <p>2023 © Desenvolvido por Alura | Projeto fictício sem fins comerciais.</p>
    </RodapeEstilizado>
  )
}

export default Rodape

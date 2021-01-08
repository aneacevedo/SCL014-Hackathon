import React, {useState} from "react";
import './Styles/preferences.css';
import alimentos from '../../Img/alimentos.svg';
import automotriz from '../../Img/automotriz.svg';
import belleza from '../../Img/belleza.svg';
import bancos from '../../Img/bancos.svg';
import decohogar from '../../Img/decohogar.svg';
import deporte from '../../Img/deporte.svg';
import entretencion from '../../Img/entretencion.svg';
import infantil from '../../Img/niño.svg';
import libros from '../../Img/libros.svg';
import mascotas from '../../Img/mascotas.svg';
import moda from '../../Img/moda.svg';
import musica from '../../Img/musica.svg';
import restaurantes from '../../Img/restaurantes.svg';
import tecnologia from '../../Img/tecnologia.svg';
import salud from '../../Img/salud.svg';
import vinos from '../../Img/vinos.svg';
import checkImg from '../../Img/Check.svg';
import { Link } from "react-router-dom";

const Preferences = () => {
  const [check, setCheck] = useState(false);
  const classbtns = check === true ? 'container input:checked' : 'container'
  return (
    <div className='containerPreferences'>
      <div className="AgeHeader"></div>
      <div className="containerTextPreferences">
        <p className='titlePreferences'>Escoge tus intereses(como mínimo 3)</p>
        <p className='textPreferences'>Y recibe recomendaciones personalizadas</p>
      </div>
      <div className="containerCheckBoxs">
        <label class="container classbtns" check={check} onClick={() => setCheck(!check)}>
          <div className="containerEmoji">
            <img className="emoji" src={alimentos} alt="emoji" />
          </div>
          Alimentos
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
        <label class="container classbtns" check={check} onClick={() => setCheck(!check)}>
          <div className="containerEmoji">
            <img className="emoji" src={automotriz} alt="emoji" />
          </div>
          Automotríz
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
        <label class="container classbtns" check={check} onClick={() => setCheck(!check)}>
          <div className="containerEmoji">
            <img src={belleza} className="emoji" alt="emoji" />
          </div>
          Belleza
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
        <label class="container classbtns" check={check} onClick={() => setCheck(!check)}>
          <div className="containerEmoji">
            <img src={bancos} className="emoji" alt="emoji" />
          </div>
          Bancos
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
        <label class="container classbtns" check={check} onClick={() => setCheck(!check)}>
          <div className="containerEmoji">
            <img src={decohogar} className="emoji" alt="emoji" />
          </div>
          Decohogar
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
        <label class="container classbtns" check={check} onClick={() => setCheck(!check)}>
          <div className="containerEmoji">
            <img src={deporte} className="emoji" alt="emoji" />
          </div>
          Deporte
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
        <label class="container classbtns" check={check} onClick={() => setCheck(!check)}>
          <div className="containerEmoji">
            <img src={entretencion} className="emoji" alt="emoji" />
          </div>
          Entretención
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
        <label class="container classbtns" check={check} onClick={() => setCheck(!check)}>
          <div className="containerEmoji">
            <img src={infantil} className="emoji" alt="emoji" />
          </div>
          Infantil
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
        <label class="container classbtns" check={check} onClick={() => setCheck(!check)}>
          <div className="containerEmoji">
            <img src={libros} className="emoji" alt="emoji" />
          </div>
          Libros
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
        <label class="container classbtns" check={check} onClick={() => setCheck(!check)}>
          <div className="containerEmoji">
            <img src={mascotas} className="emoji" alt="emoji" />
          </div>
          Mascotas
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
        <label class="container classbtns" check={check} onClick={() => setCheck(!check)}>
          <div className="containerEmoji">
            <img src={moda} className="emoji" alt="emoji" />
          </div>
          Moda
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
        <label class="container classbtns" check={check} onClick={() => setCheck(!check)}>
          <div className="containerEmoji">
            <img src={musica} className="emoji" alt="emoji" />
          </div>
          Música
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
        <label class="container classbtns" check={check} onClick={() => setCheck(!check)}>
          <div className="containerEmoji">
            <img src={restaurantes} className="emoji" alt="emoji" />
          </div>
          Restaurantes
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
        <label class="container classbtns" check={check} onClick={() => setCheck(!check)}>
          <div className="containerEmoji">
            <img src={tecnologia} className="emoji" alt="emoji" />
          </div>
          Tecnología
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
        <label class="container classbtns" check={check} onClick={() => setCheck(!check)}>
          <div className="containerEmoji">
            <img src={salud} className="emoji" alt="emoji" />
          </div>
          Salud y cuidado personal
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
        <label class="container classbtns" check={check} onClick={() => setCheck(!check)}>
          <div className="containerEmoji">
            <img src={vinos} className="emoji" alt="emoji" />
          </div>
          Vinos y licores
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
        <label class="container classbtns" check={check} onClick={() => setCheck(!check)}>
          <div className="containerEmoji">
            <img src={checkImg} className="emoji" alt="emoji" />
          </div>
          Todos
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
      </div>
      <div className="navigation-container">
      <div>
        <Link to="/form2">
        <button className="navigation-btn">{"< "}Atrás</button>
        </Link>
      </div>
      <div>
        <Link to="/form4">
        <button className="navigation-btn">Siguiente{" >"}</button>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default Preferences;

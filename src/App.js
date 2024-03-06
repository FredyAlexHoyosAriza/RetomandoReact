import logo from './logo.svg';
import './styles/App.css';
import borderCollie from "./media/Border_Collie.jpg"
import pastorBelgaMalinois from "./media/pastor-belga-malinois_530_0_600.jpg"
import logoPerro from "./media/perro.png"

function App() {
  return (
    <div className="App">
      <header>
          <ul className="navbar">
              <li className="navelem">
                  <img src={logoPerro} alt="Logo de un perro" className="logo" />
              </li>
              <li><button className="button mainButton navelem">Nuevo Post</button></li>
              <li>
                  <div className="buscar navelem">                    
                      <input placeholder="Buscar Raza"/>
                      <i className="fas fa-search"></i>
                  </div>
              </li>
              <li><button className="button secondaryButton navelem">Login</button></li>
              <li><button className="button mainButton navelem">Registro</button></li>
          </ul>
      </header>
      <main>
          <section>
              <h1 className="titulo">Razas de Perros</h1>
              <ul className="breedCardContainer">
                  <li>
                      <div className="imgContainer">
                          <img className="imgSize" src={borderCollie} alt="Imagen Border Collie" name="collie"/>
                          <div>
                              <label>Border Collie</label>
                              <ul className="interaction">
                                  <li><i className="fa fa-heart"></i><span>150</span></li>
                                  <li><i className="fa fa-comment"></i><span>1.5k</span></li>
                                  <li><i className="fa fa-eye"></i><span>120</span></li>
                              </ul>
                          </div>
                      </div>
                      
                  </li>
                  <li>
                      <div className="imgContainer">
                          <img className="imgSize" src={pastorBelgaMalinois} alt="Imagen Pastor Belga Malinois" name="belga" />
                          <div>
                              <label>Pastor Belga Malinois</label>
                              <ul className="interaction">
                                  <li><i className="fa fa-heart"></i><span>450</span></li>
                                  <li><i className="fa fa-comment"></i><span>1.1k</span></li>
                                  <li><i className="fa fa-eye"></i><span>850</span></li>
                              </ul>
                          </div>
                      </div>
                  </li>
              </ul>
          </section>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;

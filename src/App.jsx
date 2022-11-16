import PerfilMenu from './componets/PerfilMenu/PerfilMenu';
import ImgPerfil from './componets/PerfilMenu/images/perfilImage.jpg';

const App = () => (
  <div className="App">
    <PerfilMenu name="Mark Enderess" phone="+91 123 - 456 - 7890" email="mark.enderess@mail.com" imagePerfil={ImgPerfil} />
  </div>
);

export default App;

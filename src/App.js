// import Exerc1 from "./Exercicios/exerc1";
// import Exerc2 from "./Exercicios/exerc2";
// import Exerc3 from './Exercicios/exerc3';
// import Exerc4 from './Exercicios/exerc4';
import Exerc5 from './Exercicios/exerc5';
import {GlobalStorage} from './Context/context';
import GlobalStyle from './global';

const App = () => {
  return (
    <>
      <GlobalStyle />
      {/* <Exerc1 /> */}
      {/* <Exerc2 /> */}
      {/* <Exerc3 /> */}
      {/* <Exerc4 /> */}
      {/* <Exerc5 /> */}
      <GlobalStorage>
        <Exerc5 />
      </GlobalStorage>
</>
)};

export default App;

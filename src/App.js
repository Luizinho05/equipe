import Equipe from "./components/equipe";

function App() {
  return (
    <div>
      <h1>Componentes e Props</h1>
      <Equipe nome='luiz' cargo= ' profissional de educação fisica' />
      <hr/>
      <Equipe nome='Daniela' cargo= ' Comerciante' />
      <hr/>
      <Equipe nome='Juliano' cargo= ' Contador' />
      <hr/>
    </div>
  );
}

export default App;

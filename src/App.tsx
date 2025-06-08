import { Button } from "./components/Button";

function App() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6">
      <Button rounded={true}>Botón primario/redondeado</Button>
      <Button variant="outline">Botón outline</Button>
      <Button variant="destructive">Botón destructivo</Button>
    </div>
  );
}

export default App;

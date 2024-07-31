import "./listatarefas.css";

function Listatarefas() {
  let text = ["tarefa1", "tarefa2", "tarefa3"];

  return (
    <div className="listatarefas">
      <h1>Lista Tarefa</h1>
      {text.map((i) => (
        <li>{i}</li>
      ))}
    </div>
  );
}
export default Listatarefas;

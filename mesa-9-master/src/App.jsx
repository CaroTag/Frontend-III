import "./styles.css";

function App() {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Media de Alumnos por Disciplina</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="container_input">
          <select>
            <option selected disabled>
              Selecione una disciplina
            </option>
            <option value="database">Banco de Datos</option>
            <option value="backend">Desenvolvimento Backend</option>
            <option value="frontend">Desenvolvimento Frontend</option>
            <option value="devops">Devops</option>
          </select>
          <input />
        </div>
        <input type="submit" value="Salvar" />
      </form>

      <div className="container">
        <table border="1" className="line_title">
          <thead>
            <tr>
              <th>Disciplina</th>
              <th>Cantidad de alumnos</th>
              <th>Media de notas de alumnos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Banco de Datos</td>
              <td>0</td>
              <td>0</td>
            </tr>

            <tr>
              <td>Desenvolvimento Frontend</td>
              <td>0</td>
              <td>0</td>
            </tr>

            <tr>
              <td>Desenolvimento Backend</td>
              <td>0</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;

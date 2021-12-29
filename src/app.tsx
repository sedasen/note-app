import "@src/styles/index.scss";

function App() {
  return <div className="wrapper">
    <div className="container p-2">
      <form>
        <h1 className="is-centered">Zahir'in Vurdurduğu Form</h1>
        <div className="input-group">
          <label htmlFor="name">Zahir Kime Vurduruyor?</label>
          <input id="name" type="text" placeholder="İpucu: Herkese" />
        </div>
        <button className="is-green">Kaydet</button>
      </form>
    </div>
  </div>;
}

export default App;

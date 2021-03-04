import Contact from "./component/Contact";
function App() {
  return (
    <div className="App">
      <Contact
      name="Letitia Howell"
      avatar="https://randomuser.me/api/portraits/women/41.jpg"
      online = {true}
      />
      <Contact
      name="Penny Wood"
      avatar="https://randomuser.me/api/portraits/women/77.jpg"
      online = {false}
      />
      <Contact
      name="William Gibson"
      avatar="https://randomuser.me/api/portraits/men/25.jpg"
      online = {true}
      />
    </div>
  );
}

export default App;

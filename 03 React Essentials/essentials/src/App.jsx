import reactImg from './assets/react.svg';
const reactDescriptions = ["Fundamental", "Crucial", "Core"]

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}
function Header() {
  const description = reactDescriptions[genRandomInt(2)]
  return (
    <header>
      <img src={reactImg} alt="image" />
      <h1>React Essentials</h1>
      <p>
        {description}   React concepts you will need for almost any app you are going to build
      </p>
    </header>
  )
}

function CoreConcepts(props) {
  return <li>
    <img src={props.image } alt={props.title} />
    <h3>{props.title}</h3>
    <p>{props.description} </p>
  </li>
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section className="coreConcepts">
          <h2>
            Time to get Started!
          </h2>
          <ul>
            <CoreConcepts title="Componenents" description="The core UI building block"
              image  ={reactImg} />
            <CoreConcepts />
            <CoreConcepts />
            <CoreConcepts />

          </ul>
        </section>


      </main>
    </div>
  )
}
export default App;
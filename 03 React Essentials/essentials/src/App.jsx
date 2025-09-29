function Header() {
  return (
    <header>
      <img src="#images" alt="image" />
      <h1>React Essentials</h1>
      <p>
        Fundamental React concepts you will need for almost any app you are going to build
      </p>
    </header>
  )
}


function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>
          Time to get Started!
        </h2>
      </main>
    </div>
  )
}
export default App;
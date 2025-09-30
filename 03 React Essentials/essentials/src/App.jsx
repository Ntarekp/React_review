import { CORE_CONCEPTS } from './data';
import Header from './components/Header';
import CoreConcept from './components/CoreConcept'
import TabButton from './components/TabButton';


function App() {

  function handlSelect(selectedButton) {
    //Selected Button ==> 'Component', 'jsx', 'props','state'
    console.log(selectedButton)

  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>
            Time to get Started!
          </h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />

          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={()=>handlSelect('Components')}> Components</TabButton >
            <TabButton onSelect={()=>handlSelect('JSX')}> JSX</TabButton >
            <TabButton onSelect={()=>handlSelect('props')}> Props</TabButton >
            <TabButton onSelect={()=>handlSelect('State')}> State</TabButton >
          </menu>

        </section>
        Dynamic Content

      </main>
    </div>
  )
}
export default App;
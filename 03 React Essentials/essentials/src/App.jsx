import { useState } from 'react'
import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept'
import TabButton from './components/TabButton';
import { Examples } from './data.js';


function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handlSelect(selectedButton) {
    //Selected Button ==> 'Component', 'jsx', 'props','state'
    setSelectedTopic(selectedButton)
    // console.log(selectedButton)
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
            <TabButton
              isSelected={selectedTopic === 'Components'}
              onSelect={() => handlSelect('Components')}> Components</TabButton >
            <TabButton
              isSelected={selectedTopic === 'JSX'}
              onSelect={() => handlSelect('JSX')}> JSX</TabButton >
            <TabButton
              isSelected={selectedTopic === 'props'}
              onSelect={() => handlSelect('props')}> Props</TabButton >
            <TabButton
              isSelected={selectedTopic === 'State'}
              onSelect={() => handlSelect('State')}> State</TabButton >
          </menu>
          {!selectedTopic ? <p> Please select a topic</p> : <div id="tab-content">
            <h3>
              {Examples[selectedTopic].title}
            </h3>
            <p>
              {Examples[selectedTopic].description}
            </p>
            <pre>
              <code>
                {Examples[selectedTopic].code}
              </code>
            </pre>
          </div>}

        </section>
      </main>
    </div>
  )
}
export default App;
import { useState } from "react";
import { Examples } from "../data.js";
import TabButton from './TabButton';

export default function Example() {
    const [selectedTopic, setSelectedTopic] = useState();

    function handlSelect(selectedButton) {
        //Selected Button ==> 'Component', 'jsx', 'props','state'
        setSelectedTopic(selectedButton)
    }

    return (
        <section id="examples">
            <h2>Examples</h2>
            <menu>
                <TabButton
                    isSelected={selectedTopic === 'Components'}
                    onSelect={() => handlSelect('Components')}>
                    Components
                </TabButton>
                <TabButton
                    isSelected={selectedTopic === 'JSX'}
                    onSelect={() => handlSelect('JSX')}>
                    JSX
                </TabButton>
                <TabButton
                    isSelected={selectedTopic === 'props'}
                    onSelect={() => handlSelect('props')}>
                    Props
                </TabButton>
                <TabButton
                    isSelected={selectedTopic === 'State'}
                    onSelect={() => handlSelect('State')}>
                    State
                </TabButton>
            </menu>
            {!selectedTopic && <p>Please select a topic</p>}
            {selectedTopic && (
                <div id="tab-content">
                    <h3>{Examples[selectedTopic].title}</h3>
                    <p>{Examples[selectedTopic].description}</p>
                    <pre>
                        <code>{Examples[selectedTopic].code}</code>
                    </pre>
                </div>
            )}
        </section>
    )
}
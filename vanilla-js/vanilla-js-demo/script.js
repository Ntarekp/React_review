const content = [
    [
        "React is extremely popular",
        "It makes building complex, interactive UIs a breeze",
        "It's powerful & flexible",
        "It has a very active and versatile ecosystem"
    ],
    [
        "Components, JSX & Props",
        "State",
        "Hooks (e.g., useEffect())",
        "Dynamic rendering"
    ],
    [
        "Official web page (react.dev)",
        "Next.js (Fullstack framework)",
        "React Native (build native mobile apps with React)"
    ]
];

const btnWhyReact = document.getElementById("btn-why-react")
const btncoreFeatures = document.getElementById("core-features")
const btnrelatedResouces = document.getElementById("related-resouces")
const tabContent = document.getElementById("tab-contents")

function displayContent(items){
    let listContent ="";
    for(const item of items){
        listContent += `<li>${item}</li>`
    }
    const list = document.createElement("ul");
    tabContent.innerHTML = "";
    list.innerHTML = listContent;
    tabContent.append(list);
}

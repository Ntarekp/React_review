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
const btncoreFeatures = document.getElementById("btn-core-features")
const btnrelatedResouces = document.getElementById("btn-related-resources")
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

function highlightButton(btn){
    //clear all existing styling/highlights
    btnWhyReact.className ="";
    btncoreFeatures.className= "";
    btnrelatedResouces.className= "";
    btn.className= "active"//then set the new style/hightligt to active
}
function handleClick(event){
    const btnId = event.target.id;
    highlightButton(event.target);
    if(btnId ==="btn-why-react"){
        displayContent(content[0])
    }
    else if(btnId=== "btn-core-features"){
        displayContent(content[1])
    }
    else{
        displayContent(content[2])
    }
}
displayContent(content[0])

btnWhyReact.addEventListener("click", handleClick);
btncoreFeatures.addEventListener("click",handleClick);
btnrelatedResouces.addEventListener("click", handleClick)

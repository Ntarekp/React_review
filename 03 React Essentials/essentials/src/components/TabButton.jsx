export default function TabButton({children,onSelect}) {
    //export default function TabButton(props) 



    // function handleClick(){
    //     console.log("Hello World!")
    // }

    return <li>
        <button onClick={onSelect}>{children}</button>
    </li>
}
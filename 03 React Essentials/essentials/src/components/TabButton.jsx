export default function TabButton({children,onSelect, isSelected}) {
    //export default function TabButton(props) 



    // function handleClick(){
    //     console.log("Hello World!")
    // }

    return <li>
        <button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button>
    </li>
}
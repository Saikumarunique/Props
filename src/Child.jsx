import Grandchild from "./Grandchild"

function Child(Props) {
    let gchild = "arun"
    return (
        <>
        <h1>My name is {Props.fname} and i am from {Props.fbatch} batch</h1>
        <Grandchild ch = {gchild}/>
            </>
    )
}

export default Child

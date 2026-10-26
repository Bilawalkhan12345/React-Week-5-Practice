import Child from "./Child";


function Parent({studentName}) {
    return(
        <div style={{border: "2px solid blue", padding: "10px", margin: "10px", textAlign: "center", fontSize: "2rem" }}>
            <h2>Parent Component</h2>
            <Child studentName = {studentName}/>
        </div>
    );
}

export default Parent;
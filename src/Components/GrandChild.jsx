
function GrandChild({studentName}) {
    return(
        <div style={{border: "2px solid red", padding: "10px", margin: "10px"}}>
            <h2>GrandChild Component</h2>
            <h3>Studend Name: {studentName}</h3>
        </div>
    );
}

export default GrandChild;
function Student({name = "Unknown" , age , city}) {
    // console.log("props: ", props);
    return(
    <>
     <h2>Name: {name}</h2>
     <h2>Age: {age}</h2>
     <h2>City: {city}</h2>
    </>
    );
}

export default Student;
function Name(){
    var name = "Tej"
    var age = 24
    var demo =null
    var undef;
    var boolval = false;
    
    
    return(<>
    <h1>Hello {name} </h1>
    <p>your age is {age}</p>
    <p>demo is {demo}</p>
    <p>Undefined value {undef}</p>
    <p>boolean value {boolval}</p>
    </>)
}
                                                                                            

ReactDOM.createRoot(document.getElementById("root")).render(<Name/>);

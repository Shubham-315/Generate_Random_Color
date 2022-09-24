import React,{useState} from "react"
import $ from "jquery";
import './App.css';

function App() {
  const [state, setState] = React.useState(0);
    const [color1, setColor1] = useState("");
    const Child = ({ active, color }) =>
        <div className="Light" style={{ background: active ? color : "#fff" }} />;

    const Container = ({ state }) =>
        <div className="flex">
            <Child active={state === 0} color={`#${color1}`} />
            <Child active={state === 1} color={`#${color1}`} />
            <Child active={state === 2} color={`#${color1}`} />
        </div>;

    const genrateColor1 = () => {
        $(".light_box1").css("background-color", `${color1}`);
        setColor1(Math.random().toString(16).substr(-6));
    }
    function next() {
        genrateColor1()
    }
    function prev() {
        genrateColor1()
    }
    return (
        <div className="App">
            <div className="flex">
                <Container state={state} />
            </div>
            <button
                onClick={() => {
                    prev();
                    setState(~~(Math.random()*3));
                }}
            >
                Previous
            </button>
            <button
                onClick={() => { 
                    setState(~~(Math.random()*3)); 
                    next(); 
                }}
            >
                Next
            </button>
        </div>
    );
}

export default App;

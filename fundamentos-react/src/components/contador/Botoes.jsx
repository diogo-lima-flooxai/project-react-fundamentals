import "./Contador.css"; 
 
export default function Botoes(props) {
    return (
        <div className="buttons">
            <button onClick={props.inc} className="btn btn-inc">+</button>
            <button onClick={props.dec} className="btn btn-dec">-</button>
        </div>
    );
}

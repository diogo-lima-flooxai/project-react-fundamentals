import "./Card.css";

// children = são os filhos (nesse caso = <Aleatorio min = {2} max = {4}/> - do APP.jsx)

export default (props) => {
  const cardStyle = {
    backgroundColor: props.color || '#F00',
    borderColor: props.color || '#F00',
  }

  return (
    <div className="Card" style={cardStyle}>
      <div className="Title">{props.titulo}</div>
      <div className="Content">{props.children}</div>
    </div>
  );
};

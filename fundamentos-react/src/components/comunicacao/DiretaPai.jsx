import DiretaFilho from "./DiretaFilho"


export default (props) => {
  return (
    <div>
      <DiretaFilho nome='Juniô' idade={ 20 } nerd= {true} />
      <DiretaFilho nome='Gabriel' idade={ 17 } nerd= {false} />
    </div>
  )
}
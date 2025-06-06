import alunos from "../../data/alunos"

export default (props) =>{

  const alunosLi = alunos.map((aluno) =>{
    return (
      <li key={aluno.id}>
        {aluno.id} {alunos.nome} - {aluno.nota}
      </li>
    )
  })

  return (
    <div>
      <ul style={{listStyle: "none"}}>
        {alunosLi}
      </ul>
    </div>
  )
}
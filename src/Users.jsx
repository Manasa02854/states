import React from 'react'

const Users=(props)=>{
  let data=props.data
  return(
    <>
    <h1>Kannada Movies</h1>
    <table border={"2px"} style={{textAlign:"center"}}>
      <tr>
      <th>Movies</th>
      <th>Hero</th>
      <th>Heroin</th>
      <th>Photo</th>
      <th>Rating</th>
      </tr>
     {data.map((x)=>{
      return <tr>
        <td>{x.Movies}</td>
        <td>{x.Hero}</td>
        <td>{x.Heroin}</td>
        <td><img src={x.photo} alt="" height={"100px"}width={"100px"} /></td>
        <td>
         <ol>
          {x.Rating.map((x)=>{
            return <li>{x}</li>
          })}
         </ol>
        </td>
      </tr>
     })}
    </table>
    </>
  )
}
export default Users
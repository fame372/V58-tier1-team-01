import UsersTable from "./UsersTable"
export default function UserTableRow(props) {
    console.log(props);
    return ( 
    <>
     <tr>
      <td>{props.user.timestamp}</td>
      <td>{props.user.gender}</td>
      <td>{props.user.country_name}</td>
    </tr>  
    

    </>
    )
};
  

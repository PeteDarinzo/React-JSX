
const Person = (props) => {
  let msg;
  if (props.age >= 18) {
    msg = "please go vote!"
  } else {
    msg = "you must be 18"
  }

  let name;
  if ((props.name).length > 8) {
    name = (props.name).slice(0, 5);
  } else {
    name = props.name;
  }

  return (
    <div>
      <p>Learn some information about this person</p>
      <h3>{name}</h3>
      <h3>{msg}</h3>
      <h3>Hobbies:</h3>
      <ul>{
        props.hobbies.map(h => (
          <li>{h}</li>
        ))
      }
      </ul>
      <p>****************************</p>
    </div>
  );
}


const Tweet = (props) => {
  return (
    <div>
      <h3>{props.username}</h3>
      <h3>{props.name}</h3>
      <h3>{props.date}</h3>
      <p>{props.message}</p>
      <p>****************************</p>
    </div>
  );
}


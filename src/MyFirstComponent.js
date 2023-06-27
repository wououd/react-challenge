export default function MyFirstComponent() {
  const x = 10;

  const person = {
    name: "Pingucoder",
    email: "pingucoder@gmail.com",
  };

  const elemStyle = {};

  return (
    <div>
      <div>
        <h1
          style={{
            backgroundColor: "cyan",
            fontSize: "20px",
            boxShadow: "0px 20px 10px",
          }}
        >
          {person.name}{" "}
        </h1>
        <h3 style={{ backgroundColor: "green" }}>{person.email}</h3>
        <h2 style={elemStyle}>hi</h2>
        <button onClick={saySalam}>Click me</button>
      </div>
      <div></div>
    </div>
  );
}

function saySalam() {
  return "Salam";
}

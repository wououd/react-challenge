import "./FirstComponentStyle.css";

export default function MyFirstComponent() {
  const x = 10;

  const person = {
    name: "Pingu",
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
        <h3 className={"active blBg "}>{person.email}</h3>
        <h2 className={" active"} style={elemStyle}>
          hi
        </h2>
        <button onClick={saySalam}>Click me</button>
      </div>

      <h1 className={person.name == "Pingucoder" ? "blred" : "greenBg"}>
        Check Name
      </h1>
      <div></div>
    </div>
  );
}

function saySalam() {
  return "Salam";
}

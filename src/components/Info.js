import contacts from "../data/contact.json";
import "./Info.css";

// console.log(contacts);
function Info() {
  return (
    <div>
      <h1>Contact List</h1>
      {contacts.map((item, index) => {
        return (
          <div className="bottom">
            <p className="bold">
              <img src={item.picture.large} />{" "}
              {item.name.first + " " + item.name.last}
            </p>
            <p>Home: {item.phone}</p>
            <p>Mobile: {item.cell}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Info;

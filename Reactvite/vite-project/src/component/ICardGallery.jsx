import Icard from "./Icard";
import car from "../images/car.jpg";

function ICardGallery() {

  const student = [
    {
      name: "Yash",
      age: 20,
      college: "ABES Engineering College",
      img: car
    },
    {
      name: "Rahul",
      age: 21,
      college: "IIT Delhi",
      img: car
    },
    {
      name: "Aman",
      age: 20,
      college: "AKTU",
      img: car
    }
  ];

  return (
    <div style={{display:"flex"}}>
      {student.map((data) => (
        <Icard {...data} />
      ))}
    </div>
  );
}

export default ICardGallery;
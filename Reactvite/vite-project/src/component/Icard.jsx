function Icard(data) {
    return (
      <div
        style={{
          border: "5px solid red",
          width: "300px",
          minHeight: "400px",
          margin: "20px",
          padding: "20px",
          textAlign: "center",
          borderRadius: "10px"
        }}
      >
        <img
          src={data.img}
          alt="Profile"
          style={{
            width: "150px",
            height: "180px",
            objectFit: "cover"
          }}
        />
  
        <h2>Name: {data.name}</h2>
        <p>Age: {data.age}</p>
        <p>College: {data.college}</p>
      </div>
    );
  }
  
  export default Icard;
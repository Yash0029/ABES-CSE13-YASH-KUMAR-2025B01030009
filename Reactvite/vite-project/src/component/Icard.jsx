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
          borderRadius: "10px",
          background:"white",
          color:"Black"

          
        }}
      >
       <img
  src={data.img}
  alt="Profile"
  style={{
    width: "150px",
    height: "150px",
    objectFit: "cover",
    borderRadius: "50%",
    flexShrink: 0 // Prevents the container from squeezing the image into an oval
  }}
/>

  
        <h2 style={{color:"black"}}>Name: {data.name}</h2>
        <p>Age: {data.age}</p>
        <p>College: {data.college}</p>
      </div>
    );
  }
  
  export default Icard;
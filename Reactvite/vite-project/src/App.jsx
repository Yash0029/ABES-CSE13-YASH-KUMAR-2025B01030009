import car from './images/car.jpg'

function App() {
  const student = {
    name: "Yash",
    course: "B.Tech CSE",
    college: "ABES Engineering College",
    rollNo: "2500320103022",
    year: "3rd Year",
    section: "CSE-13"
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f2f5",
        fontFamily: "Arial, sans-serif"
      }}
    >
      <div
        style={{
          width: "350px",
          backgroundColor: "white",
          border: "2px solid #222",
          borderRadius: "15px",
          overflow: "hidden",
          textAlign: "center",
          boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)"
        }}
      >
        <div
          style={{
            backgroundColor: "#1e3a8a",
            color: "white",
            padding: "15px"
          }}
        >
          <h2 style={{ margin: "0", fontSize: "22px" }}>
            ABES Engineering College
          </h2>

          <p style={{ margin: "5px 0 0" }}>
            Student Identity Card
          </p>
        </div>

        <div
          style={{
            padding: "20px"
          }}
        >
          <img
            src={car}
            alt="Student"
            style={{
              width: "120px",
              height: "120px",
              objectFit: "cover",
              borderRadius: "50%",
              border: "3px solid #1e3a8a"
            }}
          />

          <h2 style={{ margin: "15px 0" }}>
            {student.name}
          </h2>

          <p style={{ textAlign: "left", margin: "10px 0" }}>
            <strong>Course:</strong> {student.course}
          </p>

          <p style={{ textAlign: "left", margin: "10px 0" }}>
            <strong>Roll No:</strong> {student.rollNo}
          </p>

          <p style={{ textAlign: "left", margin: "10px 0" }}>
            <strong>Year:</strong> {student.year}
          </p>

          <p style={{ textAlign: "left", margin: "10px 0" }}>
            <strong>Section:</strong> {student.section}
          </p>
        </div>

        <div
          style={{
            backgroundColor: "#f1f1f1",
            padding: "10px"
          }}
        >
          <p style={{ margin: "0", fontWeight: "bold" }}>
            {student.college}
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
import axios from "axios";
import { useLoaderData } from "react-router-dom";
export const loader = async () => {
  const res = await axios.get("/api/students?sort=createdAt:desc&populate=*");
  return res.data.data;
};
const Students = () => {
  const students = useLoaderData();
  console.log(students);
  return (
    <div>
      {students.map((student) => (
        <p key={student.id}>{student.attributes.firstName}</p>
      ))}
    </div>
  );
};

export default Students;

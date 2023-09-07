import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import "./App.css";
import Form from "./Form";

const App = () => {
  const [members, setMembers] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const API = "https://jsd5-mock-backend.onrender.com";



  useEffect (() => {
    const display = async() => {
      const response = await axios.get(`${API}/members`)
      setMembers(response.data)

    }
    display();
  },[])



  const postDatas = async (id, name, age, weight, status) => {
    const newPost ={
      name: name,
      age: age,
      weight: weight,
      status: status};
      const response = await axios.post(`${API}/members`, newPost);
      console.log(response)
      setRefresh(!refresh);
    }


  const deleteData = async (id) => {
      const response = await axios.delete(`${API}/members${id}`);
      console.log(response)
      setRefresh(!refresh);
    }
  

  
  const updateData = async (id, name, age, weight, status) => {
    const newData = { 
      id: id,
    name: name,
    age: age,
    weight: weight,
    status: status};
    const response = await axios.put(`${API}/members`, newData);
    console.log(response);
    setRefresh(!refresh);
    // setPutMembers(response.data)

  };
  // create here

  return (
    <div className="container">
      <Form submitHandler={updateData}  postDatas={postDatas} deleteData = {deleteData}/>
      <div className="card-container">
        {members.map((member) => (
          <Card
            age={member.age}
            name={member.name}
            id={member.id}
            status={member.status}
            weight={member.weight}
          />
        ))}
      </div>
    </div>
  );
};

export default App;

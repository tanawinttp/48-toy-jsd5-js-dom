import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import "./App.css";

const App = () => {
  const [members, setMembers] = useState([]);

  const [singleMember, setSingleMember] = useState([]);

  useEffect(() => {
    const getData ______fill the blank here_______ {
      const response = await axios();
      // set member here
    };

    getData();
  }, []);

  const getDataById = async (id) => {
    // call axios here

    if (response.status === 200 && response.data) {
      // set data here
    }
  };

  return (
    <div className="container">
      <h1>All Data</h1>
      <div>
        
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
      <h1>Single Data by ID</h1>
      <div>
        <select onChange={(ev) => getDataById(ev.target.value)}>
          <option value="cc9754c4-f619-4921-bf7e-8a4fc9714e7f">
            Mock Name
          </option>
          <option value="66a3f853-5c09-4412-a380-3cc1ebf08c9c">John Doe</option>
          <option value="64715e05-b45b-4aba-b6d2-d7a4f61ccf0a">
            Alice Smith
          </option>
          <option value="61ec7ef2-f2e5-460c-bfd0-c060a99d0f50">
            Jane Johnson
          </option>
          <option value="6b72fbe1-5c72-42bb-a25f-8d00cef7e88a">
            Bob Brown
          </option>
        </select>
        <Card
          id={singleMember.id}
          name={singleMember.name}
          age={singleMember.age}
          weight={singleMember.weight}
          status={singleMember.status}
        />
      </div>
    </div>
  );
};

export default App;

import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [data, setData] = useState([]);
  const [search, SetSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const filteredData = data.filter((e) => {
    return e.name.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>
              <input
                type="text"
                className={styles.input}
                placeholder="Name"
                onChange={(e) => SetSearch(e.target.value)}
              />
            </th>
            <th>UserName</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>
                {item.address.street}, {item.address.suite}, {item.address.city}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

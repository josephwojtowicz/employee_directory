import React, { Component, useEffect, useRef, useState } from "react";
import "./Main.css";
import { getRandomUser } from "../../utils/API.js"
import axios from "axios";
import Table from 'react-bootstrap/Table';
import Search from "../Search";

function Main() {
  const [data, setData] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [filter, setFilter] = useState("");

  useEffect(async () => {
   if (!loaded) {
    const result = await axios("https://randomuser.me/api/?results=20")
    setData(result.data.results)
    setLoaded(true)
   }
  },[data, loaded])

  function checkFilter(result) {
    if (filter.length === 0) {
      return true
    }
    let goodToReturn = false;
    const things = [result.name.first, result.name.last, result.phone, result.email]
    things.forEach(thing => {
      if (thing.includes(filter)) {
        console.log("this should be returned", thing)
        goodToReturn = true
        return 
      }
    }) 
    return goodToReturn
  }


  return (
    <div className="Main">
      <h5>employees aha</h5>
      <input type="text" onChange={(e) => setFilter(e.target.value)} />
      <Table responsive="sm">
              <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            </Table>
      {data.map((result) => checkFilter(result) ? (
        <div>
          <Table responsive="sm">
            <tbody>
              <tr>
                <td><img src={result.picture.thumbnail} className="rounded-circle" /></td>
                <td>{result.name.first}</td>
                <td>{result.name.last}</td>
                <td>{result.email}</td>
                <td>{result.phone}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      ):null)}
    </div>
  )
  console.log(data)
  return null
}

export default Main;
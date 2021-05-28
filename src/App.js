import axios from 'axios';
import React,{useEffect,useState} from 'react';
import './App.css';
import Input from './components/Input';
import TableOutput from './components/Table';
const App = () => {
  const [Todo,SetTodo]=useState([]);
  useEffect(async()=>{
    await axios.get("http://localhost:5000/todo").then((response)=>{
      // console.log(response.data);
      SetTodo(response.data); 
    })
  },[Todo]);
  const updateState=async(t)=>{
    // console.log("t",t);
    //let tempTodo=Array.from(Todo);
    //tempTodo.push(t);
    // tempTodo.append(t);
    //SetTodo(tempTodo);
    await axios.post("http://localhost:5000/todo",{
      description:t
    })
  }
  const deleteFromSpecfic=async(i)=>{
    // let tempTodo=Array.from(Todo);
    // tempTodo.splice(i,1);
    // SetTodo(tempTodo);
    const url=`http://localhost:5000/todo/${i}`;
    await axios.delete(url);
  }
  const editSpecific=async(i,data)=>{
    // let tempTodo=Array.from(Todo);
    // tempTodo[i]=data;
    // SetTodo(tempTodo);
    const url=`http://localhost:5000/todo/${i}`;
    await axios.put(url,{
      description:data
    });
  } 
  return (
    <div className="App">
      <Input todoHandler={updateState}></Input>
      {Todo.length?<TableOutput 
        todos={Todo} 
        deleteHandler={deleteFromSpecfic}
        editHandler={editSpecific}  
      ></TableOutput>:''}
      {/* {console.log(Todo)} */}
    </div>
  );
}

export default App;

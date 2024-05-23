
import { v4 as uuid } from 'uuid';
import { useState } from "react";

import {
  Container,
  ToDoList,
  Input,
  Button,
  ListItem,
  Check,
  Trash
} from "./styles";

function App() {

  const [list, setList] = useState([])
  const [inputTask, setInputTask] = useState('')

  function InputValue(event) {
    setInputTask(event.target.value)
  }

  function AddTask() {
    if(inputTask) {
      setList([...list, { id: uuid(), task: inputTask, finished: false }])
    }
  }

  function FinishTask(id) {
    const newList = list.map(item => {
      return item.id === id ? { ...item, finished: !item.finished } : item
  })
    setList(newList)
  }
  
  function DeleteTask(id) {
    const newList = list.filter(item => item.id !== id)
    setList(newList)
  }


  return (
    <Container>
      <ToDoList>
        <Input onChange={InputValue} placeholder="Adicionar Tarefa" />
        <Button onClick={AddTask}>Adicionar</Button>

        <ul>
          {
            list.length > 0 ? (
              list.map((item) => (
                <ListItem isFinished={item.finished} key={item.id}>
                  <Check onClick={() => FinishTask(item.id)} />
                  <li>{item.task}</li>
                  <Trash onClick={() => DeleteTask(item.id)} />
                </ListItem>
              ))
            )
            : (
              <h3>Não Há Tarefas</h3>
            )
            }
        </ul>
      </ToDoList>
    </Container>
  )
}

export default App

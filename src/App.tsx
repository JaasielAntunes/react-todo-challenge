import './global.css'
import styles from './App.module.css'
import { Header } from './components/Header'
import { Input } from './components/Input'
import { Button } from './components/Button'
import { Header as ListHeader } from './components/List/Header'
import { Item } from './components/List/Item'

import { PlusCircle } from 'phosphor-react'
import { useState } from 'react'
import { Empty } from './components/List/Empty'

export interface ITask {
  id: number
  text: string
  isChecked: boolean
}

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([])
  const [inputValue, setInputValue] = useState('')

  function handleAddTask() {
    if (!inputValue) {
      return
    }

    const newTask: ITask = {
      id: new Date().getTime(),
      text: inputValue,
      isChecked: false,
    }

    setTasks((state) => [...state, newTask])
    setInputValue('')
  }

  return (
    <>
      <main>
        <Header />

        <section className={styles.content}>
          <div className={styles.taskInfoContainer}>
            <Input
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
            />

            <Button onClick={handleAddTask}>
              Criar
              <PlusCircle size={16} color="#f2f2f2" weight="bold" />
            </Button>
          </div>

          <div className={styles.tasksList}>
            <ListHeader />

            {tasks.length > 0 ? (
              <div>
                {tasks.map((task) => (
                  <Item key={task.id} data={task} />
                ))}
              </div>
            ) : (
              <Empty />
            )}
          </div>
        </section>
      </main>
    </>
  )
}

import './global.css'
import styles from './App.module.css'
import { Header } from './components/Header'
import { Header as ListHeader } from './components/List/Header'
import { Input } from './components/Input'
import { Button } from './components/Button'

import { PlusCircle } from 'phosphor-react'

function App() {
  return (
    <>
      <main>
        <Header />

        <section className={styles.content}>
          <div className={styles.taskInfoContainer}>
            <Input />

            <Button>
              Criar
              <PlusCircle size={16} color="#f2f2f2" weight="bold" />
            </Button>
          </div>

          <div className={styles.tasksList}>
            <ListHeader />
          </div>
        </section>
      </main>
    </>
  )
}

export default App

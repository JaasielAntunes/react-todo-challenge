import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.container}>
      <aside>
        <p>Tarefas criadas</p>
      </aside>

      <aside>
        <p>Concluídas</p>
      </aside>
    </header>
  )
}

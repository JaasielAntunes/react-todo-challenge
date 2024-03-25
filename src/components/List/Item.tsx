import styles from './Item.module.css'
import { Trash, Check } from 'phosphor-react'

export function Item() {
  return (
    <div className={styles.container}>
      <div>
        <label htmlFor="">
          <input type="checkbox" />
          <span>
            <Check size={12} />
          </span>

          <p></p>
        </label>
      </div>

      <button>
        <Trash size={15} color="#808080" />
      </button>
    </div>
  )
}

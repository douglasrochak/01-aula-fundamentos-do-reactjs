import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar';

import styles from './Sidebar.module.css';

export function Sidebar() {
  
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover} 
        src="https://images.unsplash.com/photo-1659574087501-92ef4aa7b2d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />
      <div className={styles.profile}>
        <Avatar src="https://lh3.googleusercontent.com/a-/ACNPEu-rr2F1mjjlmpaIC1bp_8GL9vAAIAi-tdpndeMjhg=s288-p-no" />
        <strong>Douglas Rochak</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu Perfil</a>
      </footer>
    </aside>
  )
}
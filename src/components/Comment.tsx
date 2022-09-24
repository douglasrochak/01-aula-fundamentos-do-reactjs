import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment ({content, onDeleteComment}: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleLikeComment(){
    setLikeCount(state => state + 1)
  }
  
  function handleDeleteComment(){
    onDeleteComment(content)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://lh3.googleusercontent.com/a-/ACNPEu-rr2F1mjjlmpaIC1bp_8GL9vAAIAi-tdpndeMjhg=s288-p-no" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Douglas Rochak</strong>
              <time title='23 de Setembro às 09:23h' dateTime='23-09-22 09:23:57'>Cerca de 1h atrás</time>
            </div>
            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
          <footer>
            <button onClick={handleLikeComment}>
              <ThumbsUp />
              Aplaudir<span>{likeCount}</span>
            </button>
          </footer>
      </div>
    </div>
  )
}
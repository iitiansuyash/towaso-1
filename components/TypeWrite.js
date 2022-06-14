import styles from '../styles/TypeWrite.module.css'

const TypeWrite = () => {
    return ( 
      <div className={styles.rwWrapper}>
      <div className={`${styles.rwWords} ${styles.rwWords1}`}>
        <p>Welcome To ToWaSo.</p>
        <p>Be Clean.</p>
        <p>Be Green.</p>
        <p>Be A Recycling Machine.</p>
        <p>Think Before You Trash It.</p>
        <p>Don't Be A Punk! Recycle Yout Junk.</p>
      </div>
    </div>
     );
}
 
export default TypeWrite;
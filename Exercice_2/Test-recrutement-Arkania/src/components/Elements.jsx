import React from 'react'
import styles from './Elements.module.css'



function Elements() {
    const data = ['Elément 1', 'Elément 2', 'Elément 3', 'Elément 4']

    return (
        <div className={styles.allElements}>
            <div>
                <h1 data-testid='title'>Je suis un titre</h1>
                <h3>je suis le sous titre</h3>
            </div>
            <div className={styles.elementsDetails}>
                {data.map((elem, idx) =>
                    <div key={idx}>
                        <div>{idx + 1}</div>
                        <div>{elem}</div>
                    </div>
                )}
            </div>
        </div>
    )
  }
  
  export default Elements
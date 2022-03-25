import React from 'react'
import styles from './UserInfo.module.css'
import avatar from '../../../assets/nft-3d.png';
import Button from '@mui/material/Button';

function UserInfo() {


    return (
        <div className={styles.profil}>
            <div className={styles.containerProfil}>
                <div className={styles.picture}>
                    <img src={avatar} alt="image_nft_singe"/>
                </div>
                <div className={styles.profilInfo}>
                    <span>Nom</span>
                    <span>Prénom</span>
                    <p>Age</p>
                    <p>Compétences</p>
                </div>
            </div>
            <div>
                <Button style={{textTransform: 'none', backgroundColor: '#005826'}} variant="contained" data-testid='button' type="submit">Sauvegarder</Button>
            </div>
        </div>

    )
  }
  
  export default UserInfo
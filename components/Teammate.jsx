import styles from './Teammate.module.css';
function Teammate(props) {

    return (
        <div className={styles.teammate}>
            <div className={styles.teammateContent}>
                <img src={props.image} alt={"Picture of " + props.name} className={styles.teamImg}/>
                {/* for the header which includes picture, name, title */}
                <h2 className={styles.teammateName}>{props.name}</h2>
                <p>{props.role}</p>
                {/* the bio which includes biography paragraph and the links to websites */}
                <p>{props.bio}</p>
                <p className={styles.bioList}>Links:
                    <img src="/images/buttons/world-1.png" aria-hidden='true' className={styles.bioList} alt="globe"/>
                    <a className={styles.bioList} href={props.links[0][1]}>{props.links[0][0]}</a>
                    <img src="../images/buttons/world-1.png" aria-hidden='true' className={styles.bioList} alt="globe"/>
                    <a className={styles.bioList} href={props.links[1][1]}>{props.links[1][0]}</a>
                </p>
            </div>
        </div>
    );


}

export default Teammate;

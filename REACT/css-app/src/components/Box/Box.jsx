import styles from './Box.module.css';

export default function Box({highlight, fullWidth}){
    const className = [
        styles.box,
        highlight && styles.highlight,
        fullWidth && styles.fullWidth
    ].filter(Boolean) //filter(item => Boolean(item))
    .join(" ");

    return <div className = {className}>Box</div>
}
type Props = {
    name : string;
}

export default function ProfileCard({name} : Props){
    return(
        <section style={{border:"1px solid #ddd", padding:16, maxWidth:360}}>
            <h2>프로필</h2>
            <p>이름 : {name}</p>
        </section>
    )
}
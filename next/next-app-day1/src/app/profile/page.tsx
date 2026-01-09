import ProfileCard from "@/components/profileCard";

export default function ProfilePage(){
    const name ="홍길동";

    return(
        <main style={{padding:24}}>
            <h1>Profile Page</h1>
            <ProfileCard name={name}/>
        </main>
    )
}
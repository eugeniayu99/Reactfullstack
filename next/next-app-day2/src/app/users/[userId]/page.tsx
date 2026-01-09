import { notFound } from "next/navigation";
import UserCardClient from "./UserCard.client";

interface PageProps {
    params : {
        userId : string;
    }
}

type User = {
    id : number;
    name : string;
    email : string;
    address:{
        city: string;
        street: string;

    };
    company : {
        name:string;
    }
}

async function fetchUser(id: number): Promise<User | null> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;
  return (await res.json()) as User;
}

export default async function UserPage({ params }: PageProps) {
  const id = Number(params.userId);

  if (!Number.isInteger(id) || id < 1 || id > 10) {
    return notFound();
  }

  const user = await fetchUser(id);
  if (!user) return notFound();

  return (
    <main style={{ padding: 24 }}>
      <h1>User Detail</h1>
      <p>params.userId: {params.userId}</p>

      <UserCardClient user={user} />
    </main>
  );
}
import { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [])

  return (
    <>
      <h1 className="text-center text-5xl font-bold py-2 text-fuchsia-500">
        Users: {users.length}
      </h1>
      <section className="md:w-10/12 mx-auto grid md:grid-cols-3 gap-2 px-4">
        {users.map((user) => (
          <SingleUser
            key={user?.id}
            name={user?.name}
            email={user?.email}
            address={user?.address?.city}
            phone={user?.phone}
            website={user?.website}
            company={user?.company?.name}
          ></SingleUser>
        ))}
      </section>
    </>
  );
}

function SingleUser(props) {
  // SingleUser({ name, email, address, phone, website, company });
  const { name, email, address, phone, website, company } = props;
  return (
    <>
      <section className="border-2 border-amber-500 p-4 m-2 text-center rounded-md">
        <h1 className="text-2xl">Name: {name}</h1>
        <p className="text-lg">Email: {email}</p>
        <p className="text-lg">Address: {address}</p>
        <p className="text-lg">Address: {phone}</p>
        <p className="text-lg">Address: {website}</p>
        <p className="text-lg">Address: {company}</p>
      </section>
    </>
  );
}

export default App;



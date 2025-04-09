function UserCard({ name, email }) {
  return (
    <div className="max-w-sm border rounded-lg shadow p-4 m-4 bg-white">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-600">{email}</p>
    </div>
  );
}


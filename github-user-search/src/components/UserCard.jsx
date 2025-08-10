const UserCard = ({ user }) => {
  return (
    <div className="max-w-lg mx-auto mt-6 bg-gray-50 p-4 rounded-lg shadow">
      <div className="flex items-center gap-4">
        <img
          src={user.avatar_url}
          alt={user.login}
          className="w-20 h-20 rounded-full border"
        />
        <div>
          <h2 className="text-xl font-bold">{user.login}</h2>
          {user.name && <p className="text-gray-700">{user.name}</p>}
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            View Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
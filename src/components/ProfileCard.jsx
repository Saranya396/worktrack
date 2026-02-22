export default function ProfileCard({ user }) {
  if (!user) return <div>No User Found</div>;

  const image =
    user.role === "admin"
      ? user.gender === "male"
        ? "https://i.pravatar.cc/150?img=3"
        : "https://i.pravatar.cc/150?img=5"
      : user.gender === "male"
      ? "https://i.pravatar.cc/150?img=12"
      : "https://i.pravatar.cc/150?img=16";

  return (
    <div className="bg-white shadow rounded-xl p-6 flex items-center gap-6 mb-6">
      <img src={image} className="w-20 h-20 rounded-full" />
      <div>
        <h2 className="text-xl font-semibold">{user.name}</h2>
        <p className="text-gray-500 capitalize">{user.role}</p>
        <p className="text-gray-400 text-sm">{user.email}</p>
        <p className="text-gray-400 text-sm">Age: {user.age}</p>
        <p className="text-gray-400 text-sm capitalize">
          Gender: {user.gender}
        </p>
      </div>
    </div>
  );
}
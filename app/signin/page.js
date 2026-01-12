export default function SignIn() {
  return (
    <div className="p-10 max-w-md mx-auto">
      <h1 className="text-3xl text-pink-700 mb-6">Sign In</h1>
      <input className="border w-full p-2 mb-3" placeholder="Email" />
      <input className="border w-full p-2 mb-3" placeholder="Password" />
      <button className="bg-pink-600 text-white w-full py-2 rounded">
        Sign In
      </button>
    </div>
  );
}

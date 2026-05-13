export default function DashboardPage() {
  return (
    <div className="min-h-screen p-10">
      <h1 className="text-4xl font-bold">Dashboard</h1>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        <div className="border p-6 rounded-2xl">
          <h2 className="font-bold">SMS Balance</h2>
          <p className="text-3xl mt-2">12,500</p>
        </div>

        <div className="border p-6 rounded-2xl">
          <h2 className="font-bold">Messages Sent</h2>
          <p className="text-3xl mt-2">4,200</p>
        </div>

        <div className="border p-6 rounded-2xl">
          <h2 className="font-bold">Account Status</h2>
          <p className="text-green-600 mt-2">Active</p>
        </div>
      </div>
    </div>
  );
}

import { User } from '../types/user';

interface Props {
  data: User[];
  loading: boolean;
}

export default function UserTable({ data, loading }: Props) {
  if (loading) return <div className="text-center p-10 animate-pulse">Loading users...</div>;

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
      <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-4 font-medium text-gray-900">Name</th>
            <th className="px-6 py-4 font-medium text-gray-900">Email</th>
            <th className="px-6 py-4 font-medium text-gray-900">Created At</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
          {data.map((user) => (
            <tr key={user.id} className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 font-medium text-gray-900">{user.full_name}</td>
              <td className="px-6 py-4">{user.email}</td>
              <td className="px-6 py-4">{new Date(user.created_at).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
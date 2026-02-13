export default function Loading() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-gray-50">
      {/* Animasi spinner loading */}
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
      
      {/* Label status loading */}
      <p className="mt-4 text-sm font-medium text-gray-600 animate-pulse">
        Loading resources...
      </p>
    </div>
  );
}
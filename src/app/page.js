import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#2E2828' }}>
      <h1
        className="text-6xl sm:text-7xl md:text-8xl font-bold text-center"
        style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}
      >
        Under Construction
        🚧
      </h1>
    </div>
  );
}

export default function SpinWheel() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center space-y-6 p-4">
      <h1 className="text-white text-2xl font-semibold">Spinning the wheel...</h1>
      <div className="w-64 h-64 bg-white flex items-center justify-center">
        {/* Replace this with your actual wheel image */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Color_wheel_480.png/320px-Color_wheel_480.png"
          alt="Spin the Wheel"
          className="object-contain"
        />
      </div>
    </div>
  );
}

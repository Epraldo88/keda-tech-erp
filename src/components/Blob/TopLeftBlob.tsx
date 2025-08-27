const TopLeftBlob = () => {
  return (
    <svg
      className="absolute top-0 left-0 w-96 h-96 opacity-20 -translate-x-32 -translate-y-32"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="blob1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
      </defs>
      <path
        fill="url(#blob1)"
        d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,89.8,-0.2C89.6,15.9,86.6,31.8,78.1,44.9C69.6,58,55.6,68.3,40.2,74.8C24.8,81.3,8,83.9,-7.6,80.7C-23.2,77.5,-37.6,68.5,-50.4,57.1C-63.2,45.7,-74.4,32,-80.3,16.6C-86.2,1.2,-86.8,-15.9,-82.1,-31.4C-77.4,-46.9,-67.4,-60.8,-54.3,-68.2C-41.2,-75.6,-25,-76.5,-9.7,-79.8C5.6,-83.1,30.6,-83.6,44.7,-76.4Z"
        transform="translate(100 100)"
      />
    </svg>
  );
};

export default TopLeftBlob;

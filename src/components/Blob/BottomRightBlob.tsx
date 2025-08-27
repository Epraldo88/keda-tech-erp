const BottomRightBlob = () => {
  return (
    <svg
      className="absolute bottom-0 right-0 w-80 h-80 opacity-20 translate-x-32 translate-y-32"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="blob2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
      </defs>
      <path
        fill="url(#blob2)"
        d="M37.8,-65.7C49.5,-58.2,59.4,-47.7,64.8,-35.2C70.2,-22.7,71.1,-8.2,69.9,5.7C68.7,19.6,65.4,32.9,58.6,43.8C51.8,54.7,41.5,63.2,29.8,67.4C18.1,71.6,5,71.5,-8.3,69.8C-21.6,68.1,-35.1,64.8,-45.7,57.8C-56.3,50.8,-64,40.1,-68.2,27.9C-72.4,15.7,-73.1,2,-70.2,-10.4C-67.3,-22.8,-60.8,-33.9,-51.8,-43.2C-42.8,-52.5,-31.3,-59.9,-19.1,-65.8C-6.9,-71.7,6,-76.1,18.9,-74.7C31.8,-73.3,44.7,-65.1,37.8,-65.7Z"
        transform="translate(100 100)"
      />
    </svg>
  );
};

export default BottomRightBlob;

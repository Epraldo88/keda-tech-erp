const MiddleRightBlob = () => {
  return (
    <svg
      className="absolute top-1/2 right-1/4 w-64 h-64 opacity-15"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="blob3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EC4899" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
      <path
        fill="url(#blob3)"
        d="M33.4,-58.7C42.7,-50.9,48.6,-39.4,52.8,-27.2C57,-15,59.5,-2.1,58.4,10.2C57.3,22.5,52.6,34.2,44.8,43.1C37,52,26.1,58.1,14.1,61.4C2.1,64.7,-10.9,65.2,-22.3,61.1C-33.7,57,-43.5,48.3,-50.2,37.7C-56.9,27.1,-60.5,14.6,-61.2,1.7C-61.9,-11.2,-59.7,-24.5,-53.8,-35.2C-47.9,-45.9,-38.3,-54,-27.7,-59.1C-17.1,-64.2,-5.5,-66.3,6.8,-66.9C19.1,-67.5,29.1,-66.6,33.4,-58.7Z"
        transform="translate(100 100)"
      />
    </svg>
  );
};

export default MiddleRightBlob;

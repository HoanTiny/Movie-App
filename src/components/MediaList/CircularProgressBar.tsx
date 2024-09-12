type CircularProgressBarProp = {
  percent: number;
  size: number;
  strokeWidth: number;
  strokeColor: string;
};

function CircularProgressBar({
  percent,
  size,
  strokeWidth,
  strokeColor,
}: CircularProgressBarProp) {
  const radius = size / 2 - strokeWidth;
  return (
    <div className="">
      <svg width={`${size}vw`} height={`${size}vw`}>
        <circle
          r={`${radius}vw`}
          cx={`${size / 2}vw`}
          cy={`${size / 2}vw`}
          stroke="white"
          strokeWidth={`${strokeWidth}vw`}
        />

        <circle
          r={`${radius}vw`}
          cx={`${size / 2}vw`}
          cy={`${size / 2}vw`}
          stroke={strokeColor}
          fill="none"
          strokeWidth={`${strokeWidth}vw`}
          strokeDasharray={`${2 * Math.PI * radius}vw`}
          // dash => dash 1 | gap 1
          // 2*PI*R => chu vi => 2*20*3.14 = 125.6
          strokeDashoffset={`${
            2 * Math.PI * radius - (percent / 100) * 2 * Math.PI * radius
          }vw`}
          transform="rotate(-90)"
          style={{ transformOrigin: 'center' }}
          strokeLinecap="round"
        />
        <text
          x={`${size / 2}vw`}
          y={`${size / 2}vw`}
          fill="white"
          fontSize="0.8vw"
          alignmentBaseline="middle"
          textAnchor="middle"
        >
          {percent}%
        </text>
      </svg>
    </div>
  );
}

export default CircularProgressBar;

import { Img, interpolate, useCurrentFrame } from 'remotion';

interface Image1Props {
  img: string;
  radius: number;
  strokeWidth: number;
  strokeColor: string;
  label1: string;
  label2: string;
}

const Image1 = ({ img, radius, strokeWidth, strokeColor, label1, label2 }: Image1Props) => {
  const frame = useCurrentFrame();
  const stroke1W = strokeWidth;
  const stroke2W = (strokeWidth / 10) * 8;
  const stroke3W = (strokeWidth / 10) * 6;
  const stroke4W = (strokeWidth / 10) * 3;
  const circumference = 2 * Math.PI * radius;
  const segmentLength = circumference / 4;
  const gapLength = (circumference / 4) * 3;
  const rotate = frame / 2;

  const scale = interpolate(frame, [30, 50], [0, 1], {
    extrapolateRight: 'clamp',
    extrapolateLeft: 'clamp',
  });

  const imgTop = interpolate(frame, [40, 55], [radius * 2, 80], {
    extrapolateRight: 'clamp',
    extrapolateLeft: 'clamp',
  });

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transform: `scale(${scale})`,
      }}
    >
      <div
        style={{
          borderRadius: '100%',
          width: radius * 2 - strokeWidth,
          height: radius * 2 - strokeWidth,
          overflow: 'hidden',
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Img
          src={img}
          style={{
            position: 'absolute',
            width: radius * 1.4,
            top: imgTop,
          }}
        />
        <h2
          style={{
            position: 'fixed',
            bottom: '8rem',
            color: 'white',
            fontSize: '2.7rem',
            margin: 0,
            textAlign: 'center',
          }}
        >
          {label1}
          <br />
          {label2}
        </h2>
      </div>

      {/* Arc 1 */}
      <svg
        width={radius * 2 + (stroke1W + stroke2W + stroke3W + stroke4W) * 2}
        height={radius * 2 + (stroke1W + stroke2W + stroke3W + stroke4W) * 2}
        style={{
          position: 'absolute',
          rotate: `${rotate}deg`,
        }}
      >
        <circle
          cx={radius + (stroke1W + stroke2W + stroke3W + stroke4W)}
          cy={radius + (stroke1W + stroke2W + stroke3W + stroke4W)}
          r={radius}
          stroke={strokeColor}
          strokeWidth={stroke2W}
          fill="none"
          strokeDasharray={`${segmentLength} ${gapLength}`}
          strokeLinecap="round"
        />
      </svg>
      {/* Arc 2 */}
      <svg
        width={radius * 2 + (stroke1W + stroke2W + stroke3W + stroke4W) * 2}
        height={radius * 2 + (stroke1W + stroke2W + stroke3W + stroke4W) * 2}
        style={{
          position: 'absolute',
          rotate: `${rotate * 1.1}deg`,
          transform: `rotate(${rotate * 1.2}deg)`,
        }}
      >
        <circle
          cx={radius + (stroke1W + stroke2W + stroke3W + stroke4W)}
          cy={radius + (stroke1W + stroke2W + stroke3W + stroke4W)}
          r={radius + (stroke1W + stroke2W + stroke3W)}
          stroke={strokeColor}
          strokeWidth={stroke4W}
          fill="none"
          strokeDasharray={`${segmentLength * 1.2} ${gapLength * 1.5}`}
          strokeLinecap="round"
        />
      </svg>
      {/* Arc 3 */}
      <svg
        width={radius * 2 + (stroke1W + stroke2W + stroke3W + stroke4W) * 2}
        height={radius * 2 + (stroke1W + stroke2W + stroke3W + stroke4W) * 2}
        style={{
          position: 'absolute',
          rotate: `${rotate * 1.2}deg`,
          transform: `rotate(${rotate * 2.4}deg)`,
        }}
      >
        <circle
          cx={radius + (stroke1W + stroke2W + stroke3W + stroke4W)}
          cy={radius + (stroke1W + stroke2W + stroke3W + stroke4W)}
          r={radius + (stroke1W + stroke3W + stroke4W)}
          stroke={strokeColor}
          strokeWidth={stroke3W}
          fill="none"
          strokeDasharray={`${segmentLength * 1.2} ${gapLength * 1.5}`}
          strokeLinecap="round"
        />
      </svg>
      {/* Arc 4 */}
      <svg
        width={radius * 2 + (stroke1W + stroke2W + stroke3W + stroke4W) * 2}
        height={radius * 2 + (stroke1W + stroke2W + stroke3W + stroke4W) * 2}
        style={{
          position: 'absolute',
          rotate: `${rotate * 0.5}deg`,
          transform: `rotate(${rotate * 4.2}deg)`,
        }}
      >
        <circle
          cx={radius + (stroke1W + stroke2W + stroke3W + stroke4W)}
          cy={radius + (stroke1W + stroke2W + stroke3W + stroke4W)}
          r={radius + stroke1W}
          stroke={strokeColor}
          strokeWidth={stroke1W}
          fill="none"
          strokeDasharray={`${segmentLength * 1.2} ${gapLength * 1.5}`}
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default Image1;

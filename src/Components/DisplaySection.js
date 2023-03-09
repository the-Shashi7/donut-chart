import './DisplaySection.css';
const DonutChart = (props) => {
  const donut = props.data;
  const perc = props.percent;
  console.log(perc);
  const cx = 50;
  const cy = 50;
  const strokeWidth = 15;
  const radius = 30;
  const dashArray = 2 * Math.PI * radius;
  const startAngle = -90;

  let filled = 0;

  const sum = donut.reduce((sum, item) => {
    return sum + item.value;
  }, 0);

  const ratio = 100 / sum;

  props.data.forEach((obj) => {
    const itemRatio = ratio * obj.value;

    obj.itemRatio = itemRatio;
    obj.angle = (filled * 360) / 100 + startAngle;
    obj.offset = dashArray - (dashArray * itemRatio) / 100;
    obj.filled = filled;

    filled += itemRatio;
  });

  return (
    <div className="donut-chart">
      <svg width="300px" height="300px" viewBox="0 0 100 100">
        {props.data.map((item, index) => (
          <circle
            key={index}
            cx={cx}
            cy={cy}
            r={radius}
            fill="transparent"
            strokeWidth={strokeWidth}
            stroke={item.color}
            strokeDasharray={dashArray}
            strokeDashoffset={item.offset}
            transform={`rotate(${item.angle} ${cx} ${cy})`}
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              from={`${startAngle} ${cx} ${cy}`}
              to={`${item.angle} ${cx} ${cy}`}
              dur="1.5s"
            />
            <title className="data_views" style={{backgroundColor:'red'}} >
              <span style={{backgroundColor:'red'}} >{item.name}</span>{'\n'}
              <span style={{backgroundColor:'red'}} >{`Rs${(item.earning*item.value)/100},  ${item.value}%`}</span>
            </title>
          </circle>  
        ))}
      </svg>
    </div>
  );
};
export default DonutChart;

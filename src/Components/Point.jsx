import '../Sass/Point.scss'
const Point = ({point}) => {
  return (
    <div className="Point">
      <div className="Point__scream">Points: {point}</div>
    </div>
  );
}

export {Point}

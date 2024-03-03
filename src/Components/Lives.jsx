import '../Sass/Lives.scss';

const Lives = ({ lives }) => {
  return (
    <div className="lives">
      <div className="lives__scream">Lives: {lives}</div>
    </div>
  );
}

export { Lives };

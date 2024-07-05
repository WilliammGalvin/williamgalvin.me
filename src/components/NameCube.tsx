import "../styles/cube.css";

const NameCube = () => {
  const sides: string[] = ["front", "back", "left", "right", "top", "bottom"];

  return (
    <div id="cube">
      {sides.map((side, i) => {
        return (
          <div key={i} id={`cube-${side}`} className="cube-face">
            <span className="text-center leading-[1.5]">
              WILLIAM
              <br />
              GALVIN
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default NameCube;

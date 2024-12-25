import imgLanding from "./imgLanding.svg";

function LandingComponent() {
  return (
    <div>
      <img
        src={imgLanding}
        alt=""
        style={{ width: "100vw", height: "100vh" }}
      />
    </div>
  );
}

export default LandingComponent;

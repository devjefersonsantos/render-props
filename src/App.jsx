import { MouseTracker } from "./components/MouseTracker";
import aranha from "./assets/aranha.png";

function App() {
  return (
    <>
      <MouseTracker
        render={({ x, y }) => (
          <div
            style={{
              position: "fixed",
              top: 10,
              left: 10,
              background: "#1d1d1d",
              color: "#fff",
              padding: "8px",
            }}
          >
            X: {x} | Y: {y}
          </div>
        )}
      />

        {/* https://pixabay.com/pt/illustrations/aranha-dia-das-bruxas-arrepiante-9900122/ */}
      <MouseTracker
        render={({ x, y }) => (
          <img
            src={aranha}
            alt="aranha"
            style={{
              position: "absolute",
              top: y,
              left: x,
              width: 60,
              transform: "translate(-50%, -91%)",
              pointerEvents: "none",
              transition: "left 0.4s linear, top 0.4s linear"
            }}
          />
        )}
      />
    </>
  );
}

export default App;

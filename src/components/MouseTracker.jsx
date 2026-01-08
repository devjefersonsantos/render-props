import { useState, useEffect } from "react";

export function MouseTracker({ render }) {
  const [posicao, setPosicao] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function moverMouse(evento) {
      setPosicao({
        x: evento.clientX,
        y: evento.clientY,
      });
    }

    window.addEventListener("mousemove", moverMouse);

    return () => {
      window.removeEventListener("mousemove", moverMouse);
    };
  }, []);

  return render(posicao);
}

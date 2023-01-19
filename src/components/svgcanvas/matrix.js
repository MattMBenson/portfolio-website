import "./matrix.css";
import { Node } from "./node";
import React, { useRef, useEffect } from "react";

function CanvasBackground({ isLight }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let connectRadius = 125;
    let nodeLineColour = isLight ? "rgb(245, 245, 245)" : "rgb(42,42,42)";
    let defaultNodeColour = isLight ? "rgb(232, 232, 232)" : "rgb(55, 55, 55)";
    let userLineColour = isLight ? "rgb(250, 200, 190)" : "rgb(97, 97, 97)";
    let rareNodeColour = isLight ? "rgb(250, 200, 190)" : "rgb(97, 97, 97)";

    let originalCanvasWidth = canvas.width;
    let originalCanvasHeight = canvas.height;

    let nodes = generateNodes(
      getNodeCount(),
      0.35,
      0.2,
      defaultNodeColour,
      rareNodeColour
    );

    let x = 0;
    let y = 0;

    function handleMouseMove(event) {
      x = event.clientX;
      y = event.clientY;
    }

    function handleResize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      for (let i = 0; i < nodes.length; i++) {
        let node = nodes[i];
        let newX = (node.x / originalCanvasWidth) * canvas.width;
        let newY = (node.y / originalCanvasHeight) * canvas.height;
        node.x = newX;
        node.y = newY;
      }
      originalCanvasWidth = canvas.width;
      originalCanvasHeight = canvas.height;
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    canvas.addEventListener("mousemove", handleMouseMove);

    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < nodes.length; i++) {
        let node = nodes[i];
        node.updatePosition();
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2, 0, 2 * Math.PI);
        ctx.fillStyle = node.colour;
        ctx.fill();

        if (node.isWithinRadius(x, y, connectRadius)) {
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(x, y);
          ctx.strokeStyle = userLineColour;
          ctx.stroke();
        }

        for (let j = i + 1; j < nodes.length; j++) {
          let node2 = nodes[j];
          if (node.isWithinRadius(node2.x, node2.y, connectRadius)) {
            if (
              node.colour === rareNodeColour &&
              node2.colour === rareNodeColour
            ) {
              ctx.beginPath();
              ctx.moveTo(node.x, node.y);
              ctx.lineTo(node2.x, node2.y);
              ctx.strokeStyle = rareNodeColour;
              ctx.stroke();
            } else {
              ctx.beginPath();
              ctx.moveTo(node.x, node.y);
              ctx.lineTo(node2.x, node2.y);
              ctx.strokeStyle = nodeLineColour;
              ctx.stroke();
            }
          }
        }
      }
      requestAnimationFrame(render);
    }
    render();

    function generateNodes(amount, ratio, v, colour, rareColour) {
      let goodNodeAmount = amount;
      let evilNodeAmount = amount * ratio;
      let nodes = [];
      for (let i = 0; i < goodNodeAmount; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let velocity = v;
        nodes.push(new Node(x, y, colour, velocity, canvas));
      }

      for (let i = 0; i < evilNodeAmount; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let velocity = v;
        nodes.push(new Node(x, y, rareColour, velocity, canvas));
      }
      return nodes;
    }

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [isLight]);

  function getNodeCount() {
    let screenWidth = window.innerWidth;
    let nodeCount;
    switch (true) {
      case screenWidth < 576:
        nodeCount = 30;
        break;
      case screenWidth >= 576 && screenWidth < 768:
        nodeCount = 50;
        break;
      case screenWidth >= 768 && screenWidth < 992:
        nodeCount = 100;
        break;
      case screenWidth >= 992 && screenWidth < 1200:
        nodeCount = 200;
        break;
      case screenWidth >= 1200:
        nodeCount = 300;
        break;
      default:
        nodeCount = 300;
    }
    return nodeCount;
  }

  return <canvas ref={canvasRef} className="canvas-background" />;
}

export default CanvasBackground;

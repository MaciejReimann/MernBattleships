

export const colorCanvas = canvas => color => {
  const ctx = canvas.getContext('2d');
  ctx.rect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = color;
  ctx.fill();
}

export const circumscribeCanvas = canvas => color => {
  const ctx = canvas.getContext('2d');
  ctx.rect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = color;
  ctx.stroke();
}

export function getPathDepth(location) {
  let pathArr = location?.pathname.split("/");
  pathArr = pathArr?.filter(n => n !== "");
  return pathArr?.length || 0;
}

export function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}
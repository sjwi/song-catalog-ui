export function getPathDepth(location) {
  let pathArr = location?.pathname.split("/");
  pathArr = pathArr?.filter(n => n !== "");
  return pathArr?.length || 0;
}
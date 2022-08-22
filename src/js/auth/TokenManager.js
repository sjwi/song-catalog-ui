import jwt_decode from 'jwt-decode'
import { ROLES } from "./PermissionsMap";

const tokenKey = 'token';
export function getUserRole() {
  if (!localStorage.hasOwnProperty(tokenKey))
    return ROLES.viewer;
  const user = getUserObject();
  const scopes = user.scope.split(" ");
  if (scopes.includes(ROLES.superadmin))
    return ROLES.superadmin;
  if (scopes.includes(ROLES.admin))
    return ROLES.admin;
  if (scopes.includes(ROLES.user))
    return ROLES.user;
  return ROLES.viewer;
}

export function getUserObject() {
  return jwt_decode(localStorage.getItem(tokenKey));
}

export function setSessionToken(token) {
  localStorage.setItem(tokenKey, token)
}
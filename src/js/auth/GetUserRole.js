import jwt_decode from 'jwt-decode'
import { ROLES } from "./PermissionsMap";

export default function getUserRole() {
  if (!localStorage.hasOwnProperty('token'))
    return ROLES.viewer;
  const user = jwt_decode(localStorage.getItem('token'));
  const scopes = user.scope.split(" ");
  if (scopes.includes(ROLES.superadmin))
    return ROLES.superadmin;
  if (scopes.includes(ROLES.admin))
    return ROLES.admin;
  if (scopes.includes(ROLES.user))
    return ROLES.user;
  return ROLES.viewer;
}
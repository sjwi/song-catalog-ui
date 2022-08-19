import { cloneElement } from "react";
import { PERMISSIONS } from "./PermissionsMap";
import { getUserRole } from "./GetUserRole";

const hasPermission = ({ permissions, scopes }) => {
  const scopesMap = {};
  scopes.forEach((scope) => {
    scopesMap[scope] = true;
  });

  return permissions.some((permission) => scopesMap[permission]);
};

export default function PermissionsGate({
  children,
  scopes = []
}) {
  const { role } = getUserRole();
  const permissions = PERMISSIONS[role];

  return hasPermission({ permissions, scopes })? <>{children}</>: <></>;
}
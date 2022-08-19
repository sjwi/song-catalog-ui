export const ROLES = {
  viewer: "VIEWER",
  user: "USER",
  admin: "ADMIN",
  superadmin: "SUPERADMIN"
};

export const SCOPES = {
  user: "USER",
  admin: "ADMIN",
  superadmin: "SUPERADMIN",
};

export const PERMISSIONS = {
  [ROLES.viewer]: [],
  [ROLES.user]: [SCOPES.user],
  [ROLES.admin]: [SCOPES.user, SCOPES.admin],
  [ROLES.superadmin]: [
    SCOPES.user,
    SCOPES.admin,
    SCOPES.superadmin,
  ]
};
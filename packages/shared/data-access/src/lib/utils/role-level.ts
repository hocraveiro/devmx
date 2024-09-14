import { Role } from '@devmx/shared-api-interfaces';

export const isSponsor = (roles: Record<Role, boolean>) => {
  return roles['donor'] || roles['neighbor'];
};

export const isWorthy = (roles: Record<Role, boolean>) => {
  return roles['leader'] || roles['staff'] || roles['heroe'];
};

export const isBoard = (roles: Record<Role, boolean>) => {
  return roles['manager'] || roles['director'];
};

export const roleLevel = (roles: Record<Role, boolean>) => {
  return {
    get sponsor() {
      return isSponsor(roles);
    },
    get worthy() {
      return isWorthy(roles);
    },
    get board() {
      return isBoard(roles);
    },
  };
};

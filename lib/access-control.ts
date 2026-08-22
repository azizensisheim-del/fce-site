export const POLES = ["sportif", "technique", "animations", "buvette"] as const;
export type Pole = (typeof POLES)[number];
export type Role = "visitor" | "pole_manager" | "admin";
export type Action = "read_public" | "read_internal" | "create" | "update" | "archive" | "publish" | "delete_permanently" | "manage_members";
export type Membership = { userId: string | null; role: Role; poles: Pole[]; active: boolean };
type AccessRequest = { action: Action; pole?: Pole };

/** Source de vérité des autorisations FCE. À appeler côté serveur. */
export function canAccess(member: Membership, request: AccessRequest): boolean {
  if (request.action === "read_public") return true;
  if (!member.active || !member.userId) return false;
  if (member.role === "admin") return true;
  if (member.role === "visitor") return false;
  if (request.action === "read_internal") return true;
  if (!request.pole || !member.poles.includes(request.pole)) return false;
  if (["create", "update", "archive", "publish"].includes(request.action)) return true;
  return false;
}

export function assertAccess(member: Membership, request: AccessRequest): void {
  if (!canAccess(member, request)) throw new AccessDeniedError();
}

export class AccessDeniedError extends Error {
  readonly status = 403;
  constructor() {
    super("Vous n'avez pas l'autorisation d'effectuer cette action.");
    this.name = "AccessDeniedError";
  }
}

export function getEditablePoles(member: Membership): Pole[] {
  if (!member.active) return [];
  return member.role === "admin" ? [...POLES] : [...member.poles];
}

export type UUID = string;

export const generateId = () => self.crypto.randomUUID();
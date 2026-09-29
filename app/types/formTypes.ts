export type IFormRules = Record<string, EFormRule[]>;

export enum EFormRule {
  REQUIRED = 'REQUIRED',
}

export type IFormErrors = Record<string, string[]>;

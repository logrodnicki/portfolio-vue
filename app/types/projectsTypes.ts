export interface IProject {
  name: string;
  subtitle?: string;
  description?: string;
  technologies: ITechnology[];
}

export interface ITechnology {
  name: string;
  logoUrl?: string;
}

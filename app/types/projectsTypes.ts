export interface IProject {
  name: string;
  subtitle?: string;
  description?: string;
  technologies: ITechnology[];
  link?: string;
}

export interface ITechnology {
  name: string;
  logoUrl?: string;
}

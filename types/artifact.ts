export interface IArtifact {
  id: number;
  name: string;
  levelList: number[];
  affixList: { [key: string]: string };
  icon: string;
  route: string;
  sortOrder: number;
  beta?: boolean;
}

interface ProjectNode {
  name: string;
  config: string;
}

interface DomainNode extends ProjectNode {
  resources: Record<string, ProjectNode>
  dataSources: Record<string, ProjectNode>
}

export interface DevMXJson {
  domains: Record<string, DomainNode>;
}

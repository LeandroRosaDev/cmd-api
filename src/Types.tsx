export type User = {
  id?: string;
  nome?: string;
  username?: string;
};

export type Conta = {
  autorizado: boolean;
  nome: any;
};

export type IUserContext = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

export type Produto = {
  id?: string;
  nome: string;
  nome_long: string;
  preco: string;
  categoria?: string;
  descricao?: string;
  altura?: string;
  largura?: string;
  profundidade_aberto?: string;
  profundidade_fechado?: string;
  assento?: string;
  encosto?: string;
  braco?: string;
  estrutura?: string;
  revestimento?: string;
  estoque?: number;
  usuario_id?: string;
  fotos?: any;
  img?: File[];
};

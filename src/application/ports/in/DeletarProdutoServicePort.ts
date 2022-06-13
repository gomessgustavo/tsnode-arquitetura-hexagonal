interface DeletarProdutoServicePort {
  deletar(produtoId: number): Promise<number>;
}

export default DeletarProdutoServicePort;

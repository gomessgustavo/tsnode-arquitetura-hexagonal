interface DeletarProdutoPort {
  deletar(produtoId: number): Promise<number>;
}

export default DeletarProdutoPort;

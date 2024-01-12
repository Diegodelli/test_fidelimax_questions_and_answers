export default function ButtonForm() {
  return (
    <div className="flex justify-around mt-7 gap-2">
      <button type="submit" className="btn-fake">
        Enviar Fake Post
      </button>
      <button type="submit" className="btn-error">
        Enviar Erro
      </button>
      <button type="submit" className="btn-success">
        Enviar Sucesso
      </button>
    </div>
  );
}

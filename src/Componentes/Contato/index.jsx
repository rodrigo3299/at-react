function Contato() {
  return (
    <section id="contact"> <br /> <br />
      <h1>Entre em Contato</h1>
      <form>
        <input type="text" placeholder="Nome" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Mensagem" />
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default Contato;
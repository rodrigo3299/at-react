function InformPessoas({ title, text, inform, img, items, topo, baixo }) {
  return (
      <div className="personal-info">
       
        <h1> {title}</h1>
        <h2> {topo}</h2>
        <h3> {text}</h3>
        <p> {inform}</p>
        <h3> {items}</h3>
        <p> {baixo}</p>
        <img src={img}/>
        </div>
  );
}

export default InformPessoas;

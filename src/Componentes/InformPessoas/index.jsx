function InformPessoas({ name, inform, text,img, }) {
  return (
      <div className="personal-info">
       
        <h1> {text}</h1>
        <h1> {name}</h1>
        <h3> {inform}</h3>
        <img src={img}/>
        </div>
  );
}

export default InformPessoas;

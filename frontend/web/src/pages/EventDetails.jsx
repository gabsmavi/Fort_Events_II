import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/events.css";

export default function EventDetails() {
  const { id } = useParams();
  const [evento, setEvento] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/eventos/${id}`)
      .then(res => res.json())
      .then(data => setEvento(data));
  }, [id]);

  if (!evento) {
    return <h2 style={{ textAlign: "center" }}>Carregando evento...</h2>;
  }

  return (
    <div className="event-details-container">

      <Link to="/" className="back-button">⬅ Voltar</Link>

      <div className="event-details-card">

        <img src={evento.imagem} alt={evento.nome} className="event-details-img" />

        <h1>{evento.nome}</h1>

        <p><strong>Local:</strong> {evento.local}</p>
        <p><strong>Data:</strong> {evento.data}</p>
        <p><strong>Horário:</strong> {evento.horario}</p>
        <p><strong>Preço:</strong> {evento.preco}</p>
        <p><strong>Contato:</strong> {evento.contato}</p>
        <p><strong>Categoria:</strong> {evento.categoria}</p>

        <h3>Descrição</h3>
        <p>{evento.descricao}</p>
      </div>
    </div>
  );
}

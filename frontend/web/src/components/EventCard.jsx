import { Link } from "react-router-dom";
import "../styles/events.css";

export default function EventCard({ evento }) {
  return (
    <Link to={`/evento/${evento.id}`} className="event-card">
      <img src={evento.imagem} alt={evento.nome} />

      <h2>{evento.nome}</h2>

      <p className="event-info">
        <strong>Preço:</strong> {evento.preco}
      </p>
      <p className="event-info">
        <strong>Data:</strong> {evento.data}
      </p>
      <p className="event-info">
        <strong>Horário:</strong> {evento.horario}
      </p>
    </Link>
  );
}

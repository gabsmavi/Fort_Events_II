import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/eventos")
      .then((res) => res.json())
      .then((data) => setEventos(data))
      .catch(() => console.log("Erro ao carregar eventos"));
  }, []);

  return (
    <div className="container">
      <h1>Eventos em Fortaleza</h1>

      <div className="grid">
        {eventos.map((evento) => (
          <Link key={evento.id} to={`/evento/${evento.id}`} className="card">
            <img src={evento.imagem} alt={evento.nome} />
            <h2>{evento.nome}</h2>
            <p>{evento.preco}</p>
            <p>{evento.data} — {evento.horario}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

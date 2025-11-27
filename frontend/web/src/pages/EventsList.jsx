import { useEffect, useState } from "react";
import EventCard from "../components/EventCard";
import "../styles/events.css";
import logo from "../assets/logo.png";

export default function EventsList() {
  const [eventos, setEventos] = useState([]);
  const [pagina, setPagina] = useState(1);
  const eventosPorPagina = 10;

  // ➤ ESTADO PARA FILTRO
  const [categoria, setCategoria] = useState("todas");

  useEffect(() => {
    fetch("http://localhost:3000/eventos")
      .then(res => res.json())
      .then(data => setEventos(data));
  }, []);

  // ➤ FILTRAR EVENTOS PELA CATEGORIA
  const eventosFiltrados =
    categoria === "todas"
      ? eventos
      : eventos.filter(ev => ev.categoria === categoria);

  // ➤ PAGINAÇÃO COM BASE NOS EVENTOS FILTRADOS
  const totalPaginas = Math.ceil(eventosFiltrados.length / eventosPorPagina);
  const inicio = (pagina - 1) * eventosPorPagina;
  const fim = inicio + eventosPorPagina;
  const eventosPagina = eventosFiltrados.slice(inicio, fim);

  return (
    <div className="events-container">

      {/* LOGO + TÍTULO */}
      <div className="title-row">
        <img src={logo} alt="FortEvents Logo" className="logo-img" />
        <h1>Eventos em Fortaleza</h1>
      </div>

   {/* FILTRO COM DROPDOWN */}
<div className="filtro-container">
  <select
    className="filtro-select"
    value={categoria}
    onChange={(e) => {
      setPagina(1); // volta para página 1 ao filtrar
      setCategoria(e.target.value);
    }}
  >
    <option value="todas">Todas as categorias</option>
    <option value="Cultura">Cultura</option>
    <option value="Feira">Feira</option>
    <option value="Música">Música</option>
    <option value="Esporte">Esporte</option>
  </select>
</div>

      {/* GRID DE EVENTOS */}
      <div className="events-grid">
        {eventosPagina.map(ev => (
          <EventCard key={ev.id} evento={ev} />
        ))}
      </div>

      {/* PAGINAÇÃO */}
      <div className="pagination">
        <button
          onClick={() => setPagina(pagina - 1)}
          disabled={pagina === 1}
        >
          ⬅ Página anterior
        </button>

        <span>Página {pagina} de {totalPaginas}</span>

        <button
          onClick={() => setPagina(pagina + 1)}
          disabled={pagina === totalPaginas}
        >
          Próxima página ➡
        </button>
      </div>

      {/* VOLTAR AO INÍCIO */}
      <button className="back-home" onClick={() => setPagina(1)}>
        ⬆ Voltar à primeira página
      </button>

    </div>
  );
}

// Cabecalho.tsx

import React from "react";

const Titulo = () => (
  <h1 className="text-2xl font-bold mb-1">React - Conceitos básicos</h1>
);

const SubTitulo = () => (
  <h2 className="text-4xl font-bold mb-6">Lista de tarefas</h2>
);

interface AddTarefaProps {
  onClick: () => void;
}

const AddTarefa: React.FC<AddTarefaProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="text-4xl font-bold mb-6"
  >
    Adicionar tarefa
  </button>
);

const Cabecalho: React.FC<{ onShowModal: () => void }> = ({ onShowModal }) => {
  return (
    <div className="text-center">
      <Titulo />
      <SubTitulo />
      <AddTarefa onClick={onShowModal} />
    </div>
  );
};

export default Cabecalho;
export { Titulo, SubTitulo };
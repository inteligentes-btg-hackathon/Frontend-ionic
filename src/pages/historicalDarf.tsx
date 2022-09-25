import MomentSelect from "../components/MomentSelect";
const HistoricalDarf: React.FC = () => {
  return (
    <>
      <MomentSelect
        items={[
          "Janeiro",
          "Fevereiro",
          "Março",
          "Abril",
          "Maio",
          "Junho",
          "Julho",
          "Agosto",
          "Setembro",
          "Outubro",
          "Novembro",
          "Dezembro",
        ]}
        title={"Ano"}
      />
    </>
  );
};

export default HistoricalDarf;

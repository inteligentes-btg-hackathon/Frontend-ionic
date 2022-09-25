import ListBox from "../components/lists/ListBox";

import { faShareNodes } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ListTabNavigator from "../components/ListTabNavigator";
import { IonContent, IonPage } from "@ionic/react";
import MomentSelect from "../components/MomentSelect";

const itemList = [
  {
    itemTitle: "Simulação 18#",
    itemSubtitle: "10/10/2022",
    itemIcon: <FontAwesomeIcon icon={faShareNodes} />,
  },
  {
    itemTitle: "Simulação 17#",
    itemSubtitle: "10/09/2022",
    itemIcon: <FontAwesomeIcon icon={faShareNodes} />,
  },
  {
    itemTitle: "Simulação 16#",
    itemSubtitle: "10/08/2022",
    itemIcon: <FontAwesomeIcon icon={faShareNodes} />,
  },
  {
    itemTitle: "Simulação 15#",
    itemSubtitle: "10/07/2022",
    itemIcon: <FontAwesomeIcon icon={faShareNodes} />,
  },
  {
    itemTitle: "Simulação 14#",
    itemSubtitle: "10/06/2022",
    itemIcon: <FontAwesomeIcon icon={faShareNodes} />,
  },
  {
    itemTitle: "Simulação 13#",
    itemSubtitle: "10/05/2022",
    itemIcon: <FontAwesomeIcon icon={faShareNodes} />,
  },
  {
    itemTitle: "Simulação 12#",
    itemSubtitle: "10/04/2022",
    itemIcon: <FontAwesomeIcon icon={faShareNodes} />,
  },
  {
    itemTitle: "Simulação 11#",
    itemSubtitle: "10/03/2022",
    itemIcon: <FontAwesomeIcon icon={faShareNodes} />,
  },
];

const PendingTaxes: React.FC = () => {
  return (
    <IonPage>
      {/* <IonContent> */}
      <div>
        <MomentSelect
          title="Ano"
          items={["2020", "2021", "2022"]}
        ></MomentSelect>
      </div>
      <ListTabNavigator
        buttonList={[
          { text: "my text", onClickHandler: () => {} },
          { text: "my text", onClickHandler: () => {} },
          { text: "my text", onClickHandler: () => {} },
          { text: "my text", onClickHandler: () => {} },
        ]}
      />
      <ListBox items={itemList} />

      {/* </IonContent> */}
    </IonPage>
  );
};

export default PendingTaxes;

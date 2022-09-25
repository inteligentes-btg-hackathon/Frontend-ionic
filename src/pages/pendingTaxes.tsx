import ListBox from "../components/lists/ListBox";

import { faFileInvoiceDollar } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ListTabNavigator from "../components/ListTabNavigator";
import { IonContent, IonPage } from "@ionic/react";
import MomentSelect from "../components/MomentSelect";
import NavHeaderDefault from "../components/headers/NavHeaderDefault";
import FacilitaBtgBlock from "../components/FacilitaBtgBlock";

const itemList = [
  {
    itemTitle: "Simulação 18#",
    itemSubtitle: "10/10/2022",
    itemIcon: <FontAwesomeIcon icon={faFileInvoiceDollar} />,
  },
  {
    itemTitle: "Simulação 17#",
    itemSubtitle: "10/09/2022",
    itemIcon: <FontAwesomeIcon icon={faFileInvoiceDollar} />,
  },
  {
    itemTitle: "Simulação 16#",
    itemSubtitle: "10/08/2022",
    itemIcon: <FontAwesomeIcon icon={faFileInvoiceDollar} />,
  },
  {
    itemTitle: "Simulação 15#",
    itemSubtitle: "10/07/2022",
    itemIcon: <FontAwesomeIcon icon={faFileInvoiceDollar} />,
  },
  {
    itemTitle: "Simulação 14#",
    itemSubtitle: "10/06/2022",
    itemIcon: <FontAwesomeIcon icon={faFileInvoiceDollar} />,
  },
  {
    itemTitle: "Simulação 13#",
    itemSubtitle: "10/05/2022",
    itemIcon: <FontAwesomeIcon icon={faFileInvoiceDollar} />,
  },
  {
    itemTitle: "Simulação 12#",
    itemSubtitle: "10/04/2022",
    itemIcon: <FontAwesomeIcon icon={faFileInvoiceDollar} />,
  },
  {
    itemTitle: "Simulação 11#",
    itemSubtitle: "10/03/2022",
    itemIcon: <FontAwesomeIcon icon={faFileInvoiceDollar} />,
  },
];

const PendingTaxes: React.FC = () => {
  return (
    <IonPage>
      <NavHeaderDefault
        leftArrowClickHandler={() => {
          alert("left click");
        }}
        closeIconClickHandler={() => {
          alert("close-click");
        }}
        showCloseButton
        showLeftArrow
      />
      <div>
        <FacilitaBtgBlock />
      </div>
      <ListTabNavigator
        buttonList={[{ text: "Tributos Pendentes", onClickHandler: () => {} }]}
      />
      <ListBox items={itemList} />

      {/* </IonContent> */}
    </IonPage>
  );
};

export default PendingTaxes;

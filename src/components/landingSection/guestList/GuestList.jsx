import "./guestList.scss";
import { CardLeft } from "../../cards/landingCards/CardLeft";
import { CardMiddle } from "../../cards/landingCards/CardMiddle";
import { CardRight } from "../../cards/landingCards/CardRight";
import {
  cardHostData,
  cardGuestDataOne,
  cardGuestDataTwo,
} from "../../../data/landingData";

export function GuestList() {
  return (
    <>
      <section className="guest-list-container">
        <CardLeft
          position={cardHostData.position}
          name={cardHostData.name}
          bio={cardHostData.bio}
        />
        <CardMiddle
          position={cardGuestDataOne.position}
          name={cardGuestDataOne.name}
          bio={cardGuestDataOne.bio}
        />
        <CardRight
          position={cardGuestDataTwo.position}
          name={cardGuestDataTwo.name}
          bio={cardGuestDataTwo.bio}
        />
      </section>
    </>
  );
}

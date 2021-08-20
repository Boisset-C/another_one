import "./guestList.scss";
import { CardLeft } from "../../../../components/cards/landingCards/guestlist/CardLeft";
import { CardMiddle } from "../../../../components/cards/landingCards/guestlist/CardMiddle";
import { CardRight } from "../../../../components/cards/landingCards/guestlist/CardRight";
import {
  cardHostData,
  cardGuestDataOne,
  cardGuestDataTwo,
} from "../../../../data/landingData";

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
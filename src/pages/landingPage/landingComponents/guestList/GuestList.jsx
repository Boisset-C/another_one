import "./guestList.scss";
import { GuestListCard } from "../../../../components/cards/landingCards/guestList/GuestListCard";

import {
  cardHostData,
  cardGuestDataOne,
  cardGuestDataTwo,
} from "../../../../data/landingData";

export function GuestList() {
  return (
    <>
      <section className="guest-list-container">
        <GuestListCard
          position={cardHostData.position}
          name={cardHostData.name}
          bio={cardHostData.bio}
          image={cardHostData.image}
        />
        <GuestListCard
          position={cardGuestDataOne.position}
          name={cardGuestDataOne.name}
          bio={cardGuestDataOne.bio}
          image={cardGuestDataOne.image}
        />
        <GuestListCard
          position={cardGuestDataTwo.position}
          name={cardGuestDataTwo.name}
          bio={cardGuestDataTwo.bio}
          image={cardGuestDataTwo.image}
        />
      </section>
    </>
  );
}

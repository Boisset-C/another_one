import "./eventContainer.scss";
import { TestCard } from "../../../components/cards/guest/TestCard";
import { useWindowSize } from "../../../hooks/useWindowSize";
import {
  firstEventGuestOne,
  firstEventGuestTwo,
  secondEventGuestOne,
  secondEventGuestTwo,
} from "../../../data/EventPageData";

export function EventContainer(props) {
  const { isMobile } = useWindowSize();
  return (
    <div className="event-test-card-container">
      <div className="event-wrapper">
        {isMobile ? null : <h4 className="guest-test">Guests:</h4>}

        <div className="card-one-test">
          <div>
            <h5 className="event-test-card-title">{props.titleOne}</h5>
            <p className="event-test-card-description">
              {props.descriptionOne}
            </p>
            <p className="event-test-card-time">{props.dateOne}</p>
          </div>

          {isMobile ? <h4 className="guest-test">Guests:</h4> : null}

          <TestCard
            image={firstEventGuestOne.image}
            name={firstEventGuestOne.name}
            bio={firstEventGuestOne.bio}
          />

          <TestCard
            image={firstEventGuestTwo.image}
            name={firstEventGuestTwo.name}
            bio={firstEventGuestTwo.bio}
          />
        </div>
      </div>

      <div className="event-wrapper">
        {isMobile ? null : <h4 className="guest-test">Guests:</h4>}

        <div className="card-one-test">
          <div className="event-test-text">
            <h5 className="event-test-card-title">{props.titleTwo}</h5>
            <p className="event-test-card-description">
              {props.descriptionTwo}
            </p>
            <p className="event-test-card-time">{props.dateTwo}</p>
          </div>

          {isMobile ? <h4 className="guest-test">Guests:</h4> : null}
          <TestCard
            image={secondEventGuestOne.image}
            name={secondEventGuestOne.name}
            bio={secondEventGuestOne.bio}
          />

          <TestCard
            image={secondEventGuestTwo.image}
            name={secondEventGuestTwo.name}
            bio={secondEventGuestTwo.bio}
          />
        </div>
      </div>
    </div>
  );
}

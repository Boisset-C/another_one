import "./testCard.scss";

export function TestCard(props) {
  return (
    <div className="box-search">
      <div className="thumbnail">
        <img className="test" src={props.image} alt="" />
        <div className="caption">
          <h5 className="test-name">{props.name}</h5>
          <p className="test-text">{props.bio}</p>
        </div>
      </div>
    </div>
  );
}

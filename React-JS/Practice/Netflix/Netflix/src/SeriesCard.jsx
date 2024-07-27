function SeriesCard(props) {
const{img_url,name,genere,id} = props.data;
  return (
    <li>
      <div>
        <img
          src={img_url}
          alt={img_url}
          style={{ width: "200px", height: "200px" }}
        />
      </div>
      <h3>{name}</h3>
      <h5>{genere}</h5>
    </li>
  );
}

export default SeriesCard;

const Restaurant = () => {
  return (
    <div className="res-details">
      <div className="res-info">
        <div className="res-info-detailed">
          <ul>
            <li className="res-title">Restaurant Name</li>
            <li className="res-cuisines">Cuisines</li>
            <li className="res-add">Address</li>
            <li className="res-dis">Discount</li>
          </ul>
        </div>
        <div className="ratings">
          <div className="stars">
            4.2 <span className="fa fa-star checked"></span>
          </div>
          <div className="rat-no">11k+</div>
        </div>
      </div>
      <div className="res-deals">Hot Deals</div>
      <div className="res-menu">
        <ul>
          <li>Rice</li>
          <li>Chicken</li>
          <li>Egg</li>
          <li>Roti</li>
          <li>Dal</li>
        </ul>
      </div>
    </div>
  );
};

export default Restaurant;

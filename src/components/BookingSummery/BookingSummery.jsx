import './styles.css';

const BookingSummery = () => (
  <div className="summery__container">
    <h2>Booking Summery</h2>
    <div className="summary__view">
      <img className="summery__image" src="https://tse4.mm.bing.net/th?id=OIP.h-R1e474we3Kw27WDmz-zwHaEK&pid=Api&P=0" alt="img-b" />
      <div>
        <h3>Sea View Hotel</h3>
        <p>Mina Road, Bur Dubai, Dubai</p>
      </div>
    </div>
    <hr className="summery__hr" />
    <div className="summery__dates">
      <div className="summery__dates-item">
        <p>Check In</p>
        <span>
          Tue, 18 Sep 2019
        </span>
      </div>
      <div className="summery__dates-item summery__left">
        <p>Check Out</p>
        <span>
          Fri, 21 Sep 2019
        </span>
      </div>
      <div className="summery__dates-item">
        <p>Check In Time</p>
        <span>
          2.00 Pm
        </span>
      </div>
      <div className="summery__dates-item summery__left">
        <p>Check Out Time</p>
        <span>
          12.00 Pm
        </span>
      </div>
    </div>
    <hr className="summery__hr" />
    <div className="summery__edit">
      <p>2 Guest, 1 Deluxe Room, 3 Night </p>
      <button className="summeery__btn" type="button">Edit</button>
    </div>
    <hr className="summery__hr" />
    <div>
      <h3>Payment Details</h3>
      <p className="summery__details">Base Price <span>$2510</span></p>
      <p className="summery__details">Promo Discount <span>-$250</span></p>
      <p className="summery__details">Tax & ServiceFees <span>+$150</span></p>
      <hr className="summery__hr" />
      <p className="summery__details">Payable Amount <span className="summery__total">$2410</span></p>
    </div>
  </div>
);

export default BookingSummery;

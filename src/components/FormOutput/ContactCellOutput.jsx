import mail from "../../assets/mail.svg";
import phone from "../../assets/phone.svg";
import maps from "../../assets/maps.svg";
import safari from "../../assets/safari.svg";

function ContactCellOutput({ email, phoneNumber, location, website }) {
  return (
    <div className="contactBlock">
      <div>
        <img src={mail} alt="" />
        {email}
      </div>

      <div>
        <img src={phone} alt="" />
        {phoneNumber}
      </div>

      <div>
        <img src={maps} alt="" />
        {location}
      </div>

      <div>
        <img src={safari} alt="" />
        {website}
      </div>
    </div>
  );
}

export default ContactCellOutput;

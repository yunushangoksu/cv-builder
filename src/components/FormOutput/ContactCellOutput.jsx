import mail from "../../assets/mail.svg";
import phone from "../../assets/phone.svg";
import maps from "../../assets/maps.svg";
import safari from "../../assets/safari.svg";

function ContactCellOutput() {
  return (
    <div className="contactBlock">
      <div>
        <img src={mail} alt="" />
        yunushangoksu@gmail.com
      </div>

      <div>
        <img src={phone} alt="" />
        531 632 33 93
      </div>

      <div>
        <img src={maps} alt="" />
        Istanbul, Turkey
      </div>

      <div>
        <img src={safari} alt="" />
        yunushan.com
      </div>
    </div>
  );
}

export default ContactCellOutput;

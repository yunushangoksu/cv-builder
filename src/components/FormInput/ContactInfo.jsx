import { useCallback } from "react";

function ContactInfo({ setEmail, setPhoneNumber, setLocation, setWebsite }) {
  const handleEmailInputChange = useCallback(
    (event) => {
      setEmail(event.target.value);
    },
    [setEmail]
  );
  const handlePhoneInputChange = useCallback(
    (event) => {
      setPhoneNumber(event.target.value);
    },
    [setPhoneNumber]
  );
  const handleLocationInputChange = useCallback(
    (event) => {
      setLocation(event.target.value);
    },
    [setLocation]
  );
  const handleWebsiteInputChange = useCallback(
    (event) => {
      setWebsite(event.target.value);
    },
    [setWebsite]
  );

  return (
    <div className="inputBlock">
      <h1>İletişim Bilgileri</h1>
      <label htmlFor="email">Email</label>
      <input type="text" name="input-email" onChange={handleEmailInputChange} />
      <label htmlFor="input-phoneNumber">Telefon Numarası</label>
      <input
        type="text"
        name="input-phoneNumber"
        onChange={handlePhoneInputChange}
      />
      <label htmlFor="input-location">Konum</label>
      <input
        type="text"
        name="input-location"
        onChange={handleLocationInputChange}
      />
      <label htmlFor="input-website">Website</label>
      <input
        type="text"
        name="input-website"
        onChange={handleWebsiteInputChange}
      />
    </div>
  );
}

export default ContactInfo;

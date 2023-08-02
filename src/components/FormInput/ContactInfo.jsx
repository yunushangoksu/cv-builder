function ContactInfo() {
  return (
    <div className="inputBlock">
      <h1>İletişim Bilgileri</h1>
      <label htmlFor="email">Email</label>
      <input type="text" name="input-email" />
      <label htmlFor="input-phoneNumber">Telefon Numarası</label>
      <input type="text" name="input-phoneNumber" />
      <label htmlFor="input-location">Konum</label>
      <input type="text" name="input-location" />
      <label htmlFor="input-website">Website</label>
      <input type="text" name="input-website" />
    </div>
  );
}

export default ContactInfo;

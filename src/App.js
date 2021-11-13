import './App.css';


const closeModal = (e) => {
  e.stopPropagation();
  e.nativeEvent.stopImmediatePropagation();
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}


const openModal = (e) => {
  e.stopPropagation();
  e.nativeEvent.stopImmediatePropagation();
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
}

const number = "79534016779"
const email = "osago_kasko@internet.ru"
const telegramName = "OsagoKaskoAll"

function App() {
  return (
    <div className="App">
      <div className="header">
        <span>ОСАГО КАСКО</span>
      </div>
      {/* <div className='about'  id="myBtn" onClick={openModal}>
        Подробнее
      </div> */}
      <div className='main'>
        <span>Рассчитать стоимость!</span>
        <span>напишите нам:</span>
        <div className="tel-on-button">
          <a target="_blank"
            href={"https://wa.me/" + number + "?text=Здравствуйте!"} rel="noreferrer"
            className="sppb-btn sppb-btn-primary sppb-btn-lg  sppb-text-center" role="button">
            <i className="fab fa-whatsapp"></i>
            WHATSAPP
          </a>
        </div>
        <div className="tel-on-button">
          <a href={"tg://resolve?domain=" + telegramName}
            className="sppb-btn sppb-btn-primary sppb-btn-lg  sppb-text-center" style={{ background: '#5959ff' }} role="button">
            <i className="fab fa-telegram"></i>
            Telegram
          </a>
        </div>
        <div className="tel-on-button">
          <a href={"viber://chat?number=%2B" + number}
            className="sppb-btn sppb-btn-primary sppb-btn-lg  sppb-text-center" style={{ background: '#4c6ef5' }} role="button">
            <i className="fab fa-viber"></i>
            Viber
          </a>
        </div>
        <div className="tel-on-button">
          <a href={"mailto:" + email + "?subject=ОСАГО&body=Description"}
            className="sppb-btn sppb-btn-primary sppb-btn-lg  sppb-text-center" style={{ background: '#b33a00' }} role="button">
            <i className="fas fa-envelope-open-text"></i>
            Задавайте вопросы по электронной почте
          </a>
        </div>
      </div>
      <div id="myModal" className="modal" onClick={closeModal}>

        <div className="modal-content" >
          <span className="close" onClick={closeModal}>&times;</span>
          <p>Some text in the Modal..</p>
        </div>

      </div>

    </div>
  );
}

export default App;

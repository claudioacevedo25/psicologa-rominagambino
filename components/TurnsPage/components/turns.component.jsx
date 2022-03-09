
import style from '../turns.module.css';

const TurnsPage = () => {
  return(
      <div
        className={style.container}
      >
        <iframe 
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23F6BF26&ctz=America%2FArgentina%2FCordoba&showCalendars=1&src=ZW4uc2Vzc2lvbjIxQGdtYWlsLmNvbQ&src=ZXMuYXIjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%230B8043" 
            style={{border: '1px solid #777'}} 
            width="1000" 
            height="600" 
            frameBorder={0}
            scrolling="no">
        </iframe>
      </div>
  )
}

export default TurnsPage;
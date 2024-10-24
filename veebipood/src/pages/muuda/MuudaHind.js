import React , {useRef} from 'react'
import { useParams , Link } from 'react-router-dom' // koik mis on URL seotud on react router dom
import hinnadJSON from "../../data/hinnad.json"

function MuudaHind() {
    const {ix} = useParams(); // url j2rjekorranumbri v6tmine
    const leitud = hinnadJSON[ix];
    const hindRef = useRef();

    const muuda = () => {
      hinnadJSON[ix] = {
      "number": Number(hindRef.current.value),
      "lisaja": "Malle"
    };
    }

    // ["BMW", "Volvo", "Saab"][1]; -->     x ----> "Volvo"

    if (leitud === undefined) {
        return <div>Not found</div>
    }

  return (
    <div>
        <label >Hind</label><br />
        <input ref={hindRef} defaultValue={leitud.number} /><br />
        <Link to="/halda-hinnad">
        <button onClick={muuda}>Muuda</button>
        </Link>
    </div>
  )
}

export default MuudaHind
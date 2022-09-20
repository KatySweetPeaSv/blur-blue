import Item from "./Item"
import {Productos} from "./Things"

const ItContain = () => {
  return (
	<div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 ">
	  <Item Links={Productos} title="Productos"/>
	</div>
  )
}

export default ItContain

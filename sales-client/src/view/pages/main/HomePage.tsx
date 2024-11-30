import { useEffect } from "react"
import { useAppContext } from "../../../context/AppContext"
import { AppContextIn } from "../../../Interface/AppIn"
import { useAuth } from "../../../context/AuthContext"
import { AuthContextIn } from "../../../Interface/AuthIn"

function HomePage() {

  const {setTitle} = useAppContext() as AppContextIn
  const {user} = useAuth() as AuthContextIn

  useEffect(() => {
    setTitle("Inicio del Sistema")
    console.log(user)
  }, [])

  return (
    <div className='main-con'>
      
    </div>
  )
}

export default HomePage
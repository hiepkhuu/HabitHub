import React , {useEffect} from 'react'



const colorCircle = () =>{

  useEffect(() => {
  const colorCircle = document.getElementById('color-circle');
  colorCircle.style.backgroundColor =
  }, [])

  return (
    <div id='color-circle' >o</div>
  )
}

export default colorCircle

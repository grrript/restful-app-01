import { useEffect, useState } from 'react'
import axios from 'axios'

const Test = () => {
  const [person, setPerson] = useState({})

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get('http://localhost:9000/test')
        console.log('response: ', response)
        const { data } = response
        setPerson(data)
      } catch (err) {
        console.log(err)
      }
    }
    fetch()
  }, [])

  console.log('person: ', person)

  const { name } = person
  if (name) {
    return (
      <div>
        {person.id}: {person.name}
      </div>
    )
  }

  return <>loading person...</>
}

export default Test

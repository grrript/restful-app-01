import { useEffect, useState } from 'react'
import axios from 'axios'

const List = () => {
  const [list, setList] = useState([])

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get('http://localhost:9000/list')
        console.log('response: ', response)
        const { data } = response
        setList(data)
      } catch (err) {
        console.log(err)
      }
    }
    fetch()
  }, [])

  console.log('list: ', list)

  // const { data } = list
  // console.log('data ccc: ', data)

  if (list) {
    return list.map((item) => {
      return (
        <div key={item.uuid}>
          <div>{item.name}</div>
        </div>
      )
    })
  }

  return <>loading list...</>
}

export default List

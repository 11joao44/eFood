import axios from 'axios'
import { useEffect, useState } from 'react'

export function useAPI<T = unknown>(url: string) {
  const [data, setData] = useState<T | null>(null)

  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data)
    })
  }, [url])

  return { data }
}

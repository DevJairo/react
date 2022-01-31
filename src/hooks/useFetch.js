import { useState, useEffect } from "react"
const useFetch = (method) => {
    
    const [listData, setListData] = useState([])
	const [detailData, setDetailData] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    const handleData = async (method, id, props) => {
        setIsLoading(true)
        const dataResult = await method(id, props)
        setIsLoading(false)
        if (dataResult.ok) {
            let response = await dataResult.json()
            if(id) {
            	setDetailData(response)
                return response
            } else {
                setListData(response)
                return response
            }
        }
    }

	useEffect(() => {
		handleData(method)
	}, [])
    
    return { listData, detailData, isLoading, setListData, handleData}
}

export default useFetch

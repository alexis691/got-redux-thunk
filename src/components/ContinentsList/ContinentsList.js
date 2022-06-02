import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchContinents } from '../../actions'

const ContinentsList = ({fetchContinents, continents}) => {

    useEffect(() => {
      fetchContinents();
    }, [])
    

    return (
        <>
            {continents.map(item => {
                return(
                    <div className='container p-6' key={item.id}>
                        <div className='grid grid-cols-3'>
                            <a href="#" className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">{item.name}</p>
                            </a>   
                        </div>
                    </div>
                )
            })}
        </>
    )
}

const mapStateToProps = (state) => {
    //console.log(state)
    return{
        continents: state.continents,
    }
}

export default connect(mapStateToProps, {
    fetchContinents
})(ContinentsList)
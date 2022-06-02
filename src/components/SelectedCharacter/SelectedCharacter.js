import React from 'react'
import { connect } from 'react-redux'

const SelectedCharacter = ({characterSelected}) => {

  return (
      <>
        {characterSelected.length === 0 && <h1 className='text-xl text-center'>Select a character to show more information</h1>}
        {characterSelected.map(item => {
            return(
                <article className="flex p-6 font-mono border border-teal-400" key={item.id} >
                    <div className="flex-none w-48 mb-10 relative z-10 before:absolute before:top-1 before:left-1 before:w-full before:h-full before:bg-teal-400">
                        <img src={item.imageUrl} alt={item.fullName} 
                        className="absolute z-10 inset-0 w-full h-full object-cover bg-center rounded-lg" 
                        loading="lazy" />
                    </div>
                    <div className="flex-auto pl-6">
                        <div className="relative flex flex-wrap items-baseline pb-6 before:bg-black before:absolute before:-top-6 before:bottom-0 before:-left-60 before:-right-6">
                            <h1 className="relative w-full flex-none mb-2 text-2xl font-semibold text-white">
                                {item.firstName}
                            </h1>
                            <div className="relative uppercase text-teal-400 ml-3">
                                Family: {item.family}
                            </div>
                        </div>

                        <div className="flex items-baseline flex-col my-6">
                            <div className="space-x-3 flex text-lg font-medium">
                                <div className="relative w-50 h-10 flex items-center justify-center text-black peer-checked:bg-black peer-checked:text-white before:absolute before:z-[-1] before:top-0.5 before:left-0.5 before:w-full before:h-full ">
                                    {item.fullName}
                                </div>
                            </div>
                            <div className="space-x-3 flex text-sm font-medium">
                                <div className="relative w-50 h-10 flex items-center justify-center text-black peer-checked:bg-black peer-checked:text-white before:absolute before:z-[-1] before:top-0.5 before:left-0.5 before:w-full before:h-full ">
                                    {item.title}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </article>
            )
        })}
      </>
  )
}

const mapStateToProps = (state) => {
    return{
        characterSelected: state.character
    }
}

export default connect(mapStateToProps,{})(SelectedCharacter)
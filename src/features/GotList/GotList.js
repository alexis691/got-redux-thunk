import React from 'react'
import CharacterList from '../../components/CharacterList/CharacterList'
import SelectedCharacter from '../../components/SelectedCharacter/SelectedCharacter'

const GotList = () => {
    return (
        <>
            <div className="container mx-auto mt-5 bg-gray-100 p-2">
                <div className='flex flex-row'>
                    <section className='w-full'>
                        <main className='rounded-md mb-1 p-2'>
                            <header className='rounded-md bg-white space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6'>
                                <div className='flex items-center justify-between'>
                                    <h1 className='font-semibold text-slate-800'>Games of thrones - Character List</h1>
                                </div>
                            </header>
                        </main>
                        <section className='p-2 mb-4'>
                            <div className='w-full relative bg-blue-100 rounded-xl shadow-xl ring-1 ring-slate-900/5 divide-y divide-slate-100 my-auto xl:mt-18 dark:bg-slate-800 dark:divide-slate-200/5 dark:highlight-white/10 p-6'>
                                <SelectedCharacter/>
                            </div>
                        </section>
                        <section className='p-2 mb-4'>
                            <div className='w-full relative bg-white rounded-xl shadow-xl ring-1 ring-slate-900/5 divide-y divide-slate-100 my-auto xl:mt-18 dark:bg-slate-800 dark:divide-slate-200/5 dark:highlight-white/10'>
                                <CharacterList/>
                            </div>
                        </section>
                    </section>
                </div>
            </div>
        </>
    )
}

export default GotList

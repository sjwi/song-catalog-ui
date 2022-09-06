import LoadingSongs from 'js/components/loading/LoadingSongs'
import LoadingSets from 'js/components/loading/LoadingSets'
import React, { Component, useEffect, useState } from 'react'
import SetList from 'js/components/sets/SetList'
import SongList from 'js/components/songs/SongList'
import AddButton from 'js/components/buttons/AddButton'
import { getSongs } from 'js/clients/SongClient'
import { getSets } from 'js/clients/SetClient'
import { useQuery } from 'react-query'
import CreateItem from 'js/flyouts/CreateItem'

export default function Home(props){
  const { data: songs, status: songStatus, isFetching: areSongsFetching } = useQuery('songs', getSongs, {refetchOnWindowFocus: false});
  const { data: sets, status: setsStatus, isFetching: areSetsFetching } = useQuery('sets', getSets, {refetchOnWindowFocus: false});

  const [ openCreateItem, setOpenCreateItem ] = useState(false);

  useEffect(() => {
    document.title = props.title;
  })

  /*
    Example of 'invalidating' the songs to be reloaded
    const mutation = useMutation(postTodo, {
      onSuccess: () => {
        queryClient.invalidateQueries('songs');
      }
    })
  */
  return (
    <div className="flex overflow-x-auto snap-x snap-mandatory min-w-screen">
      <div className="flex min-w-screen snap-start bg-white overflow-y-scroll max-h-screen scrollbar-hide fade-container py-14" onScroll={props.listenScrollEvent} id="songPage">
        {areSongsFetching && <LoadingSongs/>}
        {!areSongsFetching  && <SongList songs={songs}/>}
      </div>
      <div className="flex min-w-screen snap-start bg-grey-200 overflow-y-scroll max-h-screen scrollbar-hide fade-container py-14" onScroll={props.listenScrollEvent} id="setPage">
        {areSetsFetching || areSongsFetching && <LoadingSets/>}
        {!areSetsFetching && !areSongsFetching && <SetList sets={sets} songs={songs}/>}
      </div>
      <AddButton bg="bg-blue" className="z-50" openCreateItem={openCreateItem} setOpenCreateItem={setOpenCreateItem} />
      <CreateItem className="z-60" openCreateItem={openCreateItem} setOpenCreateItem={setOpenCreateItem} />
    </div>
  )
}

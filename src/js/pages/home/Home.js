import LoadingSongs from 'js/components/loading/LoadingSongs'
import LoadingSets from 'js/components/loading/LoadingSets'
import React, { useEffect, useState } from 'react'
import SetList from 'js/components/sets/SetList'
import SongList from 'js/components/songs/SongList'
import AddButton from 'js/components/buttons/AddButton'
import { getSongs } from 'js/clients/SongClient'
import { getSets } from 'js/clients/SetClient'
import { useQuery } from 'react-query'
import CreateItem from 'js/flyouts/CreateItem'
import { HEADER_HEIGHT, SCROLL_DOWN } from 'js/App'


export default function Home(props){
  const { data: songs, status: songStatus, isFetching: areSongsFetching } = useQuery('songs', getSongs, {refetchOnWindowFocus: false});
  const { data: sets, status: setsStatus, isFetching: areSetsFetching } = useQuery('sets', getSets, {refetchOnWindowFocus: false});

  const [ openCreateItem, setOpenCreateItem ] = useState(false);

  useEffect(() => {
    document.title = props.title;
  },[])

  /*
    Example of 'invalidating' the songs to be reloaded
    const mutation = useMutation(postTodo, {
      onSuccess: () => {
        queryClient.invalidateQueries('songs');
      }
    })
  */
  var scrollHistory = {
  }
  const positionRef = React.useRef(0);
  const LEFT = "left";
  const RIGHT = "right";
  const dirRef = React.useRef(LEFT);
  const histRef = React.useRef({});

  const handleHorizontalScroll = (e) => {
    const x = e.currentTarget.scrollLeft;
    if (x > positionRef.current) {
      if (dirRef.current != RIGHT) {
        dirRef.current = RIGHT;
        histRef.current[LEFT] = window.pageYOffset;
        window.scrollTo(0, histRef.current[RIGHT]);
        console.log(histRef.current)
      }
      if (window.pageYOffset > HEADER_HEIGHT) {
        props.setScrollPos(SCROLL_DOWN)
      }
    } else if (x < positionRef.current) {
      if (dirRef.current != LEFT) {
        dirRef.current = LEFT;
        histRef.current[RIGHT] = window.pageYOffset;
        window.scrollTo(0, histRef.current[LEFT]);
        console.log(histRef.current)
      }
    }
    positionRef.current = x;
  };
  return (
    <div className="flex overflow-x-auto snap-x snap-mandatory min-w-screen" onScroll={handleHorizontalScroll}>
      <div id="homeSongs" className="flex min-w-screen snap-start bg-white scrollbar-hide min-h-screen py-14">
        {areSongsFetching && <LoadingSongs/>}
        {!areSongsFetching  && <SongList songs={songs}/>}
      </div>
      <div id="homeSets" className="flex min-w-screen snap-start bg-grey-300 scrollbar-hide min-h-screen h-fit py-14" onScroll={props.listenScrollEvent}>
        {areSetsFetching || areSongsFetching && <LoadingSets/>}
        {!areSetsFetching && !areSongsFetching && <SetList sets={sets} songs={songs}/>}
      </div>
      <AddButton bg="bg-blue" className="z-50" openCreateItem={openCreateItem} setOpenCreateItem={setOpenCreateItem} />
      <CreateItem className="z-60" openCreateItem={openCreateItem} setOpenCreateItem={setOpenCreateItem} />
    </div>
  )
}

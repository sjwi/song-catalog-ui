import React from 'react'
import { useQuery } from 'react-query'
import { getSet } from 'js/clients/SetClient'
import { getSongs } from 'js/clients/SongClient'
import { useParams } from 'react-router-dom'
import LoadingSet from 'js/components/loading/LoadingSet'
import Set from 'js/components/sets/Set'

function SetList(props) {
  const {id} = useParams()
  const { data: set, status: setStatus, isFetching: isSetFetching } = useQuery('set', () => getSet(id), {refetchOnWindowFocus: false});
  const { data: songs, status: songStatus, isFetching: areSongsFetching } = useQuery('songs', getSongs, {refetchOnWindowFocus: false});
  return (
    <div id="setList" className="h-screen overflow-y-scroll" onScroll={props.listenScrollEvent}>
      {isSetFetching || areSongsFetching &&
        <LoadingSet />
      }
      {!isSetFetching && !areSongsFetching &&
        <Set set={set} songs={songs}></Set>
      }
    </div>
  )
}

export default SetList
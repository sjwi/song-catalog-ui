import React, { useEffect } from 'react'
import { useQuery } from 'react-query'
import { getSet } from 'js/clients/SetClient'
import { getSongs } from 'js/clients/SongClient'
import { useLocation } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import LoadingSet from 'js/components/loading/LoadingSet'
import Set from 'js/components/sets/Set'

function SetList(props) {
  const {id} = useParams()
  const { state } = useLocation();
  let { songsCache } = state || {};

  const { data: set, status: setStatus, isFetching: isSetFetching } = useQuery('set', () => getSet(id), {refetchOnWindowFocus: false});
  const { data: songs, status: songStatus, isFetching: areSongsFetching } = useQuery('songs', getSongs,
    {
      refetchOnWindowFocus: false,
      initialData: () => {
        if (songsCache != undefined)
          return songsCache
      },
    }
    );

  return (
    <div id="setList" className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth" onScroll={props.listenScrollEvent}>
      {isSetFetching || songs === undefined &&
        <LoadingSet />
      }
      {!isSetFetching && songs != undefined &&
        <Set set={set} songs={songs}></Set>
      }
    </div>
  )
}

export default SetList;
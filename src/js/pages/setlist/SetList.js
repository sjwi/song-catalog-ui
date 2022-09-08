import React, { useEffect } from 'react'
import { useQuery } from 'react-query'
import { getSet } from 'js/clients/SetClient'
import { getSongs } from 'js/clients/SongClient'
import { useLocation } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import LoadingSet from 'js/components/loading/LoadingSet'
import Set from 'js/components/sets/Set'
import { SCROLL_UP } from 'js/App'
import { SCROLL_DOWN } from 'js/App'

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
  
  useEffect(() => {
    props.setStickyNav(false);
  },[])

  return (
    <div id="setList" className="scroll-smooth">
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
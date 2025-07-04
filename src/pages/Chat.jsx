import React, { useContext } from 'react'
import { dataContext, prevUser } from '../context/UserContext'

function Chat() {
  let { input, setInput, showResult, setShowResult, feature, setFeature, prevFeature, setPrevFeature, genImageUrl, setGenImageUrl } = useContext(dataContext)
  return (
    <div className='chat-page'>
      <div className="user">

        {prevFeature == "upImg" ? <><img src={prevUser.imgUrl} alt="" />
          <span>{prevUser.prompt}</span></> : <span>{prevUser.prompt}</span>}
      </div>
      <div className="ai">
        {prevFeature == "genImg" ?
          <>
            {!genImageUrl ?
              <span>Generating Image...</span>
              :
              <img src={genImageUrl} alt='' />}
          </>
          :
          !showResult ?
            <span>Loading...</span>
            :
            <span>{showResult}</span>}
      </div>
    </div>
  )
}

export default Chat
import React, { useContext } from 'react'
import "../App.css"
import { RiImageAiLine } from "react-icons/ri";
import { RiImageAddFill } from "react-icons/ri";
import { MdOutlineChatBubbleOutline } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { FaArrowUpLong } from "react-icons/fa6";
import { dataContext, prevUser, user } from '../context/UserContext';
import Chat from './Chat';
import { genResponse } from '../../gemini';
import { query } from '../unsplashService';


function Home() {
    let { startRes, setStartRes, popUp, setPopUp, input, setInput, feature, setFeature, showResult, setShowResult, prevFeature, setPrevFeature, genImageUrl, setGenImageUrl } = useContext(dataContext)
    async function handleSubmit(e) {
        setStartRes(true)
        setPrevFeature(feature)
        setShowResult("")
        prevUser.data = user.data;
        prevUser.mime_type = user.mime_type;
        prevUser.imgUrl = user.imgUrl;
        prevUser.prompt = input;
        user.data = null
        user.mime_type = null
        user.imgUrl = null
        setInput("")
        let result = await genResponse()
        setShowResult(result)
        setFeature("chat")
    }
    function handleImg(e) {
        setFeature("upImg")
        let file = e.target.files[0]
        let reader = new FileReader()
        reader.onload = (event) => {
            let base64 = event.target.result.split(",")[1]
            user.data = base64
            user.mime_type = file.type
            console.log(event);

            user.imgUrl = `data:${user.mime_type};base64,${user.data}`
        }
        reader.readAsDataURL(file)
    }
    async function handleGenerateImg() {
        setStartRes(true)
        setPrevFeature(feature)
        setGenImageUrl("")
        prevUser.prompt = input
        setInput("")
        // let result = await query().then((e) => {
        //     let url = URL.createObjectURL(e)
        //     setGenImageUrl(url)

        // })
        try {
            const imageUrl = await query();
            setGenImageUrl(imageUrl);
        } catch (e) {
            console.error(e);
            alert(`Image fetch failed: ${e.message}`);
            setStartRes(false);
        }
    }
    return (
        <div className='home'>
            <nav>
                <div className="logo" onClick={() => {
                    setStartRes(false); setFeature("chat");
                    user.data = null
                    user.mime_type = null
                    user.imgUrl = null
                    setPopUp(false)
                }}>
                    SmartAIBot
                </div>
            </nav >
            <input type="file" id="inputImg" accept='image/*' hidden onChange={handleImg} />
            {
                !startRes ? <div className="hero">
                    <span id='tag'>What can I help you ?</span>
                    <div className="cate">
                        <div className="upImg" onClick={() => { document.getElementById("inputImg").click() }}>
                            <RiImageAddFill />
                            <span>Upload Image</span>
                        </div>
                        <div className="genImg" onClick={() => setFeature("genImg")}>
                            <RiImageAiLine />
                            <span>Generate Image</span>
                        </div>
                        <div className="chat" onClick={() => setFeature("chat")}>
                            <MdOutlineChatBubbleOutline />
                            <span>Let's Chat</span>
                        </div>
                    </div>
                </div> :
                    <Chat />
            }


            <form className="input-box" onSubmit={(e) => {
                e.preventDefault()
                if (input) {
                    if (feature == "genImg") {
                        handleGenerateImg()
                    }
                    else {
                        handleSubmit(e)
                    }
                }
            }
            }>
                <img src={user.imgUrl} alt="" id='im' />
                {popUp ?
                    <div className="pop-up">
                        <div className="select-up" onClick={() => { setPopUp(false); setFeature("chat"); document.getElementById("inputImg").click() }}>
                            <RiImageAddFill />
                            <span>Upload Image</span>
                        </div>
                        <div className="select-gen" onClick={() => { setPopUp(false); setFeature("genImg") }}>
                            <RiImageAiLine />
                            <span>Generate Image</span>
                        </div>
                    </div> : null}
                <div id='add' onClick={() => setPopUp(prev => !prev)}>
                    {feature == "genImg" ? <RiImageAiLine id='genImg' /> : <FaPlus />}
                </div>
                <input type="text" placeholder='Ask me something...' onChange={(e) => setInput(e.target.value)} value={input} />
                {input ?
                    <button id='submit'>
                        <FaArrowUpLong />
                    </button> : null}

            </form>
        </div >
    )
}

export default Home
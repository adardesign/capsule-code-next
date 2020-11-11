import React, { useState } from 'react';
import Draggable from 'react-draggable';
import Image from 'next/image'



const eventLogger = (e, data) => {
    console.log('Event: ', e);
    console.log('Data: ', data);
};




const ImageInPicture = ({ initial = 50, thumb = 200, large = 900 }) => {

    const [state, setState] = useState("initial");

    const sizes = {
        initial, thumb, large
    };

    console.log(sizes, state);
    const handleStart = event => {
        console.log(event)
    }
    const handleDrag = event => {
        console.log(event)
    }

    const handleStop = event => {
        console.log(event)
    }

    return (
        <>
            { state === "initial" && (
                <Image
                    onClick={e => setState("thumb")}
                    src="https://via.placeholder.com/150"
                    alt="Picture of the author"
                    width={sizes[state]}
                    height={sizes[state]}
                />)}
            { state === "large" && (
                <div>
                    <div onClick={e => setState("thumb")} className="minimize">🙈 minimize</div>
                    <div onClick={e => setState("initial")} className="close">❌ close</div>
                    <Image
                        onClick={e => setState("thumb")}
                        src="https://via.placeholder.com/150"
                        alt="Picture of the author"
                        width={sizes[state]}
                        height={sizes[state]}
                    />
                </div>)}
            { state === 'thumb' && (<Draggable
                axis="both"
                handle=".handle"
                scale={1}
                onStart={handleStart}
                onDrag={handleDrag}
                onStop={handleStop}>
                <div style={{ position: 'absolute', bottom: '100px', right: '100px' }}>
                    <div className="handle">🤏 Drag from here</div>
                    <div onClick={e => setState("initial")} className="close">❌ close</div>
                    <div onClick={e => setState("large")} className="close">👀 Show large</div>
                    <div>
                        <Image
                            onClick={e => setState("thumb")}
                            src="https://via.placeholder.com/150"
                            alt="Picture of the author"
                            width={sizes[state]}
                            height={sizes[state]}
                        />
                    </div>
                </div>
            </Draggable>
            )
            }
        </>)
}

export default ImageInPicture


import {React} from "react";
import Dice from "./Dice"
import '../css/userinfo.css';
const Start=({scores,formData,currentPlayer,updateScore,handlplayer})=>{



return (<>
    <div className="main">
                    <div className="userscore">
                        <div>{formData.player1}</div>
                        <div>Score: {scores.player1}</div>
                    </div>
                    {currentPlayer && (
                        <div className="section-2">
                            <div className="section-3">
                                <div className="chancetime">Now Chance-&gt;</div>
                                <div className="chance">{formData[currentPlayer]}</div>
                            </div>
                            <Dice updatescore={updateScore} handlplayer={handlplayer} />
                        </div>
                    )}
                    <div className="userscore">
                        <div>{formData.player2}</div>
                        <div>Score: {scores.player2}</div>
                    </div>
    </div>
</>)


}

export default Start;
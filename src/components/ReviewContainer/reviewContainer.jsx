import React from "react";
import './styles.css'
import UserImage from '../../assets/images/user.png'

function ReviewContainer() {
    return(
        <>
            <div className="review-container">
                <div className="review-content">
                    <h1>
                        <i>Review</i>
                    </h1>

                    <div className="user">
                        <img className="user-image" src={UserImage}/>
                        <span>@Usuário 1</span>
                    </div>

                    <div className="user">
                        <img className="user-image" src={UserImage}/>
                        <span>@Usuário 2</span>
                    </div>

                    <div className="user">
                        <img className="user-image" src={UserImage}/>
                        <span>@Usuário 3</span>
                    </div>

                    <div className="user">
                        <img className="user-image" src={UserImage}/>
                        <span>@Usuário 4</span>
                    </div>

                    <div className="comment-content">
                        <label htmlFor="comentario">Deixe seu comentário:</label>
                        <input type="text" id="comentario" disabled/>
                    </div>

                    <button>Enviar</button>
                </div>
            </div>
        </>
    )
}

export default ReviewContainer
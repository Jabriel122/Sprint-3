import React, { useContext, useState, useEffect } from "react";
import ImageIllustrator from "../../components/ImageIlustrator/ImageIlustrator"
import logo from "../../assets/images/images/logo-pink.svg";
import { Input, Button } from "../../components/FormComponents/FormComponents";
import api, { loginResource } from '../../Services/Services'


import "./LoginPage.css";
import { UserContext, userDecodeToken } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [user, setUser] = useState({ senha: "101010", email: "gabs@234" });
    const {userData, setUserData} = useContext(UserContext);
    const navigate = useNavigate();


    useEffect(() =>{
       if(userData.nome) {
        navigate("/")
       }
      }, []);

    async function handleSubmit(e) {
        e.preventDefault();

        if (user.email.trim().length >= 3 && user.senha.trim().length >= 3) {
            try {
                const promise = await api.post(loginResource, {
                    email: user.email,
                    senha: user.senha
                })

                    const userFullToken = userDecodeToken(promise.data.token);
                    
                    setUserData(userFullToken); //Guarda o token globalamente
                    localStorage.setItem("token", JSON.stringify(userFullToken));
                    navigate("/")
            } catch (error) {
                //erro da pai: bad request (401) ou erro de conexão
                alert("Verifique os dados e a conexão com internet")

            }

        }
        else{
            alert("Preencha os dados corretamente")
        }

    }

    return (
        <div className="layout-grid-login">
            <div className="login">
                <div className="login__illustration">
                    <div className="login__illustration-rotate"></div>
                    <ImageIllustrator
                        imageName="login"
                        altText="Imagem de um homem em frente de uma porta de entrada"
                        additionalClass={"login-illustrator"}
                    />
                </div>

                <div className="frm-login">
                    <img src={logo} className="frm-login__logo" alt="" />

                    <form className="frm-login__formbox" onSubmit={handleSubmit}>
                        <Input
                            className="frm-login__entry"
                            type="email"
                            id="login"
                            name="login"
                            required={true}
                            value={user.email}
                            manipulationFunction={(e) => { setUser({ ...user, email: e.target.value.trim() }) }}
                            placeholder="Username"
                        />
                        <Input
                            className="frm-login__entry"
                            type="password"
                            id="senha"
                            name="senha"
                            required={true}
                            value={user.senha}
                            manipulationFunction={(e) => { setUser({ ...user, senha: e.target.value.trim() }) }}
                            placeholder="****"
                        />

                        <a href="" className="frm-login__link">
                            Esqueceu a senha?
                        </a>

                        <Button
                            textButton="Login"
                            id="btn-login"
                            name="btn-login"
                            type="submit"
                            additionalClass="frm-login__button"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;

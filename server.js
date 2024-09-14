import express from 'express';
import * as pkce from './pkce.js'

// const client_id = 52227698
// const scope = "groups friends"
// const redirect_uri = "http://localhost"

const app = express()


async function main() {
    app.use(express.json());

    app.get('/api', (req, res) => {
        res
            .json({
                message: 'success'
            })
    })

    app.get('/api/pkce', (req, res) => {
        const CodeVerifier = pkce.generateCodeVerifier();
        const CodeChallenge = pkce.generateCodeChallenge(CodeVerifier);
        const State = pkce.generateState();


        res
            .json({
                code_verifier: CodeVerifier,
                code_challenge: CodeChallenge,
                state: State
            })
    })

    app.listen(4200, () => {
        console.log('Server is running on port 4200')
    })


    // VKID.Config.init({
    //     app: client_id, // Идентификатор приложения.
    //     redirectUrl: redirect_uri, // Адрес для перехода после авторизации.
    //     scope: scope, // Список прав доступа, которые нужны приложению.
    //     mode: VKID.ConfigAuthMode.InNewTab // По умолчанию авторизация открывается в новой вкладке.
    // });

}

main()


import express from 'express';

// const client_id = 52227698
// const scope = "groups friends"
// const redirect_uri = "http://localhost"

const app = express()


async function main() {
    app.use(express.json());

    app.get('/', (req, res) => {
        res
            .json({
                message: 'success'
            }).status(200)
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


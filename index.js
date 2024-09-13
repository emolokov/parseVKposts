import * as VKID from '@vkid/sdk';

const client_id = 52227698
const scope = "groups friends"
const redirect_uri = "http://localhost"

VKID.Config.init({
    app: client_id, // Идентификатор приложения.
    redirectUrl: redirect_uri, // Адрес для перехода после авторизации.
    scope: scope, // Список прав доступа, которые нужны приложению.
    mode: VKID.ConfigAuthMode.InNewTab // По умолчанию авторизация открывается в новой вкладке.
});





console.log("it's working!");
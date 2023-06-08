import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

const ADD_POST = 'ADD-POST';
const ADD_MESSAGE = 'ADD-MESSAGE';
let store = {
    _state: {
        profile: {
            newPostText: "I'm artem",
            postData: [
                { id: 1, name: "Artem", message: "My first post", likesCount: 12 },
                { id: 2, name: "Artem", message: "My second post", likesCount: 22 }
            ],
            ava: "https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg",
            cover: "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
            description: [
                { id: 0, description: "Hi, I'm Artem" },
                { id: 1, description: "I'm software engineer" }
            ],
            socialMedia: [
                { id: 0, name: "@Artem" },
                { id: 1, inst: "https://vk.com/kachochek17" },
                { id: 2, vk: "https://vk.com/kachochek17" }
            ],
        },
        dialogs: {
            dialogsData: [
                {
                    id: 1,
                    name: 'Maksim',
                    avaLink: "https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg"
                },
                { id: 2, name: 'Sasha', avaLink: "https://android-obzor.com/wp-content/uploads/2022/02/1-2-300x300.jpg" },
                {
                    id: 3,
                    name: 'Pasha',
                    avaLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpyQ3Ez7fGNDmuULcJxaGc3CxZ5ohwAoFeGQ&usqp=CAU"
                },
                {
                    id: 4,
                    name: 'Alex',
                    avaLink: "https://www.meme-arsenal.com/memes/8abad17ae081384956a7084acfb2f8e4.jpg"
                },
                {
                    id: 5,
                    name: 'Vova',
                    avaLink: "https://ulibky.ru/wp-content/uploads/2019/09/Krutye_kartinki_dlya_pacanov_na_avu_v_vk_1_13095725.jpg"
                },
                { id: 6, name: 'Valera', avaLink: "https://shapka-youtube.ru/wp-content/uploads/2018/10/ruka-1.jpg" }
            ],
            newMessageText: "Hi",
            messagesData: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'What\'s up?' },
                { id: 3, message: 'Good!' },
            ]
        },
        project: {
            mainName: "COMMUNITY",
            logo: ""
        }
    },
    _callSubscriber() {
        console.log("State Changed")
    },
    getState() {
        return this._state
    },
    setState(state) {
        this._state = state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profile = profileReducer(this._state.profile, action);
        this._state.dialogs = dialogsReducer(this._state.dialogs, action);
        if (action.type === ADD_POST || action.type === ADD_MESSAGE) {
            this._callSubscriber(this._state);
        }
    }
}
export default store;
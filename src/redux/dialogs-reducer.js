const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
let initialState = {
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
        {
            id: 6,
            name: 'Valera',
            avaLink: "https://shapka-youtube.ru/wp-content/uploads/2018/10/ruka-1.jpg"
        }
    ],
    newMessageText: "",
    messagesData: [
        { id: 1, message: 'Hello' },
        { id: 2, message: 'What\'s up?' },
        { id: 3, message: 'Good!' },
    ]
};
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case (ADD_MESSAGE): {
            let newMessage = {
                id: 6,
                message: state.newMessageText
            }
            let stateCopy = JSON.parse(JSON.stringify(state));
            stateCopy.messagesData.push(newMessage);
            return stateCopy;
        }
        case (UPDATE_NEW_MESSAGE_TEXT): {
            let stateCopy = JSON.parse(JSON.stringify(state));
            stateCopy.newMessageText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
}
export default dialogsReducer;

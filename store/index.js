import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
        // 保存したいデータのTODO配列の定義
        todos: []
    },
    getters: {
        // TODO配列を取得するときにgetters.getTodosで取得する
        getTodos: state => state.todos
    },
    mutations: {
        // todos配列に受け取ったtodoの追加する関数を定義する
        addTodoFromMutations(state, todo){
            state.todos.push(todo);
        }
    },
    actions: {
        // 実際にtodos配列にtodoの追加を行なっている
        addTodoFromActions({ commit }, todoInput){
            commit("addTodoFromMutations",todoInput);
        }
    }
 });
};
export default createStore; 